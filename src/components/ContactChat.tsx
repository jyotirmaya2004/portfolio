"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { usePathname } from "next/navigation";

export default function ContactChat() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Focus management refs
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Toggle open/close with proper focus handling
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Restore focus to trigger button
    setTimeout(() => {
      triggerButtonRef.current?.focus();
    }, 50);
  };

  // Automatically close dialog when user navigates to another page
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Close dialog on browser back / forward navigation (popstate)
  useEffect(() => {
    const handlePopState = () => {
      setIsOpen(false);
    };
    const handleCustomOpen = () => {
      setIsOpen(true);
    };
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("open-contact-chat", handleCustomOpen);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("open-contact-chat", handleCustomOpen);
    };
  }, []);

  // Close when tapping or clicking on the backpage / outside the panel
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        triggerButtonRef.current &&
        !triggerButtonRef.current.contains(target)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Listen to open-contact-chat custom event
  useEffect(() => {
    const handleOpenEvent = () => {
      setIsOpen(true);
    };
    window.addEventListener("open-contact-chat", handleOpenEvent);
    return () => {
      window.removeEventListener("open-contact-chat", handleOpenEvent);
    };
  }, []);

  // Lock body scroll on mobile when chat panel is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      // Only lock on mobile viewports to allow smooth touch experience
      if (window.innerWidth < 640) {
        document.body.style.overflow = "hidden";
      }
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Focus management when panel opens
  useEffect(() => {
    if (isOpen) {
      if (!isSuccess) {
        setTimeout(() => {
          nameInputRef.current?.focus();
        }, 100);
      } else {
        setTimeout(() => {
          closeButtonRef.current?.focus();
        }, 100);
      }
    }
  }, [isOpen, isSuccess]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validation
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setErrorMessage("Please enter your name.");
      nameInputRef.current?.focus();
      return;
    }
    if (trimmedName.length > 100) {
      setErrorMessage("Name must be 100 characters or fewer.");
      return;
    }

    if (!trimmedEmail) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!trimmedMessage) {
      setErrorMessage("Please write a message.");
      return;
    }
    if (trimmedMessage.length < 10) {
      setErrorMessage("Message should be at least 10 characters long.");
      return;
    }
    if (trimmedMessage.length > 2000) {
      setErrorMessage("Message cannot exceed 2000 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          honeypot: honeypot || undefined,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setIsSuccess(true);
        // Reset form data on success
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setErrorMessage(
          data.error || "Something went wrong. Please try again."
        );
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    handleClose();
  };

  return (
    <>
      {/* Backdrop Overlay (tapping outside / background closes dialog on both mobile and desktop) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 sm:bg-black/25 z-40 transition-opacity"
          aria-hidden="true"
          onClick={handleClose}
        />
      )}

      {/* Floating "Let's Talk" Button */}
      <button
        ref={triggerButtonRef}
        onClick={() => (isOpen ? handleClose() : handleOpen())}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full bg-[var(--accent)] text-white text-xs sm:text-sm font-medium shadow-xs hover:bg-[var(--accent-hover)] hover:shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]"
        aria-expanded={isOpen}
        aria-controls="contact-chat-panel"
        aria-label={isOpen ? "Close Let's Talk contact panel" : "Open Let's Talk contact panel"}
      >
        <svg
          className="w-4 h-4 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          )}
        </svg>
        <span>Let&apos;s Talk</span>
      </button>

      {/* Contact Panel: Mobile Bottom Sheet / Desktop Floating Window */}
      {isOpen && (
        <div
          id="contact-chat-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-panel-title"
          className="fixed z-50 bg-[var(--bg-surface)] sm:border border-[var(--border)] shadow-2xl rounded-t-2xl sm:rounded-2xl flex flex-col overflow-hidden animate-slide-down inset-x-0 bottom-0 max-h-[92dvh] sm:inset-x-auto sm:right-5 sm:bottom-20 sm:w-[380px] sm:max-h-[580px]"
        >
          {/* Mobile Sheet Drag Indicator Bar */}
          <div
            className="w-10 h-1 bg-[var(--border-hover)] rounded-full mx-auto mt-2.5 mb-1 sm:hidden shrink-0"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4 bg-[var(--bg)] shrink-0">
            <h2
              id="chat-panel-title"
              className="text-sm sm:text-base font-semibold text-[var(--fg)] tracking-tight"
            >
              Let&apos;s Talk
            </h2>
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              className="p-1.5 -mr-1 rounded-md text-[var(--fg-subtle)] hover:text-[var(--fg)] hover:bg-[var(--border)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-label="Close conversation window"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Panel Content */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5">
            {isSuccess ? (
              /* Success State */
              <div
                className="py-8 text-center space-y-4"
                role="status"
                aria-live="polite"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-[var(--fg)]">
                    Message sent successfully
                  </h3>
                  <p className="text-sm text-[var(--fg-muted)] max-w-xs mx-auto">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[var(--accent)] rounded-md hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              /* Form State */
              <div className="space-y-4">
                {/* Error Banner */}
                {errorMessage && (
                  <div
                    role="alert"
                    className="p-3 text-xs rounded-md bg-red-50 text-red-700 border border-red-200"
                  >
                    {errorMessage}
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Honeypot field (hidden from users and screen readers) */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="website_hp">Leave this field blank</label>
                    <input
                      id="website_hp"
                      type="text"
                      name="website_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="chat-name"
                      className="block text-xs font-medium text-[var(--fg)] mb-1.5"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      id="chat-name"
                      type="text"
                      required
                      maxLength={100}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3 py-2.5 sm:py-2 text-base sm:text-sm bg-[var(--bg-surface)] border border-[var(--border)] rounded-md text-[var(--fg)] placeholder:text-[var(--fg-subtle)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="chat-email"
                      className="block text-xs font-medium text-[var(--fg)] mb-1.5"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="chat-email"
                      type="email"
                      required
                      maxLength={254}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-3 py-2.5 sm:py-2 text-base sm:text-sm bg-[var(--bg-surface)] border border-[var(--border)] rounded-md text-[var(--fg)] placeholder:text-[var(--fg-subtle)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="chat-message"
                      className="block text-xs font-medium text-[var(--fg)] mb-1.5"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="chat-message"
                      required
                      rows={4}
                      maxLength={2000}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message..."
                      className="w-full px-3 py-2.5 sm:py-2 text-base sm:text-sm bg-[var(--bg-surface)] border border-[var(--border)] rounded-md text-[var(--fg)] placeholder:text-[var(--fg-subtle)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 text-base sm:text-sm font-medium text-white bg-[var(--accent)] rounded-md hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] shadow-sm"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

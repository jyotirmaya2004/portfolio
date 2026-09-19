"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

const QUICK_TOPICS = [
  "Project",
  "Internship",
  "Collaboration",
  "Just saying hi",
];

export default function ContactChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<string | null>(null);
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

  // Lock body scroll on mobile when chat panel is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      // Only lock on mobile viewports to allow desktop background interaction
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

  // Handle quick topic selection
  const handleTopicClick = (selected: string) => {
    if (topic === selected) {
      setTopic(null);
    } else {
      setTopic(selected);
      // If message is empty, provide a clean gentle starting prompt
      if (!message.trim()) {
        if (selected === "Project") {
          setMessage("Hi Jyotirmaya, I'd like to discuss a project regarding...");
        } else if (selected === "Internship") {
          setMessage("Hi Jyotirmaya, I have an internship opportunity regarding...");
        } else if (selected === "Collaboration") {
          setMessage("Hi Jyotirmaya, I would love to collaborate with you on...");
        } else if (selected === "Just saying hi") {
          setMessage("Hi Jyotirmaya, just wanted to say hello!");
        }
      }
    }
  };

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
          topic: topic || undefined,
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
        setTopic(null);
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
      {/* Mobile Backdrop Overlay (tapping outside closes sheet on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden transition-opacity"
          aria-hidden="true"
          onClick={handleClose}
        />
      )}

      {/* Floating "Let's Talk" Button */}
      <button
        ref={triggerButtonRef}
        onClick={() => (isOpen ? handleClose() : handleOpen())}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full bg-[var(--accent)] text-white text-xs sm:text-sm font-medium shadow-md hover:bg-[var(--accent-hover)] hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]"
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

      {/* Chat Contact Panel: Mobile Bottom Sheet / Desktop Floating Window */}
      {isOpen && (
        <div
          id="contact-chat-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-panel-title"
          className="fixed z-50 bg-[var(--bg-surface)] border-t sm:border border-[var(--border)] shadow-2xl rounded-t-2xl sm:rounded-2xl flex flex-col overflow-hidden animate-slide-down inset-x-0 bottom-0 max-h-[92dvh] sm:inset-x-auto sm:right-5 sm:bottom-20 sm:w-[380px] sm:max-h-[620px]"
        >
          {/* Mobile Sheet Drag Indicator Bar */}
          <div
            className="w-10 h-1 bg-[var(--border-hover)] rounded-full mx-auto mt-2.5 mb-1 sm:hidden shrink-0"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="flex items-start justify-between px-4 py-3 sm:p-5 border-b border-[var(--border)] bg-[var(--bg)] shrink-0">
            <div>
              <h2
                id="chat-panel-title"
                className="text-sm sm:text-base font-semibold text-[var(--fg)] tracking-tight"
              >
                Let&apos;s talk
              </h2>
              <p className="text-xs text-[var(--fg-muted)] mt-0.5">
                Leave a message and I&apos;ll reply by email.
              </p>
            </div>
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

          {/* Panel Content (Scrollable with overscroll containment for touch) */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-4">
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
                    Thanks for reaching out. I&apos;ll get back to you by email.
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
              <>
                {/* Initial Greeting Bubble */}
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-3 sm:p-3.5 text-xs sm:text-sm text-[var(--fg-muted)] leading-relaxed">
                  Hi! Want to talk about a project, opportunity, collaboration,
                  or just say hello?
                </div>

                {/* Quick Topic Chips */}
                <div>
                  <p className="text-xs text-[var(--fg-subtle)] mb-2 font-medium">
                    Topic (optional)
                  </p>
                  <div className="flex flex-wrap gap-1.5" role="group" aria-label="Topic options">
                    {QUICK_TOPICS.map((item) => {
                      const isSelected = topic === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleTopicClick(item)}
                          className={`px-2.5 py-1.5 sm:py-1 text-xs font-medium rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                            isSelected
                              ? "bg-[var(--accent)] text-white border border-[var(--accent)]"
                              : "bg-[var(--bg)] text-[var(--fg-muted)] border border-[var(--border)] hover:border-[var(--border-hover)] hover:text-[var(--fg)]"
                          }`}
                          aria-pressed={isSelected}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

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
                <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
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

                  {/* Name Input - text-base on mobile prevents iOS Safari auto-zoom */}
                  <div>
                    <label
                      htmlFor="chat-name"
                      className="block text-xs font-medium text-[var(--fg)] mb-1"
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

                  {/* Email Input - text-base on mobile prevents iOS Safari auto-zoom */}
                  <div>
                    <label
                      htmlFor="chat-email"
                      className="block text-xs font-medium text-[var(--fg)] mb-1"
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

                  {/* Message Input - text-base on mobile prevents iOS Safari auto-zoom */}
                  <div>
                    <label
                      htmlFor="chat-message"
                      className="block text-xs font-medium text-[var(--fg)] mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="chat-message"
                      required
                      rows={3}
                      maxLength={2000}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message..."
                      className="w-full px-3 py-2.5 sm:py-2 text-base sm:text-sm bg-[var(--bg-surface)] border border-[var(--border)] rounded-md text-[var(--fg)] placeholder:text-[var(--fg-subtle)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-none"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[11px] text-[var(--fg-subtle)]">
                        Min. 10 characters
                      </span>
                      <span className="text-[11px] text-[var(--fg-subtle)]">
                        {message.length}/2000
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1 pb-2 sm:pb-0">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-4 py-3 sm:py-2.5 text-base sm:text-sm font-medium text-white bg-[var(--accent)] rounded-md hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]"
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

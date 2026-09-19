"use client";

import { ReactNode, useEffect, useState } from "react";
import BottomNavigation from "@/components/BottomNavigation";

interface MobileAppLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  showBottomNav?: boolean;
  className?: string;
}

export default function MobileAppLayout({
  children,
  header,
  showBottomNav = true,
  className = "",
}: MobileAppLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration sync
    setMounted(true);
    // Prevent body scroll on mobile when layout mounts
    document.body.style.overscrollBehavior = "none";
    return () => {
      document.body.style.overscrollBehavior = "";
    };
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[var(--bg)]" aria-hidden="true">
        {header && <div className="app-header app-safe-top">{header}</div>}
        <main className="app-content flex-1" style={{ minHeight: "calc(100vh - 72px)" }}>
          {children}
        </main>
        {showBottomNav && <div className="h-16 md:hidden" aria-hidden="true" />}
      </div>
    );
  }

  return (
    <div className={`app-screen ${className}`}>
      {header && (
        <header className="app-header app-safe-top">
          {header}
        </header>
      )}

      <main className="app-content app-scroll flex-1 app-safe-bottom pb-16 md:pb-0">
        {children}
      </main>

      {showBottomNav && <BottomNavigation />}
    </div>
  );
}
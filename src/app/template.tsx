"use client";

import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="w-full flex-1 flex flex-col animate-page-enter">
      {children}
    </div>
  );
}

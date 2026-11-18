"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const SCROLL_THRESHOLD = 400;

export default function ScrollToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const isHidden = SITE_CONFIG.hiddenWidgetPaths.some((path) => pathname.startsWith(path));

  useEffect(() => {
    if (isHidden) return;
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed z-50 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none ${visible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3 scale-95 opacity-0"}`}
      style={{
        right: "1.25rem",
        bottom: "6.5rem",
        width: "2.5rem",
        height: "2.5rem",
        backgroundColor: "var(--navy)",
        color: "#fff",
        border: "none",
        borderRadius: "2px",
        cursor: visible ? "pointer" : "default",
      }}
    >
      <ArrowUp className="h-4 w-4" strokeWidth={2} />
    </button>
  );
}

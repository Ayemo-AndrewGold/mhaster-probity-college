"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { NAV_LINKS, SCHOOL_INFO } from "@/lib/constants";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  pathname,
}) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-[#091d41]/55 backdrop-blur-sm xl:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Site navigation" className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-[#0b2148] shadow-2xl xl:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/15 p-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/mp-logo.webp"
                alt="Mhastar Probity College Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <div>
                <div className="text-white font-bold text-xs tracking-wide leading-tight">
                  {SCHOOL_INFO.name.toUpperCase()}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-md p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block rounded-md px-4 py-3 text-[15px] font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-white/10 text-white before:mr-2 before:text-[#f0bf4e] before:content-['—']"
                        : "text-white/75 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Enquire Now Button */}
          <div className="border-t border-white/15 p-4">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full rounded-md bg-[#e8ad22] px-6 py-3 text-center font-semibold text-[#17233a] transition-colors hover:bg-[#f0bf4e]"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;

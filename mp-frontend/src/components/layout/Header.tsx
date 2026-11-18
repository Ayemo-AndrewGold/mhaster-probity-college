"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SCHOOL_INFO } from "@/lib/constants";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 48);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-[#e4e2dd] bg-[#faf9f6]/95 text-[#1c1c1c] backdrop-blur-md" : "border-transparent bg-transparent text-white"}`}>
        <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[68px] lg:px-10">
          <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-2.5 rounded-sm" aria-label={`${SCHOOL_INFO.name} home`}>
            <Image src="/images/mp-logo.webp" alt="Mhastar Probity College crest" width={42} height={42} priority className="h-10 w-10 rounded-full bg-white object-cover" />
            <span className="leading-none">
              <span className="block font-[var(--font-display)] text-[1.03rem] font-medium tracking-[.01em] sm:text-lg">Mhastar Probity College</span>
              <span className={`mt-1 block font-[var(--font-body)] text-[9px] font-medium uppercase tracking-[.13em] transition-colors sm:text-[10px] ${scrolled ? "text-[#8a8a85]" : "text-white/60"}`}>{SCHOOL_INFO.motto}</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0 xl:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={isActive(link.href) ? "page" : undefined} className={`block whitespace-nowrap px-2.5 py-2 text-[13px] transition-colors 2xl:px-3 ${isActive(link.href) ? "font-medium" : "font-normal"} ${scrolled ? "hover:text-[#a88716]" : "hover:text-white/75"}`} style={{ color: isActive(link.href) ? (scrolled ? "var(--gold-dark)" : "var(--gold)") : undefined }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/admissions" className={`hidden h-[38px] items-center border px-4 text-[13px] font-medium transition-colors xl:inline-flex ${scrolled ? "border-[#f4c430] bg-[#f4c430] text-[#152d6e] hover:bg-[#d4a820]" : "border-white/40 bg-white/10 text-white hover:border-white hover:bg-white/15"}`}>
            Admissions
          </Link>

          <button type="button" onClick={() => setMobileMenuOpen(true)} className="inline-flex h-10 w-10 items-center justify-center transition-colors hover:text-[#f4c430] xl:hidden" aria-label="Open navigation menu" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <button type="button" className="absolute inset-0 h-full w-full bg-black/40" aria-label="Close navigation menu" onClick={() => setMobileMenuOpen(false)} />
          <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Site navigation" className="absolute inset-y-0 right-0 flex w-[85vw] max-w-sm flex-col overflow-y-auto bg-[#faf9f6] text-[#1c1c1c] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e4e2dd] px-5 py-4">
              <div className="flex items-center gap-2.5">
                <Image src="/images/mp-logo.webp" alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
                <span className="font-[var(--font-display)] text-base font-medium">Mhastar Probity College</span>
              </div>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="p-2 text-[#6b6b68] hover:text-[#1e3a8a]" aria-label="Close navigation menu"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex-1 space-y-0.5 px-4 py-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} aria-current={isActive(link.href) ? "page" : undefined} className={`flex border-b border-[#e4e2dd] px-3 py-3 text-sm transition-colors hover:bg-[#f3f1ed] ${isActive(link.href) ? "font-medium text-[#1e3a8a]" : "text-[#1c1c1c]"}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="space-y-2.5 border-t border-[#e4e2dd] p-4">
              <Link href="/admissions" onClick={() => setMobileMenuOpen(false)} className="flex h-11 w-full items-center justify-center bg-[#f4c430] text-sm font-medium text-[#152d6e]">Enquire about admission</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex h-11 w-full items-center justify-center border border-[#1e3a8a] text-sm text-[#1e3a8a]">Contact the school</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

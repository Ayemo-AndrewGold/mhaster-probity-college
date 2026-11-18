"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SCHOOL_INFO, CONTACT_INFO, SOCIAL_LINKS, QUICK_LINKS } from "@/lib/constants";

const Footer: React.FC = () => {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setYear(new Date().getFullYear()));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
  <footer className="bg-[#152d6e] text-white">
    <div className="mx-auto max-w-7xl px-5 pb-7 pt-14 sm:px-6 lg:px-8 lg:pt-16">
      <div className="grid gap-10 border-b border-white/15 pb-11 sm:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_1fr] lg:gap-16">
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center gap-3 rounded-sm">
            <Image src="/images/mp-logo.webp" alt="Mhastar Probity College crest" width={60} height={60} className="h-[60px] w-[60px] rounded-full border border-white/30 bg-white object-cover" />
            <span><span className="block font-[var(--font-display)] text-lg font-medium tracking-[.01em]">Mhastar Probity College</span><span className="mt-1 block text-[10px] uppercase tracking-[.12em] text-[#f9d96a]">{SCHOOL_INFO.motto}</span></span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/75">A co-educational private secondary school dedicated to academic excellence and moral development.</p>
        </div>

        <div>
          <h2 className="mb-4 font-[var(--font-body)] text-[11px] font-medium uppercase tracking-[.16em] text-[#f9d96a]">Explore</h2>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-2.5 sm:grid-cols-1">
            {QUICK_LINKS.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">{link.label}</Link></li>)}
            <li><Link href="/contact" className="text-sm text-white/75 transition-colors hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-[var(--font-body)] text-[11px] font-medium uppercase tracking-[.16em] text-[#f9d96a]">Get in touch</h2>
          <address className="space-y-3 not-italic text-sm text-white/75">
            <p className="flex gap-3 leading-6"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#f0bf4e]" />{CONTACT_INFO.address}</p>
            {CONTACT_INFO.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white"><Phone className="h-4 w-4 shrink-0 text-[#f0bf4e]" />{phone}</a>)}
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-white"><Mail className="h-4 w-4 shrink-0 text-[#f0bf4e]" />{CONTACT_INFO.email}</a>
          </address>
          <div className="mt-5 flex gap-5 text-sm">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white/75 hover:text-white">Instagram <ArrowUpRight className="h-3.5 w-3.5" /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white/75 hover:text-white">LinkedIn <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {SCHOOL_INFO.name}. All rights reserved.</p>
        <p>{SCHOOL_INFO.location.city}, {SCHOOL_INFO.location.state}, {SCHOOL_INFO.location.country}</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;

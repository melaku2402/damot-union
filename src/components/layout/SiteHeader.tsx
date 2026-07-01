'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Share2,
  Tractor,
  Warehouse,
  ScanSearch,
  Factory,
  Truck,
  Users,
  UserPlus,
  X,
} from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/news", label: "News" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

const aboutLinks = [
  { href: "/about#overview", label: "Overview" },
  { href: "/about#history", label: "Our History" },
  { href: "/about#vision", label: "Vision, Mission & Values" },
  { href: "/about#objectives", label: "Objectives" },
  { href: "/about#core-values", label: "Core Values" },
] as const;

const governanceLinks = [
  { href: "/about#structure", label: "Organizational Structure" },
  { href: "/about#board", label: "Board of Directors" },
  { href: "/about#management", label: "Management Team" },
  { href: "/about#network", label: "Cooperatives Network" },
] as const;

const impactLinks = [
  { href: "/about#achievements", label: "Key Achievements" },
  { href: "/about#reports", label: "Statistics & Reports" },
  { href: "/about#partners", label: "Partners & Donors" },
  { href: "/about#coverage", label: "Work Area Coverage" },
] as const;

const serviceLinks = [
  { href: "/services#mechanization", label: "Mechanization Services" },
  { href: "/services#input-supply", label: "Agricultural Input Supply" },
  { href: "/services#grain-marketing", label: "Grain Marketing Services" },
  { href: "/services#agro-processing", label: "Agro Processing Services" },
  { href: "/services#transportation", label: "Transportation Services" },
  { href: "/services#training", label: "Training & Capacity Building" },
] as const;

const serviceCards = [
  {
    href: "/services#mechanization",
    icon: Tractor,
    title: "Mechanization Services",
    description: "Modern machinery support for land preparation and farming.",
  },
  {
    href: "/services#input-supply",
    icon: Warehouse,
    title: "Agricultural Input Supply",
    description: "Quality fertilizers, seeds, and agro-chemicals supply.",
  },
  {
    href: "/services#grain-marketing",
    icon: ScanSearch,
    title: "Grain Marketing Services",
    description: "Market linkage and fair price for farmers' produce.",
  },
  {
    href: "/services#agro-processing",
    icon: Factory,
    title: "Agro Processing Services",
    description: "Value addition through milling, processing, and packaging.",
  },
  {
    href: "/services#transportation",
    icon: Truck,
    title: "Transportation Services",
    description: "Safe and efficient transportation solutions.",
  },
  {
    href: "/services#training",
    icon: Users,
    title: "Training & Capacity Building",
    description: "Building knowledge and skills for better productivity.",
  },
] as const;

const desktopPanels = [
  {
    label: "About Us",
    items: [aboutLinks, governanceLinks, impactLinks],
  },
  {
    label: "Services",
    items: [serviceLinks],
  },
  {
    label: "Projects",
    items: [[
      { href: "/projects", label: "Overview" },
      { href: "/projects#current", label: "Current Projects" },
      { href: "/projects#impact", label: "Impact & Results" },
    ]],
  },
  {
    label: "News",
    items: [[
      { href: "/news", label: "Latest News" },
      { href: "/news#announcements", label: "Announcements" },
      { href: "/news#events", label: "Events" },
    ]],
  },
] as const;

const mobileGroups = [
  { label: "About Us", items: [aboutLinks, governanceLinks, impactLinks] },
  { label: "Services", items: [serviceLinks] },
  {
    label: "Projects",
    items: [[
      { href: "/projects", label: "Overview" },
      { href: "/projects#current", label: "Current Projects" },
      { href: "/projects#impact", label: "Impact & Results" },
    ]],
  },
  {
    label: "News",
    items: [[
      { href: "/news", label: "Latest News" },
      { href: "/news#announcements", label: "Announcements" },
      { href: "/news#events", label: "Events" },
    ]],
  },
  { label: "Gallery", items: [[{ href: "/gallery", label: "Gallery" }]] },
  { label: "Contact Us", items: [[{ href: "/contact", label: "Contact" }]] },
] as const;

function isActivePath(pathname: string, to: string) {
  if (to === "/") {
    return pathname === "/";
  }

  return pathname === to || pathname.startsWith(`${to}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [desktopSection, setDesktopSection] = useState<string | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-emerald-900/60 bg-emerald-950 text-[11px] text-white/90">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-1.5">
              <Phone className="size-3.5 text-amber-300" /> +251 58 220 2666
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Mail className="size-3.5 text-amber-300" /> info@damotunion.com.et
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <MapPin className="size-3.5 text-amber-300" /> Bure Town, Amhara Region, Ethiopia
            </span>
          </div>

          <div className="flex items-center gap-3 text-white/90">
            <span className="hidden sm:inline">Follow Us:</span>
            <a href="#" aria-label="Facebook" className="transition hover:text-amber-300">
              <Share2 className="size-4" />
            </a>
            <a href="#" aria-label="Website" className="transition hover:text-amber-300">
              <Globe className="size-4" />
            </a>
            <a href="#" aria-label="Telegram" className="transition hover:text-amber-300">
              <Send className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-emerald-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-full border-4 border-emerald-100 bg-emerald-950 text-sm font-bold text-white shadow-sm">
              DU
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold tracking-wide text-emerald-950">DAMOT UNION</div>
              <div className="text-[11px] text-emerald-700/80">
                Farmers Cooperatives Union
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            <Link
              href="/"
              className={`relative px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                isActivePath(pathname, "/") ? "text-emerald-900" : "text-zinc-800 hover:text-emerald-700"
              }`}
            >
              Home
              {isActivePath(pathname, "/") ? (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-emerald-700" />
              ) : null}
            </Link>

            {desktopPanels.map((panel) => {
              const href = panel.label === "About Us" ? "/about" : panel.label === "Services" ? "/services" : panel.label === "Projects" ? "/projects" : "/news";
              const open = desktopSection === panel.label;
              const active = isActivePath(pathname, href);

              return (
                <div
                  key={panel.label}
                  className="relative"
                  onMouseEnter={() => setDesktopSection(panel.label)}
                  onMouseLeave={() => setDesktopSection(null)}
                >
                  <Link
                    href={href}
                    className={`relative inline-flex items-center gap-1 px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                      active ? "text-emerald-900" : "text-zinc-800 hover:text-emerald-700"
                    }`}
                    aria-expanded={open}
                  >
                    {panel.label}
                    <ChevronDown className="size-4" />
                    {active ? (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-emerald-700" />
                    ) : null}
                  </Link>

                  {open ? (
                    <div className="absolute left-1/2 top-full z-50 mt-4 w-[860px] -translate-x-1/2 rounded-2xl border border-emerald-100 bg-white p-5 shadow-[0_22px_60px_rgba(0,0,0,0.14)]">
                      {panel.label === "Services" ? (
                        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-zinc-200 bg-white md:grid-cols-3 xl:grid-cols-6">
                          {serviceCards.map((card) => {
                            const Icon = card.icon;

                            return (
                              <Link
                                key={card.href}
                                href={card.href}
                                className="group flex h-full min-h-[240px] flex-col border-b border-zinc-200 p-5 transition hover:bg-emerald-50 md:border-b-0 md:border-r md:last:border-r-0"
                              >
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 transition group-hover:bg-emerald-700 group-hover:text-white">
                                  <Icon className="size-7" />
                                </div>
                                <div className="text-sm font-semibold uppercase leading-snug tracking-wide text-zinc-900">
                                  {card.title}
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                                  {card.description}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="grid grid-cols-4 gap-5">
                          <div className="rounded-2xl bg-emerald-950 p-4 text-white">
                            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                              {panel.label}
                            </div>
                            <div className="mt-3 text-2xl font-semibold leading-tight">
                              Explore {panel.label.toLowerCase()}.
                            </div>
                            <div className="mt-4 h-40 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))]" />
                          </div>

                          {panel.items.map((group, groupIndex) => (
                            <div key={groupIndex} className="space-y-2">
                              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-950">
                                {groupIndex === 0 ? "Quick Links" : groupIndex === 1 ? "Governance" : "Our Impact"}
                              </div>
                              <div className="space-y-1">
                                {group.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-zinc-700 transition hover:bg-emerald-50 hover:text-emerald-900"
                                  >
                                    <ChevronRight className="size-3.5 text-emerald-700" />
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}

                          <div className="space-y-3">
                            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-950">
                              Contact
                            </div>
                            <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-zinc-700">
                              <p className="font-semibold text-emerald-950">DAMOT UNION</p>
                              <p className="mt-2">Bure Town, Amhara Region</p>
                              <p className="mt-1">info@damotunion.com.et</p>
                              <p className="mt-1">+251 58 220 2666</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}

            <Link
              href="/contact"
              className={`relative px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                isActivePath(pathname, "/contact") ? "text-emerald-900" : "text-zinc-800 hover:text-emerald-700"
              }`}
            >
              Contact Us
              {isActivePath(pathname, "/contact") ? (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-emerald-700" />
              ) : null}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/members"
              className="hidden items-center gap-2 rounded-md bg-amber-400 px-4 py-2.5 text-sm font-semibold text-emerald-950 shadow-sm transition hover:brightness-105 md:inline-flex"
            >
              <UserPlus className="size-4" /> Join Us
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="rounded-md border border-emerald-900/15 p-2 text-emerald-950 xl:hidden"
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <nav className="border-t border-emerald-100 bg-emerald-950 text-white xl:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="space-y-1">
                {nav.map((item) => {
                  const active = isActivePath(pathname, item.to);

                  if (item.to === "/about" || item.to === "/services" || item.to === "/projects" || item.to === "/news") {
                    const section = item.label;
                    const sectionOpen = mobileSection === section;
                    const group = mobileGroups.find((entry) => entry.label === section);

                    return (
                      <div key={item.to} className="rounded-xl border border-white/10 bg-white/5 px-3">
                        <button
                          type="button"
                          onClick={() => setMobileSection((value) => (value === section ? null : section))}
                          className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-wide"
                          aria-expanded={sectionOpen}
                        >
                          {item.label}
                          <ChevronDown className={`size-4 transition ${sectionOpen ? "rotate-180" : ""}`} />
                        </button>

                        {sectionOpen && group ? (
                          <div className="space-y-4 pb-4 pl-1 text-sm text-white/80">
                            {group.items.map((subgroup, subgroupIndex) => (
                              <div key={subgroupIndex} className="space-y-2">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                                  {subgroupIndex === 0 ? "Overview" : subgroupIndex === 1 ? "Governance" : subgroupIndex === 2 ? "Impact" : "More"}
                                </div>
                                <div className="space-y-1.5">
                                  {subgroup.map((link) => (
                                    <Link
                                      key={link.href}
                                      href={link.href}
                                      onClick={closeMobile}
                                      className="block rounded-lg px-2 py-1.5 transition hover:bg-white/10 hover:text-amber-300"
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  }

                  if (item.to === "/gallery" || item.to === "/contact") {
                    return (
                      <Link
                        key={item.to}
                        href={item.to}
                        onClick={closeMobile}
                        className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wide transition ${
                          active ? "bg-emerald-900 text-amber-300" : "text-white/90 hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                        <ChevronRight className="size-4 text-amber-300" />
                      </Link>
                    );
                  }

                  return null;
                })}
              </div>

              <Link
                href="/members"
                onClick={closeMobile}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-3 text-sm font-semibold text-emerald-950"
              >
                <UserPlus className="size-4" /> Join Us
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
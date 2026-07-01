"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Award,
  BarChart3,
  BookOpen,
  Building2,
  CalendarDays,
  ChevronDown,
  CircleDot,
  Factory,
  GalleryHorizontal,
  Globe,
  Handshake,
  Home,
  Landmark,
  Mail,
  Map,
  MapPin,
  Menu,
  Newspaper,
  Phone,
  Send,
  ShieldCheck,
  Share2,
  Sprout,
  Target,
  Tractor,
  Truck,
  UserPlus,
  Users,
  Warehouse,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type MenuLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
  description?: string;
};

const aboutColumns = [
  {
    title: "About Damot Union",
    links: [
      { href: "/about#overview", label: "Overview", icon: Home },
      { href: "/about#history", label: "Our History", icon: BookOpen },
      { href: "/about#vision", label: "Vision, Mission & Values", icon: ShieldCheck },
      { href: "/about#objectives", label: "Objectives", icon: Target },
      { href: "/about#core-values", label: "Core Values", icon: CircleDot },
    ],
  },
  {
    title: "Governance",
    links: [
      { href: "/about#structure", label: "Organizational Structure", icon: Building2 },
      { href: "/about#board", label: "Board of Directors", icon: Users },
      { href: "/about#management", label: "Management Team", icon: Landmark },
      { href: "/about#network", label: "Cooperatives Network", icon: Handshake },
    ],
  },
  {
    title: "Our Impact",
    links: [
      { href: "/about#achievements", label: "Key Achievements", icon: Award },
      { href: "/about#reports", label: "Statistics & Reports", icon: BarChart3 },
      { href: "/about#partners", label: "Partners & Donors", icon: Handshake },
      { href: "/about#coverage", label: "Work Area Coverage", icon: Map },
    ],
  },
] as const;

const serviceCards = [
  {
    href: "/services#mechanization",
    title: "Mechanization Services",
    description: "Modern machinery services for land preparation and farming.",
    icon: Tractor,
  },
  {
    href: "/services#input-supply",
    title: "Agricultural Input Supply",
    description: "Quality fertilizers, seeds, and agro-chemicals supply.",
    icon: Sprout,
  },
  {
    href: "/services#grain-marketing",
    title: "Grain Marketing Services",
    description: "Market linkage and fair price for farmers' produce.",
    icon: Warehouse,
  },
  {
    href: "/services#agro-processing",
    title: "Agro Processing Services",
    description: "Value addition through milling, processing, and packaging.",
    icon: Factory,
  },
  {
    href: "/services#transportation",
    title: "Transportation Services",
    description: "Safe and efficient transportation solutions.",
    icon: Truck,
  },
  {
    href: "/services#training",
    title: "Training & Capacity Building",
    description: "Building knowledge and skills for better productivity.",
    icon: Users,
  },
] as const;

const projectLinks = [
  { href: "/projects#current", label: "Current Projects", icon: Sprout },
  { href: "/projects#completed", label: "Completed Projects", icon: ShieldCheck },
  { href: "/projects#impact", label: "Impact & Results", icon: BarChart3 },
] as const;

const newsLinks = [
  { href: "/news#latest", label: "Latest News", icon: Newspaper },
  { href: "/news#announcements", label: "Announcements", icon: Send },
  { href: "/news#events", label: "Events", icon: CalendarDays },
] as const;

const simpleDropdowns = [
  { label: "Projects", href: "/projects", links: projectLinks },
  { label: "News", href: "/news", links: newsLinks },
] as const;

const serviceMobileLinks = serviceCards.map((service) => ({
  href: service.href,
  label: service.title,
  icon: service.icon,
}));

const mobileGroups = [
  { label: "About Us", href: "/about", icon: Building2, columns: aboutColumns },
  {
    label: "Services",
    href: "/services",
    icon: Sprout,
    columns: [{ title: "Services", links: serviceMobileLinks }],
  },
  { label: "Projects", href: "/projects", icon: Landmark, columns: [{ title: "Projects", links: projectLinks }] },
  { label: "News", href: "/news", icon: Newspaper, columns: [{ title: "News", links: newsLinks }] },
  { label: "Gallery", href: "/gallery", icon: GalleryHorizontal, columns: [{ title: "Gallery", links: [{ href: "/gallery", label: "Gallery" }] }] },
  { label: "Contact Us", href: "/contact", icon: Mail, columns: [{ title: "Contact", links: [{ href: "/contact", label: "Contact" }] }] },
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuItem({ item, onClick }: { item: MenuLink; onClick?: () => void }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-emerald-50 hover:text-emerald-900"
    >
      {Icon ? <Icon className="size-4 shrink-0 text-emerald-700 transition group-hover:text-emerald-900" /> : null}
      {item.label}
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState("About Us");

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#073f1d] text-[11px] font-medium text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5">
              <Phone className="size-3.5" /> +251 115 58 12 97
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Mail className="size-3.5" /> info@damotunion.et
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <MapPin className="size-3.5" /> Bure Town, Amhara Region, Ethiopia
            </span>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <span>Follow Us:</span>
            {[Share2, Globe, Send].map((Icon, index) => (
              <a key={index} href="#" aria-label="Social link" className="transition hover:text-amber-300">
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-zinc-200 bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-4 border-emerald-100 bg-[#0b5428] text-sm font-bold text-white">
              DU
            </div>
            <div className="min-w-0 leading-tight">
              <div className="truncate text-lg font-extrabold tracking-wide text-[#0b5428]">DAMOT UNION</div>
              <div className="truncate text-[11px] font-medium text-zinc-600">Farmers Cooperatives Union</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={`relative px-4 py-7 text-xs font-bold uppercase tracking-wide transition ${
                isActivePath(pathname, "/") ? "text-[#0b5428]" : "text-zinc-800 hover:text-[#0b5428]"
              }`}
            >
              Home
              {isActivePath(pathname, "/") ? <span className="absolute inset-x-4 bottom-4 h-0.5 rounded-full bg-[#0b5428]" /> : null}
            </Link>

            <div className="group relative">
              <Link
                href="/about"
                className={`relative flex items-center gap-1 px-4 py-7 text-xs font-bold uppercase tracking-wide transition ${
                  isActivePath(pathname, "/about") ? "text-[#0b5428]" : "text-zinc-800 hover:text-[#0b5428]"
                }`}
              >
                About Us <ChevronDown className="size-3.5" />
                {isActivePath(pathname, "/about") ? <span className="absolute inset-x-4 bottom-4 h-0.5 rounded-full bg-[#0b5428]" /> : null}
              </Link>
              <div className="invisible absolute left-1/2 top-full w-[690px] -translate-x-1/2 translate-y-3 rounded-md border border-zinc-200 bg-white p-5 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-[1fr_1fr_1fr_200px] overflow-hidden rounded-md">
                  {aboutColumns.map((column) => (
                    <div key={column.title} className="border-r border-zinc-200 px-4 last:border-r-0">
                      <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wide text-[#0b5428]">{column.title}</h3>
                      <div className="space-y-1">
                        {column.links.map((item) => (
                          <MenuItem key={item.href} item={item} />
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link href="/about#achievements" className="ml-4 overflow-hidden rounded-md bg-[#0b5428] text-white">
                    <div className="h-28 bg-emerald-800/60" />
                    <div className="p-4">
                      <div className="text-lg font-bold">25+ Years</div>
                      <p className="mt-1 text-xs leading-relaxed text-white/80">
                        Empowering farmers and building sustainable communities.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                href="/services"
                className={`relative flex items-center gap-1 px-4 py-7 text-xs font-bold uppercase tracking-wide transition ${
                  isActivePath(pathname, "/services") ? "text-[#0b5428]" : "text-zinc-800 hover:text-[#0b5428]"
                }`}
              >
                Services <ChevronDown className="size-3.5" />
                {isActivePath(pathname, "/services") ? <span className="absolute inset-x-4 bottom-4 h-0.5 rounded-full bg-[#0b5428]" /> : null}
              </Link>
              <div className="invisible absolute left-1/2 top-full w-[900px] -translate-x-1/2 translate-y-3 rounded-md border border-zinc-200 bg-white p-0 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-6 overflow-hidden rounded-md">
                  {serviceCards.map((card) => {
                    const Icon = card.icon;

                    return (
                      <Link
                        key={card.href}
                        href={card.href}
                        className="group/card flex min-h-[190px] flex-col items-center border-r border-zinc-200 p-5 text-center transition last:border-r-0 hover:bg-emerald-50"
                      >
                        <Icon className="mb-4 size-10 text-[#0b5428] transition group-hover/card:scale-110" />
                        <h3 className="text-xs font-extrabold uppercase leading-snug text-zinc-900">{card.title}</h3>
                        <p className="mt-3 text-xs leading-relaxed text-zinc-600">{card.description}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {simpleDropdowns.map((dropdown) => (
              <div key={dropdown.href} className="group relative">
                <Link
                  href={dropdown.href}
                  className={`relative flex items-center gap-1 px-4 py-7 text-xs font-bold uppercase tracking-wide transition ${
                    isActivePath(pathname, dropdown.href) ? "text-[#0b5428]" : "text-zinc-800 hover:text-[#0b5428]"
                  }`}
                >
                  {dropdown.label} <ChevronDown className="size-3.5" />
                  {isActivePath(pathname, dropdown.href) ? <span className="absolute inset-x-4 bottom-4 h-0.5 rounded-full bg-[#0b5428]" /> : null}
                </Link>
                <div className="invisible absolute left-0 top-full w-64 translate-y-3 rounded-md border border-zinc-200 bg-white p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {dropdown.links.map((item) => (
                    <MenuItem key={item.href} item={item} />
                  ))}
                </div>
              </div>
            ))}

            <Link href="/gallery" className="px-4 py-7 text-xs font-bold uppercase tracking-wide text-zinc-800 transition hover:text-[#0b5428]">
              Gallery
            </Link>
            <Link href="/contact" className="px-4 py-7 text-xs font-bold uppercase tracking-wide text-zinc-800 transition hover:text-[#0b5428]">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden items-center gap-2 rounded-md bg-[#0b5428] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#073f1d] md:inline-flex">
              <UserPlus className="size-4" /> Join Us
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-md border border-zinc-200 p-2 text-[#0b5428] lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={closeMobile}>
          <nav
            className="ml-auto flex h-full w-[min(86vw,360px)] flex-col bg-[#073f1d] p-4 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <Link href="/" onClick={closeMobile} className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-amber-300 text-xs font-extrabold text-[#073f1d]">DU</div>
                <div>
                  <div className="font-extrabold">DAMOT UNION</div>
                  <div className="text-xs text-white/70">Farmers Cooperatives Union</div>
                </div>
              </Link>
              <button type="button" onClick={closeMobile} aria-label="Close menu" className="p-1">
                <X className="size-7" />
              </button>
            </div>

            <div className="mt-4 flex-1 overflow-y-auto">
              <Link href="/" onClick={closeMobile} className="mb-2 flex items-center gap-3 rounded-md px-3 py-3 text-sm font-bold uppercase hover:bg-white/10">
                <Home className="size-4" /> Home
              </Link>

              {mobileGroups.map((group) => {
                const Icon = group.icon;
                const open = mobileSection === group.label;

                return (
                  <div key={group.label} className="border-b border-white/10 py-1">
                    <button
                      type="button"
                      onClick={() => setMobileSection(open ? "" : group.label)}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm font-bold uppercase transition ${
                        open ? "bg-emerald-700" : "hover:bg-white/10"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="size-4" /> {group.label}
                      </span>
                      <ChevronDown className={`size-4 transition ${open ? "rotate-180" : ""}`} />
                    </button>

                    {open ? (
                      <div className="space-y-4 px-6 pb-4 pt-2">
                        {group.columns.map((column) => (
                          <div key={column.title}>
                            <div className="mb-2 text-xs font-bold uppercase tracking-wide text-amber-300">{column.title}</div>
                            <div className="space-y-1">
                              {column.links.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeMobile}
                                  className="block rounded-md px-2 py-1.5 text-sm text-white/85 hover:bg-white/10 hover:text-amber-300"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <Link href="/contact" onClick={closeMobile} className="mt-4 flex items-center justify-center gap-2 rounded-md bg-amber-300 px-5 py-3 text-sm font-extrabold uppercase text-[#073f1d]">
              <UserPlus className="size-4" /> Join Us
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

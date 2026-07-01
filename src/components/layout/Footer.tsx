import Link from "next/link";
import {
  Clock3,
  Globe,
  Mail,
  MapPin,
  PhoneCall,
  Phone,
  Send,
  Share2,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

const services = [
  "Agricultural Marketing",
  "Input Supply",
  "Mechanization Services",
  "Agro Processing",
  "Training & Extension",
  "Financial Services",
] as const;

const socialLinks = [
  { icon: Globe, label: "Website", href: "#" },
  { icon: MessageCircle, label: "Messaging", href: "#" },
  { icon: Share2, label: "Share", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald-900/40 bg-[#04381b] text-white/90">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white shadow-sm ring-4 ring-emerald-400/20">
              <PhoneCall className="size-6" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-wide text-white">DAMOT UNION</div>
              <div className="text-xs text-white/75">Multipurpose Farmers Cooperative Union</div>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/80">
            Empowering farmers and building prosperity across the Amhara Region through
            cooperative strength since 1993 E.C.
          </p>

          <div className="mt-8 flex gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-emerald-500 hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-3 text-[15px] text-white/80">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-emerald-300">
                  <span className="mr-3 inline-block text-white/60">→</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold text-white">Our Services</h4>
          <ul className="space-y-3 text-[15px] text-white/80">
            {services.map((service) => (
              <li key={service}>
                <span className="mr-3 inline-block text-white/60">→</span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold text-white">Get In Touch</h4>
          <ul className="space-y-4 text-[15px] text-white/85">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-amber-300" />
              <span>Bure Town, Amhara Region, Ethiopia</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-amber-300" />
              <span>0930 973 313 / 058 774 0188</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-amber-300" />
              <span>damotfcu76@gmail.com</span>
            </li>
            <li className="flex gap-2">
              <Clock3 className="mt-0.5 size-4 shrink-0 text-amber-300" />
              <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>&copy; {new Date().getFullYear()} Damot Multipurpose Farmers Cooperative Union. All rights reserved.</span>
          <span>Empowering Farmers - Building Prosperity</span>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Be_Vietnam_Pro } from "next/font/google";
import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FiCamera, FiPlayCircle } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Closest match to the typeface in the design. Move this to app/layout.tsx
// if you want the font available site-wide.
const font = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type FooterLink = { label: string; href: string };
type SocialLink = { label: string; href: string; icon: IconType };

const services: FooterLink[] = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "E-Commerce", href: "/services/e-commerce" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "SEO & Performance", href: "/services/seo-performance" },
];

const company: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const socials: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/clockosoft", icon: FiCamera },
  { label: "YouTube", href: "https://www.youtube.com/@clockosoft", icon: FiPlayCircle },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/110500132/admin/dashboard/", icon: FaLinkedin },
];

const legal: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <h3 className="mb-[22px] text-sm font-semibold uppercase tracking-wider text-white/70">
        {title}
      </h3>
      <ul className="flex flex-col gap-[18px]">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-base text-white/85 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer
      className={`${font.className} w-full bg-[linear-gradient(to_bottom,#000000,#008080)] text-white`}
    >
      {/* Main area */}
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 pt-16 sm:px-10 lg:px-20 lg:pb-[190px] lg:pt-[118px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[322fr_274fr_262fr_289fr] lg:gap-0">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="ClockOSoft home" className="inline-block">
              {/* Replace with your logo file in /public */}
              <Image
                src="/images/logo.png"
                alt="ClockOSoft – Built with care"
                width={187}
                height={47}
                priority
              />
            </Link>
            <p className="mt-3 max-w-[270px] text-base leading-[26px] text-white/85">
              Building dynamic &amp; scalable web experiences that help brands
              grow. Built with care.
            </p>
          </div>

          <LinkColumn title="Services" links={services} />
          <LinkColumn title="Company" links={company} />

          {/* Connect */}
          <div>
            <h3 className="mb-[22px] text-sm font-semibold uppercase tracking-wider text-white/70">
              Connect
            </h3>
            <ul className="flex items-center gap-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Button
                    // asChild
                    variant="ghost"
                    size="icon"
                    className="size-11 rounded-lg border border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white dark:hover:bg-white/15"
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon className="size-5" />
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <Separator className="bg-white/20" />
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-between gap-4 px-6 py-8 sm:px-10 md:flex-row md:items-center lg:h-[81px] lg:px-20 lg:py-0">
        <p className="text-sm text-white/65">
          &copy; {new Date().getFullYear()} ClockOSoft. All rights reserved.
        </p>
        <ul className="flex items-center gap-8">
          {legal.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-white/85 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
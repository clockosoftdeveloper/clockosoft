import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { IconType } from "react-icons";
import { FaFaceSmile, FaGlobe, FaStar } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import TestimonialsBanner from "./testimonials";

/* -------------------------------------------------------------------------- */
/*  Fonts (move to app/layout.tsx if you want them site-wide)                  */
/* -------------------------------------------------------------------------- */

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const serif = "font-[family-name:var(--font-cormorant)]";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

type Stat = {
  value: string;
  label: string;
  icon: IconType;
  iconClass: string;
  /** Desktop position / size inside the 604 × 686 staggered layout. */
  layout: string;
};

const stats: Stat[] = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: MdDescription,
    iconClass: "size-[34px] text-[#2f5fd0]",
    layout: "lg:left-0 lg:top-32 lg:h-[246px] lg:w-[281px]",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: FaFaceSmile,
    iconClass: "size-10 text-[#ff6a13]",
    layout: "lg:left-[315px] lg:top-0 lg:h-[246px] lg:w-[289px]",
  },
  {
    value: "5 Star",
    label: "Rated Platform",
    icon: FaStar,
    iconClass: "size-8 text-[#ff6a13]",
    layout: "lg:left-[315px] lg:top-[328px] lg:h-[270px] lg:w-[289px]",
  },
  {
    value: "15+",
    label: "Global Clients",
    icon: FaGlobe,
    iconClass: "size-9 text-[#0a8580]",
    layout: "lg:left-0 lg:top-[440px] lg:h-[246px] lg:w-[281px]",
  },
];

/* -------------------------------------------------------------------------- */
/*  Faint clock decoration on the page background                              */
/* -------------------------------------------------------------------------- */

const numeralStyle = { fontFamily: "var(--font-cormorant), serif" };

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <svg
        viewBox="0 0 1299 1456"
        width={1299}
        height={1456}
        className="absolute left-0 top-0 max-w-none"
        fill="none"
      >
        <circle cx={1290} cy={430} r={182} stroke="#ececef" />
        <text
          transform="translate(1161 301) rotate(-45)"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={34}
          fontWeight={500}
          fill="#e6e8eb"
          style={numeralStyle}
        >
          XI
        </text>
        <text
          transform="translate(8 1230) rotate(-70)"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={34}
          fontWeight={500}
          fill="#e6e8eb"
          style={numeralStyle}
        >
          X
        </text>
        <text
          transform="translate(168 1388) rotate(-20)"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={34}
          fontWeight={500}
          fill="#e6e8eb"
          style={numeralStyle}
        >
          VIII
        </text>
        {/* thin gold arcs */}
        <path d="M395 1315 C402 1370 406 1420 402 1456" stroke="#ecd9a6" strokeWidth={1.5} />
        <path d="M0 1000 C18 1000 40 1004 62 1012" stroke="#ecd9a6" strokeWidth={1.5} />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function AchievementSection() {
  return (
    <div
      className={cn(
        inter.className,
        cormorant.variable,
        "relative overflow-hidden bg-[#f8f8f9] pb-16 pt-10 lg:pb-[141px] lg:pt-[37px]"
      )}
    >
      <BackgroundDecor />

      {/* ------------------------------ Why choose us ------------------------------ */}
      <section
        id="about"
        className="relative mx-auto grid max-w-[1299px] gap-12 px-6 lg:grid-cols-[1fr_604px] lg:gap-0 lg:pl-[97px] lg:pr-[45px]"
      >
        <div className="lg:pt-[150px]">
          <h2
            className={cn(
              serif,
              "text-5xl font-semibold leading-[1.1] text-[#0a8580] md:text-[64px]"
            )}
          >
            Why Choose Us?
          </h2>
          <p className="mt-3 max-w-[260px] text-base leading-6 text-[#6b7280]">
            Trusted by forward-thinking companies around the world.
          </p>
          <Button
            // asChild
            className="mt-10 h-14 rounded-lg bg-[#ff6a00] px-10 text-base font-semibold text-white shadow-[0_8px_20px_rgba(255,106,0,0.3)] hover:bg-[#ec5f00]"
          >
            <Link href="/about">About Us</Link>
          </Button>
        </div>

        {/* Stat cards – staggered on desktop, simple grid below */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:relative lg:block lg:h-[686px] lg:w-[604px]">
          {stats.map(({ value, label, icon: Icon, iconClass, layout }) => (
            <Card
              key={label}
              className={cn(
                "items-center gap-0 rounded-[44px] border border-[#cfe8e6] bg-white py-0 pb-8 pt-8 text-center shadow-[0_20px_50px_-14px_rgba(13,148,136,0.25)] lg:absolute lg:pb-0 lg:pt-[43px]",
                layout
              )}
            >
              <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#fdd8ae]">
                <Icon className={iconClass} aria-hidden />
              </span>
              <p className="mt-5 text-3xl font-semibold leading-9 text-[#0a8580]">
                {value}
              </p>
              <p className="mt-1 text-[15px] leading-6 tracking-wide text-slate-500">
                {label}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* ------------------------------ What clients say ------------------------------ */}
      <div className="relative mt-16 lg:mt-[145px]">
        <TestimonialsBanner />
      </div>
    </div>
  );
}
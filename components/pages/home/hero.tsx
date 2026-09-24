import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { IconType } from "react-icons";
import { BsBarChart, BsCodeSlash } from "react-icons/bs";
import {
  FiArrowRight,
  FiCloud,
  FiDatabase,
  FiGrid,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";
import { LuShieldCheck, LuSwatchBook } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SiteHeader from "./site-header";

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
  weight: ["400", "500", "600"],
});

const serif = "font-[family-name:var(--font-cormorant)]";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const TEAL = "#0a8580";
const ORANGE = "#ff6a13";

type Chip = {
  icon: IconType;
  /** % of the hero width */
  left: string;
  /** px from the top of the hero */
  top: number;
  color: string;
  big?: boolean;
};

const chips: Chip[] = [
  { icon: BsCodeSlash, left: "8%", top: 172, color: TEAL, big: true },
  { icon: FiZap, left: "12.4%", top: 346, color: ORANGE },
  { icon: FiDatabase, left: "10.4%", top: 563, color: TEAL },
  { icon: FiSmartphone, left: "20.2%", top: 745, color: ORANGE },
  { icon: FiGrid, left: "49.5%", top: 835, color: TEAL },
  { icon: LuSwatchBook, left: "88.5%", top: 193, color: ORANGE },
  { icon: FiCloud, left: "90.5%", top: 392, color: TEAL },
  { icon: BsBarChart, left: "86.5%", top: 535, color: ORANGE },
  { icon: LuShieldCheck, left: "80.6%", top: 717, color: TEAL },
];

const heroBackground = [
  "radial-gradient(38% 34% at 0% 6%, rgba(150,200,208,0.28), transparent 70%)",
  "radial-gradient(60% 50% at 0% 100%, rgba(120,185,200,0.5), transparent 72%)",
  "radial-gradient(45% 45% at 100% 100%, rgba(255,160,80,0.32), transparent 72%)",
].join(",");

/* -------------------------------------------------------------------------- */
/*  Background decoration                                                      */
/* -------------------------------------------------------------------------- */

function DotGrid({
  cols,
  rows,
  cw,
  ch,
  color,
  className,
}: {
  cols: number;
  rows: number;
  cw: number;
  ch: number;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={cn("absolute hidden md:block", className)}
      style={{
        width: cols * cw,
        height: rows * ch,
        backgroundImage: `radial-gradient(circle, ${color} 3px, transparent 3.5px)`,
        backgroundSize: `${cw}px ${ch}px`,
      }}
    />
  );
}

/** A bundle of thin, parallel-ish curves – used for the line-art waves. */
function WaveLines({
  w,
  h,
  count,
  step,
  stroke,
  opacity,
  className,
}: {
  w: number;
  h: number;
  count: number;
  step: number;
  stroke: string;
  opacity: number;
  className?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      fill="none"
      stroke={stroke}
      strokeOpacity={opacity}
      strokeWidth={0.8}
      className={cn("absolute hidden md:block", className)}
    >
      {Array.from({ length: count }, (_, i) => {
        const dy = i * step;
        const k = 0.4 + i * 0.004;
        return (
          <path
            key={i}
            d={`M0 ${h + dy} C${w * k} ${h + dy}, ${w * 0.6} ${
              h * 0.55 + dy * 0.6
            }, ${w} ${h * 0.12 + dy * 0.35}`}
          />
        );
      })}
    </svg>
  );
}

const CX = 320;
const CY = 320;
const ticks = Array.from({ length: 60 }, (_, i) => {
  const major = i % 5 === 0;
  const a = (i * 6 * Math.PI) / 180;
  const r1 = major ? 222 : 250;
  const r2 = 260;
  return {
    major,
    x1: (CX + r1 * Math.sin(a)).toFixed(1),
    y1: (CY - r1 * Math.cos(a)).toFixed(1),
    x2: (CX + r2 * Math.sin(a)).toFixed(1),
    y2: (CY - r2 * Math.cos(a)).toFixed(1),
  };
});

/** Large translucent clock on the left with hour / minute hands. */
function ClockFace() {
  const pivot = { x: 323, y: 332 };
  return (
    <svg
      viewBox="0 0 640 640"
      width={640}
      height={640}
      className="absolute -left-[86px] top-[118px] hidden md:block"
    >
      <defs>
        <linearGradient
          id="hero-hour-hand"
          gradientUnits="userSpaceOnUse"
          x1={pivot.x}
          y1={pivot.y}
          x2={246}
          y2={142}
        >
          <stop offset="0" stopColor="#ffdcc9" />
          <stop offset="1" stopColor="#ffb58c" />
        </linearGradient>
      </defs>

      {/* dial */}
      <circle cx={CX} cy={CY} r={278} fill="rgba(255,255,255,0.28)" />
      <circle cx={CX} cy={CY} r={278} fill="none" stroke="#d9e9eb" strokeWidth={8} />
      <circle
        cx={CX}
        cy={CY}
        r={271}
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth={5}
      />

      {/* ticks */}
      {ticks.map((t, i) => (
        <line
          key={i}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke={t.major ? "#c9dcdf" : "#dde9ea"}
          strokeWidth={t.major ? 3.5 : 1.5}
          strokeLinecap="round"
        />
      ))}

      {/* minute hand + tail */}
      <line
        x1={pivot.x}
        y1={pivot.y}
        x2={533}
        y2={289}
        stroke="#cfe2e5"
        strokeWidth={6}
        strokeLinecap="round"
      />
      <line
        x1={pivot.x}
        y1={pivot.y}
        x2={163}
        y2={457}
        stroke="#cfe2e5"
        strokeWidth={6}
        strokeLinecap="round"
      />

      {/* hour hand */}
      <line
        x1={pivot.x}
        y1={pivot.y}
        x2={246}
        y2={142}
        stroke="url(#hero-hour-hand)"
        strokeWidth={8}
        strokeLinecap="round"
      />

      {/* hub */}
      <circle cx={pivot.x} cy={pivot.y} r={15} fill="#d3e6e8" stroke="#c3dadd" strokeWidth={3} />
      <circle cx={pivot.x} cy={pivot.y} r={4.5} fill="#eef6f7" />
    </svg>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {/* faint circles */}
      <div className="absolute -top-[129px] right-[125px] hidden size-[318px] rounded-full border border-[#efe5db] md:block" />
      <div className="absolute -bottom-[256px] left-[291px] hidden size-[450px] rounded-full border border-[#dbe9ea] md:block" />

      {/* line-art waves */}
      <WaveLines
        w={250}
        h={100}
        count={14}
        step={4}
        stroke="#9cbcc3"
        opacity={0.5}
        className="left-0 top-[100px]"
      />
      <WaveLines
        w={445}
        h={431}
        count={24}
        step={7}
        stroke="#ff9d5c"
        opacity={0.35}
        className="bottom-0 right-0"
      />

      <ClockFace />

      {/* dot grids */}
      <DotGrid
        cols={4}
        rows={5}
        cw={21}
        ch={22.5}
        color="#f7dccb"
        className="right-2 top-[121px]"
      />
      <DotGrid
        cols={6}
        rows={5}
        cw={20.4}
        ch={20.5}
        color="#b9d7db"
        className="bottom-[85px] left-px"
      />
    </div>
  );
}

function FloatingChips() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
      {chips.map(({ icon: Icon, left, top, color, big }, i) => (
        <span
          key={i}
          className={cn(
            "absolute hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white shadow-[0_10px_30px_rgba(15,23,42,0.07)] lg:flex",
            big ? "size-[70px] rounded-[20px]" : "size-14 rounded-[18px]"
          )}
          style={{ left, top }}
        >
          <Icon className={big ? "size-8" : "size-6"} style={{ color }} />
        </span>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

const ctaBase =
  "h-[51px] gap-2.5 rounded-xl px-9 text-[15px] font-semibold text-white has-[>svg]:px-9";

export default function HeroSection() {
  return (
    <section
      id="home"
      className={cn(
        inter.className,
        cormorant.variable,
        "relative isolate min-h-svh overflow-hidden bg-[#fafcfc] text-center lg:min-h-[max(100svh,909px)]"
      )}
      style={{ backgroundImage: heroBackground }}
    >
      {/* <SiteHeader /> */}
      <BackgroundDecor />
      <FloatingChips />

      <div className="relative z-10 mx-auto flex max-w-[1240px] flex-col items-center px-6 pb-24 pt-36 lg:pt-[262px]">
        {/* Badge */}
        <span className="inline-flex h-[25px] items-center gap-2 rounded-full bg-[#ff6a13]/10 px-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#ff6a13]">
          <span className="size-[7px] rounded-full bg-[#ff6a13]" />
          Digital Solutions
        </span>

        {/* Heading */}
        <h1
          className={cn(
            serif,
            "mt-7 text-[40px] font-semibold leading-none text-[#0c1631] sm:text-5xl lg:text-[54px]"
          )}
        >
          We Build <span className="text-[#0a8580]">Scalable</span>{" "}
          <br className="hidden sm:block" />
          Digital Solutions That <br className="hidden sm:block" />
          Drive <span className="text-[#ff6a13]">Real Results</span>
        </h1>

        {/* Sub-copy */}
        <p className="mt-7 max-w-[650px] text-[17px] leading-normal text-[#464c5d]">
          We help startups and enterprises transform ideas into powerful digital
          products through strategy, design, and engineering excellence.
        </p>

        <span
          aria-hidden
          className="mt-[34px] block h-[3px] w-[29px] rounded-full bg-[#ff6a13]"
        />

        {/* CTAs */}
        <div className="mt-11 flex flex-col items-center gap-3.5 sm:flex-row">
          <Button
            // asChild
            className={cn(
              ctaBase,
              "bg-[#ff6a00] shadow-[0_10px_24px_rgba(255,106,0,0.28)] hover:bg-[#ec5f00]"
            )}
          >
            <Link href="/#services" className="flex items-center gap-4">
              Explore Services
              <FiArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            // asChild
            className={cn(
              ctaBase,
              "bg-[#008080] shadow-[0_6px_16px_rgba(0,128,128,0.18)] hover:bg-[#006e6e]"
            )}
          >
            <Link href="/#portfolio" className="flex items-center gap-4">
              View Our Work
              <FiArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
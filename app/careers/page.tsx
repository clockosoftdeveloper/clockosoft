import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiCoffee,
  FiHeart,
  FiHome,
  FiTrendingUp,
} from "react-icons/fi";
import { LuGraduationCap, LuPartyPopper } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import JobOpenings, { jobOpenings } from "@/components/pages/careers/job-openings";
import SiteHeader from "@/components/pages/home/site-header";

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
  weight: ["400", "500", "600", "700"],
});

const serif = "font-[family-name:var(--font-cormorant)]";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

type Perk = {
  title: string;
  description: string;
  icon: IconType;
  color: string;
};

const perks: Perk[] = [
  {
    title: "Remote Flexibility",
    description: "Work from home, the office, or wherever you do your best work.",
    icon: FiHome,
    color: "#1d4ed8",
  },
  {
    title: "Health Coverage",
    description: "Medical coverage for you and your family, from day one.",
    icon: FiHeart,
    color: "#ef4444",
  },
  {
    title: "Learning Budget",
    description: "An annual budget for courses, books, and conferences.",
    icon: LuGraduationCap,
    color: "#10b981",
  },
  {
    title: "Growth Path",
    description: "Clear levels and regular reviews so growth is never a guessing game.",
    icon: FiTrendingUp,
    color: "#f97316",
  },
  {
    title: "Team Retreats",
    description: "Company-wide retreats to reconnect, celebrate, and recharge.",
    icon: LuPartyPopper,
    color: "#0d9488",
  },
  {
    title: "Great Coffee",
    description: "Well-stocked kitchens and a culture that actually takes breaks.",
    icon: FiCoffee,
    color: "#2563eb",
  },
];

const stats: { value: string; label: string }[] = [
  { value: `${jobOpenings.length}`, label: "Open Roles" },
  { value: "15+", label: "Team Members" },
  { value: "3", label: "Countries" },
  { value: "4.8/5", label: "Glassdoor-style Rating" },
];

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function CareersHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fafcfc] pb-20 pt-40 text-center lg:pb-28 lg:pt-[220px]"
      style={{
        backgroundImage: [
          "radial-gradient(38% 34% at 0% 6%, rgba(150,200,208,0.28), transparent 70%)",
          "radial-gradient(45% 45% at 100% 100%, rgba(255,160,80,0.24), transparent 72%)",
        ].join(","),
      }}
    >
      <SiteHeader />

      <div className="relative mx-auto flex max-w-[880px] flex-col items-center px-6">
        <span className="inline-flex h-[25px] items-center gap-2 rounded-full bg-[#ff6a13]/10 px-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#ff6a13]">
          <span className="size-[7px] rounded-full bg-[#ff6a13]" />
          We&apos;re Hiring
        </span>

        <h1
          className={cn(
            serif,
            "mt-7 text-[40px] font-semibold leading-[1.1] text-[#0c1631] sm:text-5xl lg:text-[58px]"
          )}
        >
          Build Your Career <span className="text-[#0a8580]">With Purpose</span>
          <br className="hidden sm:block" />
          Join <span className="text-[#ff6a13]">ClockOSoft</span>
        </h1>

        <p className="mt-6 max-w-[620px] text-[17px] leading-relaxed text-[#464c5d]">
          We&apos;re a small, senior team building scalable digital products for
          startups and enterprises. If you care about craft, ownership, and
          working with people who push you to do your best work, we&apos;d love
          to hear from you.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row">
          <Button
            // asChild
            className="h-[51px] gap-2.5 rounded-xl bg-[#ff6a00] px-9 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(255,106,0,0.28)] hover:bg-[#ec5f00] has-[>svg]:px-9"
          >
            <a href="#openings">
              View Open Roles
              <FiArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            // asChild
            variant="outline"
            className="h-[51px] rounded-xl border-2 border-[#cfe6e5] bg-white px-9 text-[15px] font-semibold text-[#0a8580] shadow-none hover:border-[#0a8580] hover:bg-[#0a8580] hover:text-white"
          >
            <Link href="/#about">Learn About Us</Link>
          </Button>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid w-full max-w-[720px] grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-semibold text-[#0a8580]">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Perks                                                                      */
/* -------------------------------------------------------------------------- */

function PerksSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1134px] text-center">
        <p className="text-3xl font-semibold leading-9 tracking-tight text-[#ff6a13]">
          Why Join Us
        </p>
        <h2
          className={cn(
            serif,
            "mt-1 text-4xl font-semibold leading-[1.05] text-[#0a0a0a] sm:text-5xl lg:text-[52px]"
          )}
        >
          Perks That Support <span className="text-[#0a8580]">Real Work</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[560px] text-lg leading-[1.65] text-slate-500">
          We keep the benefits simple and the trust high — good tools, fair pay,
          and room to grow.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map(({ title, description, icon: Icon, color }) => (
            <Card
              key={title}
              className="gap-0 rounded-[14px] border-0 bg-white py-0 pb-6 pl-8 pr-6 pt-8 text-left shadow-[0_22px_50px_-12px_rgba(13,148,136,0.2)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span
                className="flex size-[49px] items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: color }}
              >
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-8 text-[21px] font-semibold leading-7 text-[#0c1226]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-[29px] text-slate-500">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Open positions                                                             */
/* -------------------------------------------------------------------------- */

function OpenPositionsSection() {
  return (
    <section id="openings" className="bg-[#f8f9fb] px-6 py-24">
      <div className="mx-auto max-w-[1134px] text-center">
        <p className="text-3xl font-semibold leading-9 tracking-tight text-[#ff6a13]">
          Open Positions
        </p>
        <h2
          className={cn(
            serif,
            "mt-1 text-4xl font-semibold leading-[1.05] text-[#0a0a0a] sm:text-5xl lg:text-[52px]"
          )}
        >
          Find Your <span className="text-[#0a8580]">Next Role</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[560px] text-lg leading-[1.65] text-slate-500">
          Every role here is fully remote-friendly and reports directly into a
          small, senior team.
        </p>

        <div className="mt-14">
          <JobOpenings />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Closing CTA                                                                */
/* -------------------------------------------------------------------------- */

function CareersCta() {
  return (
    <section className="px-4 py-20">
      <div
        className="relative mx-auto flex max-w-[1198px] flex-col items-center gap-6 overflow-hidden rounded-md px-6 py-16 text-center"
        style={{
          backgroundColor: "#060a1c",
          backgroundImage:
            "radial-gradient(45% 70% at 50% 30%, rgba(7,42,124,0.8), transparent 75%)",
        }}
      >
        <h2 className="max-w-[560px] text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Don&apos;t See <span className="text-[#ff6a13]">Your Role?</span>
        </h2>
        <p className="max-w-[480px] text-lg leading-7 text-[#8fb5f5]">
          We&apos;re always glad to hear from people who care about great work.
          Send us your resume and tell us what you&apos;d like to work on.
        </p>
        <Button
        //   asChild
          className="mt-2 h-[51px] gap-2.5 rounded-xl bg-[#ff6a00] px-9 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(255,106,0,0.28)] hover:bg-[#ec5f00] has-[>svg]:px-9"
        >
          <a href="mailto:careers@clockosoft.com?subject=General%20Application">
            Get In Touch
            <FiArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function page() {
  return (
    <main className={cn(inter.className, cormorant.variable)}>
      <CareersHero />
      <PerksSection />
      <OpenPositionsSection />
      <CareersCta />
    </main>
  );
}
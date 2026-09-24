import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

type Project = {
  title: string;
  description: string;
  /** Live site URL for the "See It Live" button. */
  href: string;
  /** Screenshot shown inside the coloured thumbnail area (in /public). */
  image: string;
  imageAlt: string;
  /** Background colour of the thumbnail area. */
  bg: string;
  /** Position/shape of the screenshot inside the thumbnail area. */
  frameClass: string;
};

const projects: Project[] = [
  {
    title: "Vocably",
    description: "Start your business right away with our installation services.",
    href: "https://example.com",
    image: "/images/portfolio/vocably.png",
    imageAlt: "Vocably – GRE vocabulary learning app landing page",
    bg: "#0b3fae",
    frameClass: "inset-x-8 top-6 bottom-6 rounded-lg",
  },
  {
    title: "Sastho Tracker",
    description: "Get our product customized to your new feature requirements.",
    href: "https://example.com",
    image: "/images/portfolio/sastho-tracker.png",
    imageAlt: "Sastho Tracker – medicine reminder app landing page",
    bg: "#0b3fae",
    // Runs off the bottom edge of the thumbnail area, like in the design.
    frameClass: "inset-x-10 top-8 bottom-0 rounded-t-lg",
  },
  {
    title: "Higher Study Helpline in Bangla",
    description:
      "Bring your idea to reality with our expert development services.",
    href: "https://example.com",
    image: "/images/portfolio/higherstudyhelplineinbangla.png",
    imageAlt: "Higher Study Helpline – study abroad guidance website",
    bg: "#5342d6",
    frameClass: "inset-x-7 top-3.5 bottom-3.5 rounded-lg",
  },
];

/* -------------------------------------------------------------------------- */
/*  Background decoration                                                      */
/* -------------------------------------------------------------------------- */

function DotGrid({
  cols,
  rows,
  className,
}: {
  cols: number;
  rows: number;
  className?: string;
}) {
  return (
    <div
      className={cn("absolute hidden md:block", className)}
      style={{
        width: cols * 20,
        height: rows * 19,
        backgroundImage:
          "radial-gradient(circle, #e5e2db 3px, transparent 3.5px)",
        backgroundSize: "20px 19px",
      }}
    />
  );
}

const numeralStyle = { fontFamily: "var(--font-cormorant), serif" };

function Numeral({
  x,
  y,
  rotate,
  children,
}: {
  x: number;
  y: number;
  rotate: number;
  children: string;
}) {
  return (
    <text
      transform={`translate(${x} ${y}) rotate(${rotate})`}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={44}
      fontWeight={500}
      fill="#eceef1"
      style={numeralStyle}
    >
      {children}
    </text>
  );
}

/** Faint clock face + hands in the top-right corner. */
function ClockTopRight() {
  return (
    <svg
      viewBox="0 0 330 320"
      width={330}
      height={320}
      className="absolute right-0 top-0 hidden lg:block"
    >
      <circle cx={233} cy={122} r={190} fill="none" stroke="#eef0f3" />
      <line x1={138} y1={29} x2={233} y2={122} stroke="#eadfc9" strokeWidth={2} />
      <line x1={233} y1={122} x2={330} y2={83} stroke="#eadfc9" strokeWidth={2} />
      <circle
        cx={233}
        cy={122}
        r={13}
        fill="#f6f2ea"
        stroke="#eadfc8"
        strokeWidth={4}
      />
      <Numeral x={38} y={57} rotate={-72}>X</Numeral>
      <Numeral x={47} y={154} rotate={-100}>IX</Numeral>
      <Numeral x={96} y={234} rotate={-129}>VIII</Numeral>
      <Numeral x={181} y={297} rotate={-163}>VII</Numeral>
      <Numeral x={281} y={303} rotate={165}>VI</Numeral>
    </svg>
  );
}

/** Faint clock face rising from the bottom-left corner. */
function ClockBottomLeft() {
  return (
    <svg
      viewBox="0 0 380 330"
      width={380}
      height={330}
      className="absolute bottom-0 left-0 hidden lg:block"
    >
      <circle cx={178} cy={394} r={230} fill="none" stroke="#eef0f3" />
      <circle
        cx={178}
        cy={394}
        r={198}
        fill="none"
        stroke="#e6e8ec"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="0.1 9"
      />
      <Numeral x={178} y={229} rotate={0}>XII</Numeral>
      <Numeral x={96} y={251} rotate={-30}>XI</Numeral>
      <Numeral x={261} y={251} rotate={30}>I</Numeral>
      <Numeral x={35} y={312} rotate={-60}>X</Numeral>
    </svg>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <DotGrid cols={3} rows={6} className="left-[59px] top-[6px]" />
      <DotGrid cols={4} rows={4} className="bottom-[18px] right-[56px]" />
      <ClockTopRight />
      <ClockBottomLeft />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className={cn(
        inter.className,
        cormorant.variable,
        "relative overflow-hidden bg-[#f8f9fb] px-6 pb-12 pt-10 text-center"
      )}
    >
      <BackgroundDecor />

      <div className="relative">
        <p className="text-3xl font-medium text-[#ff6a13]">Portfolio</p>

        <h2
          className={cn(
            serif,
            "mt-5 text-5xl font-semibold leading-[1.1] md:text-[64px]"
          )}
        >
          <span className="text-[#0a0f1e]">Explore Our</span>{" "}
          <span className="text-[#0a8580]">Selected Works</span>
        </h2>

        <p className="mx-auto mt-4 max-w-[460px] text-lg leading-relaxed text-gray-500">
          A collection of projects showcasing innovation, technical excellence,
          and beautiful design across industries.
        </p>

        <div className="mx-auto mt-12 grid max-w-[1230px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-[42px]">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group gap-0 overflow-hidden rounded-2xl border border-[#cfe6e4] bg-white py-0 shadow-[0_14px_40px_-10px_rgba(0,128,128,0.2)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div
                className="relative h-[223px] w-full"
                style={{ backgroundColor: project.bg }}
              >
                <div className={cn("absolute overflow-hidden", project.frameClass)}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover object-top w-full"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col px-8 pb-5 pt-8 text-center">
                <h3 className="text-2xl font-semibold leading-[31px] text-[#0a8580]">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-[1.6] text-gray-500">
                  {project.description}
                </p>

                <div className="mt-auto pt-4">
                  <Button
                    // asChild
                    variant="outline"
                    className="h-[43px] w-[130px] rounded-[10px] border-2 border-[#ffc48f] bg-white text-base font-semibold text-[#ff6a13] shadow-none hover:border-[#ff6a13] hover:bg-[#ff6a13] hover:text-white dark:border-[#ffc48f] dark:bg-white dark:hover:bg-[#ff6a13]"
                  >
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`See ${project.title} live`}
                    >
                      See It Live
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14">
          <Button
            // asChild
            className="h-10 w-[130px] rounded-[10px] bg-[#ff6a13] text-base font-semibold text-white shadow-md hover:bg-[#ec5a05]"
          >
            <Link href="/portfolio">View More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
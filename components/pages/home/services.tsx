import { Cormorant_Garamond, Inter } from "next/font/google";
import type { IconType } from "react-icons";
import { BsCodeSlash } from "react-icons/bs";
import { FaCarAlt, FaCarCrash } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { LuCrown } from "react-icons/lu";
import { MdShoppingCart } from "react-icons/md";

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

type Service = {
  title: string;
  description: string;
  icon: IconType;
  /** Background colour of the icon tile. */
  color: string;
};

// NOTE: the Testing / AI Automation icons follow the screenshot (car glyphs).
// Swap for e.g. LuBug / LuBot if you want ones that match the topic.
const services: Service[] = [
  {
    title: "Web Development",
    description: "High-performance applications built with cutting-edge technologies.",
    icon: BsCodeSlash,
    color: "#10b981",
  },
  {
    title: "E-Commerce",
    description: "Streamlined retail solutions with checkout, inventory, and analytics.",
    icon: MdShoppingCart,
    color: "#1d4ed8",
  },
  {
    title: "Design & UX",
    description: "Thoughtful interfaces focused on accessibility and usability.",
    icon: FiPenTool,
    color: "#f97316",
  },
  {
    title: "Performance",
    description: "Lightning-fast optimization with SEO and monitoring.",
    icon: LuCrown,
    color: "#2563eb",
  },
  {
    title: "Testing",
    description: "Reliable testing strategies to ensure stability and quality.",
    icon: FaCarCrash,
    color: "#ef4444",
  },
  {
    title: "AI Automation",
    description: "Intelligent automation to streamline workflows and decisions.",
    icon: FaCarAlt,
    color: "#0d9488",
  },
];

/* -------------------------------------------------------------------------- */
/*  Hexagon background                                                         */
/* -------------------------------------------------------------------------- */

// Pointy-top honeycomb tile: hexagon + the vertical edge that joins the rows.
const R = 54.27;
const W = Math.sqrt(3) * R;
const H = 3 * R;
const f = (n: number) => n.toFixed(2);
const hexTile = [
  `M${f(W / 2)} 0`,
  `L${f(W)} ${f(R / 2)}`,
  `L${f(W)} ${f(1.5 * R)}`,
  `L${f(W / 2)} ${f(2 * R)}`,
  `L0 ${f(1.5 * R)}`,
  `L0 ${f(R / 2)}`,
  "Z",
  `M${f(W / 2)} ${f(2 * R)}`,
  `V${f(3 * R)}`,
].join(" ");

function HexagonBackground() {
  const mask = "linear-gradient(to bottom, #000 55%, transparent 100%)";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <svg className="h-full w-full" fill="none">
        <defs>
          <pattern
            id="svc-hex-a"
            width={f(W)}
            height={f(H)}
            patternUnits="userSpaceOnUse"
            patternTransform="translate(-20 -30)"
          >
            <path d={hexTile} stroke="#ff8a3d" strokeOpacity={0.3} />
          </pattern>
          <pattern
            id="svc-hex-b"
            width={f(W)}
            height={f(H)}
            patternUnits="userSpaceOnUse"
            patternTransform="translate(40 55) scale(1.3)"
          >
            <path d={hexTile} stroke="#ff8a3d" strokeOpacity={0.18} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#svc-hex-b)" />
        <rect width="100%" height="100%" fill="url(#svc-hex-a)" />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function ServicesSection() {
  return (
    <section
      id="services"
      className={cn(
        inter.className,
        cormorant.variable,
        "relative overflow-hidden bg-white pb-24 pt-24"
      )}
    >
      <HexagonBackground />

      <div className="relative">
        {/* Heading */}
        <div className="mx-auto max-w-[1240px]">
          <p className="text-3xl font-semibold leading-9 tracking-tight text-[#ff6a13]">
            Our Services
          </p>
          <h2
            className={cn(
              serif,
              "mt-1 text-4xl font-semibold leading-[1.05] text-[#0a0a0a] sm:text-5xl lg:text-[60px]"
            )}
          >
            Sophisticated Solutions
            <span
              className="block bg-clip-text uppercase text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0a8580 0%, #0a8580 60%, #5aa9a6 100%)",
              }}
            >
              for modern businesses
            </span>
          </h2>
          <p className="mt-0.5 max-w-[650px] text-lg leading-[1.65] text-slate-500 lg:text-xl lg:leading-[33px]">
            We deliver carefully crafted web experiences that combine technical
            excellence with elegant design.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-[1240px] grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:mt-[137px] lg:grid-cols-3 lg:gap-x-[66px] lg:gap-y-[69px] xl:px-0">
          {services.map(({ title, description, icon: Icon, color }) => (
            <Card
              key={title}
              className="gap-0 rounded-[14px] border-0 bg-white py-0 pb-6 pl-8 pr-6 pt-8 shadow-[0_22px_50px_-12px_rgba(13,148,136,0.2)] transition-transform duration-300 hover:-translate-y-1 lg:pl-[42px] lg:pt-[42px]"
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
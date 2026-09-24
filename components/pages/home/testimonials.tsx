"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { Button } from "@/components/ui/button";

type Testimonial = {
  quote: string;
  name: string;
  tag: string;
};

// The 2nd and 3rd entries are sample copy – replace with real testimonials.
const testimonials: Testimonial[] = [
  {
    quote:
      "This was a steal. I appreciate being able to find such a great design on my budget. I was able to purchase even more. The quality is beyond many that cost a lot more. Thank you!",
    name: "Jowanna Daley",
    tag: "Happy Customer",
  },
  {
    quote:
      "Clear communication from day one and a polished result delivered on time. The team genuinely cared about getting the details right.",
    name: "Client Name",
    tag: "Happy Customer",
  },
  {
    quote:
      "Our new site loads fast, looks great and has already improved our enquiries. Highly recommended for any growing business.",
    name: "Client Name",
    tag: "Happy Customer",
  },
];

/* -------------------------------------------------------------------------- */
/*  Hexagon strip on the left edge                                             */
/* -------------------------------------------------------------------------- */

const HR = 26.6;
const HW = Math.sqrt(3) * HR;

const hexPoints = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

function HexStrip() {
  const fill = "rgba(255,255,255,0.05)";
  const r = HR - 2.5;
  const mask = "linear-gradient(to right, #000 35%, transparent 100%)";
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 h-full w-[130px]"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <defs>
        <pattern
          id="tb-hex"
          width={HW.toFixed(2)}
          height={(3 * HR).toFixed(2)}
          patternUnits="userSpaceOnUse"
          patternTransform="translate(-9 -20)"
        >
          <polygon points={hexPoints(HW / 2, HR, r)} fill={fill} />
          <polygon points={hexPoints(0, 2.5 * HR, r)} fill={fill} />
          <polygon points={hexPoints(HW, 2.5 * HR, r)} fill={fill} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tb-hex)" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Banner                                                                     */
/* -------------------------------------------------------------------------- */

export default function TestimonialsBanner() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="testimonials" className="relative px-4">
      <div
        className="relative mx-auto flex max-w-[1240px] flex-col items-center gap-12 overflow-hidden rounded-md px-6 py-14 lg:flex-row lg:justify-between lg:gap-8 lg:py-[57px] lg:pl-[145px] lg:pr-[69px]"
        style={{
          backgroundColor: "#060a1c",
          backgroundImage:
            "radial-gradient(38% 60% at 30% 42%, rgba(7,42,124,0.8), transparent 75%)",
        }}
      >
        <HexStrip />

        {/* Left: heading + arrows */}
        <div className="relative w-full lg:w-auto">
          <h2 className="text-5xl font-extrabold leading-none tracking-tight text-white">
            What
            <br />
            <span className="text-[#ff6a13]">Clients</span> Say
          </h2>
          <p className="mt-4 max-w-[260px] text-lg leading-7 text-[#8fb5f5]">
            Trusted by forward-thinking companies around the world.
          </p>

          <div className="mt-6 flex gap-2.5">
            <Button
              type="button"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonial"
              className="size-[34px] rounded-full bg-[#0a7d79] p-0 text-white hover:bg-[#08706c]"
            >
              <FiArrowLeft className="size-5" />
            </Button>
            <Button
              type="button"
              size="icon"
              onClick={next}
              aria-label="Next testimonial"
              className="size-[34px] rounded-full bg-[#0a7d79] p-0 text-white hover:bg-[#08706c]"
            >
              <FiArrowRight className="size-5" />
            </Button>
          </div>
        </div>

        {/* Right: testimonial panel */}
        <div
          aria-live="polite"
          className="relative h-[328px] w-full max-w-[476px] shrink-0 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #bcc4ee 0%, #dde2fa 55%, #c6cdf1 100%)",
          }}
        >
          {/* soft window-shadow bars */}
          <div aria-hidden className="absolute inset-y-0 left-[54px] w-[26px] bg-[#7c86cf]/10" />
          <div aria-hidden className="absolute inset-y-0 left-[228px] w-5 bg-[#7c86cf]/10" />
          <div aria-hidden className="absolute inset-x-0 top-[60px] h-[22px] bg-[#7c86cf]/10" />
          <div aria-hidden className="absolute inset-x-0 top-[180px] h-[18px] bg-[#7c86cf]/[0.08]" />

          <div className="absolute inset-x-0 top-[43px] mx-auto w-[275px] max-w-[calc(100%-32px)]">
            <figure
              key={index}
              className="relative animate-in fade-in duration-300 [filter:drop-shadow(10px_16px_14px_rgba(45,55,120,0.28))]"
            >
              <div className="rounded-3xl bg-white px-8 pb-6 pt-[31px]">
                <div className="flex gap-0.5 text-[#fcd000]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} className="size-4" aria-hidden />
                  ))}
                </div>

                <blockquote className="mt-4 border-t border-slate-200 pt-[21px]">
                  <p className="text-xs leading-[18px] text-slate-800">
                    {t.quote}
                  </p>
                </blockquote>

                <div className="mt-4 w-[58%] border-t border-slate-200" />

                <figcaption className="mt-3.5 flex items-center justify-between gap-2">
                  <span className="font-[family-name:var(--font-cormorant)] text-sm font-bold text-slate-900">
                    {t.name}
                  </span>
                  <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-slate-300">
                    {t.tag}
                  </span>
                </figcaption>
              </div>

              {/* speech-bubble tail */}
              <span
                aria-hidden
                className="absolute -bottom-4 right-16 h-4 w-[37px] bg-white [clip-path:polygon(0_0,100%_0,100%_100%)]"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
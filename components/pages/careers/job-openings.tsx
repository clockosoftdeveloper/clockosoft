"use client";

import { useMemo, useState } from "react";
import { FiBriefcase, FiClock, FiMapPin } from "react-icons/fi";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Data – replace with real openings, or fetch these from your ATS / CMS      */
/* -------------------------------------------------------------------------- */

export type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  /** Where the "Apply Now" button goes – a form route, ATS link, or mailto. */
  applyHref: string;
};

export const jobOpenings: JobOpening[] = [
  {
    id: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Dhaka, BD / Remote",
    type: "Full-time",
    summary:
      "Build fast, accessible interfaces for our client projects using React and Next.js, working closely with design and backend engineers.",
    responsibilities: [
      "Ship production features across several client codebases",
      "Turn Figma designs into pixel-accurate, responsive UI",
      "Review pull requests and mentor junior engineers",
      "Improve performance, accessibility, and code quality",
    ],
    requirements: [
      "4+ years building production React applications",
      "Strong TypeScript and modern CSS skills",
      "Experience with Next.js or a similar meta-framework",
      "Comfortable working directly with clients and designers",
    ],
    applyHref: "mailto:careers@clockosoft.com?subject=Senior%20Frontend%20Engineer",
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Dhaka, BD",
    type: "Full-time",
    summary:
      "Design and maintain APIs and services that power our web and e-commerce platforms, with a focus on reliability and scale.",
    responsibilities: [
      "Design REST/GraphQL APIs and relational database schemas",
      "Write automated tests and maintain CI/CD pipelines",
      "Optimize queries and background jobs for performance",
      "Collaborate with frontend engineers on API contracts",
    ],
    requirements: [
      "3+ years with Node.js in production",
      "Solid SQL skills (Postgres or MySQL)",
      "Experience with Docker and cloud deployment (AWS/GCP)",
      "Understanding of authentication and API security",
    ],
    applyHref: "mailto:careers@clockosoft.com?subject=Backend%20Engineer",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    summary:
      "Own the design process end to end — from wireframes to polished, developer-ready UI — across a range of client industries.",
    responsibilities: [
      "Conduct discovery and translate requirements into user flows",
      "Design high-fidelity UI in Figma with a documented system",
      "Prototype and test key interactions before handoff",
      "Partner with engineers through implementation",
    ],
    requirements: [
      "3+ years of product or web design experience",
      "A portfolio showing end-to-end case studies",
      "Working knowledge of design systems and accessibility",
      "Bonus: basic HTML/CSS fluency",
    ],
    applyHref: "mailto:careers@clockosoft.com?subject=UI%2FUX%20Designer",
  },
  {
    id: "qa-engineer",
    title: "QA Engineer",
    department: "Quality Assurance",
    location: "Dhaka, BD",
    type: "Full-time",
    summary:
      "Protect the quality of everything we ship by building test plans, automating regression coverage, and catching issues early.",
    responsibilities: [
      "Write and execute manual and automated test cases",
      "Set up and maintain end-to-end test suites",
      "Track and triage bugs with engineering",
      "Advocate for quality throughout the development cycle",
    ],
    requirements: [
      "2+ years in software QA",
      "Experience with a testing framework (Playwright, Cypress, etc.)",
      "Strong attention to detail and clear bug reporting",
      "Basic understanding of web and API testing",
    ],
    applyHref: "mailto:careers@clockosoft.com?subject=QA%20Engineer",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    summary:
      "Keep our infrastructure fast, secure, and easy to deploy to, across a growing portfolio of client and internal projects.",
    responsibilities: [
      "Manage CI/CD pipelines and deployment automation",
      "Monitor uptime, performance, and cost across environments",
      "Harden infrastructure security and access controls",
      "Support engineers with environment and tooling issues",
    ],
    requirements: [
      "3+ years in a DevOps or SRE role",
      "Hands-on experience with AWS or GCP and Docker",
      "Infrastructure-as-code experience (Terraform preferred)",
      "Comfortable working across multiple client stacks",
    ],
    applyHref: "mailto:careers@clockosoft.com?subject=DevOps%20Engineer",
  },
];

const departments = ["All", ...Array.from(new Set(jobOpenings.map((j) => j.department)))];

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function JobOpenings() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? jobOpenings
        : jobOpenings.filter((job) => job.department === active),
    [active]
  );

  return (
    <div>
      {/* Department filter */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {departments.map((dept) => {
          const selected = dept === active;
          return (
            <button
              key={dept}
              type="button"
              onClick={() => setActive(dept)}
              aria-pressed={selected}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                selected
                  ? "border-[#0a8580] bg-[#0a8580] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#0a8580]/50 hover:text-[#0a8580]"
              )}
            >
              {dept}
            </button>
          );
        })}
      </div>

      {/* Openings */}
      <div className="mx-auto mt-10 max-w-[860px]">
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-slate-500">
            No open roles in this department right now — check back soon.
          </p>
        ) : (
          <Accordion 
          // type="single"
          //  collapsible
            className="flex flex-col gap-4">
            {filtered.map((job) => (
              <AccordionItem
                key={job.id}
                value={job.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 shadow-[0_10px_30px_-16px_rgba(15,23,42,0.15)] data-[state=open]:border-[#0a8580]/40"
              >
                <AccordionTrigger className="py-6 text-left hover:no-underline [&>svg]:text-[#0a8580]">
                  <div className="flex flex-1 flex-col gap-2 pr-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-lg font-semibold text-[#0c1226]">
                      {job.title}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="gap-1 bg-[#0a8580]/10 text-[#0a8580] hover:bg-[#0a8580]/10"
                      >
                        <FiBriefcase className="size-3" />
                        {job.department}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="gap-1 bg-slate-100 text-slate-600 hover:bg-slate-100"
                      >
                        <FiMapPin className="size-3" />
                        {job.location}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="gap-1 bg-[#ff6a13]/10 text-[#ff6a13] hover:bg-[#ff6a13]/10"
                      >
                        <FiClock className="size-3" />
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-7">
                  <p className="text-[15px] leading-7 text-slate-600">
                    {job.summary}
                  </p>

                  <div className="mt-5 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-[#0a8580]">
                        Responsibilities
                      </h4>
                      <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-slate-600">
                        {job.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-[#ff6a13]">
                        Requirements
                      </h4>
                      <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-slate-600">
                        {job.requirements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    // asChild
                    className="mt-7 h-11 rounded-xl bg-[#ff6a00] px-7 text-[15px] font-semibold text-white shadow-none hover:bg-[#ec5f00]"
                  >
                    <a href={job.applyHref}>Apply Now</a>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}
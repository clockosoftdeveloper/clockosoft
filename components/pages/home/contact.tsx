import type { ReactNode } from "react";
import Image from "next/image";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";
import { MdAccessTimeFilled, MdChat, MdEmail } from "react-icons/md";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ContactForm from "@/components/forms/contact";

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

// Decorative background hexagons. `left` is a % of the section width so they
// scale with the viewport; `top` / `size` are in px.
const hexagons = [
  { left: "21.1%", top: 89, size: 118, rotate: 0 },
  { left: "90.3%", top: 89, size: 118, rotate: 0 },
  { left: "5.6%", top: 222, size: 112, rotate: -15 },
  { left: "49.5%", top: 240, size: 112, rotate: 6 },
  { left: "76.9%", top: 222, size: 112, rotate: -12 },
  { left: "33.1%", top: 563, size: 112, rotate: 16 },
  { left: "64.9%", top: 556, size: 112, rotate: 10 },
];

type HelpItem = {
  title: string;
  description: string;
  href?: string;
  icon: IconType;
  titleClass: string;
  circleClass: string;
  iconClass: string;
};

const helpItems: HelpItem[] = [
  {
    title: "Live Chat",
    description: "Chat with our team in real time",
    icon: MdChat,
    titleClass: "text-[#0b8580]",
    circleClass: "bg-[#008080]/10",
    iconClass: "text-[#0b8580]",
  },
  {
    title: "Email Us",
    description: "email@gmail.com",
    href: "mailto:email@gmail.com",
    icon: MdEmail,
    titleClass: "text-[#ff6a13]",
    circleClass: "bg-[#ff6a13]/20",
    iconClass: "text-[#ff6a13]",
  },
  {
    title: "Office Hours",
    description: "Sat to Thu, 9 am to 5pm",
    icon: MdAccessTimeFilled,
    titleClass: "text-[#2f66dd]",
    circleClass: "bg-[#2f66dd]/15",
    iconClass: "text-[#2f66dd]",
  },
];

/* -------------------------------------------------------------------------- */
/*  Small pieces                                                               */
/* -------------------------------------------------------------------------- */

function GoogleMapsPin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 92.3 132.3"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#1a73e8"
        d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"
      />
      <path
        fill="#ea4335"
        d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"
      />
      <path
        fill="#4285f4"
        d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"
      />
      <path
        fill="#fbbc04"
        d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"
      />
      <path
        fill="#34a853"
        d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.6 14.9 6.8 23.1 12.8 23.1s3.2-8.2 12.8-23.2"
      />
    </svg>
  );
}

function SectionHeading({
  accent,
  rest,
  restClass,
}: {
  accent: string;
  rest: string;
  restClass: string;
}) {
  return (
    <h2
      className={cn(
        serif,
        "text-5xl font-semibold leading-[1.1] md:text-[64px]"
      )}
    >
      <span className="text-[#ff6a13]">{accent}</span>{" "}
      <span className={restClass}>{rest}</span>
    </h2>
  );
}

function ContactColumn({
  icon,
  title,
  titleClass,
  children,
}: {
  icon: ReactNode;
  title: string;
  titleClass?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-24 items-center justify-center">{icon}</div>
      <h3
        className={cn(
          serif,
          "mt-4 text-2xl font-semibold leading-[33px] text-slate-900",
          titleClass
        )}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

/** Fixed tab on the left edge of the screen. Move to your layout if it should
 *  appear on every page. */
function GetCallTab() {
  return (
    <a
      href="/book-a-call"
      className="fixed left-0 top-1/2 z-40 flex h-[264px] w-[70px] -translate-y-1/2 items-center justify-center rounded-r-2xl bg-[#00857f] text-2xl font-semibold uppercase tracking-wide text-white shadow-lg transition-colors [writing-mode:vertical-rl] hover:bg-[#007570] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00857f]"
    >
      Get 1:1 Call
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

type ContactSectionProps = {
  /** Replaces the default <ContactForm /> inside the orange-tinted panel. */
  children?: ReactNode;
};

export default function ContactSection({ children }: ContactSectionProps) {
  return (
    <div className={cn(inter.className, cormorant.variable, "w-full bg-white")}>
      <GetCallTab />

      {/* ------------------------------ Contact Us ------------------------------ */}
      <section
        id="contact"
        className="relative overflow-hidden px-6 pb-24 pt-12 text-center lg:pb-[130px]"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {hexagons.map((h, i) => (
            <span
              key={i}
              className="absolute bg-[#f5f5f5]"
              style={{
                left: h.left,
                top: h.top,
                width: h.size,
                height: h.size * 1.1547,
                transform: `translate(-50%, -50%) rotate(${h.rotate}deg)`,
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          ))}
        </div>

        <div className="relative">
          <SectionHeading
            accent="Contact"
            rest="Us"
            restClass="text-slate-900"
          />
          <p className="mt-3 text-lg text-slate-500">
            Have a question or remark? Feel free to contact us!
          </p>

          <div className="mx-auto mt-14 grid max-w-[1307px] grid-cols-1 gap-14 md:grid-cols-3 md:gap-0 lg:mt-[126px]">
            {/* Find Us */}
            <ContactColumn
              title="Find Us"
              icon={
                <a
                  href="https://maps.google.com/?q=Mirpur+DOHS+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open our location in Google Maps"
                >
                  <GoogleMapsPin className="h-[95px] w-auto" />
                </a>
              }
            >
              <address className="mt-3 max-w-[215px] text-[15px] font-medium not-italic leading-[29.5px] text-slate-500">
                Level: 02, H: 1005, 1007, Av: 11, R:09,Mirpur DOHS, Dhaka 1216,
                BD
              </address>
            </ContactColumn>

            {/* Whatsapp */}
            <ContactColumn
              title="Whatsapp"
              icon={
                <a
                  href="https://wa.me/8801406980019"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                >
                  <FaWhatsapp className="size-24 text-[#25d366]" />
                </a>
              }
            >
              <ul className="mt-3 text-lg font-medium leading-7 text-slate-500">
                {/* <li>
                  <a href="tel:+8801XXXXXXX">+8801XXXXXXX</a>
                </li> */}
                <li>
                  <a href="tel:+8801406980019">+8801406980019</a>
                </li>
              </ul>
            </ContactColumn>

            {/* Quick scan */}
            <ContactColumn
              title="Quick Scan To Whatsapp"
              titleClass="max-w-[160px]"
              icon={
                // Put your QR code at /public/images/whatsapp-qr.png
                <Image
                  src="/images/qr.png"
                  alt="QR code to open WhatsApp chat"
                  width={92}
                  height={92}
                  className="border border-black bg-white"
                />
              }
            />
          </div>
        </div>
      </section>

      {/* ------------------------------ Get in Touch ------------------------------ */}
      <section
        id="get-in-touch"
        className="px-6 pb-24 pt-6 text-center lg:pb-32"
      >
        <SectionHeading accent="Get in" rest="Touch" restClass="text-black" />
        <p className="mx-auto mt-4 max-w-[520px] text-lg leading-[29px] text-gray-500">
          Have any question about our products, services, or custom project? Our
          team is here to help.
        </p>

        <div className="mx-auto mt-14 grid max-w-[1090px] items-center gap-10 text-left lg:grid-cols-[1fr_332px] lg:gap-[123px]">
          {/* Form panel */}
          <div
            className="flex min-h-[360px] items-center rounded-2xl border border-[#ffd4b3] bg-[#fffaf6] px-6 py-12 shadow-[0_2px_10px_rgba(255,106,19,0.08)] sm:px-11"
            style={{
              backgroundImage:
                "radial-gradient(circle at 45% 50%, rgba(255,140,60,0.10), transparent 35%)",
            }}
          >
            <div className="w-full">{children ?? <ContactForm />}</div>
          </div>

          {/* Help card */}
          <Card className="w-full gap-0 rounded-2xl border-0 bg-white px-8 pb-8 pt-7 shadow-[0_12px_48px_rgba(15,23,42,0.08)]  lg:w-[332px]">
            <h3 className="text-2xl font-semibold leading-8 text-[#ff6a13]">
              We’re Here to Help
            </h3>
            <p className="max-w-[210px] text-sm font-medium leading-7 text-slate-500">
              Our Team Typically Replies Within a Few Hours
            </p>

            <ul className="mt-7 flex flex-col gap-8 lg:gap-[35px]">
              {helpItems.map(
                ({
                  title,
                  description,
                  href,
                  icon: Icon,
                  titleClass,
                  circleClass,
                  iconClass,
                }) => (
                  <li key={title} className="flex min-h-[86px] items-start gap-4">
                    <span
                      className={cn(
                        "flex size-[73px] shrink-0 items-center justify-center rounded-full",
                        circleClass
                      )}
                    >
                      <Icon className={cn("size-10", iconClass)} aria-hidden />
                    </span>
                    <div>
                      <h4
                        className={cn(
                          "text-xl font-medium leading-7",
                          titleClass
                        )}
                      >
                        {title}
                      </h4>
                      <p className="max-w-[150px] text-sm font-medium leading-7 text-slate-500">
                        {href ? (
                          <a
                            href={href}
                            className="transition-colors hover:text-slate-900"
                          >
                            {description}
                          </a>
                        ) : (
                          description
                        )}
                      </p>
                    </div>
                  </li>
                )
              )}
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}
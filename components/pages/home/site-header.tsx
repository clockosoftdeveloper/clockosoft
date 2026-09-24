"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiMenu } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const textBodyMedium = {
  fontFamily: "Inter, sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  letterSpacing: "0",
};

const ctaClass =
  "h-[42px] gap-2.5 rounded-xl bg-[#ff6a00] px-[22px] text-[15px] font-semibold text-white shadow-none hover:bg-[#ec5f00] has-[>svg]:px-[22px]";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-[15px] z-5000 px-5">
      <div className="mx-auto flex h-[82px] max-w-[1240px] items-center rounded-3xl border border-[#cfe6e5] bg-white/80 pl-6 pr-4 shadow-[0_8px_30px_rgba(0,80,80,0.06)] backdrop-blur-md lg:pl-[39px] lg:pr-[29px]">
        {/* Logo – replace with your logo file in /public */}
        <Link href="/" aria-label="ClockOSoft home" className="shrink-0 flex-1">
          <Image
            src="/images/logo.png"
            alt="ClockOSoft – Built with care"
            width={105}
            height={26}
            priority
          />
        </Link>

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden lg:block flex-1">
          <ul className={`flex items-center gap-7 `}>
            {links.map(({ label, href }) => {
              const active = href === pathname;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative pb-1 text-[#0f1a35] transition-colors hover:text-[#0a8580]",
                      active &&
                        "after:absolute after:inset-x-0 after:-bottom-px after:h-[2px] after:rounded-full after:bg-[#0a8580]"
                    , textBodyMedium)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="flex-1 flex justify-end">
          <Button 
        // asChild 
        className={cn(ctaClass, "hidden lg:inline-flex ")}
        >
          <Link href="/book-a-call" className={`flex items-center gap-4 ${textBodyMedium}`}>
            Get a 1:1 Call
            <FiArrowRight className="size-4" />
          </Link>
        </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
          //  asChild
           >
            <Button
              variant="ghost"
              size="icon"
              className="size-11 text-[#0f1a35] lg:hidden"
              aria-label="Open menu"
            >
              <FiMenu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className={`flex flex-col gap-1 px-4 `}>
              {links.map(({ label, href }) => (
                <SheetClose 
                // asChild 
                key={label}
                >
                  <Link
                    href={href}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium text-[#0f1a35] transition-colors hover:bg-[#0a8580]/10 hover:text-[#0a8580]",
                      href === pathname && "bg-[#0a8580]/10 text-[#0a8580]",
                      textBodyMedium
                    )}
                  >
                    {label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose 
              // asChild
              >
                <Button
                //  asChild
                 className={cn(ctaClass, "mt-4 w-full")}>
                  <Link href="/book-a-call" className={`textBodyMedium`}>
                    Get a 1:1 Call
                    <FiArrowRight className="size-4" />
                  </Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
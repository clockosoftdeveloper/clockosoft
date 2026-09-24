"use client";

import { useState, type FormEvent } from "react";
import type { IconType } from "react-icons";
import { MdEdit, MdEmail, MdPerson, MdPhone } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormProps = {
  /**
   * Called with the form values on submit. If omitted, the form POSTs JSON to
   * `/api/contact` – create that route (or pass your own handler / server
   * action here).
   */
  onSubmit?: (values: ContactFormValues) => Promise<void> | void;
};

type Status = "idle" | "sending" | "success" | "error";

type Field = {
  name: keyof Omit<ContactFormValues, "message">;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
  required: boolean;
  icon: IconType;
};

const fields: Field[] = [
  {
    name: "name",
    label: "Full name",
    placeholder: "Enter your full name",
    type: "text",
    autoComplete: "name",
    required: true,
    icon: MdPerson,
  },
  {
    name: "email",
    label: "Email address",
    placeholder: "Enter your email address",
    type: "email",
    autoComplete: "email",
    required: true,
    icon: MdEmail,
  },
  {
    name: "phone",
    label: "Phone number",
    placeholder: "Enter your phone number (preferably WhatsApp)",
    type: "tel",
    autoComplete: "tel",
    required: false,
    icon: MdPhone,
  },
];

// Shared look for the inputs and the textarea.
const fieldClass =
  "rounded-[10px] border-[#d1d1d1] bg-white pl-[60px] pr-4 text-base text-slate-800 shadow-none placeholder:text-[#757575] focus-visible:border-[#ff6a13] focus-visible:ring-[3px] focus-visible:ring-[#ff6a13]/20 md:text-base dark:border-[#d1d1d1] dark:bg-white";

function IconBadge({
  icon: Icon,
  className,
}: {
  icon: IconType;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-[15px] flex size-7 items-center justify-center rounded-full bg-[#ff6a13]/25 text-[#ff6a13]",
        className
      )}
    >
      <Icon className="size-[15px]" />
    </span>
  );
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(
      new FormData(form)
    ) as unknown as ContactFormValues;

    setStatus("sending");
    try {
      if (onSubmit) {
        await onSubmit(values);
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[17px]">
      {fields.map(
        ({ name, label, placeholder, type, autoComplete, required, icon }) => (
          <div key={name} className="relative">
            <Label htmlFor={name} className="sr-only">
              {label}
            </Label>
            <Input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              required={required}
              className={cn(fieldClass, "h-11")}
            />
            <IconBadge icon={icon} className="top-2" />
          </div>
        )
      )}

      <div className="relative">
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Write your message here."
          required
          className={cn(fieldClass, "min-h-[142px] resize-none pt-2")}
        />
        <IconBadge icon={MdEdit} className="top-1.5" />
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          variant="outline"
          disabled={status === "sending"}
          className="h-11 w-[121px] rounded-[10px] border-[#d1d1d1] bg-white px-0 text-base font-medium text-[#ff6a13] shadow-none hover:border-[#ff6a13] hover:bg-[#ff6a13] hover:text-white dark:border-[#d1d1d1] dark:bg-white dark:hover:bg-[#ff6a13]"
        >
          {status === "sending" ? "Sending…" : "Submit"}
        </Button>

        <p
          role="status"
          aria-live="polite"
          className={cn(
            "text-sm font-medium",
            status === "success" && "text-[#0b8580]",
            status === "error" && "text-red-600"
          )}
        >
          {status === "success" && "Thanks! We’ll get back to you soon."}
          {status === "error" && "Something went wrong. Please try again."}
        </p>
      </div>
    </form>
  );
}
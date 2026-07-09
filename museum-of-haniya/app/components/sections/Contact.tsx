"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { SITE } from "@/constants/content";
import { EMAILJS_CONFIG, isEmailConfigured } from "@/lib/email";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    if (!isEmailConfigured) {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        formRef.current?.reset();
      }, 2400);
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        { publicKey: EMAILJS_CONFIG.publicKey }
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3500);
    }
  }

  return (
    <section id="contact" className="relative py-32 md:py-36 px-6 max-w-6xl mx-auto">
      <Eyebrow>Exhibition No. 08</Eyebrow>
      <ScrollReveal>
        <h2 className="font-display font-medium text-[clamp(2.2rem,4.5vw,3.6rem)] leading-tight mb-6">
          The guest book
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <p className="max-w-xl text-[17px] leading-[1.75] opacity-70 mb-16">
          Leave a note before you exit the gallery.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white/[0.15] dark:bg-white/[0.03] border border-ink/[0.08] dark:border-cream/10 backdrop-blur-md p-8 md:p-11"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-[11px] tracking-[2px] uppercase text-brass mb-2.5"
              >
                Name
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                required
                placeholder="Your name"
                disabled={status === "sending"}
                className="w-full bg-transparent border-0 border-b border-ink/[0.08] dark:border-cream/10 py-2.5 px-0.5 text-[15px] focus:outline-none focus:border-brass transition-colors duration-300 disabled:opacity-50"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-[11px] tracking-[2px] uppercase text-brass mb-2.5"
              >
                Email
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="you@example.com"
                disabled={status === "sending"}
                className="w-full bg-transparent border-0 border-b border-ink/[0.08] dark:border-cream/10 py-2.5 px-0.5 text-[15px] focus:outline-none focus:border-brass transition-colors duration-300 disabled:opacity-50"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-[11px] tracking-[2px] uppercase text-brass mb-2.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Say hello…"
                rows={4}
                disabled={status === "sending"}
                className="w-full bg-transparent border-0 border-b border-ink/[0.08] dark:border-cream/10 py-2.5 px-0.5 text-[15px] resize-y focus:outline-none focus:border-brass transition-colors duration-300 disabled:opacity-50"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full justify-center"
            >
              {status === "sending"
                ? "Sending…"
                : status === "success"
                ? "Message received"
                : status === "error"
                ? "Try again"
                : "Sign the guest book"}
            </Button>

            {status === "success" && (
              <p className="flex items-center gap-2 mt-4 text-[13px] text-brass">
                <CheckCircle2 size={16} strokeWidth={1.8} />
                Thank you — your note has been left in the guest book.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 mt-4 text-[13px] text-red-500 dark:text-red-400">
                <AlertCircle size={16} strokeWidth={1.8} />
                Something went wrong. Please email directly instead.
              </p>
            )}
          </form>

          <div className="flex flex-col gap-7 justify-center">
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] tracking-[2px] uppercase text-brass">
                Email
              </span>
              <a
                href={`mailto:${SITE.email}`}
                className="text-lg break-all hover:text-brass transition-colors duration-300"
              >
                {SITE.email}
              </a>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] tracking-[2px] uppercase text-brass">
                University
              </span>
              <span className="text-lg">{SITE.university}</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

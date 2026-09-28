"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactInfo } from "@/lib/contact";

type FormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type Status = "idle" | "submitting" | "success";

const initialValues: FormValues = {
  name: "",
  email: "",
  service: "",
  message: "",
  consent: false,
};

const serviceOptions = [
  { value: "website-design", label: "Website Design & Development", icon: "language" },
  { value: "mobile-app", label: "Mobile App Development", icon: "smartphone" },
  { value: "e-commerce", label: "E-Commerce Development", icon: "shopping_bag" },
  { value: "startup-mvp", label: "Startup MVP Development", icon: "rocket_launch" },
  { value: "marketing-event", label: "Marketing & Event Websites", icon: "campaign" },
  { value: "other", label: "Something else", icon: "more_horiz" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.service) {
    errors.service = "Please select a service.";
  }
  if (!values.message.trim()) {
    errors.message = "Please tell us about your project.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  if (!values.consent) {
    errors.consent = "Please consent so we can reply to your inquiry.";
  }
  return errors;
}

const inputClasses =
  "w-full rounded-lg border border-glass-border bg-deep-matte px-4 py-3 font-body-md text-body-md text-soft-white placeholder:text-on-surface-variant/50 outline-none transition-colors duration-300 focus:border-soft-white/40";

const labelClasses =
  "font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2 mb-2";

const labelIconClasses = "material-symbols-outlined text-[16px]";

const errorClasses = "mt-2 text-sm text-error";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    update(name as keyof FormValues, value as FormValues[keyof FormValues]);
  }

  function handleConsent(e: ChangeEvent<HTMLInputElement>) {
    update("consent", e.target.checked);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus("submitting");
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          service: values.service,
          message: values.message.trim(),
          consent: values.consent,
        }),
      });
      const data: { ok: boolean; errors?: FormErrors & { form?: string } } =
        await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        if (data.errors) {
          const { form, ...fieldErrors } = data.errors;
          setErrors(fieldErrors);
          setSubmitError(form ?? "Something went wrong. Please try again.");
        } else {
          setSubmitError("Something went wrong. Please try again.");
        }
        setStatus("idle");
        return;
      }
      setStatus("success");
    } catch {
      setSubmitError("Could not send your message. Check your connection and try again.");
      setStatus("idle");
    }
  }

  function handleReset() {
    setValues(initialValues);
    setErrors({});
    setSubmitError(null);
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-glass-border bg-obsidian-base p-8 md:p-12 text-center">
        <span className="material-symbols-outlined text-[48px] text-soft-white mb-4">
          check_circle
        </span>
        <p className="font-label-caps text-label-caps text-surface-tint mb-4">
          Message received
        </p>
        <h2 className="font-headline-lg text-2xl md:text-headline-lg text-soft-white mb-4">
          Thanks{values.name ? `, ${values.name}` : ""} — we&apos;ll be in
          touch.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mb-8">
          Your message is in — we&apos;ll reply to you shortly. Prefer direct
          contact? Email{" "}
          <a
            href={contactInfo.emailHref}
            className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
          >
            {contactInfo.email}
          </a>{" "}
          or call{" "}
          <a
            href={contactInfo.phoneHref}
            className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
          >
            {contactInfo.phone}
          </a>
          .
        </p>
        <Button variant="ghost" size="md" onClick={handleReset} type="button">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-glass-border bg-obsidian-base p-8 md:p-12">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8 mb-8 pb-8 border-b border-glass-border">
        <a
          href={contactInfo.emailHref}
          className="font-label-caps text-label-caps-link text-soft-white hover:text-surface-tint transition-colors nav-link-hover w-fit inline-flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[16px]">mail</span>
          {contactInfo.email}
        </a>
        <a
          href={contactInfo.phoneHref}
          className="font-label-caps text-label-caps-link text-on-surface-variant hover:text-primary transition-colors nav-link-hover w-fit inline-flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[16px]">call</span>
          {contactInfo.phone}
        </a>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClasses}>
              <span className={labelIconClasses}>person</span>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Cooper"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className={inputClasses}
            />
            {errors.name && (
              <p id="contact-name-error" role="alert" className={errorClasses}>
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClasses}>
              <span className={labelIconClasses}>mail</span>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.com"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className={inputClasses}
            />
            {errors.email && (
              <p id="contact-email-error" role="alert" className={errorClasses}>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="contact-service" className={labelClasses}>
            <span className={labelIconClasses}>design_services</span>
            Service
          </label>
          <Select
            value={values.service}
            onValueChange={(value) => update("service", value)}
          >
            <SelectTrigger
              id="contact-service"
              aria-invalid={Boolean(errors.service)}
              aria-describedby={
                errors.service ? "contact-service-error" : undefined
              }
            >
              {(() => {
                const selected = serviceOptions.find(
                  (option) => option.value === values.service
                );
                return (
                  <>
                    {selected && (
                      <span
                        className="material-symbols-outlined text-[18px] text-surface-tint"
                        aria-hidden="true"
                      >
                        {selected.icon}
                      </span>
                    )}
                    <SelectValue placeholder="Select a service" />
                  </>
                );
              })()}
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <span
                    className="material-symbols-outlined text-[18px] text-surface-tint"
                    aria-hidden="true"
                  >
                    {option.icon}
                  </span>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p id="contact-service-error" role="alert" className={errorClasses}>
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClasses}>
            <span className={labelIconClasses}>message</span>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Tell us about your project, timeline, and goals…"
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`${inputClasses} resize-y min-h-32`}
          />
          {errors.message && (
            <p id="contact-message-error" role="alert" className={errorClasses}>
              {errors.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-consent"
            className="flex items-start gap-3 cursor-pointer"
          >
            <input
              id="contact-consent"
              name="consent"
              type="checkbox"
              checked={values.consent}
              onChange={handleConsent}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={
                errors.consent ? "contact-consent-error" : undefined
              }
              className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded border border-glass-border bg-deep-matte transition-colors duration-300 checked:bg-soft-white checked:border-soft-white focus-visible:outline-2 focus-visible:outline-soft-white"
            />
            <span className="font-body-md text-body-md text-on-surface-variant">
              I agree to be contacted about my inquiry via email or phone.
            </span>
          </label>
          {errors.consent && (
            <p id="contact-consent-error" role="alert" className={errorClasses}>
              {errors.consent}
            </p>
          )}
        </div>

        <div className="pt-2">
          <Button
            variant="primary"
            size="lg"
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">
              {status === "submitting" ? "hourglass_top" : "send"}
            </span>
            {status === "submitting" ? "Sending…" : "Send Message"}
          </Button>
          <p className="mt-4 font-body-md text-body-md text-on-surface-variant/70">
            Prefer email?{" "}
            <a
              href={contactInfo.emailHref}
              className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
            >
              {contactInfo.email}
            </a>{" "}
            instead.
          </p>
          {submitError && (
            <p role="alert" className={errorClasses}>
              {submitError}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

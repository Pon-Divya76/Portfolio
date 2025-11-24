"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { contactDetails, languages } from "@/data/content";

export default function ContactPage() {
  const phoneHref = contactDetails.phone.replace(/\s+/g, "");

  return (
    <Section
      eyebrow="Connect"
      title="Contact & Languages"
      description="Get in touch and view language proficiencies."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE - STACKED LIST */}
        <div className="flex flex-col gap-4">

          {/* Email */}
          <Card>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">Email</h3>
            <Link href={`mailto:${contactDetails.email}`} className="text-sm text-white hover:underline">
              {contactDetails.email}
            </Link>
          </Card>

          {/* Phone */}
          <Card>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">Phone</h3>
            <Link href={`tel:${phoneHref}`} className="text-sm text-white hover:underline">
              {contactDetails.phone}
            </Link>
          </Card>

          {/* Location */}
          <Card>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">Location</h3>
            <p className="text-sm text-white">{contactDetails.location}</p>
            <p className="mt-1 text-xs text-gray-500">{contactDetails.availability}</p>
          </Card>

          {/* Languages */}
          <Card>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="inline-flex items-center rounded bg-white px-3 py-1 text-sm font-medium text-black shadow hover:bg-gray-200 ocus:text-black active:text-black transition"
 
                >
                  {lang}
                </span>
              ))}
            </div>
          </Card>

          {/* Social */}
          <Card>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">Social</h3>
            <div className="flex flex-wrap gap-2">
              {contactDetails.socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded bg-white px-4 py-1.5 text-sm font-medium text-black border hover:bg-gray-200  focus:text-black active:text-black transition focus:ring focus:ring-accent-500"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </Card>
        </div>

        {/* RIGHT SIDE - FORM (UNCHANGED) */}
        <div className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto lg:pb-6">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

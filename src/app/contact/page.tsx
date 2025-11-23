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
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <Card>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">Email</h3>
              <Link href={`mailto:${contactDetails.email}`} className="text-gray-700 hover:underline">
                {contactDetails.email}
              </Link>
            </Card>
            <Card>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">Phone</h3>
              <Link href={`tel:${phoneHref}`} className="text-gray-700 hover:underline">
                {contactDetails.phone}
              </Link>
            </Card>
          </div>
          
          <Card>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">Location</h3>
            <p className="text-gray-700">{contactDetails.location}</p>
            <p className="mt-2 text-sm text-gray-600">{contactDetails.availability}</p>
          </Card>
          
          <Card>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700"
                >
                  {lang}
                </span>
              ))}
            </div>
          </Card>
          
          <Card>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">Social</h3>
            <div className="flex flex-wrap gap-3">
              {contactDetails.socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto lg:pb-6">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

 
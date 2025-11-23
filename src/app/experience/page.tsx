import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { experience } from "@/data/content";

export default function ExperiencePage() {
  return (
    <Section
      eyebrow="Journey"
      title="Experience"
      description="Internships and training experiences."
    >
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {experience.map((role) => (
          <Card key={role.company}>
            <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">{role.period}</p>
            <h2 className="mb-1 text-xl font-bold text-gray-800">{role.role}</h2>
            <p className="mb-4 text-gray-600">{role.company}</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}


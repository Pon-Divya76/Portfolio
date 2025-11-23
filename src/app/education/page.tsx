import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { educationHistory } from "@/data/content";

export default function EducationPage() {
  return (
    <Section
      eyebrow="Learning"
      title="Education"
      description="Academic achievements and qualifications."
    >
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {educationHistory.map((edu) => (
          <Card key={edu.school}>
            <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">{edu.period}</p>
            <h2 className="mb-2 text-xl font-bold text-gray-800">{edu.school}</h2>
            <p className="text-gray-700">{edu.program}</p>
            {edu.details.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {edu.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}


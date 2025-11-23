import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { summaryContent } from "@/data/content";

export default function AboutPage() {
  return (
    <Section
      eyebrow="Profile"
      title="About Pon Divya"
      description="Computer Science Engineering student seeking opportunities."
    >
      <div className="grid gap-6 md:grid-cols-1">
        <Card>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Summary</h2>
          <p className="text-gray-700">{summaryContent.text}</p>
        </Card>
      </div>
    </Section>
  );
}


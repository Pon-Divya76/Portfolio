import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { TagList } from "@/components/TagList";
import { skillSets } from "@/data/content";

export default function SkillsPage() {
  return (
    <Section
      eyebrow="Capabilities"
      title="Skills"
      description="Technical and soft skills I bring to the table."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillSets.map((set) => (
          <Card key={set.label}>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">{set.label}</h3>
            <TagList items={set.items} variant="dark" />
          </Card>
        ))}
      </div>
    </Section>
  );
}


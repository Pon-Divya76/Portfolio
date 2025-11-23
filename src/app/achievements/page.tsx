import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { achievements } from "@/data/content";

export default function AchievementsPage() {
  return (
    <Section
      eyebrow="Milestones"
      title="Achievements & Recognition"
      description="Awards and recognitions received."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item) => (
          <Card key={item.title}>
            <h2 className="mb-2 text-xl font-bold text-gray-800">{item.title}</h2>
            {item.detail && <p className="text-gray-600">{item.detail}</p>}
          </Card>
        ))}
      </div>
    </Section>
  );
}


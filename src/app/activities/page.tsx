import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { activities } from "@/data/content";

export default function ActivitiesPage() {
  return (
    <Section
      eyebrow="Community"
      title="Activities"
      description="Extracurricular activities and participation."
    >
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {activities.map((activity) => (
          <Card key={activity.title}>
            <h2 className="mb-2 text-xl font-bold text-gray-800">{activity.title}</h2>
            <p className="text-gray-700">{activity.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}


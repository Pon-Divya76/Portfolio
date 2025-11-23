import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { TagList } from "@/components/TagList";
import { projects } from "@/data/content";

export default function ProjectsPage() {
  return (
    <Section
      eyebrow="Selected Work"
      title="Projects"
      description="Projects and work I've completed."
    >
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <div className="flex-1 space-y-3">
              <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
              <TagList items={project.stack} variant="dark" />
            </div>
            {project.impact && (
              <p className="mt-4 text-sm font-semibold text-gray-600">{project.impact}</p>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}


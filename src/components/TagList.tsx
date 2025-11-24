type TagListProps = {
  items: string[];
  variant?: "light" | "dark";
};

export function TagList({ items, variant = "dark" }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="skill-tag">
          {item}
        </span>
      ))}
    </div>
  );
}


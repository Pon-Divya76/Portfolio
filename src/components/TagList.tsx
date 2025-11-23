type TagListProps = {
  items: string[];
  variant?: "light" | "dark";
};

export function TagList({ items, variant = "dark" }: TagListProps) {
  const baseClasses =
    variant === "dark"
      ? "rounded-md bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700"
      : "rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-mist";

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={baseClasses}>
          {item}
        </span>
      ))}
    </div>
  );
}


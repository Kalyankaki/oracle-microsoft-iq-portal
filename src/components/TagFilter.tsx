"use client";

import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  selected: string;
  onChange: (tag: string) => void;
}

export default function TagFilter({ tags, selected, onChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("All")}
        className={cn(
          "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
          selected === "All"
            ? "bg-azure-blue text-white"
            : "border border-white/10 bg-white/5 text-muted hover:text-white"
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
            selected === tag
              ? "bg-azure-blue text-white"
              : "border border-white/10 bg-white/5 text-muted hover:text-white"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

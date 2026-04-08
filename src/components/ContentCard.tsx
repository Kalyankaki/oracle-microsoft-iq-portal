import { type LucideIcon } from "lucide-react";
import Badge from "@/components/Badge";

interface ContentCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  badge?: { label: string; variant?: "default" | "oracle" | "azure" | "green" | "yellow" | "purple" };
  href?: string;
  linkText?: string;
  onClick?: () => void;
}

export default function ContentCard({
  icon: Icon,
  title,
  description,
  tags,
  badge,
  href,
  linkText = "Read more →",
  onClick,
}: ContentCardProps) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      onClick={onClick}
      className="group flex flex-col rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20 hover:bg-white/5 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 flex-shrink-0 text-azure-blue" />}
          {badge && (
            <Badge variant={badge.variant || "default"}>{badge.label}</Badge>
          )}
        </div>
      </div>
      <h3 className="mt-3 font-semibold text-white">{title}</h3>
      <p className="mt-1.5 flex-1 text-sm text-muted">{description}</p>
      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <span className="mt-4 text-sm font-medium text-azure-blue transition-colors group-hover:text-white">
        {linkText}
      </span>
    </Wrapper>
  );
}

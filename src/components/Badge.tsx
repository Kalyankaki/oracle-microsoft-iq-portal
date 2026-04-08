import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "border border-white/10 bg-white/5 text-muted",
        oracle: "border border-oracle-red/30 bg-oracle-red/10 text-oracle-red",
        azure: "border border-azure-blue/30 bg-azure-blue/10 text-azure-blue",
        green: "border border-green-500/30 bg-green-500/10 text-green-400",
        yellow: "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
        purple: "border border-purple-500/30 bg-purple-500/10 text-purple-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export default function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

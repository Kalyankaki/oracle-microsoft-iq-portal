import Link from "next/link";
import {
  MessageSquare,
  BookOpen,
  Globe,
  PlayCircle,
  Users,
  Award,
  Lightbulb,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { news } from "@/data/news";

const tickerItems = news.map((item) => item.title);

const stats = [
  { target: 14, suffix: "+", label: "Azure Regions with ODB" },
  { target: 80, suffix: "+", label: "Best Practices" },
  { target: 2400, suffix: "+", label: "Community Members" },
  { target: 120, suffix: "+", label: "Sessions Indexed" },
];

const sections = [
  {
    icon: MessageSquare,
    title: "AI Chat",
    description: "Ask anything about Oracle Database on Azure — powered by AI.",
    href: "/chat",
  },
  {
    icon: BookOpen,
    title: "Best Practices",
    description: "Curated guides for deployment, performance, and security.",
    href: "/best-practices",
  },
  {
    icon: Globe,
    title: "Availability",
    description: "Region availability, SLAs, and service status at a glance.",
    href: "/availability",
  },
  {
    icon: PlayCircle,
    title: "Sessions",
    description: "Conference talks, webinars, and deep-dive recordings.",
    href: "/sessions",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with practitioners, share knowledge, and contribute.",
    href: "/community",
  },
  {
    icon: Award,
    title: "MVP Corner",
    description: "Spotlight on community MVPs and their contributions.",
    href: "/mvp-corner",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Reference architectures, experiments, and what's next.",
    href: "/innovation-hub",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-oracle-red/10 via-charcoal to-azure-blue/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-azure-blue/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The definitive hub for{" "}
              <span className="text-oracle-red">Oracle Database</span> on{" "}
              <span className="text-azure-blue">Azure</span>
            </h1>
            <p className="mt-6 text-lg text-muted sm:text-xl">
              Built by the community. Powered by AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 rounded-lg bg-oracle-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-oracle-red/25 transition-all hover:bg-oracle-red/90 hover:shadow-oracle-red/40"
              >
                <MessageSquare className="h-4 w-4" />
                Ask the AI
              </Link>
              <Link
                href="/best-practices"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Browse Best Practices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/10 bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      {/* Section grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Explore the Hub</h2>
        <p className="mt-2 text-muted">
          Everything you need for Oracle Database on Azure, in one place.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20 hover:bg-white/5"
              >
                <Icon className="h-8 w-8 text-azure-blue" />
                <h3 className="mt-4 font-semibold text-white">{section.title}</h3>
                <p className="mt-1 text-sm text-muted">{section.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-azure-blue transition-colors group-hover:text-white">
                  Explore →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* What's New ticker */}
      <section className="border-y border-white/10 bg-surface py-4">
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className="mx-8 inline-flex items-center gap-2 text-sm text-muted"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-azure-blue" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Architecture */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Featured Architecture</h2>
        <div className="mt-8">
          <Link
            href="/innovation-hub"
            className="group block overflow-hidden rounded-xl border border-white/10 bg-surface transition-all hover:border-white/20"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Gradient placeholder for architecture thumbnail */}
              <div className="relative h-64 w-full lg:h-auto lg:min-h-[280px] lg:w-1/2">
                <div className="absolute inset-0 bg-gradient-to-br from-oracle-red/30 via-purple-600/20 to-azure-blue/30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-oracle-red/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-azure-blue/20 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-mono text-xs uppercase tracking-widest text-white/60">
                      Reference Architecture
                    </div>
                    <div className="mt-2 text-lg font-bold text-white">
                      Agentic AI + OracleDB@Azure
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:w-1/2">
                <div className="inline-flex w-fit items-center gap-1 rounded-full border border-oracle-red/30 bg-oracle-red/10 px-3 py-1 text-xs font-medium text-oracle-red">
                  Featured
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  Agentic AI + OracleDB@Azure Reference Architecture
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Explore how autonomous AI agents leverage Oracle Database on Azure for
                  enterprise-grade retrieval, reasoning, and action execution. This reference
                  architecture covers vector search, tool orchestration, and secure data access
                  patterns.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-azure-blue transition-colors group-hover:text-white">
                  View in Innovation Hub →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

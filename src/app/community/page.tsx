import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { communityMembers } from "@/data/community-members";
import {
  Users,
  Globe,
  BookOpen,
  PlayCircle,
  Share2,
  Bug,
  AtSign,
  Briefcase,
  Code2,
} from "lucide-react";

const stats = [
  { label: "Community Members", value: "2,400+", icon: Users },
  { label: "Contributions", value: "300+", icon: BookOpen },
  { label: "Countries", value: "45+", icon: Globe },
];

const contributeWays = [
  {
    icon: BookOpen,
    title: "Write a Guide",
    description: "Share your expertise by writing a best practice guide or tutorial for the community.",
  },
  {
    icon: PlayCircle,
    title: "Record a Session",
    description: "Present your knowledge in a recorded session, webinar, or workshop format.",
  },
  {
    icon: Share2,
    title: "Share Architecture",
    description: "Contribute reference architectures and patterns to the Innovation Hub.",
  },
  {
    icon: Bug,
    title: "Report an Issue",
    description: "Help improve the platform by reporting bugs, suggesting features, or providing feedback.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        title="Community"
        description="Connect with Oracle Database on Azure practitioners worldwide. Share knowledge, learn, and contribute."
      />

      {/* Stats */}
      <div className="border-b border-white/10 bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 px-4 py-8 sm:px-6 lg:px-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <Icon className="mx-auto h-5 w-5 text-azure-blue" />
                <div className="mt-2 text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-muted">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* How to Contribute */}
        <h2 className="text-2xl font-bold text-white">How to Contribute</h2>
        <p className="mt-2 text-muted">
          There are many ways to get involved and share your knowledge.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contributeWays.map((way) => {
            const Icon = way.icon;
            return (
              <div
                key={way.title}
                className="rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20"
              >
                <Icon className="h-8 w-8 text-azure-blue" />
                <h3 className="mt-3 font-semibold text-white">{way.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{way.description}</p>
              </div>
            );
          })}
        </div>

        {/* Community Members */}
        <h2 className="mt-16 text-2xl font-bold text-white">Community Contributors</h2>
        <p className="mt-2 text-muted">
          Meet the people who make this community thrive.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {communityMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo}`}
              >
                <span className="text-sm font-bold text-white">{member.initials}</span>
              </div>
              <h3 className="mt-3 font-semibold text-white">{member.name}</h3>
              <p className="text-xs text-muted">
                {member.title} at {member.organization}
              </p>
              <p className="mt-2 text-sm text-muted">{member.bio}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-azure-blue">
                  {member.contributions} contributions
                </span>
                <div className="flex gap-2">
                  {member.links.twitter && (
                    <AtSign className="h-3.5 w-3.5 text-muted hover:text-white" />
                  )}
                  {member.links.linkedin && (
                    <Briefcase className="h-3.5 w-3.5 text-muted hover:text-white" />
                  )}
                  {member.links.github && (
                    <Code2 className="h-3.5 w-3.5 text-muted hover:text-white" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Content CTA */}
        <div className="mt-16 rounded-xl border border-white/10 bg-gradient-to-br from-oracle-red/10 via-surface to-azure-blue/10 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white">Ready to Contribute?</h2>
          <p className="mt-3 text-muted">
            Share your expertise with the OracleDB@Azure community. Submit a guide, session, or architecture.
          </p>
          <Link
            href="mailto:contribute@oracledatabase-azure.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-oracle-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-oracle-red/25 transition-all hover:bg-oracle-red/90"
          >
            Submit Content
          </Link>
        </div>
      </div>
    </>
  );
}

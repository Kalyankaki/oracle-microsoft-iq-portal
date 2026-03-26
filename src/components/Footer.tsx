import Link from "next/link";

const footerLinks = [
  {
    title: "Resources",
    links: [
      { label: "Oracle Cloud on Azure", href: "https://oracle.com/cloud/azure", external: true },
      { label: "Azure for Oracle", href: "https://azure.microsoft.com/solutions/oracle", external: true },
      { label: "Best Practices", href: "/best-practices" },
      { label: "Sessions", href: "/sessions" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "MVP Corner", href: "/mvp-corner" },
      { label: "Innovation Hub", href: "/innovation-hub" },
      { label: "Partners", href: "/partners" },
      { label: "Submit Content", href: "/community" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Twitter / X", href: "https://twitter.com", external: true },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
      { label: "GitHub", href: "https://github.com", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              <span className="text-oracle-red">OracleDB</span>
              <span className="text-azure-blue">@Azure</span>
            </Link>
            <p className="mt-3 text-sm text-muted">
              The definitive community hub for Oracle Database on Microsoft Azure.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} OracleDB@Azure Community. Not affiliated with Oracle or Microsoft.
          </p>
          <Link
            href="/community"
            className="inline-flex items-center gap-2 rounded-lg bg-azure-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-azure-blue/90"
          >
            Submit Content
          </Link>
        </div>
      </div>
    </footer>
  );
}

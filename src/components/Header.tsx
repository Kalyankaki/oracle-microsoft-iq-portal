import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-navy-900/80 backdrop-blur">
      <div className="flex h-14 items-center gap-4 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-oracle-red to-azure-blue">
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">
              Oracle <span className="text-muted">×</span> Microsoft IQ
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Progression demo portal
            </div>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted md:inline">
            Executive briefing build
          </span>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-azure-blue to-iq-teal" />
            <span className="font-medium">Priya Sharma</span>
            <span className="text-muted">· VP Operations</span>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Suspense } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Suspense fallback={<div className="w-72 shrink-0 border-r border-white/10" />}>
          <Sidebar />
        </Suspense>
        <main className="flex-1 overflow-x-hidden">
          <div className="mx-auto max-w-6xl px-6 py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

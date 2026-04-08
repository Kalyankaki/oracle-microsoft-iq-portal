"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SearchBar from "@/components/SearchBar";
import TagFilter from "@/components/TagFilter";
import Badge from "@/components/Badge";
import VideoEmbed from "@/components/VideoEmbed";
import { sessions, sessionCategories } from "@/data/sessions";
import { Clock, User, Calendar } from "lucide-react";

export default function SessionsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  const filtered = sessions.filter((s) => {
    const matchesSearch =
      search === "" ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.speaker.toLowerCase().includes(search.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === "All" || s.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader
        title="Sessions"
        description="Conference talks, webinars, workshops, and deep-dive recordings from the Oracle on Azure community."
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-sm">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search sessions..."
            />
          </div>
          <TagFilter
            tags={sessionCategories}
            selected={category}
            onChange={setCategory}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((session) => {
            const isSelected = selectedSession === session.id;
            return (
              <div
                key={session.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-surface transition-all hover:border-white/20"
              >
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setSelectedSession(isSelected ? null : session.id)
                  }
                >
                  <VideoEmbed
                    title={session.title}
                    videoUrl={session.videoUrl}
                    showPlaceholder={!isSelected}
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <Badge variant="azure">{session.category}</Badge>
                    <Badge>
                      <Clock className="mr-1 h-3 w-3" />
                      {session.duration}
                    </Badge>
                  </div>

                  <h3 className="mt-3 font-semibold text-white">
                    {session.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm text-muted">
                    {session.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <User className="h-3 w-3" />
                      <span>
                        {session.speaker} — {session.speakerTitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {session.event} &middot;{" "}
                        {new Date(session.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {session.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {session.sessionUrl && (
                    <a
                      href={session.sessionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-azure-blue transition-colors hover:text-white"
                    >
                      Watch Session →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted">No sessions match your search.</p>
          </div>
        )}
      </div>
    </>
  );
}

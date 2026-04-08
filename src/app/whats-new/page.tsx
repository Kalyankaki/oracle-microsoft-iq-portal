"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import TagFilter from "@/components/TagFilter";
import Badge from "@/components/Badge";
import { news, newsCategories } from "@/data/news";
import { Calendar } from "lucide-react";

const categoryVariant: Record<string, "oracle" | "azure" | "green" | "purple"> = {
  "Product Update": "oracle",
  Community: "green",
  Event: "purple",
  "Blog Post": "azure",
};

export default function WhatsNewPage() {
  const [category, setCategory] = useState("All");

  const filtered = news.filter(
    (item) => category === "All" || item.category === category
  );

  return (
    <>
      <PageHeader
        title="What&apos;s New"
        description="The latest updates, announcements, and community news for Oracle Database on Azure."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <TagFilter
          tags={newsCategories}
          selected={category}
          onChange={setCategory}
        />

        {/* Timeline */}
        <div className="mt-8 space-y-4">
          {filtered.map((item) => {
            const Wrapper = item.link ? Link : "div";
            return (
              <Wrapper
                key={item.id}
                href={item.link || "#"}
                className="group flex gap-4 rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20 hover:bg-white/5"
              >
                {/* Date column */}
                <div className="hidden flex-shrink-0 text-right sm:block sm:w-24">
                  <div className="flex items-center gap-1 text-xs text-muted">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="text-xs text-muted">
                    {new Date(item.date).getFullYear()}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant={categoryVariant[item.category]}>
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted sm:hidden">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="mt-2 font-semibold text-white group-hover:text-azure-blue">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.summary}</p>
                  {item.link && (
                    <span className="mt-2 inline-block text-sm font-medium text-azure-blue transition-colors group-hover:text-white">
                      Read more →
                    </span>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted">No news items match the selected filter.</p>
          </div>
        )}
      </div>
    </>
  );
}

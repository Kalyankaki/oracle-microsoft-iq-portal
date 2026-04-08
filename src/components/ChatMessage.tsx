import ReactMarkdown from "react-markdown";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
          isUser ? "bg-azure-blue" : "bg-oracle-red/20"
        }`}
      >
        {isUser ? (
          <User className="h-4 w-4 text-white" />
        ) : (
          <Bot className="h-4 w-4 text-oracle-red" />
        )}
      </div>
      <div
        className={`max-w-[80%] rounded-xl px-4 py-3 ${
          isUser
            ? "bg-azure-blue text-white"
            : "border border-white/10 bg-surface text-white"
        }`}
      >
        {isUser ? (
          <p className="text-sm">{content}</p>
        ) : (
          <div className="prose prose-sm prose-invert max-w-none">
            <ReactMarkdown
              components={{
                code: ({ children, className }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-azure-blue">
                      {children}
                    </code>
                  ) : (
                    <pre className="overflow-x-auto rounded-lg bg-charcoal p-3">
                      <code className="font-mono text-xs">{children}</code>
                    </pre>
                  );
                },
                p: ({ children }) => (
                  <p className="mb-2 text-sm leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-2 list-disc pl-4 text-sm">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-2 list-decimal pl-4 text-sm">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="mb-1 text-sm text-muted">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-white">{children}</strong>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

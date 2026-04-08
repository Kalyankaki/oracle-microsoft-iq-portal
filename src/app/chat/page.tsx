"use client";

import { useState, useRef, useEffect } from "react";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { MessageSquare, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "How do I provision Autonomous Database on Azure?",
  "What are the HA/DR options for OracleDB@Azure?",
  "Compare Exadata Cloud vs Autonomous Database",
  "How does networking work with OracleDB@Azure?",
  "What security features are available?",
  "How do I migrate from on-premises Oracle to Azure?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (content: string) => {
    const userMessage: Message = { role: "user", content };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        const err = await res.json();
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: `Error: ${err.error || "Something went wrong. Please try again."}`,
          },
        ]);
        setIsLoading(false);
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) return;

      const decoder = new TextDecoder();
      let assistantContent = "";
      setMessages([...newMessages, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n").filter((l) => l.startsWith("data: "));

        for (const line of lines) {
          const data = line.slice(6);
          if (data === "[DONE]") break;
          try {
            const parsed = JSON.parse(data);
            assistantContent += parsed.text;
            setMessages([
              ...newMessages,
              { role: "assistant", content: assistantContent },
            ]);
          } catch {
            // skip malformed chunks
          }
        }
      }
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Sorry, I couldn't connect to the AI service. Please check your API configuration.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      {/* Chat messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-oracle-red/10">
              <MessageSquare className="h-8 w-8 text-oracle-red" />
            </div>
            <h1 className="mt-6 text-2xl font-bold text-white">
              Ask the AI
            </h1>
            <p className="mt-2 text-center text-muted">
              Get instant answers about Oracle Database on Azure. Powered by
              Claude.
            </p>

            <div className="mt-8 grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="rounded-lg border border-white/10 bg-surface px-4 py-3 text-left text-sm text-muted transition-colors hover:border-white/20 hover:text-white"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl space-y-4 px-4 py-6">
            {messages.map((msg, i) => (
              <ChatMessage key={i} role={msg.role} content={msg.content} />
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-oracle-red/20">
                  <Loader2 className="h-4 w-4 animate-spin text-oracle-red" />
                </div>
                <div className="rounded-xl border border-white/10 bg-surface px-4 py-3">
                  <p className="text-sm text-muted">Thinking...</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="border-t border-white/10 bg-charcoal p-4">
        <div className="mx-auto max-w-3xl">
          <ChatInput onSend={sendMessage} disabled={isLoading} />
          <p className="mt-2 text-center text-xs text-muted">
            AI responses may not always be accurate. Verify critical information
            with official Oracle and Microsoft documentation.
          </p>
        </div>
      </div>
    </div>
  );
}

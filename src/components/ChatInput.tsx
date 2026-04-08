"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about Oracle Database on Azure..."
        disabled={disabled}
        className="flex-1 rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder-muted transition-colors focus:border-azure-blue/50 focus:outline-none focus:ring-1 focus:ring-azure-blue/50 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="flex items-center gap-2 rounded-lg bg-oracle-red px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-oracle-red/90 disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

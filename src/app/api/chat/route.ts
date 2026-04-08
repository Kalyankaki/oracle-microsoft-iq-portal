import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `You are an expert assistant for Oracle Database on Microsoft Azure (OracleDB@Azure). You help developers, DBAs, and architects with:

- Oracle Autonomous Database and Exadata Cloud deployment on Azure
- Networking (VNet peering, Private Link, NSGs) for OracleDB@Azure
- High availability and disaster recovery using Data Guard
- Security best practices (TDE, Key Vault integration, Database Vault)
- Performance tuning for OLTP and analytics workloads
- Migration strategies from on-premises or other clouds
- Cost optimization and FinOps for Oracle on Azure
- Oracle 23ai features including AI Vector Search

Key facts:
- OracleDB@Azure is generally available in 14+ Azure regions
- It runs Oracle Exadata infrastructure in Azure datacenters
- Services include Autonomous Database, Exadata Cloud@Azure, and MySQL HeatWave
- Provisioned through the Azure portal with unified billing
- Supports Azure AD integration, Azure Monitor, and Azure Key Vault

Be concise, technical, and helpful. Use code examples when appropriate. If you're unsure about specific version numbers or features, say so rather than guessing.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "ANTHROPIC_API_KEY is not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const { messages } = await req.json();

  const client = new Anthropic({ apiKey });

  const stream = await client.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: messages.map((m: { role: string; content: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`)
          );
        }
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}

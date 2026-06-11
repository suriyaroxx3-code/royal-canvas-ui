import { useEffect, useRef, useState } from "react";
import { Sparkles, Send, User, RotateCcw } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm your Dvein SkillHub assistant. Ask me about your courses, debugging code, building a learning path, or getting ready for interviews and placements.",
};

const SUGGESTIONS = [
  "Resume Tips",
  "Suggest a learning path for data science",
  "How do I prep for a technical interview?",
  "What's my placement readiness status?",
];

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function generateAssistantReply(rawInput: string): string {
  const input = rawInput.toLowerCase();

  if (/\b(hi|hello|hey|sup|yo)\b/.test(input)) {
    return "Hello! What are you working on today — a course, a resume tip, or interview prep?";
  }

  if (/\b(bug|error|debug|exception|crash|stack trace|fix)\b/.test(input)) {
    return (
      "Let's debug it together. Share the error message and the relevant code snippet, and I'll " +
      "help you trace the cause. In the meantime, double-check imports/exports, types, and that " +
      "any IDs referenced in your config actually exist."
    );
  }

  if (/\b(learn|course|roadmap|path|study|skill)\b/.test(input)) {
    return (
      "Here's a quick roadmap: 1) pick one core track (e.g. Data Science, Full-Stack, or Cloud) " +
      "from the Courses tab, 2) finish the foundational modules first, 3) apply concepts in a small " +
      "project, then 4) take the related Assessment to validate your progress. Want me to suggest " +
      "courses for a specific track?"
    );
  }

  if (/\b(interview|placement|job|resume|cv|offer)\b/.test(input)) {
    return (
      "For interview prep: review your weakest topics from recent Assessments, practice 2-3 mock " +
      "problems a day, and keep your resume aligned with the skills you've completed. Check the " +
      "Placements tab for upcoming drives that match your profile."
    );
  }

  if (/\b(certificate|certification|certify)\b/.test(input)) {
    return (
      "You can find and download your earned certificates from the Certificates section. Complete " +
      "all required modules and pass the final assessment for a course to unlock its certificate."
    );
  }

  if (/\b(thank|thanks|thank you)\b/.test(input)) {
    return "You're welcome! Let me know if there's anything else you'd like help with.";
  }

  return (
    "Got it — I can help with that. Could you share a bit more detail (course name, error message, " +
    "or goal) so I can give you a more specific answer?"
  );
}

export function AIAssistant({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const scrollAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isThinking]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isThinking) return;

    const userMessage: ChatMessage = { id: createId(), role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsThinking(true);

    const reply = generateAssistantReply(trimmed);
    const delay = 450 + Math.min(reply.length * 8, 900);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: createId(), role: "assistant", content: reply }]);
      setIsThinking(false);
    }, delay);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  function handleReset() {
    setMessages([WELCOME_MESSAGE]);
    setInput("");
    setIsThinking(false);
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-4 py-4 text-left">
          <div className="flex items-center gap-2.5">
            <div className="grid size-8 place-items-center rounded-lg bg-brand-gradient text-white">
              <Sparkles className="size-4" />
            </div>
            <div className="min-w-0 flex-1">
              <SheetTitle className="font-display text-sm">AI Assistant</SheetTitle>
              <SheetDescription className="text-[11px]">
                Code help, learning paths, interview prep
              </SheetDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="size-8 shrink-0"
              aria-label="Reset conversation"
              onClick={handleReset}
            >
              <RotateCcw className="size-3.5" />
            </Button>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 px-4">
          <div className="flex flex-col gap-3 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start gap-2",
                  message.role === "user" && "flex-row-reverse",
                )}
              >
                <div
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-lg",
                    message.role === "assistant"
                      ? "bg-brand-gradient text-white"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {message.role === "assistant" ? (
                    <Sparkles className="size-3.5" />
                  ) : (
                    <User className="size-3.5" />
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[80%] rounded-xl px-3 py-2 text-sm leading-relaxed",
                    message.role === "assistant"
                      ? "bg-card border border-border text-foreground"
                      : "bg-foreground text-background",
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex items-start gap-2">
                <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-brand-gradient text-white">
                  <Sparkles className="size-3.5" />
                </div>
                <div className="flex items-center gap-1 rounded-xl border border-border bg-card px-3 py-2.5">
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
                </div>
              </div>
            )}
            <div ref={scrollAnchorRef} />
          </div>
        </ScrollArea>

        {messages.length <= 1 && (
          <div className="flex flex-wrap gap-1.5 border-t border-border px-4 py-3">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => sendMessage(suggestion)}
                className="rounded-full border border-border bg-card px-2.5 py-1 text-[11px] text-muted-foreground transition hover:border-electric/40 hover:text-foreground"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex items-end gap-2 border-t border-border p-3">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything…"
            rows={1}
            className="min-h-9 flex-1 resize-none text-sm"
          />
          <Button
            type="submit"
            size="icon"
            className="size-9 shrink-0 bg-foreground text-background hover:bg-foreground/90"
            disabled={!input.trim() || isThinking}
            aria-label="Send message"
          >
            <Send className="size-4" />
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}

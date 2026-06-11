import { createContext, useContext } from "react";

interface AssistantContextValue {
  openAssistant: () => void;
}

export const AssistantContext = createContext<AssistantContextValue | null>(null);

export function useAssistant() {
  const ctx = useContext(AssistantContext);
  if (!ctx) {
    throw new Error("useAssistant must be used within RoyalShell");
  }
  return ctx;
}

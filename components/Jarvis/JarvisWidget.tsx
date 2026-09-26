"use client";

import { useEffect, useState } from "react";

import JarvisPanel from "@/components/Hero/JarvisPanel/JarvisPanel";
import type { AICoreState } from "@/app/types/ai-core";

import {
  getJarvisAuthState,
  logoutOwner,
} from "@/lib/jarvis";

type JarvisWidgetProps = {
  onClose: () => void;
  onStateChange: (state: AICoreState) => void;
};

export default function JarvisWidget({
  onClose,
  onStateChange,
}: JarvisWidgetProps) {
  const [isOwner, setIsOwner] = useState(false);

  const [isLoggingOut, setIsLoggingOut] =
    useState(false);

  const [panelKey, setPanelKey] =
    useState(0);

  const [quickPrompt, setQuickPrompt] =
    useState<{
      id: number;
      message: string;
    } | null>(null);

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      try {
        const auth = await getJarvisAuthState();

        if (!mounted) {
          return;
        }

        setIsOwner(
          auth.authenticated &&
          auth.role === "owner"
        );
      } catch (error) {
        console.error(
          "JARVIS-X widget authentication check failed:",
          error
        );

        if (mounted) {
          setIsOwner(false);
        }
      }
    };

    checkAuth();

    return () => {
      mounted = false;
    };
  }, [panelKey]);

  const triggerQuickPrompt = (
    message: string
  ) => {
    setQuickPrompt({
      id: Date.now(),
      message,
    });
  };

  const handleLogout = async () => {
    if (isLoggingOut) {
      return;
    }

    try {
      setIsLoggingOut(true);

      await logoutOwner();

      setIsOwner(false);
      setQuickPrompt(null);
      setPanelKey((current) => current + 1);
    } catch (error) {
      console.error(
        "JARVIS-X owner logout failed:",
        error
      );
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-[60] w-[min(420px,calc(100vw-2rem))]">
      <div className="overflow-hidden rounded-2xl border border-accent/20 bg-[#08080c]/95 shadow-[0_20px_80px_rgba(0,0,0,0.55),0_0_50px_rgba(139,92,246,0.12)] backdrop-blur-2xl">

        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg text-accent-light">
                ✦
              </span>

              <p className="text-sm font-semibold tracking-wide text-text-primary">
                ASK JARVIS
              </p>
            </div>

            <p className="mt-1 text-xs text-text-muted">
              Your AI guide to Annu&apos;s work
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Ask JARVIS"
            className="rounded-lg px-2 py-1 text-lg text-text-muted transition hover:bg-white/5 hover:text-text-primary"
          >
            ×
          </button>
        </div>

        <div className="border-b border-white/10 px-4 py-4">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
            Try asking
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() =>
                triggerQuickPrompt(
                  "Tell me about Annu."
                )
              }
              disabled={isLoggingOut}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-text-secondary transition hover:border-accent/40 hover:bg-accent/10 hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              About Annu
            </button>

            <button
              type="button"
              onClick={() =>
                triggerQuickPrompt(
                  "Tell me about JARVIS-X."
                )
              }
              disabled={isLoggingOut}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-text-secondary transition hover:border-accent/40 hover:bg-accent/10 hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Tell me about JARVIS-X
            </button>

            <button
              type="button"
              onClick={() =>
                triggerQuickPrompt(
                  "What are Annu's skills?"
                )
              }
              disabled={isLoggingOut}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-text-secondary transition hover:border-accent/40 hover:bg-accent/10 hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              What are his skills?
            </button>

            <button
              type="button"
              onClick={() =>
                triggerQuickPrompt(
                  "Show me Annu's projects."
                )
              }
              disabled={isLoggingOut}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-text-secondary transition hover:border-accent/40 hover:bg-accent/10 hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Explore projects
            </button>
          </div>
        </div>

        <JarvisPanel
          key={panelKey}
          embedded
          quickPrompt={quickPrompt}
          onStateChange={onStateChange}
          onOwnerModeChange={setIsOwner}
          onClose={onClose}
        />

        {isOwner && (
          <div className="border-t border-white/10 px-4 py-3">
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-text-muted transition hover:border-red-400/30 hover:bg-red-400/5 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isLoggingOut
                ? "Logging out..."
                : "Logout Owner Mode"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

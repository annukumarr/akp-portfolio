"use client";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import type { AICoreState } from "@/app/types/ai-core";

import {
  askJarvis,
  getJarvisAuthState,
  loginOwner,
  logoutOwner,
} from "@/lib/jarvis";

import {
  executeJarvisAction,
} from "@/lib/jarvis-actions";


// ========================================================
// TYPES
// ========================================================

type JarvisPanelProps = {
  onClose?: () => void;
  onStateChange?: (state: AICoreState) => void;
};

type Message = {
  id: number;
  role: "user" | "jarvis";
  content: string;
};

type AuthState = {
  authenticated: boolean;
  role: "owner" | "user";
};


// ========================================================
// COMPONENT
// ========================================================

export default function JarvisPanel({
  onClose,
  onStateChange,
}: JarvisPanelProps) {

  // ======================================================
  // STATE
  // ======================================================

  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] =
    useState(false);

  const [isCheckingAuth, setIsCheckingAuth] =
    useState(true);

  const [isLoginOpen, setIsLoginOpen] =
    useState(false);

  const [password, setPassword] =
    useState("");

  const [loginError, setLoginError] =
    useState("");

  const [auth, setAuth] = useState<AuthState>({
    authenticated: false,
    role: "user",
  });


  // ======================================================
  // CONFIRMATION STATE
  // ======================================================

  const [confirmationRequired, setConfirmationRequired] =
    useState(false);


  // ======================================================
  // CHAT MESSAGES
  // ======================================================

  const [messages, setMessages] =
    useState<Message[]>([
      {
        id: 1,
        role: "jarvis",
        content:
          "Hello. I am JARVIS-X, the intelligence layer of Legacy. How can I help you?",
      },
    ]);


  // ======================================================
  // CHAT SCROLL REF
  // ======================================================

  const messagesContainerRef =
    useRef<HTMLDivElement>(null);


  // ======================================================
  // AUTO-SCROLL CHAT
  // ======================================================

  useEffect(() => {

    const container =
      messagesContainerRef.current;

    if (!container) {
      return;
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });

  }, [messages, isLoading]);


  // ========================================================
  // CHECK CURRENT AUTHENTICATION
  // ========================================================

  useEffect(() => {

    let mounted = true;

    const checkAuthentication =
      async () => {

        try {

          const state =
            await getJarvisAuthState();

          if (!mounted) {
            return;
          }

          setAuth(state);

          if (state.authenticated) {

            setMessages([
              {
                id: Date.now(),
                role: "jarvis",
                content:
                  "Welcome back, Boss. JARVIS-X is ready.",
              },
            ]);

          }

        } catch (error) {

          console.error(
            "JARVIS-X authentication check failed:",
            error
          );

        } finally {

          if (mounted) {
            setIsCheckingAuth(false);
          }

        }

      };

    checkAuthentication();

    return () => {
      mounted = false;
    };

  }, []);


  // ========================================================
  // OWNER LOGIN
  // ========================================================

  const handleOwnerLogin = async (
    event: FormEvent
  ) => {

    event.preventDefault();

    if (!password.trim() || isLoading) {
      return;
    }

    setLoginError("");
    setIsLoading(true);

    try {

      onStateChange?.("thinking");

      await loginOwner(password);

      setAuth({
        authenticated: true,
        role: "owner",
      });

      setPassword("");
      setIsLoginOpen(false);

      setMessages((current) => [
        ...current,
        {
          id: Date.now(),
          role: "jarvis",
          content:
            "Authentication successful. Welcome back, Boss.",
        },
      ]);

      onStateChange?.("speaking");

      await new Promise(
        (resolve) =>
          setTimeout(resolve, 700)
      );

      onStateChange?.("idle");

    } catch (error) {

      console.error(
        "JARVIS-X owner login failed:",
        error
      );

      setLoginError(
        "Owner authentication failed. Please check your password."
      );

      onStateChange?.("idle");

    } finally {

      setIsLoading(false);

    }

  };


  // ========================================================
  // OWNER LOGOUT
  // ========================================================

  const handleOwnerLogout = async () => {

    if (isLoading) {
      return;
    }

    try {

      setIsLoading(true);

      await logoutOwner();

      setAuth({
        authenticated: false,
        role: "user",
      });

      setConfirmationRequired(false);

      setMessages((current) => [
        ...current,
        {
          id: Date.now(),
          role: "jarvis",
          content:
            "Owner session ended. Visitor mode is now active.",
        },
      ]);

    } catch (error) {

      console.error(
        "JARVIS-X logout failed:",
        error
      );

    } finally {

      setIsLoading(false);

    }

  };


  // ========================================================
  // SEND MESSAGE
  // ========================================================

  const sendMessage = async (
    event: FormEvent
  ) => {

    event.preventDefault();

    const message = input.trim();

    if (!message || isLoading) {
      return;
    }

    await processMessage(message);

  };


  // ========================================================
  // PROCESS MESSAGE
  // ========================================================

  const processMessage = async (
    message: string
  ) => {

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setInput("");
    setIsLoading(true);

    try {

      // ==================================================
      // JARVIS IS LISTENING
      // ==================================================

      onStateChange?.("listening");

      await new Promise(
        (resolve) =>
          setTimeout(resolve, 300)
      );


      // ==================================================
      // ASK BACKEND
      // ==================================================

      onStateChange?.("thinking");

      const result =
        await askJarvis(message);


      // ==================================================
      // CONFIRMATION REQUIRED
      // ==================================================

      if (result.confirmation_required) {

        setConfirmationRequired(true);

        onStateChange?.("speaking");

        const jarvisMessage: Message = {
          id: Date.now() + 1,
          role: "jarvis",
          content: result.response,
        };

        setMessages((current) => [
          ...current,
          jarvisMessage,
        ]);

        await new Promise(
          (resolve) =>
            setTimeout(resolve, 500)
        );

        onStateChange?.("idle");

        setIsLoading(false);

        return;
      }


      // ==================================================
      // CONFIRMATION COMPLETED
      // ==================================================

      if (
        result.intent === "system_action" &&
        !result.confirmation_required
      ) {

        setConfirmationRequired(false);

      }


      // ==================================================
      // FRONTEND NAVIGATION ACTION
      // ==================================================

      if (
        result.action === "home" ||
        result.action === "journey" ||
        result.action === "projects" ||
        result.action === "contact"
      ) {

        const executed =
          executeJarvisAction(
            result.action
          );


        // ------------------------------------------------
        // ACTION SUCCESS
        // ------------------------------------------------

        if (executed) {

          const actionLabels: Record<
            "home" |
            "journey" |
            "projects" |
            "contact",
            string
          > = {

            home:
              auth.authenticated
                ? "Taking you to the home section, Boss."
                : "Taking you to the home section.",

            journey:
              auth.authenticated
                ? "Taking you to your journey, Boss."
                : "Taking you to the journey section.",

            projects:
              auth.authenticated
                ? "Opening your projects, Boss."
                : "Opening the projects section.",

            contact:
              auth.authenticated
                ? "Taking you to the contact section, Boss."
                : "Taking you to the contact section.",
          };


          onStateChange?.("speaking");


          const jarvisMessage: Message = {
            id: Date.now() + 1,
            role: "jarvis",
            content:
              actionLabels[result.action],
          };


          setMessages((current) => [
            ...current,
            jarvisMessage,
          ]);


          await new Promise(
            (resolve) =>
              setTimeout(resolve, 700)
          );


          onStateChange?.("idle");

          setIsLoading(false);

          return;
        }

      }


      // ==================================================
      // NORMAL JARVIS RESPONSE
      // ==================================================

      onStateChange?.("speaking");

      const jarvisMessage: Message = {
        id: Date.now() + 1,
        role: "jarvis",
        content: result.response,
      };

      setMessages((current) => [
        ...current,
        jarvisMessage,
      ]);


      await new Promise(
        (resolve) =>
          setTimeout(resolve, 700)
      );

      onStateChange?.("idle");

    } catch (error) {

      console.error(
        "JARVIS-X error:",
        error
      );

      setConfirmationRequired(false);

      onStateChange?.("speaking");

      const errorMessage: Message = {
        id: Date.now() + 1,
        role: "jarvis",
        content:
          "I am unable to connect to JARVIS-X right now. Please make sure the JARVIS-X API is online.",
      };

      setMessages((current) => [
        ...current,
        errorMessage,
      ]);


      await new Promise(
        (resolve) =>
          setTimeout(resolve, 700)
      );

      onStateChange?.("idle");

    } finally {

      setIsLoading(false);

    }

  };


  // ========================================================
  // CONFIRM ACTION
  // ========================================================

  const confirmAction = async () => {

    if (
      isLoading ||
      !confirmationRequired
    ) {
      return;
    }

    await processMessage("yes");

  };


  // ========================================================
  // CANCEL ACTION
  // ========================================================

  const cancelAction = async () => {

    if (
      isLoading ||
      !confirmationRequired
    ) {
      return;
    }

    await processMessage("no");

  };


  // ========================================================
  // RENDER
  // ========================================================

  return (

    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl">

      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

        <div>

          <div className="flex items-center gap-2">

            <p className="text-sm font-semibold text-text-primary">
              JARVIS-X
            </p>


            {auth.authenticated && (

              <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-accent-light">
                Owner
              </span>

            )}

          </div>


          <p className="text-xs text-text-muted">

            {isCheckingAuth
              ? "Checking authentication..."
              : auth.authenticated
                ? "Owner Mode • Intelligence Online"
                : "Visitor Mode • Intelligence Online"}

          </p>

        </div>


        <div className="flex items-center gap-2">

          {auth.authenticated && (

            <button
              type="button"
              onClick={handleOwnerLogout}
              disabled={isLoading}
              className="rounded-lg px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-text-muted transition hover:bg-white/5 hover:text-text-primary disabled:opacity-40"
            >
              Logout
            </button>

          )}


          {onClose && (

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-2 py-1 text-sm text-text-muted transition hover:bg-white/5 hover:text-text-primary"
              aria-label="Close JARVIS-X"
            >
              ×
            </button>

          )}

        </div>

      </div>


      {/* ==================================================
          OWNER LOGIN
      ================================================== */}

      {!auth.authenticated && isLoginOpen && (

        <div className="border-b border-white/10 p-5">

          <div className="mb-4">

            <p className="text-sm font-semibold text-text-primary">
              Owner Authentication
            </p>

            <p className="mt-1 text-xs leading-5 text-text-muted">
              Authenticate as the JARVIS-X owner to access
              owner-specific capabilities.
            </p>

          </div>


          <form
            onSubmit={handleOwnerLogin}
            className="space-y-3"
          >

            <input
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(
                  event.target.value
                )
              }
              placeholder="Owner password"
              autoComplete="current-password"
              disabled={isLoading}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-accent/40 disabled:opacity-50"
            />


            {loginError && (

              <p className="text-xs leading-5 text-red-400">
                {loginError}
              </p>

            )}


            <div className="flex gap-2">

              <button
                type="submit"
                disabled={
                  !password.trim() ||
                  isLoading
                }
                className="flex-1 rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-40"
              >

                {isLoading
                  ? "Authenticating..."
                  : "Authenticate"}

              </button>


              <button
                type="button"
                onClick={() => {
                  setIsLoginOpen(false);
                  setPassword("");
                  setLoginError("");
                }}
                disabled={isLoading}
                className="rounded-xl border border-white/10 px-4 py-2.5 text-sm text-text-muted transition hover:bg-white/5 hover:text-text-primary disabled:opacity-40"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      )}


      {/* ==================================================
          MESSAGES
      ================================================== */}

      <div
        ref={messagesContainerRef}
        className="max-h-80 min-h-48 space-y-4 overflow-y-auto p-5"
      >

        {messages.map((message) => (

          <div
            key={message.id}
            className={
              message.role === "user"
                ? "ml-8 rounded-xl border border-white/10 bg-white/5 p-3"
                : "mr-8 rounded-xl border border-accent/15 bg-accent/5 p-3"
            }
          >

            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">

              {message.role === "user"
                ? "You"
                : "JARVIS-X"}

            </p>


            <p className="text-sm leading-6 text-text-secondary">
              {message.content}
            </p>

          </div>

        ))}


        {/* ==================================================
            CONFIRMATION BUTTONS
        ================================================== */}

        {confirmationRequired && (

          <div className="mr-8 rounded-xl border border-accent/20 bg-accent/5 p-3">

            <p className="mb-3 text-xs font-medium text-text-primary">
              Confirm this action?
            </p>


            <div className="flex gap-2">

              <button
                type="button"
                onClick={confirmAction}
                disabled={isLoading}
                className="flex-1 rounded-lg bg-accent px-3 py-2 text-xs font-medium text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Confirm
              </button>


              <button
                type="button"
                onClick={cancelAction}
                disabled={isLoading}
                className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-text-muted transition hover:bg-white/5 hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                Cancel
              </button>

            </div>

          </div>

        )}


        {/* ==================================================
            LOADING
        ================================================== */}

        {isLoading && (

          <div className="mr-8 rounded-xl border border-accent/15 bg-accent/5 p-3">

            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
              JARVIS-X
            </p>

            <div className="flex items-center gap-1.5">

              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-light" />

              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-light [animation-delay:120ms]" />

              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-light [animation-delay:240ms]" />

            </div>

          </div>

        )}

      </div>


      {/* ==================================================
          OWNER ACCESS
      ================================================== */}

      {!auth.authenticated &&
        !isLoginOpen && (

          <div className="border-t border-white/10 px-4 pt-3">

            <button
              type="button"
              onClick={() =>
                setIsLoginOpen(true)
              }
              className="w-full rounded-xl border border-accent/20 bg-accent/5 px-4 py-2.5 text-xs font-medium text-accent-light transition hover:border-accent/40 hover:bg-accent/10"
            >
              Owner Access
            </button>

          </div>

        )}


      {/* ==================================================
          INPUT
      ================================================== */}

      <form
        onSubmit={sendMessage}
        className="border-t border-white/10 p-4"
      >

        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2 focus-within:border-accent/40">

          <input
            type="text"
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            placeholder={
              auth.authenticated
                ? "Ask JARVIS-X, Boss..."
                : "Ask JARVIS-X..."
            }
            disabled={
              isLoading ||
              isCheckingAuth
            }
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-text-primary outline-none placeholder:text-text-muted disabled:opacity-50"
          />


          <button
            type="submit"
            disabled={
              !input.trim() ||
              isLoading ||
              isCheckingAuth
            }
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-40"
          >

            {isLoading
              ? "..."
              : "Send"}

          </button>

        </div>

      </form>

    </div>
  );
}
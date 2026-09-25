"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getAnalyticsSummary,
  type AnalyticsSummary,
} from "@/lib/analytics";

import {
  getJarvisAuthState,
  loginOwner,
  logoutOwner,
} from "@/lib/jarvis";


// ==========================================================
// OWNER DASHBOARD
// ==========================================================

export default function OwnerPage() {
  const [
    authenticated,
    setAuthenticated,
  ] = useState(false);

  const [
    password,
    setPassword,
  ] = useState("");

  const [
    analytics,
    setAnalytics,
  ] = useState<AnalyticsSummary | null>(
    null
  );

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    loginLoading,
    setLoginLoading,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");


  // ========================================================
  // CHECK AUTH
  // ========================================================

  useEffect(() => {
    async function checkAuth() {
      try {
        const auth =
          await getJarvisAuthState();

        if (
          auth.authenticated &&
          auth.role === "owner"
        ) {
          setAuthenticated(true);

          await loadAnalytics();
        }
      } catch {
        setError(
          "Unable to check owner session."
        );
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);


  // ========================================================
  // LOAD ANALYTICS
  // ========================================================

  async function loadAnalytics() {
    try {
      setError("");

      const data =
        await getAnalyticsSummary();

      setAnalytics(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to load analytics."
      );
    }
  }


  // ========================================================
  // LOGIN
  // ========================================================

  async function handleLogin(
    event: React.FormEvent
  ) {
    event.preventDefault();

    if (!password.trim()) {
      setError(
        "Please enter the owner password."
      );

      return;
    }

    try {
      setLoginLoading(true);

      setError("");

      await loginOwner(password);

      setPassword("");

      setAuthenticated(true);

      await loadAnalytics();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Owner login failed."
      );
    } finally {
      setLoginLoading(false);
    }
  }


  // ========================================================
  // LOGOUT
  // ========================================================

  async function handleLogout() {
    try {
      await logoutOwner();

      setAuthenticated(false);

      setAnalytics(null);
    } catch {
      setError(
        "Unable to logout."
      );
    }
  }


  // ========================================================
  // LOADING
  // ========================================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-sm text-zinc-400">
          Checking owner access...
        </div>
      </main>
    );
  }


  // ========================================================
  // LOGIN SCREEN
  // ========================================================

  if (!authenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">

        <div className="w-full max-w-md">

          <div className="mb-8 text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-400">
              JARVIS-X
            </p>

            <h1 className="mt-4 text-4xl font-bold">
              Owner Access
            </h1>

            <p className="mt-3 text-zinc-500">
              Private Legacy intelligence dashboard
            </p>

          </div>


          <form
            onSubmit={handleLogin}
            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl"
          >

            <label
              htmlFor="owner-password"
              className="text-sm text-zinc-400"
            >
              Owner Password
            </label>

            <input
              id="owner-password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(
                  event.target.value
                )
              }
              placeholder="Enter owner password"
              autoComplete="current-password"
              className="
                mt-3
                w-full
                rounded-2xl
                border
                border-zinc-800
                bg-black
                px-4
                py-4
                text-white
                outline-none
                transition
                focus:border-violet-500
              "
            />


            {error && (
              <p className="mt-4 text-sm text-red-400">
                {error}
              </p>
            )}


            <button
              type="submit"
              disabled={loginLoading}
              className="
                mt-6
                w-full
                rounded-2xl
                bg-white
                px-5
                py-4
                font-semibold
                text-black
                transition
                hover:bg-violet-400
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loginLoading
                ? "Authenticating..."
                : "Enter Owner Dashboard"}
            </button>

          </form>

        </div>

      </main>
    );
  }


  // ========================================================
  // OWNER DASHBOARD
  // ========================================================

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">

      <div className="mx-auto max-w-7xl">


        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="mb-10 flex flex-col gap-5 border-b border-zinc-900 pb-8 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-400">
              JARVIS-X / PRIVATE
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              ANNU PAL
            </h1>

            <p className="mt-2 text-zinc-500">
              Owner Intelligence Dashboard
            </p>

          </div>


          <div className="flex gap-3">

            <button
              type="button"
              onClick={loadAnalytics}
              className="
                rounded-xl
                border
                border-zinc-800
                px-4
                py-2
                text-sm
                text-zinc-300
                transition
                hover:border-violet-500
                hover:text-white
              "
            >
              Refresh
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="
                rounded-xl
                border
                border-red-900/50
                px-4
                py-2
                text-sm
                text-red-400
                transition
                hover:bg-red-500/10
              "
            >
              Logout
            </button>

          </div>

        </header>


        {/* ==================================================
            ERROR
        ================================================== */}

        {error && (
          <div className="mb-6 rounded-2xl border border-red-900/50 bg-red-950/20 px-5 py-4 text-sm text-red-400">
            {error}
          </div>
        )}


        {/* ==================================================
            STATS
        ================================================== */}

        <section className="grid gap-5 md:grid-cols-3">

          <StatCard
            label="Total Visitors"
            value={
              analytics?.total_visitors ?? 0
            }
          />

          <StatCard
            label="Total Sessions"
            value={
              analytics?.total_sessions ?? 0
            }
          />

          <StatCard
            label="Total Events"
            value={
              analytics?.total_events ?? 0
            }
          />

        </section>


        {/* ==================================================
            EVENT BREAKDOWN
        ================================================== */}

        <section className="mt-8 rounded-3xl border border-zinc-900 bg-zinc-950 p-6">

          <div className="mb-6">

            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Activity
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Event Breakdown
            </h2>

          </div>


          {analytics &&
          Object.keys(
            analytics.event_breakdown
          ).length > 0 ? (

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {Object.entries(
                analytics.event_breakdown
              ).map(
                ([
                  event,
                  count,
                ]) => (
                  <div
                    key={event}
                    className="rounded-2xl border border-zinc-900 bg-black p-5"
                  >

                    <p className="text-sm text-zinc-500">
                      {event}
                    </p>

                    <p className="mt-2 text-3xl font-bold text-white">
                      {count}
                    </p>

                  </div>
                )
              )}

            </div>

          ) : (

            <p className="text-sm text-zinc-500">
              No visitor events recorded yet.
            </p>

          )}

        </section>


        {/* ==================================================
            RECENT SESSIONS
        ================================================== */}

        <section className="mt-8 rounded-3xl border border-zinc-900 bg-zinc-950 p-6">

          <div className="mb-6">

            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Visitors
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Recent Sessions
            </h2>

          </div>


          <div className="space-y-3">

            {analytics?.recent_sessions?.length ? (

              analytics.recent_sessions.map(
                (session) => (
                  <div
                    key={session.session_id}
                    className="
                      rounded-2xl
                      border
                      border-zinc-900
                      bg-black
                      p-5
                    "
                  >

                    <div className="grid gap-4 md:grid-cols-4">

                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-600">
                          Visitor
                        </p>

                        <p className="mt-1 break-all text-sm text-zinc-300">
                          {session.visitor_id}
                        </p>
                      </div>


                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-600">
                          Page
                        </p>

                        <p className="mt-1 text-sm text-zinc-300">
                          {session.page || "/"}
                        </p>
                      </div>


                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-600">
                          Referrer
                        </p>

                        <p className="mt-1 break-all text-sm text-zinc-400">
                          {session.referrer || "Direct"}
                        </p>
                      </div>


                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-600">
                          Last Seen
                        </p>

                        <p className="mt-1 text-sm text-zinc-400">
                          {session.last_seen}
                        </p>
                      </div>

                    </div>

                  </div>
                )
              )

            ) : (

              <p className="text-sm text-zinc-500">
                No sessions available.
              </p>

            )}

          </div>

        </section>

      </div>

    </main>
  );
}


// ==========================================================
// STAT CARD
// ==========================================================

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-6">

      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {label}
      </p>

      <p className="mt-4 text-5xl font-bold text-white">
        {value}
      </p>

    </div>
  );
}
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import {
  startVisitorSession,
  trackEvent,
} from "@/lib/analytics";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  const initialized = useRef(false);

  // ==========================================================
  // START VISITOR SESSION
  // ==========================================================

  useEffect(() => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    async function initializeAnalytics() {
      const session = await startVisitorSession(
        pathname || "/",
        document.referrer || ""
      );

      if (!session) {
        return;
      }

      await trackEvent("page_view", {
        page: pathname || "/",
      });
    }

    initializeAnalytics();
  }, [pathname]);

  // ==========================================================
  // TRACK PAGE CHANGES
  // ==========================================================

  useEffect(() => {
    if (!initialized.current) {
      return;
    }

    if (!pathname) {
      return;
    }

    trackEvent("page_view", {
      page: pathname,
    });
  }, [pathname]);

  return null;
}
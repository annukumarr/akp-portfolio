const JARVIS_API_URL =
  process.env.NEXT_PUBLIC_JARVIS_API_URL ||
  "http://127.0.0.1:8000";

// ==========================================================
// TYPES
// ==========================================================

export type VisitorSession = {
  visitor_id: string;
  session_id: string;
};

export type VisitorEventData = {
  [key: string]: unknown;
};

export type AnalyticsSummary = {
  total_visitors: number;
  total_sessions: number;
  total_events: number;

  event_breakdown: Record<string, number>;

  recent_sessions: Array<{
    visitor_id: string;
    session_id: string;
    first_seen: string;
    last_seen: string;
    page: string | null;
    referrer: string | null;
  }>;
};


// ==========================================================
// STORAGE KEYS
// ==========================================================

const VISITOR_ID_KEY = "legacy_visitor_id";
const SESSION_ID_KEY = "legacy_session_id";


// ==========================================================
// GET STORED VISITOR ID
// ==========================================================

function getStoredVisitorId(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem(
    VISITOR_ID_KEY
  );
}


// ==========================================================
// GET STORED SESSION ID
// ==========================================================

function getStoredSessionId(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem(
    SESSION_ID_KEY
  );
}


// ==========================================================
// STORE VISITOR SESSION
// ==========================================================

function storeVisitorSession(
  visitorId: string,
  sessionId: string
): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    VISITOR_ID_KEY,
    visitorId
  );

  localStorage.setItem(
    SESSION_ID_KEY,
    sessionId
  );
}


// ==========================================================
// CREATE VISITOR SESSION
// ==========================================================

export async function startVisitorSession(
  page: string = "/",
  referrer: string = ""
): Promise<VisitorSession | null> {
  try {
    const existingVisitorId =
      getStoredVisitorId();

    const response = await fetch(
      `${JARVIS_API_URL}/api/analytics/session`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          visitor_id:
            existingVisitorId,

          page,

          referrer,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to create visitor session"
      );
    }

    const data =
      await response.json();

    if (
      !data.success ||
      !data.visitor_id ||
      !data.session_id
    ) {
      throw new Error(
        "Invalid analytics session response"
      );
    }

    storeVisitorSession(
      data.visitor_id,
      data.session_id
    );

    return {
      visitor_id:
        data.visitor_id,

      session_id:
        data.session_id,
    };
  } catch (error) {
    console.error(
      "Legacy Analytics:",
      error
    );

    return null;
  }
}


// ==========================================================
// TRACK VISITOR EVENT
// ==========================================================

export async function trackEvent(
  eventType: string,
  eventData: VisitorEventData = {}
): Promise<boolean> {
  try {
    const visitorId =
      getStoredVisitorId();

    const sessionId =
      getStoredSessionId();

    if (
      !visitorId ||
      !sessionId
    ) {
      console.warn(
        "Legacy Analytics: No active visitor session."
      );

      return false;
    }

    const response = await fetch(
      `${JARVIS_API_URL}/api/analytics/event`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          visitor_id:
            visitorId,

          session_id:
            sessionId,

          event_type:
            eventType,

          event_data:
            eventData,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to record visitor event"
      );
    }

    const data =
      await response.json();

    return Boolean(
      data.success
    );
  } catch (error) {
    console.error(
      "Legacy Analytics Event:",
      error
    );

    return false;
  }
}


// ==========================================================
// GET CURRENT VISITOR SESSION
// ==========================================================

export function getVisitorSession():
  VisitorSession | null {
  const visitorId =
    getStoredVisitorId();

  const sessionId =
    getStoredSessionId();

  if (
    !visitorId ||
    !sessionId
  ) {
    return null;
  }

  return {
    visitor_id:
      visitorId,

    session_id:
      sessionId,
  };
}


// ==========================================================
// OWNER ANALYTICS
// ==========================================================

export async function getAnalyticsSummary():
  Promise<AnalyticsSummary> {
  const response = await fetch(
    `${JARVIS_API_URL}/api/analytics`,
    {
      method: "GET",

      credentials: "include",

      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Unable to load owner analytics"
    );
  }

  const data =
    await response.json();

  if (!data.success) {
    throw new Error(
      data.message ||
        "Owner authentication required."
    );
  }

  return data.analytics;
}
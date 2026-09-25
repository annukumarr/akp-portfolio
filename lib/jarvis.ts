const JARVIS_API_URL =
  process.env.NEXT_PUBLIC_JARVIS_API_URL ||
  "http://127.0.0.1:8000";


// ==========================================================
// TYPES
// ==========================================================

export type JarvisRole =
  | "owner"
  | "user";


export type JarvisAuthState = {
  authenticated: boolean;
  role: JarvisRole;
};


// ==========================================================
// CHAT RESPONSE
// ==========================================================

export type JarvisChatResponse = {
  success: boolean;

  response: string;

  source?: string;

  role?: JarvisRole;

  intent?: string;

  route?: string;

  action?: string | null;

  confirmation_required?: boolean;

  confirmed?: boolean;
};


// ==========================================================
// CHAT
// ==========================================================

export async function askJarvis(
  message: string
): Promise<JarvisChatResponse> {

  const response = await fetch(
    `${JARVIS_API_URL}/api/chat`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      credentials: "include",

      body: JSON.stringify({
        message,
      }),
    }
  );


  let data: JarvisChatResponse;


  try {

    data = await response.json();

  } catch {

    throw new Error(
      "JARVIS-X returned an invalid response."
    );

  }


  if (!response.ok) {

    throw new Error(
      data?.response ||
        "JARVIS-X API request failed."
    );

  }


  if (!data.success) {

    throw new Error(
      data.response ||
        "JARVIS-X returned an error."
    );

  }


  return data;
}


// ==========================================================
// OWNER LOGIN
// ==========================================================

export async function loginOwner(
  password: string
): Promise<JarvisAuthState> {

  const response = await fetch(
    `${JARVIS_API_URL}/api/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      credentials: "include",

      body: JSON.stringify({
        password,
      }),
    }
  );


  let data: any;


  try {

    data = await response.json();

  } catch {

    throw new Error(
      "Owner login returned an invalid response."
    );

  }


  if (
    !response.ok ||
    !data.success
  ) {

    throw new Error(
      data.detail ||
        data.message ||
        "Owner login failed."
    );

  }


  return {
    authenticated: true,
    role: "owner",
  };
}


// ==========================================================
// CURRENT AUTH STATE
// ==========================================================

export async function getJarvisAuthState(): Promise<JarvisAuthState> {

  const response = await fetch(
    `${JARVIS_API_URL}/api/auth/me`,
    {
      method: "GET",

      credentials: "include",
    }
  );


  if (!response.ok) {

    throw new Error(
      "Unable to check JARVIS-X authentication."
    );

  }


  const data =
    await response.json();


  return {
    authenticated: Boolean(
      data.authenticated
    ),

    role:
      data.role === "owner"
        ? "owner"
        : "user",
  };
}


// ==========================================================
// OWNER LOGOUT
// ==========================================================

export async function logoutOwner(): Promise<void> {

  const response = await fetch(
    `${JARVIS_API_URL}/api/auth/logout`,
    {
      method: "POST",

      credentials: "include",
    }
  );


  if (!response.ok) {

    throw new Error(
      "JARVIS-X logout failed."
    );

  }
}
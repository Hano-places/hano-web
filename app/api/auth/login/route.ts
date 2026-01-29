import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { ApiLoginResponse } from "@/lib/auth-types";
import type { AuthUser } from "@/contexts/auth-context";

export async function POST(req: Request) {
  try {
    const { email, password } = (await req.json()) as { email?: string; password?: string };

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const upstream = await fetch("https://hanoplaces.fly.dev/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = (await upstream.json().catch(() => null)) as ApiLoginResponse | { message?: string } | null;

    if (!upstream.ok || !data || !("accessToken" in data) || !("refreshToken" in data) || !("user" in data)) {
      return NextResponse.json(
        { error: (data as any)?.message || "Authentication failed" },
        { status: upstream.status || 401 }
      );
    }

    const user: AuthUser = {
      id: data.user.id,
      name: data.user.name,
      email: data.user.email,
      avatarUrl: data.user.image ?? undefined,
      isSuperAdmin: data.user.isSuperAdmin,
    };

    const cookieStore = await cookies();
    const isProd = process.env.NODE_ENV === "production";

    cookieStore.set("hano_admin_access_token", data.accessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: isProd,
      path: "/",
      // Access token is short-lived; keep cookie modest.
      maxAge: 60 * 60, // 1 hour
    });

    cookieStore.set("hano_admin_refresh_token", data.refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: isProd,
      path: "/",
      // Refresh token tends to be long-lived; keep 30 days.
      maxAge: 30 * 24 * 60 * 60,
    });

    // Store minimal user object in an httpOnly cookie so the client reads it via /api/auth/session.
    cookieStore.set("hano_admin_user", encodeURIComponent(JSON.stringify(user)), {
      httpOnly: true,
      sameSite: "lax",
      secure: isProd,
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });

    return NextResponse.json({ user }, { status: 200 });
  } catch (e) {
    console.error("Login route error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}


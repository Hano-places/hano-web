import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { AuthUser } from "@/contexts/auth-context";

export async function GET() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("hano_admin_user")?.value;
  const accessToken = cookieStore.get("hano_admin_access_token")?.value;

  if (!userCookie || !accessToken) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  try {
    const user = JSON.parse(decodeURIComponent(userCookie)) as AuthUser;
    return NextResponse.json({ user }, { status: 200 });
  } catch {
    return NextResponse.json({ user: null }, { status: 200 });
  }
}


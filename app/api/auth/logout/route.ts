import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();

  cookieStore.set("hano_admin_access_token", "", { httpOnly: true, path: "/", maxAge: 0 });
  cookieStore.set("hano_admin_refresh_token", "", { httpOnly: true, path: "/", maxAge: 0 });
  cookieStore.set("hano_admin_user", "", { httpOnly: true, path: "/", maxAge: 0 });

  return NextResponse.json({ ok: true }, { status: 200 });
}


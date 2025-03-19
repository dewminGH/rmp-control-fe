import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const SSC = await cookies();
  if (!SSC.get("accessToken")) {
    return NextResponse.redirect(new URL("/core/login", request.url));
  }
}

export const config = {
  matcher: "/console/:path*",
};

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/middleware";
import { checkUser } from "./lib/auth";

export async function middleware(request: NextRequest) {
  // update user's auth session
  const user = checkUser();
  if (user === null) {
    return NextResponse.redirect(new URL("/bad", request.url)); // middleware no work! I skip for now!
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard",
};

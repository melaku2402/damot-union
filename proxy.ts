import { NextResponse, NextRequest } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.next();
}

// Provide a `proxy` default export for compatibility.
export default function proxy(request: NextRequest) {
  return GET(request);
}

// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log(request.url); // ✅ request is passed here
  return NextResponse.next(); // allow the request to continue
}

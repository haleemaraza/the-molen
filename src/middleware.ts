import { NextRequest, NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoutes = createRouteMatcher([
  '/',
  '/female',
  '/male',
  '/products(.*)'
]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) {
    auth().protect(); 
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)','/', '/(api|trpc)(.*)'],
};

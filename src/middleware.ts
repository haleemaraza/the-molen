// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// // Create a route matcher for the protected routes
// const protectedRoutes = createRouteMatcher([
//   '/',
//   '/studio',
//   '/female',
//   '/male',
//   '/products(.*)'
// ]);

// // Define the middleware
// const middleware = clerkMiddleware((auth, req) => {
//   if (protectedRoutes(req)) {
//     auth().protect();
//   }
// });

// export default middleware;

// // Configure the middleware to match specific routes
// export const config = {
//   matcher: [
//     '/((?!.*\\..*|_next).*)',
//     '/',
//     '/(api|trpc)(.*)',
//     '/studio/:path*' // Ensure /studio path is included
//   ],
// };


// middleware.ts
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
}
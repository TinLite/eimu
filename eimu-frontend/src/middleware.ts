// export default NextAuth(authConfig).auth;
export { default } from 'next-auth/middleware'

// About the placement of this file: https://stackoverflow.com/a/74191480/17131337
export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: [
        // '/((?!api|_next/static|_next/image|.*\\.png$).*)',
        '/user/:path*'
    ],
};

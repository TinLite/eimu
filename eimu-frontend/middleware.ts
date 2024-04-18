// export default NextAuth(authConfig).auth;
export { default } from 'next-auth/middleware'

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.png$).*)',
        '/user*'
    ],
};

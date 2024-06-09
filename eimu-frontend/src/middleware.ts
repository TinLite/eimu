// export default NextAuth(authConfig).auth;
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { UserDetail } from './app/model/UserModels';
import { getUserDetail } from './app/repositories/UserRepository';

export default withAuth(
    function middleware(req, res) { // https://next-auth.js.org/configuration/nextjs#wrap-middleware
        const id = req.nextauth.token?.sub
        if (id) {
            var user : UserDetail | undefined;
            // https://nextjs.org/docs/app/building-your-application/routing/middleware#waituntil-and-nextfetchevent
            res.waitUntil(getUserDetail(id).then(v => {
                user = v;
            }))
            if (user?.role !== 'admin' && req.url.startsWith('/staff')) {
                return NextResponse.redirect(
                    new URL('/', req.url) // https://nextjs.org/docs/messages/middleware-relative-urls
                )
            }
        }
    }
)

// About the placement of this file: https://stackoverflow.com/a/74191480/17131337
export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: [
        // '/((?!api|_next/static|_next/image|.*\\.png$).*)',
        '/user/:path*',
        '/staff/:path*',
    ],
};

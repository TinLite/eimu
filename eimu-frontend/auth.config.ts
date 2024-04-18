import { getUserDetail, getUserLoginDetail } from '@/app/repositories/UserRepository';
import type { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { z } from 'zod';

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/login',
    },
    session: {
        maxAge: 3 * 24 * 60 * 60
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ username: z.string().min(4), password: z.string().min(8) })
                    .safeParse(credentials);
                if (parsedCredentials.success) {
                    console.log(parsedCredentials.data)
                    const { username, password } = parsedCredentials.data;
                    var data = await getUserLoginDetail(username);
                    console.log("Data: " + data)
                    if (!data) return null;
                    const isMatch = await bcrypt.compare(password, data.hashedPassword);
                    console.log("isMatch: " + isMatch )
                    if (isMatch) return { id: data.id };
                }
                console.log("We're here")
                return null;
            },
            credentials: {
                username: { type: "text" },
                password: { type: "text" }
            }
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            if (token && token.sub) {
                var u = await getUserDetail(token.sub);
                session.user = {
                    name: u?.name,
                    email: token.sub,
                }
            }
            return session;
        },
    }
}
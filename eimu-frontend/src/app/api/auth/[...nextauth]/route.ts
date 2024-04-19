import NextAuth from "next-auth"
import { authOptions } from "@/../auth.config";

const handler = NextAuth({
    ...authOptions,
    // https://stackoverflow.com/a/71429535/17131337
    secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST }
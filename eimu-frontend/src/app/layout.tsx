import "@/app/globals.css";

export const metadata = {
    title: {
        template: '%s | Project Eimu',
        default: 'Project Eimu'
    },
    description: '',
}

// import { NextAuthProvider } from "next-auth/";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {children}
        </html>
    );
}

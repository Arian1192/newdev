import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { passwordToSalt } from "@/app/_utils/passwordToSalt"
import { PrismaClient } from "@prisma/client";
import { RequestInternal, Awaitable, User } from "next-auth";



interface IauthOptions {
    providers: any[],
    session: any,
    secret: string,
    debug: boolean,
    pages: {
        singUp: string,
        signIn: string,
        signOut: string,
        error: string,
    }
}


export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        }),
        CredentialProvider({
            name: "credentials",
            credentials: {
                name: { label: "Name", type: "text", placeholder: "John Doe" },
                email: { label: "Email", type: "email", placeholder: "johnDoe@ejemplo.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
    pages: {
        singUp: "/auth/sign-up",
        signIn: "/auth/sign-in",
        signOut: "/auth/sign-out",
        error: "/auth/error",
    }
}

export const handler = NextAuth(authOptions as IauthOptions)

export { handler as GET, handler as POST }
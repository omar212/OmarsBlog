import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./connect"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
      ],
}
import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        const categories = await prisma.Category.findMany()

        return new NextResponse(
            JSON.stringify(categories, { status: 200 })
        )

    } catch (error) {
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong. Please try again later." }, { status: 500 })
        )
    }
}
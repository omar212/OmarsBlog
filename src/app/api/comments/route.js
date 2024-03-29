import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    console.log({ searchParams })

    const postSlug = searchParams.get("postSlug");

    console.log("postSlug from route.js comments ", postSlug)

    try {
        const comments = await prisma.Comments.findMany({
            where: { 
                ...(postSlug && { postSlug })
            },
            include: {
                user: true,
            },
        });
        
        return new NextResponse(JSON.stringify(comments, { status: 200 }));
    } catch (error) {
        console.log(error);
        return new NextResponse(
        JSON.stringify({ message: "Something went wrong. Please try again later." }, { status: 500 })
        );
    }
}

// CREATE A NEW COMMENT
export const POST = async (req) => {
    
    const session = await getAuthSession();

    console.log("LOOK HERE: ", session)
    
    // if no session we are not allowed to create a new comment
    if(!session) {
        return new NextResponse(
            JSON.stringify({ message: "You are not allowed to create a new comment." }, { status: 401 })
        )
    }
    
    try {
        const body = await req.json();

        console.log("body from route.js comments ", body)

        const comment = await prisma.Comments.create({
            // grabbing user from backend
            data: {...body, userEmail: session.user.email}
        })
        
        return new NextResponse(JSON.stringify(comment, { status: 200 }));
    } catch (error) {
        console.log(error);
        return new NextResponse(
        JSON.stringify({ message: "Something went wrong. Please try again later." }, { status: 500 })
        );
    }
}
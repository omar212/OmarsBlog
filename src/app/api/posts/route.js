import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async (req) => {

    const { searchParams } = new URL(req.url)

    const page = searchParams.get("page")

    const cat = searchParams.get("cat")

    const POST_PER_PAGE = 3;

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat })
        }
    }

    try {

        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where : query.where })
        ])

        return new NextResponse(
            JSON.stringify( {posts, count, postsPerPage: POST_PER_PAGE}, { status: 200 })
        )

    } catch (error) {
        console.log(error)
        return new NextResponse( 
            JSON.stringify({ message: "Something went wrong. Please try again later." }, { status: 500 })
        )
    }
}



// CREATE A NEW POST
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

        const post = await prisma.Post.create({
            // grabbing user from backend
            data: {...body, userEmail: session.user.email}
        })
        
        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (error) {
        console.log(error);
        return new NextResponse(
        JSON.stringify({ message: "Something went wrong. Please try again later." }, { status: 500 })
        );
    }
}
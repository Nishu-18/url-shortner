import prisma from "@/lib/db";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    console.log("Request Received");
    const {url}=await req.json()
    console.log(typeof(url));
    
    const shortCode=nanoid(8)
    

    const res=await prisma.url.create({
        data:{
            originalUrl:url,
            shortCode
        }
    })


    
    
        
     return   NextResponse.json({"data":res.shortCode})

        // Validate input
        
}

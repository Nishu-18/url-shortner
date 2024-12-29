import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
   const urls= await prisma.url.findMany({
        orderBy:{
            cretaedAt:'desc'
        },
        take:5
    })
  return  NextResponse.json({urls})
}
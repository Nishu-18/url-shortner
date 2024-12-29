import prisma from "@/lib/db"
import { redirect } from "next/navigation"

interface RedirectPageProps{
    params:{shortCode:string}
}
export default async function RedirectPage({params}:RedirectPageProps){
    const {shortCode}=await params
    const url =await prisma.url.findUnique({
        where:{
            shortCode:shortCode
        }
    })
    if(!url){
        return <div>
            404 not found
        </div>
    }
    await prisma.url.update({
        data:{
            visits:{increment:1}
        },
        where:{
            id:url.id
        }
    })
    
    redirect(url?.originalUrl!)
    
    
}
"use client"
import { Check, CopyIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
type Url={
    id:string,
    originalUrl:string,
    shortCode:string,
    visits:number
}

export default function UrlList(){
    const [url,setUrl]=useState<Url[]>([])
    const [copied,setCopied]=useState(false)
    const [copiedUrl,setCopiedUrl]=useState("")
    const [isLoading,setLoading]=useState(false)
    const copyUrl=(code:string)=>{
        const fullUrl=`${shortenUrl(code)}`
        navigator.clipboard.writeText(fullUrl).then(()=>{
                setCopied(true)
                setCopiedUrl(code)
                setTimeout(()=>{
                    setCopied(false)
                    setCopiedUrl('')
                },3000)
        })

    }
    const shortenUrl=(code:string)=>{
           return `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`
    }
   
    console.log(url);
    
   async function getData(){
        setLoading(true)
      const res=  await axios.get("/api/urls")
      const out=res.data.urls

        setUrl(out)
        setLoading(false)
    }
    useEffect(()=>{
        getData()
    },[])

    if(isLoading){
        return (
            <div className="justify-between items-center ">
                <h2 className="text-2xl font-bold mb-2 ">Recent URLs</h2>
        <ul className="ml-[120px] space-y-2 max-w-sm animate-pulse" role="status">
            {url.map((item)=>(
                <li key={item.id} className=" flex items-center gap-2 justify-between  rounded-md  text-card-foreground border p-3">
                    
                    <div className="h-2 bg-gray-700 rounded-full dark:bg-gray-900 max-w-[360px] mb-2.5"></div>
                <div className="flex justify-between items-center">
                <div className="h-2 bg-gray-700 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <span className="flex items-center text-sm text-gray-500">
                <div className="h-2 bg-gray-700 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                </span>
                        
                    </div>
               
                
            </li>
                
            ))}
            
        </ul>

            </div>

        )
    }
    return <div>
        <h2 className="text-2xl font-bold mb-2 ">Recent URLs</h2>
        <ul className="space-y-2 " >
            {url.map((item)=>(
                <li key={item.id} className=" flex items-center gap-2 justify-between bg-card rounded-md  text-card-foreground border p-3">
                    
                <Link target="_blank" className="text-blue-500" href={`/${item.shortCode}`}>{shortenUrl(item.shortCode)}</Link>
                <div className="flex justify-between items-center">
                <Button variant="ghost" className="text-muted-foreground hover:bg-muted" onClick={()=>copyUrl(item.shortCode)}>
                    {copied && copiedUrl==item.shortCode?(<Check className="w-4 h-4"></Check>):(<CopyIcon className="w-4 h-4"></CopyIcon>)}
                    <span>Copy Url</span>
                </Button>
                <span className="flex items-center text-sm text-gray-500">
                <EyeIcon className="h-4 w-4"></EyeIcon>
                   {item.visits}
                </span>
                        
                    </div>
               
                
            </li>
                
            ))}
            
        </ul>
    </div>
}




{/* <div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div> */}


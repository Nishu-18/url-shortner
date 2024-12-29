"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios";
import { error } from "console";

export default  function(){
    const [url,setUrl]=useState("")
    const [isLoading,setLoading]=useState(false)
     async function  handleSubmit(e:React.FormEvent){
       // e.preventDefault()
       setLoading(true)
    
        try {
            // const res=await axios.post("/api/shortenUrl",{
            //     url:url
            // })
            console.log(url);
            await axios.post("/api/shortenUrl",{
                url
            })
            
            setUrl('')
        } catch (e) {
            console.error("Error shortening URLs:",e)
            
        }finally{
            setLoading(false)

        }
        
    }
    return <>
       <form className="mb-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
            <Input onChange={(e)=>{
                setUrl(e.target.value)
            }} className="h-12" type="url" placeholder="Enter URL to shorten" required/>
            <Button disabled={isLoading} variant={"secondary"}  className="w-full p-2  bg-slate-600 rounded-md" type="submit">{isLoading?"Shortening...":'Shorten Url'}</Button>
        </div>
        </form> 
    </>
}
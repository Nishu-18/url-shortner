"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function(){
    const [url,setUrl]=useState("")
    function handleSubmit(e:React.FormEvent){
        e.preventDefault()
    
        console.log(url);
        
    }
    return <>
       <form className="mb-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
            <Input onChange={(e)=>{
                setUrl(e.target.value)
            }} className="h-12" type="url" placeholder="Enter URL to shorten" required/>
            <Button  className="w-full p-2 " type="submit">Shorten Url</Button>
        </div>
        </form> 
    </>
}
import { CopyIcon, EyeIcon, Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function(){
    return <div>
        <h2 className="text-2xl font-bold mb-2 ">Recent URLs</h2>
        <ul className="space-y-2">
            <li className=" flex items-center gap-2 justify-between">
                <Link target="_blank" className="text-blue-500" href={"https://www.youtube.com/watch?v=mr9vOla2AMc"}>https://www.youtube.com/watch?v=mr9vOla2AMc</Link>
                <Button variant="ghost" className="text-muted-foreground hover:bg-muted">
                    <CopyIcon className="w-4 h-4"></CopyIcon>
                    <span>Copy Url</span>
                </Button>
                <span className="flex items-center text-sm text-gray-500">
                <EyeIcon className="h-4 w-4"></EyeIcon>
                    100 views
                </span>
                
            </li>
        </ul>
    </div>
}
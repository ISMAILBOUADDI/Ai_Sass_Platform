"use client";

import { LucideIcon } from "lucide-react"
import  Link  from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
export interface SidbarItemsProps {
    data: ItemProps[];
}
export interface ItemProps {
    label: string,
    icon: LucideIcon,
    color?: string,
    href: string,

}
const SidbarItems = ({data}: SidbarItemsProps) => {
    const pathname = usePathname()
    return ( 
    <>
     {data.map((item)=>(
                    <Link 
                    href={item.href}
                    key={item.href}
                    className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname === item.href ? "text-white bg-white/10" : "text-zinc-400"
                    )}
                    >
                        <div className="flex items-center flex-1">
                            <item.icon className={cn("h-5 w-5 mr-3", item.color)}/>
                                {item.label}
                        </div>
                    </Link>
        ))}
    </>
     );
}
 
export default SidbarItems;
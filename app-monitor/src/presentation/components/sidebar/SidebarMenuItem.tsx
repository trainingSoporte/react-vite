"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RouteImplements } from "@/interfaces/route.implements";

// TODO
//* Make Styles


export const SidebarMenuItem = ({ path, icon, title,description,iconReact }: RouteImplements) => {

  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={
        (path === pathname)
          ? 'flex justify-center items-center bg-zinc-400 shadow-sm shadow-red-200 rounded-md p-2 transition-colors'
          : 'flex justify-center items-center bg-zinc-300 shadow-sm shadow-zinc-400 hover:bg-red-300 rounded-md p-2 transition-colors'
      }
    >
      {/* <i className={`${icon} text-sm p-1 pr-2 text-white`} ></i> */}
      <div className="text-sm p-1 pr-2 text-white" >{iconReact}</div>      
      <div className="flex flex-col flex-grow">
        <span className="text-white text-sm font-semibold">
          {title}
        </span>
      </div>
    </Link>
  )
}
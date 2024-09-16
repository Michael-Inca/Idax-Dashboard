import Image from "next/image"
import {SiteAccess, LogOut} from "./buttons"

export default function Header(){
    return(
        <>
            <header className="flex h-14 justify-between items-center bg-neutral-300">
                <div className="w-1/3"></div>
                <div className="flex w-1/3 max-h-8 justify-center">
                    <Image 
                        src= "https://nextjs.org/icons/next.svg"
                        width={288}
                        height={33}
                        alt = "Company's logo" 
                        className="max-h-8">    
                    </Image>
                </div>
                <div className="flex w-1/3 justify-end align-center">
                    <SiteAccess />
                    <LogOut />
                </div>
            </header>
        </>
    )
}
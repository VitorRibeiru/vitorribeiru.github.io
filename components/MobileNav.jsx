"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci'
import { useState } from 'react';


const links = [
    {
        name: "Início",
        path: "/",
    },
    {
        name: "Serviços",
        path: "/services",
    },
    {
        name: "Projetos",
        path: "/work",
    },
    {
        name: "Feedback",
        path: "/feedback",
    },
    {
        name: "Contato",
        path: "/contact",
    },
];


 const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
  return <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className='text-[32px] text-accent' />
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-8 mb-24 text-center text-2xl">
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Vitor<span className='text-accent'>.</span></h1>
            </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index)=> {
                return (
                 <Link 
                    href={link.path} 
                    key={index} 
                    onClick={() => setOpen(false)}
                    className={`${
                        link.path === pathname &&
                        "text-accent border-b-2 border-accent"
                    } text-xl capitalize hover:text-accent transition-all`}
                 >
                {link.name}    
                 </Link>
              ); 
            })}
        </nav>
    </SheetContent>
  </Sheet>
}

export default MobileNav

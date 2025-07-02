"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

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
        path: "/projects",
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


const Nav = () => {
    const pathname = usePathname();
    console.log(pathname)
  return(
    <nav className="flex gap-8">
        {links.map((links, index)=> {
            return <Link href={links.path} key={index} className={`${
                 links.path === pathname  && "text-accent border-b-2 border-accent"
                 } capitalize font-medium hover:text-accent transition-all`}>
                {links.name}
            </Link>
        })}
    </nav>
  );
};

export default Nav

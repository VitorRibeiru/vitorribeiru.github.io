"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// components

import Social from "@/components/ui/Social";
import  Jobs  from "@/components/ui/Jobs";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";


export default function Home() {
  return (
    <section className="h-full">
       <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">  
            <Jobs />   

            <h1 className="h1 mb-4">
              Olá!Sou <br /> <span className="text-accent">Vitor Ribeiro</span>
            </h1> 
              
            <p className="max-w-[550px] mb-9 text-white/80">
            Amo a tecnologia e as coisas que ela nos permite fazer.
            Apaixonado por jogos e café! Determinado a contribuir positivamente para o mundo!</p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">              
            <a href="./public/assets/cv-vitor-ribeiro.pdf" download>
            <Button 
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 cursor-pointer"
            >
              
              <span>Download CV</span>

              <FiDownload className="text-xl" />

            </Button>
            </a>
            

            <div className="mb-8 xl:mb-0">
            < Social 
            containerStyles="flex gap-6" 
            iconStyles="w-9 h-9 border border-accent
            rounded-full flex justify-center items-center 
            text-accent text-base hover:bg-accent 
            hover:text-primary hover:transition-all 
            duration-500" 
            />

            </div>
          </div> 
          </div>                        
          { /* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />             
          </div> 
        </div>
       </div>
       <Stats />
    </section>
  );
}
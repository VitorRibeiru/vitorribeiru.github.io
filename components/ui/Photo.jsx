"use client";

import { delay, motion } from "framer-motion";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-1/2 h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn"},
          }}
          
        >
          {/* image */}
            <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn"},
          }}
           className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
             <Image
                src="./assets/photo.png"
                priority
                quality={100}
                fill
                alt=""
                className="object-contain"
            />
            </motion.div>

             {/*circle*/} 
           <motion.svg 
            className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Conteúdo do SVG vai aqui */}           
            <motion.circle 
              className="circle-animation"
              cx="253" 
              cy="253" 
              r="250" 
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }} 
            />

          </motion.svg>
        </motion.div>
    </div>
  );
}

export default Photo
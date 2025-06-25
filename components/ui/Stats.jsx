"use client";

import CountUp from "react-countup";

const stats = [
    {   text1:"",
        num: 4,
        text: "Anos de Experiência",
    },
    {   text1:"",
        num: 30,
        text: "Projectos Desenvolvidos",
    },
    {   
        text1:"",
        num: 70,
        text: "Problemas Resolvidos",
    },
    {   text1:"+",
        num: 1,
        text: "Milhão R$/ano Digital Saving",
    },
   
];

const Stats = () => {
    return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div className="flex-1 flex gap-4 items-center justify-center 
                        xl:justify-start" 
                        key={index}><div className="text-4xl xl:text-6xl font-extrabold">{item.text1}</div>
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className={`${
                                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                            } leading-snug text-white/80`}>{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section> 
  );
};

export default Stats
"use client";

import { motion } from "framer-motion"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "aplication",
        icon: (<FontAwesomeIcon icon={faInfoCircle} className="text-white text-lg mt-0.5" />),
        icondescription: (
                <p className="relative text-[7px] mt-0.5">
                     As imagens reais do projeto não podem ser exibidas devido às diretrizes de privacidade e confidencialidade exigidas pelo cliente, conforme as políticas LGP.
                </p>
                ),
        title: "RELEASE FUNCTION",
        description: (<>Aplicação desenvolvida com Power Apps e base de dados no SharePoint, que inovou o processo de controle, bloqueio e liberação de produtos da usina, trazendo mais segurança, agilidade, rastreabilidade e padronização. A solução permite liberação diretamente via computadores, smartphones e tablets, com registros em tempo real prontos para análise via Power BI. Com isso, aumentou-se a eficiência operacional, reduziu-se retrabalho e garantiu-se conformidade com os padrões de qualidade. O impacto foi tão positivo que <strong className="text-white"> a aplicação foi reconhecida mundialmente pela Michelin, tornando-se benchmark em todas as usinas de Reforços Metálicos da empresa.</strong></>), 
        stack: [{ name: "PowerApps" }, { name: "Power BI" },{ name: "Sharepoint" }],
        imagem: "/assets/work/releasefunction.jpg",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "application/analysis",
        title: "FIRETRACK",
        description:
            "Aplicativo para gestão de equipamentos de incêndio com Microsoft Power Apps e Power BI, focado em inspeções, controle e análise em tempo real. A solução permite o cadastro e checklist digital dos equipamentos, registro de não conformidades, além de dashboards interativos para tomada de decisão. Todos os dados são armazenados em banco seguro e estruturado, garantindo segurança, rastreabilidade e alta disponibilidade da informação, substituindo processos manuais por uma gestão digital, eficiente e em conformidade com as normas de segurança.",
        stack: [{ name: "PowerApps" }, { name: "Power BI" },{ name: "Sharepoint" }],
        imagem: "/assets/work/firetrack.png",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "Landing Page",
        title: "UTI DO CELULAR",
        description:
            "Landing page responsiva desenvolvida com HTML, CSS e JavaScript, voltada para serviços de conserto de celulares e venda de acessórios. O layout é moderno, limpo e adaptável a dispositivos móveis. A página conta com seções como serviços oferecidos, lista dinâmica de acessórios, avaliações de clientes, formulário de contato e botão de WhatsApp com API. Também utiliza API de geolocalização para mostrar a loja mais próxima e API de clima para exibir a previsão local, trazendo um toque personalizado à experiência do usuário. Ideal para atrair clientes, facilitar o contato e divulgar produtos com interatividade e leveza..",
        stack: [{ name: "PowerApps" }, { name: "Power BI" },{ name: "Sharepoint" }],
        imagem: "/assets/work/utidocelular.jpg",
        live: "",
        github: "",
    }, 
    {
        num: "04",
        category: "Game",
        title: "CRYSTAL LEGENDS",
        description:
            "Desenvolvi um jogo RPG tático com foco em batalhas PvP por turno, narrativa envolvente e mecânicas profundas de progressão. O projeto conta com diferentes classes jogáveis, padrões de ataque variados para mobs, sistema de magias e itens com efeitos especiais. A jornada inclui missões primárias e secundárias, explorando um mundo rico em lore e desafios. Todo o enredo, sistemas e lógicas de combate foram desenvolvidos por mim, com a colaboração de Diogo Benevenuto na construção do level design. O resultado é uma experiência estratégica, imersiva e dinâmica, pensada para oferecer variedade, competitividade e rejogabilidade.",
        stack: [{ name: "Lógica de Programação" }, { name: "Smile Game Builder" }, { name: "Git" }],
        imagem: "/assets/work/sgb.jpeg",     
        live: "https://diogo-benevenuto.itch.io/crystal-legends",
        github: "",
    },   
]
const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
        }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl-h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            {/* <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}                                  
                                </div>
                             */}
                            <div className="text-7xl leading-none font-extrabold text-transparent text-outline mb-0">
                                {project.title}
                            </div>                                                                  
                            {/* project category */}
                            <h2 className="text-[20px] font-bold leading-none text-white
                            group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project  
                            </h2>
                                                        
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20">
                            </div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">


                                {/* live project button */}
{project.live && (
  <Link href={project.live} target="blank_">
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
          bg-white/5 flex justify-center items-center group">
          <BsArrowUpRight className="text-white text-3xl
            group-hover:text-accent" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Live Project</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Link>
)}

{/* github project button */}
{project.github && (
  <Link href={project.github}>
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
          bg-white/5 flex justify-center items-center group">
          <BsGithub className="text-white text-3xl
            group-hover:text-accent" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Github Repository</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Link>
)}

                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center 
                                        items-center bg-pink-50/20 rounded-xl" >
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full  h-full bg-black/10
                                            z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full ">
                                                <Image
                                                    src={project.imagem}
                                                    fill
                                                    className="object-cover rounded-xl"
                                                    alt=""

                                                />
                                                
                                            </div>
                                            
                                        </div> {/* ICON INFO */}
                            <h2 className="flex items-center gap-2">
                            {project.icon}
                            {project.icondescription}
                            </h2>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 
                            bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
                            xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                            w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>

        </motion.section>
    );
};

export default Work;
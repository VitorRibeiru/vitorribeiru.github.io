"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaPython, FaDatabase } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiTailwindcss } from "react-icons/si"
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

//about data
const about = {
    title: 'About me',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod mollis metus, ut tempor nisi vulputate eget. Pellentesque porta eleifend lacus sagittis porta. Suspendisse in ex a turpis rhoncus scelerisque. Sed suscipit justo at massa dictum, nec fringilla purus ullamcorper. Praesent at placerat metus. Nam condimentum dignissim semper. Ut scelerisque dictum condimentum.",
    info: [
        {
            fieldName: "Nome",
            fieldValue: "Vitor Ribeiro"
        },
        {
            fieldName: "Celular",
            fieldValue: "(+55) 24993133872)"
        },
        {
            fieldName: "Experiência",
            fieldValue: "4+ Anos"
        },
        {
            fieldName: "Discord",
            fieldValue: "Vitaum#6428"
        },
        {
            fieldName: "Nacionalidade",
            fieldValue: "Brasileiro"
        },
        {
            fieldName: "Email",
            fieldValue: "contatojvitorribeiro@gmail.com"
        },
        { 
            fieldName: "Freelance",
            fieldValue: "Disponível"
        },,
        {
            fieldName: "Linguaguens",
            fieldValue: "Inglês, Espanhol"
        },
    ]
}

// experience data

const experience = {
    icon:'/assets/resume/badge.svg',
    title: 'Minhas Experiências',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod mollis metus, ut tempor nisi vulputate eget. Pellentesque porta eleifend lacus sagittis porta. Suspendisse in ex a turpis rhoncus scelerisque. Sed suscipit justo at massa dictum, nec fringilla purus ullamcorper. Praesent at placerat metus. Nam condimentum dignissim semper. Ut scelerisque dictum condimentum.",
    items: [
        {
            company: "Michelin",
            position: "Data Analyst II",
            duration: "2022 - Presente"
        },
        {
            company: "Reconhecer o Padrão (Revista em Portugal)",
            position: "Web Developer",
            duration: "2023 - 2024"
        },
        {
            company: "Autonomo",
            position: "Consultoria e Ensino de TI",
            duration: "2024 - Presente"
        },
        {
            company: "Autonomo",
            position: "Web Developer",
            duration: "2019 - Presente"
        },

    ]
}

// education data

const education = {
    icon:'/assets/resume/cap.svg',
    title: 'Minhas Formações',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod mollis metus, ut tempor nisi vulputate eget. Pellentesque porta eleifend lacus sagittis porta. Suspendisse in ex a turpis rhoncus scelerisque. Sed suscipit justo at massa dictum, nec fringilla purus ullamcorper. Praesent at placerat metus. Nam condimentum dignissim semper. Ut scelerisque dictum condimentum.",
    items: [
        {
            instituition: "Centro Universitário Dom Bosco do Rio de Janeiro",
            degree: "Bacharel em Sistemas de Informação",
            duration: "2020 - 2024"
        },
        {
            instituition: "AWS",
            degree: "Cloud Foundadtions",
            duration: "2024"
        },
        {
            instituition: "Go Fluent",
            degree: "English C1.1",
            duration: "2025"
        },
        {
            instituition: "Digital Inovation One",
            degree: "HTML5 e CSS3",
            duration: "2023"
        },
        {
            instituition: "PI Osisoft",
            degree: "O Básico do PI System",
            duration: "2024"
        },
        {
            instituition: "PI Osisoft",
            degree: "O Básico do PI System",
            duration: "2024"
        },
        {
            instituition: "PI Osisoft",
            degree: "Visualizando Dados do PI System com o PI Vision",
            duration: "2024"
        },
        {
            instituition: "PI Osisoft",
            degree: "Criando Relatórios Básicos com PI DataLink",
            duration: "2024"
        },

    ]
}


const skills = {
    title: "My skills",
    description: "Teste Teste Teste Teste Teste Teste Teste Teste.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <FaPython />,
            name: "python"
        },
        {
            icon: <FaPhp />,
            name: "php"
        },
        {
            icon: <FaDatabase />,
            name: "SQL"
        },        
    ]
};

const Resume = () => {
    return <motion.div 
    initial={{opacity: 0}} 
    animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
    
      className=""

    > 
      resume page 
    </motion.div>
};

export default Resume;
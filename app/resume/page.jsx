"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaPython, FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si"

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
            instituition: "Michelin",
            position: "Data Analyst II",
            duration: "2022 - Presente"
        },

    ]
}


const Resume = () => {
    return <div>resume page</div>;
};

export default Resume;
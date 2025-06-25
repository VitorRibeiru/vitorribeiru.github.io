"use client";

import { BsArrowDownRight } from 'react-icons/bs'
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Automação de Processos (RPA)",
        description: "Automatização de processos repetitivos e rotinas operacionais com Python. Desenvolvimento de scripts e bots para reduzir tarefas manuais, integrar sistemas e otimizar fluxos de trabalho. Soluções sob medida para aumentar produtividade e reduzir erros operacionais.",
        href: "https://wa.me/5524993133872?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portif%C3%B3lio.%20Gostaria%20de%20saber%20um%20pouco%20sobre%20seus%20servi%C3%A7os."
    },
    {
        num: "02",
        title: "Business Inteligence (BI)",
        description: "Consultoria em Business Intelligence e soluções orientadas por dados. Implantação de dashboards, modelagem de dados e automações com Power BI e outras ferramentas. Apoio estratégico na estruturação e análise de dados para empresas que buscam decisões mais assertivas.",
        href: "https://wa.me/5524993133872?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portif%C3%B3lio.%20Gostaria%20de%20saber%20um%20pouco%20sobre%20seus%20servi%C3%A7os."
    },
    {
        num: "03",
        title: "Web Development",
        description: "Desenvolvimento de aplicações web modernas, responsivas e integradas. Criação de sistemas e sites personalizados com foco em performance, usabilidade e integração com APIs e bancos de dados. Entrego soluções completas, alinhadas às necessidades do cliente.",
        href: "https://wa.me/5524993133872?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portif%C3%B3lio.%20Gostaria%20de%20saber%20um%20pouco%20sobre%20seus%20servi%C3%A7os."
    },
    {
        num: "04",
        title: "Aulas de Programação/BI",
        description: "Formação prática e personalizada em programação e Business Intelligence. Aulas para aqueles que desejam aprofundar conhecimentos em Programação, Automação, Power BI e outras ferramentas. Metodologia direta, com foco em aplicação real.",
        href: "https://wa.me/5524993133872?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portif%C3%B3lio.%20Gostaria%20de%20saber%20um%20pouco%20sobre%20seus%20servi%C3%A7os."
    },
]

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div initial={{ opacity: 0 }} animate={{
                    opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                    return (    
                    <div key={index}
                    className="flex-1 flex flex-col justify-center gap-6 group"
                    >
                        {/* top */}
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline
                             text-transparent group-hover:text-outline">
                                {service.num}
                            </div>
                            <Link 
                            href={service.href} 
                            className="w-[70px] h-[70px] rounded-full bg-white 
                            group-hover:bg-accent transition-all duration-500 flex 
                            justify-center items-center hover:-rotate-45" target="_blank"
                          >
                            <BsArrowDownRight className="text-primary text-3xl" />
                          </Link>
                        </div>
                        {/*title*/}
                        <h2 className="text-[42px] font-bold leading-none text-white
                        group-hover:text-accent transition-all duration-500">
                        {service.title}
                        </h2>
                        {/*description*/}
                        <p className="text-white/60">{service.description}</p>
                        {/*border*/}
                        <div className="border-b border-white/20 w-full"></div>
                    </div>
                    );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
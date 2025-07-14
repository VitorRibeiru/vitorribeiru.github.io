"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Contato",
        description: "(+55) 11989666664",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "contatojvitorribeiro@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Endereço",
        description: "Rio de Janeiro / São Paulo.",
    },
];


const Contact = () => {    
     const [selectedService, setSelectedService] = useState("");
     return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form action="https://getform.io/f/aqomzwda" method="POST"
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-4xl text-accent">Tire a ideia do papel</h3>
                            <p className="text-white/60">
                                Se você precisa de uma solução criativa e funcional, estou aqui
                                pra ajudar. Preencha os campos abaixo e me conte um pouco sobre
                                o que você precisa, e vamos juntos transformar desafios em
                                projetos de verdade.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    placeholder="Nome"
                                    name="Nome"
                                />
                                <Input
                                    type="text"
                                    placeholder="Sobrenome"
                                    name="Sobrenome"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    name="Email"
                                />
                                <Input
                                    type="tel"
                                    placeholder="Contato"
                                    name="Contato"
                                />
                            </div>

                            <Select
                                value={selectedService} onValueChange={setSelectedService}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione o serviço" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecione o serviço</SelectLabel>
                                        <SelectItem value="Aulas de Programação/BI" name="Aulas de Programação/BI">
                                            Aulas de Programação/BI
                                        </SelectItem>
                                        <SelectItem value="Business Inteligence" nae="Business Inteligence">
                                            Business Inteligence
                                        </SelectItem>
                                        <SelectItem value="Web Development" name="Web Development">
                                            Web Development
                                        </SelectItem>
                                        <SelectItem value="Automação de Processos" name="Automação de Processos">
                                            Automação de Processos
                                        </SelectItem>
                                        <SelectItem value="Outros" name="Outros">Outros</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea
                                className="h-[200px]"
                                placeholder="Escreva sua mensagem aqui."
                                name="message"
                            />

                            <Button type="submit" size="md" className="max-w-40 h-[50px]">
                                Enviar Mensagem
                            </Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-[14px] sm:text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;

"use client";

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
    SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Contato",
        description: "(+55) 24993133872",
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
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.target;

                                const data = {
                                    firstname: form.firstname.value,
                                    lastname: form.lastname.value,
                                    email: form.email.value,
                                    phone: form.phone.value,
                                    service: form.service.value,
                                    message: form.message.value,
                                };

                                try {
                                    const res = await fetch("/api/sendEmail", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(data),
                                    });

                                    if (res.ok) {
                                        alert("Mensagem enviada com sucesso!");
                                        form.reset();
                                    } else {
                                        alert("Erro ao enviar. Tente novamente.");
                                    }
                                } catch (err) {
                                    console.error(err);
                                    alert("Erro inesperado. Tente novamente.");
                                }
                            }}
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-4xl text-accent">Tire a idéia do papel</h3>
                            <p className="text-white/60">
                                Se você precisa de uma solução criativa e funcional estou aqui pra ajudar. Preencha os campos abaixo e me conte um pouco sobre o que você precisa e vamos juntos transformar desafios em projetos de verdade.
                            </p>

                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstname" type="text" placeholder="Nome" required />
                                <Input name="lastname" type="text" placeholder="Sobrenome" required />
                                <Input name="email" type="email" placeholder="Email" required />
                                <Input name="phone" type="text" placeholder="Contato" required />
                            </div>

                            {/* select */}
                            <Select name="service" required>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione o serviço" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecione o serviço</SelectLabel>
                                        <SelectItem value="ast">Aulas de Programação/BI</SelectItem>
                                        <SelectItem value="bst">Business Inteligence</SelectItem>
                                        <SelectItem value="cst">Web Development</SelectItem>
                                        <SelectItem value="dst">Automação de Processos</SelectItem>
                                        <SelectItem value="est">Outros</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* textarea */}
                            <Textarea
                                name="message"
                                className="h-[200px]"
                                placeholder="Escreva sua mensagem aqui."
                                required
                            />

                            {/* btn */}
                            <Button type="submit" size="md" className="max-w-40 h-[50px]">
                                Enviar Mensagem
                            </Button>
                        </form> 
                     </div>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 
                    xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {info.map((item, index) => {
                            return <li key={index} className="flex items-center gap-6">
                                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                    <div className="text-[28px]">{item.icon}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white/60">{item.title}</p>
                                    <h3 className="text-xl">{item.description}</h3>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            </motion.section >
    );
};

export default Contact;
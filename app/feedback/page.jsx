/**
 * @copyright 2024 codewithsadee 
 * @license Apache-2.0
 * 
 */


"use client";

import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content: 'Tem boas entregas, no prazo e com uma interface de fácil utilização para os usuários dos apps. Tem o engajamento acima da média e está sempre motivado com os novos desafio que surgem. Sempre tem a iniciativa de buscar formas para facilitar a vida dos usuários, trazendo uma opção digital para todos os relatórios que encontra. O maior destaque do Vitor é a relação interpessoal. Sempre bem humorado, com bom networking e buscando fazer amizades. É receptivo as mudanças que surgem de última hora. Consegue se adaptar as urgências rapidamente. Mesmos que nos horários mais críticos, por iniciativa própria. A RM cresceu muito no Digital durante o período que ele está atuando. Nosso líder de transformação da indústria 4.0. Continue com esse engajamento e brilho nos olhos que vai longe!',
    name: 'Douglas Borges',
    imgSrc: './assets/feedbackimgs/Douglas.jpeg',
    company: 'Diretor na Michelin (Site RM)',
    words: "Proatividade, Adaptação, Liderança.",
    href: "https://www.linkedin.com/in/douglasvalenteborges",
  },
  {
    content: '  Os impactos gerados pelas soluções propostas por Vitor são altamente significativos. Um dos principais exemplos é a implementação da pilotagem em tempo real da Qualidade dos Produtos, que representou uma transformação crucial na garantia da qualidade durante o processo de obtenção da usina. Hoje, esse sistema é o principal indicador-chave de desempenho utilizado, oferecendo reatividade, rastreabilidade e assertividade nas análises. Outro destaque importante é o fortalecimento da nossa posição como referência na Função de Liberação (Aplicação desenvolvida pelo Vitor), fruto direto de suas contribuições. Em diversas ocasiões, fomos reconhecidos em nível global, evidenciando o valor que seu trabalho agregou à qualidade da operação. Embora o impacto técnico das soluções digitais de Vitor seja indiscutível, seu comportamento também se destaca como um diferencial. Sempre disponível, motivado e comprometido em buscar as melhores soluções para a Michelin, Vitor tem sido uma peça-chave e vem fazendo a diferença de forma notável em nossa equipe.',
    name: 'Rodrigo Costa dos Santos',
    imgSrc: './assets/feedbackimgs/Rodrigo.jpeg',
    company: 'Responsável da Garantia e Obtensão da Qualidade na Michelin (Site RM)',
    words: "Impacto, Inovação, Qualidade.",
    href: "https://www.linkedin.com/in/eng-rodrigocosta/",
  },
  {
    content: 'Tivemos o prazer de contar com o Vitor durante um período na Reconhecer o Padrão, atuando como web developer. Nesse tempo, demostrou grande iniciativa e atenção aos detalhes, sugerindo melhorias relevantes nos nossos processos e contribuindo para a organização do trabalho. Foi responsável por criar e atualizar páginas no nosso site, além de otimizar a integração de plugins no WordPress. A sua abordagem prática e colaborativa fez toda a diferença e trouxe resultados visíceis para o nosso dia a dia digital.',
    name: 'Jaime Oliveira',
    imgSrc: './assets/feedbackimgs/Jaime.jpeg',
    company: 'Fundador da Reconhecer o Padrão (PT)',
    words: "Desempenho, Organização, Iniciativa.",
    href: "https://www.linkedin.com/in/jaimenoliveira/",
  },
  {
    content: 'O Vitor foi excepcional no desenvolvimento do site da minha loja de assistência técnica e acessórios. Ele entendeu exatamente o que eu precisava, entregou tudo com agilidade e o resultado final superou minhas expectativas. O site ficou moderno, funcional e alinhado com tudo o que foi combinado. Recomendo de olhos fechados!',
    name: 'Diego Lopes',
    imgSrc: './assets/feedbackimgs/Diego.jpg',
    company: 'Dono na UTI do Celular',
    words: "Agilidade, Exelência, Satisfação.",
    href: "",
  },
  {
    content: ' O Vitor é um professor extremamente inteligente, às vezes até difícil de acompanhar de tão rápido que ele pensa! Mas graças a ele, aprendi muita coisa: desde a criação de sites com HTML e CSS, até lógica de programação e automações com Python. Ele tem domínio do conteúdo e sempre busca formas práticas de ensinar. Foi uma experiência transformadora aprender com ele.',
    name: 'Carolina Gonçalves',
    imgSrc: './assets/feedbackimgs/Carol.png',
    company: 'Estudante de Sistemas de Informação',
    words: "Conhecimento, Didática, Inspiração.",
    href: "",
  },
];

const Reviews = () => {
  return (

    <section id="reviews"
      className="section overflow-hidden flex-1 flex flex-col justify-center gap-6 group"
    >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container">

          <h2 className="text-center text-5xl font-extrabold text-outline text-transparent group-hover:text-outline mb-5">
            Veja que os clientes dizem
          </h2>

          <div className="">
            {/* flex items-stretch gap-3 w-fit */}
            {reviews.map(({ content, name, imgSrc, company, words, href }, key) => (
              <ReviewCard
                key={key}
                name={name}
                imgSrc={imgSrc}
                company={company}
                words={words}
                content={content}
                href={href}
              />
            ))}
          </div>

        </div>

      </motion.section>
    </section>

  )
}

export default Reviews
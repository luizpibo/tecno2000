import Image from "next/image";
import Link from "next/link";

import { GetStaticProps } from "next";
import { getHomePage } from "../src/API/querys";
import Slide from "../components/Organismos/slide";

const slides = [
  {
    title: "Sustentabilidade",
    description:
      "O conceito de sustentabilidade vai além da conscientização. A Tecno 2000 se responsabiliza por um planeta melhor e tem como princípio o respeito pelo meio ambiente. ",
    imgUrl: "sustentabilidade.jpg",
  },
  {
    title: "Entrega",
    description:
      "Veja nossos cases, conheça um pouco mais dos nossos projetos.",
    imgUrl: "logistica.jpg",
  },
  {
    title: "Móveis sobmedida",
    description:
      "Por trás de um produto final de qualidade está um trabalho sério. Os cuidados do Tecno2000 vão das condições para o funcionário até o controle de cada etapa da produção.",
    imgUrl: "projetos.jpg",
  },
  {
    title: "Serviços",
    description: "Contamos com serviços de montagem e transporte de móveis",
    imgUrl: "servicos.jpg",
  },
];

export const getStaticProps: GetStaticProps = async () => {
  const homePageData = await getHomePage();
  console.log("Conteudo da página", homePageData);
  return {
    props: {
      homePageData: homePageData,
    },
  };
};

export default function Home({ homePageData }) {
  return (
    <>
      <header className="flex justify-between px-10 md:px-16 py-6 text-slate-700 w-full z-50 fixed overflow-hidden shadow-xl rounded-b-xl backdrop-blur-sm bg-opacity-90 bg-gray-300">
        <span>
          <Image
            src="/logo.png"
            width={203}
            height={36}
            alt="logo da empresa"
          />
        </span>
        <nav>
          <ul className="flex gap-8 font-bold text-xl">
            <li className="decoration-gray-900 hover:scale-110 hover:underline transition">
              <Link href="/produtos">Produtos</Link>
            </li>
            <li className="decoration-gray-900 hover:scale-110 hover:underline transition">
              <Link href="/clientes">Clientes</Link>
            </li>
            <li className="decoration-gray-900 hover:scale-110 hover:underline transition">
              <Link href="/contatos">Contatos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-gray-200">
        <section className="shadow-2xl">
          <Slide slides={homePageData.heroContent.slides} />
        </section>
        <section className="container mx-auto px-4 my-4">
          <h2 className="text-center"> Sobre nós </h2>
          <div className="flex gap-4 justify-center items-center py-8 px-8">
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
          </div>
        </section>
        <section className="container mx-auto px-4 my-4">
          <h2 className="text-center"> Principais produtos </h2>
          <div className="flex gap-4 justify-center items-center py-8 px-8">
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
          </div>
        </section>
        <section className="container mx-auto px-4 my-4">
          <h2 className="text-center"> Certificações </h2>
          <div className="flex gap-4 justify-center items-center py-8 px-8">
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
          </div>
        </section>
        <section className="container mx-auto px-4 my-4">
          <h2 className="text-center"> Clientes </h2>
          <div className="flex gap-4 justify-center items-center py-8 px-8">
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
            <div className="max-w-xs bg-slate-500 h-10 w-10 p-8"></div>
          </div>
        </section>
      </main>
      <footer className="py-12 bg-zinc-900 text-white">
        <div className="container m-auto">direitos reservados</div>
      </footer>
    </>
  );
}

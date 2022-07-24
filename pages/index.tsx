import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { GetStaticProps } from "next";
import { getAllSlugPages } from "../src/API/querys";

export const getStaticProps: GetStaticProps = async () => {
  const lines = await getAllSlugPages();
  console.log("retorno do dato", lines);
  return {
    props: {
      lines: lines,
    },
  };
};

export default function Home({ lines }) {
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
  const [currentSlide, setCurrentSlide] = useState(0);
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
          <div className="flex flex-col h-screen w-full justify-center items-center lg:items-start relative overflow-hidden">
            <div
              className="
              flex flex-col gap-5 justify-center items-center
              w-4/5 md:w-3/5 lg:w-3/6 xl:w-2/5
              mx-2 md:mx-8 lg:mx-12 xl:mx-14
              p-3 md:p-5 lg:p-6 xl:p-7
              bg-slate-800 bg-opacity-70
              shadow-lg 
              rounded-lg 
              backdrop-blur-sm
              text-white
              z-10
              absolute
              "
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl font-normal text-center">
                {slides[currentSlide].title}
              </h2>
              <p className="text-sm lg:text-base xl:text-xl 2xl:text-3xl font-thin">
                {slides[currentSlide].description}
              </p>
            </div>
            <div className="w-full overflow-hidden">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3500}
                onChange={(index) => {
                  setCurrentSlide(index);
                }}
              >
                {slides.map((slide, index) => {
                  return (
                    <div
                      className="relative w-full h-screen"
                      key={index + slide.title}
                    >
                      <Image
                        src={`/assets/screens/home/${slide.imgUrl}`}
                        layout="fill"
                        objectPosition="center"
                        objectFit="cover"
                        alt={`imagem sobre ${slide.title}`}
                        width={1920}
                        height={1080}
                        quality={100}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
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

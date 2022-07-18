import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const slides = [
    {
      title: "Sustentabilidade",
      description:
        "O conceito de sustentabilidade vai além da conscientização. A Tecno 2000 se responsabiliza por um planeta melhor e tem como princípio o respeito pelo meio ambiente. ",
      imgUrl: "/sustentabilidade.jpg",
    },
    {
      title: "Entrega",
      description:
        "Veja nossos cases, conheça um pouco mais dos nossos projetos.",
      imgUrl: "/logistica.jpg",
    },
    {
      title: "Móveis sobmedida",
      description:
        "Por trás de um produto final de qualidade está um trabalho sério. Os cuidados do Tecno2000 vão das condições para o funcionário até o controle de cada etapa da produção.",
      imgUrl: "/Projetos.jpg",
    },
    {
      title: "Serviços",
      description: "Contamos com serviços de montagem e transporte de móveis",
      imgUrl: "/servicos.jpg",
    },
  ];

  return (
    <>
      <header className="flex justify-between px-10 md:px-16 py-6 text-white w-full z-10 bg-gradient-to-b from-gray-800 absolute overflow-hidden">
        <Image src="/logo.png" width={203} height={36} />
        <nav>
          <ul className="flex gap-8 font-bold text-2xl">
            <li>
              <Link href="/produtos">Produtos</Link>
            </li>
            <li>
              <Link href="/clientes">Clientes</Link>
            </li>
            <li>
              <Link href="/contatos">Contatos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-gray-100 min-h-screen w-full">
        <section className="flex min-h-screen justify-center relative lg:justify-between items-center shadow-2xl">
          <Image
            src="/assets/screens/home/logistica.jpg"
            layout="fill"
            objectPosition="bottom"
            objectFit="cover"
          />
          <div
            className="
          flex 
          flex-col 
          w-4/5
          md:w-3/5 
          lg:w-3/6
          xl:w-2/5
          mx-2 
          md:mx-8
          lg:mx-12 
          xl:mx-14
          p-3
          md:p-5
          lg:p-6
          xl:p-7
          gap-5 
          justify-center
          items-center
          bg-slate-800 
          bg-opacity-70
          backdrop-blur-sm
          shadow-2xl 
          rounded-lg 
          text-white
          z-10
          "
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-center">
              Sustentabilidade
            </h1>
            <p className="text-sm lg:text-base xl:text-xl 2xl:text-4xl font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              praesentium reprehenderit tempore, dicta debitis assumenda
              obcaecati odit odio possimus aut quia. Reprehenderit blanditiis
              qui perspiciatis quos, provident quasi facere sed!
            </p>
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

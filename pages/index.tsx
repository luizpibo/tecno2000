import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between px-10 py-6 text-white w-full z-10 bg-slate-600">
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
      <main className="bg-green-200">
        <div className="flex min-h-screen justify-between">
          <div className="flex flex-col w-full sm:w-1/3 md:w-1/2 gap-5 justify-center mx-4 md:pl-8 lg:pl-16 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold">
              Deixe seu escritório mais moderno
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              praesentium reprehenderit tempore, dicta debitis assumenda
              obcaecati odit odio possimus aut quia. Reprehenderit blanditiis
              qui perspiciatis quos, provident quasi facere sed!
            </p>
          </div>
          <div className="w-full md:w-5/12 absolute md:relative">
            <div
              className="flex h-full w-full bg-gradient-to-t from-slate-900 to-slate-700 shadow-slate-900 shadow-inner items-center"
              style={{ borderBottomLeftRadius: "15rem" }}
            >
              <Image
                src="/coworking.jpg"
                layout="fill"
                objectPosition="center"
                objectFit="cover"
                style={{
                  borderBottomLeftRadius: "15rem",
                }}
              />
              {/* <div className="relative md:-left-28 lg:-left-36">
                <Image src="/cadeira.png" width={400} height={500} />
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

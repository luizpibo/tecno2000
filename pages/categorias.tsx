import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllCategories } from "../src/API/querys";
import { HeaderH2 } from "../src/components/Atomos/Headers";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const categories = await getAllCategories();

  return {
    props: { categories: categories },
  };
};

const Component = ({ categories }) => {
  return (
    <div className="container m-auto pt-28">
      <HeaderH2>Categorias</HeaderH2>
      <div className="flex gap-4 justify-center my-4 flex-wrap">
        {categories.map((category) => {
          return (
            <Link key={category.name} href={`/${category.slug}`}>
              <a className="flex flex-col py-2 h-fit relative justify-center items-center hover:scale-105 transition-all">
                <span className="relative w-full h-full flex justify-center items-center z-0">
                  <span className=" overflow-hidden h-96 w-80 rounded-lg">
                    <span className="flex flex-col gap-1 rotate-45 -translate-y-20 ">
                      <span className="flex bg-slate-600 w-fit -translate-x-36 shadow-sm">
                        <span className="h-40 w-72" />
                        <span className="h-40 w-72" />
                      </span>
                      <span className="flex bg-slate-600 w-fit -translate-x-36 shadow-sm">
                        <span className="h-60 w-72" />
                        <span className="h-60 w-72" />
                      </span>
                      <span className="flex bg-slate-600 w-fit -translate-x-36 shadow-sm">
                        <span className="h-40 w-72" />
                        <span className="h-40 w-72" />
                      </span>
                    </span>
                  </span>
                </span>
                <Image
                  src={category.mainImage.url as string}
                  alt={category.mainImage.alt}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />

                <div className="z-10 w-full absolute">
                  <HeaderH2 className="text-gray-100 font-bold uppercase md:text-3xl bg-slate-500 shadow-lg">
                    {category.name}
                  </HeaderH2>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Component;

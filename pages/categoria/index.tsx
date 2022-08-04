import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllCategories, getAllCategoriesName } from "../../src/API/querys";
import { HeaderH2 } from "../../src/components/Atomos/Headers";
import { PrincipalText } from "../../src/components/Atomos/Texts";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const allProductCategories = await getAllCategories();
  console.log("Contexto", ctx);

  console.log("Categorias", allProductCategories);
  return {
    props: {
      categories: allProductCategories,
    },
  };
};

interface ICategory {
  name: string;
  description: string;
  mainImage: {
    url: string;
    alt: string;
  };
  id: number;
}

interface IProps {
  categories: ICategory[];
}
const Category: React.FC<IProps> = ({ categories }) => {
  return (
    <div className="container m-auto pt-28">
      <div className="flex gap-4 justify-center my-4 flex-wrap">
        {categories.map((categoria) => {
          return (
            <Link key={categoria.name} href={`categoria/${categoria.name}`}>
              <a className="flex flex-col py-2 relative">
                <span className="absolute w-full h-full flex justify-center items-center z-0 -translate-x-1">
                  <span className="-skew-x-12 overflow-hidden h-96 w-72">
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
                <div>

                </div>
                <Image
                  src={categoria.mainImage.url}
                  alt={categoria.mainImage.alt}
                  width={200}
                  height={200}
                  objectFit="contain"
                  objectPosition="center"
                />
                <div className="z-10 w-full">
                  <HeaderH2 className="text-gray-100 font-bold uppercase text-start underline underline-offset-3">
                    {categoria.name}
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

export default Category;

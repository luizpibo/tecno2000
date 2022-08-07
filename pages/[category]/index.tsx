import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAllCategories,
  getAllProductsByCategoryId,
  getCategoryIdBySlug,
} from "../../src/API/querys";
import { HeaderH2 } from "../../src/components/Atomos/Headers";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const allCategoriesProps = await getAllCategories();
  
  const allCategoriesPaths = allCategoriesProps.map((category) => {
    return { params: { category: category.slug } };
  });

  return {
    paths: allCategoriesPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { category } = ctx.params;
  const { id } = await getCategoryIdBySlug(category as string);

  const allProductsByCategoryId = await getAllProductsByCategoryId(
    id as string
  );

  return {
    props: {
      products: allProductsByCategoryId,
      category: category
    },
  };
};

interface ICategory {
  name: string;
  description: string;
  id: string;
  mainImage: {
    url: string;
    alt: string;
  };
}

interface IProduct {
  name: string;
  description: string;
  category: {
    name: string;
    slug: string;
  };
  mainImage: {
    alt: string;
    url: string;
  };
}

interface IProps {
  products: IProduct[];
  category: string;
}

const Category: React.FC<IProps> = ({ products, category }) => {
  return (
    <div className="container m-auto">
      <HeaderH2>Produtos da categoria {category}</HeaderH2>
      <div className="flex gap-4 justify-center my-4 flex-wrap">
        {products.map((product) => {
          return (
            <Link
              key={product.name}
              href={`${product.category.slug}/${product.name}`}
            >
              <a className="flex flex-col py-2 h-fit relative justify-center items-center hover:scale-105 transition-all">
                <span className="relative w-full h-full flex justify-center items-center z-0 -translate-x-1">
                  <span className=" overflow-hidden h-96 w-80">
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
                  src={product.mainImage.url}
                  alt={product.mainImage.alt}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />

                <div className="z-10 w-full absolute">
                  <HeaderH2 className="text-gray-100 font-bold uppercase md:text-3xl bg-slate-500 -skew-x-12 -translate-x-1">
                    {product.name}
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

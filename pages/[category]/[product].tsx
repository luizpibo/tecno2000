import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { getAllProducts, getProductByName } from "../../src/API/querys";
import { HeaderH2 } from "../../src/components/Atomos/Headers";
import { MarkDownText } from "../../src/components/Atomos/Texts";
import { SimpleSlide } from "../../src/components/Moleculas/Slides";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const allProducts = await getAllProducts();
  const allProductsPaths = allProducts.map((product) => {
    return {
      params: { category: product.category.slug, product: product.name },
    };
  });
  return {
    paths: allProductsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const product = await getProductByName(ctx.params.product as string);
  return {
    props: { ...product },
  };
};

interface IProduct {
  name: string;
  description: string;
  gallery: {
    alt: string;
    url: string;
  }[];
  category: {
    name: string;
    slug: string;
  };
  mainImage: {
    alt: string;
    url: string;
  };
}

const Product: React.FC<IProduct> = ({
  mainImage,
  name,
  description,
  gallery,
  category,
}) => {
  return (
    <section className="container mt-20 mb-4 rounded-lg m-auto md:border-2 md:border-solid md:border-slate-800 md:p-3">
      <Head>
        <title>
          TECNO2000 - {category.name.toUpperCase()} | {name.toUpperCase()}{" "}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
      </Head>
      <div className="flex-col gap-4">
        <main className="flex flex-col lg:flex-row mx-auto gap-10 items-center relative rounded-lg shadow-lg overflow-hidden">
          <span className="absolute w-full h-full hidden md:block rounded-lg">
            <Image
              src="/assets/screens/home/projetos.jpg"
              className="filter blur-sm"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <span className="absolute w-full h-full hidden md:block bg-slate-600 opacity-50" />
          </span>
          <div className="flex w-5/6 md:w-3/4 lg:w-1/2 h-96 my-4 relative justify-center transition duration-300 hover:scale-105">
            <span className="absolute w-10/12 h-full" data-aos="fade-right">
              <div className="absolute w-full h-full border-slate-800 border-4 border-solid rounded-lg -skew-x-12 translate-x-3 translate-y-3 bg-opacity-80 blur-md bg-gray-800"></div>
              <div className="absolute w-full h-full border-slate-800 border-4 border-solid rounded-lg -skew-x-12 bg-gray-200 bg-opacity-80 drop-shadow-xl shadow-2xl"></div>
            </span>
            <Image
              src={mainImage.url}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              data-aos="fade-down"
            />
          </div>
          <div
            className="grid flex-1 mx-3 my-4 p-4 bg-gray-200 shadow-xl backdrop-contrast-150 bg-opacity-80 rounded-lg backdrop-blur-sm"
            data-aos="fade-left"
          >
            <HeaderH2 className="uppercase font-semibold text-slate-900 filter drop-shadow-2xl">{`${category.name} | ${name}`}</HeaderH2>
            <MarkDownText className="filter drop-shadow-2xl">
              {description}
            </MarkDownText>
          </div>
        </main>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          <div className="flex-1 max-w-screen-md lg:m-4">
            <HeaderH2>Especificações</HeaderH2>
            <MarkDownText>{description}</MarkDownText>
          </div>
          {gallery.length > 0 && (
            <div className="flex-1">
              <HeaderH2>Galeria</HeaderH2>
              <SimpleSlide
                slides={gallery}
                arialabelledby={`Galeria de imagens do produto ${name}`}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;

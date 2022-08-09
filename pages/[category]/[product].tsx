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
    <section className="container pt-16 m-auto py-8">
      <Head>
        <title>
          TECNO2000 - {category.name.toUpperCase()} | {name.toUpperCase()}{" "}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
      </Head>
      <div className="flex-col gap-8">
        <main className="flex flex-col lg:flex-row mx-auto gap-10 items-center py-8 relative">
          <span className="absolute w-full h-full hidden md:block">
            <Image
              src="/assets/screens/home/projetos.jpg"
              className="rounded-lg "
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <span className="absolute w-full h-full hidden md:block bg-slate-600 opacity-50 backdrop-blur-xl rounded-lg" />
          </span>
          <div
            className="flex w-full md:w-3/4 lg:w-1/2 h-96 relative justify-center"
            data-aos="fade-right"
          >
            <span className="absolute w-10/12 h-full">
              <div className="absolute w-full h-full border-slate-800 border-4 border-solid rounded-lg -skew-x-12 translate-x-3 translate-y-3 bg-gray-800"></div>
              <div className="absolute w-full h-full border-slate-800 border-4 border-solid rounded-lg -skew-x-12 bg-gray-200 drop-shadow-xl shadow-2xl"></div>
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
            className="grid flex-1 mx-3 my-4 p-4 bg-gray-200 shadow-xl backdrop-contrast-150 bg-opacity-75 rounded-lg backdrop-blur-sm "
            data-aos="fade-left"
          >
            <HeaderH2 className="uppercase font-semibold text-slate-900">{`${name} | ${category.name}`}</HeaderH2>
            <MarkDownText>{description}</MarkDownText>
          </div>
        </main>
        {gallery && (
          <SimpleSlide
            slides={gallery}
            arialabelledby={`Galeria de imagens do produto ${name}`}
          />
        )}
      </div>
    </section>
  );
};

export default Product;

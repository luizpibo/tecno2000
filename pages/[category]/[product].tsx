import { GetStaticPaths, GetStaticProps } from "next";
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
    <section className="container pt-16 m-auto px-3 py-8">
      <main className="flex flex-col lg:flex-row mx-auto gap-10 items-center mb-8">
        <div className="flex w-full md:w-1/2 h-96 relative justify-center">
          <span className="absolute w-10/12 h-full">
            <div className="absolute w-full h-full border-slate-700 border-4 border-solid rounded-lg -skew-x-12 translate-x-3 translate-y-3 bg-gray-700"></div>
            <div className="absolute w-full h-full border-slate-700 border-4 border-solid rounded-lg -skew-x-12 bg-gray-200"></div>
          </span>
          <Image
            src={mainImage.url}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="grid flex-1 mx-3 my-4">
          <HeaderH2 className="uppercase font-semibold">{`${name} | ${category.name}`}</HeaderH2>
          <MarkDownText>{description}</MarkDownText>
        </div>
      </main>
      <SimpleSlide
        slides={gallery}
        arialabelledby={`Galeria de imagens do produto ${name}`}
      />
    </section>
  );
};

export default Product;

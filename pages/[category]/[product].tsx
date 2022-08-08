import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { getAllProducts, getProductByName } from "../../src/API/querys";
import { HeaderH2 } from "../../src/components/Atomos/Headers";

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
    props: { product },
  };
};

export default function product({ product }) {
  return (
    <div className="container flex mx-auto pt-28 m-auto gap-8">
      <div className="flex-1 h-96 w-96 relative">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        <Image src={product.mainImage.url} layout="fill" objectFit="cover" objectPosition="center"/>
      </div>
      <div className="flex flex-col flex-1 gap-6">
      <HeaderH2>{product.name}</HeaderH2>
      {product.description}
      </div>
    </div>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
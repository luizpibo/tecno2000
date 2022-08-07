import { GetStaticPaths, GetStaticProps } from "next";
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
    <div>
      <HeaderH2>{product.name}</HeaderH2>
    </div>
  );
}

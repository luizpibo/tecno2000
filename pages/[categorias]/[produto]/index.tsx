import { GetStaticPaths } from "next";

const Product = () => {
  return <h1> produto</h1>;
};

export default Product;

export const getStaticPaths: GetStaticPaths = (ctx) => {
  return {
    paths: "aaaa",
    fallback: "blocking";
  };
};

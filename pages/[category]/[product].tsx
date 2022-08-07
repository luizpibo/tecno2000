import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  console.log("contexto de produto", ctx);
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default function product() {
  return <div>oi</div>;
}

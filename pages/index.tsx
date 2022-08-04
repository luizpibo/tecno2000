import { GetStaticProps } from "next";
import { getPageBySlug } from "../src/API/querys";
import { FullScreenSlide } from "../src/components/Moleculas/Slides";
import Head from "next/head";
import Blocks from "../src/components/Organismos/Blocks";

export const getStaticProps: GetStaticProps = async () => {
  const homePageData = await getPageBySlug("/");
  return {
    props: {
      homePageData: homePageData,
    },
  };
};

export default function Home({ homePageData }) {
  const { pageTitle, hero, content } = homePageData;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <FullScreenSlide slides={hero.slides} />
        <Blocks blocks={content} />
      </main>
    </>
  );
}

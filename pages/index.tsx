import { GetStaticProps } from "next";
import { getPage } from "../src/API/querys";
import { FullScreenSlide } from "../src/components/Moleculas/Slides";
import { NavBar } from "../src/components/Moleculas/NavBar";
import Head from "next/head";
import Blocks from "../src/components/Organismos/Blocks";

export const getStaticProps: GetStaticProps = async () => {
  const homePageData = await getPage("/");
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
      <NavBar />
      <main className="bg-gray-200">
        <FullScreenSlide slides={hero.slides} />
        <Blocks blocks={content} />
      </main>
      <footer className="h-40 bg-zinc-900 text-white">
        <div className="container m-auto">direitos reservados</div>
      </footer>
    </>
  )
}

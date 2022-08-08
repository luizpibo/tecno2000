import { GetStaticProps } from "next";
import { getPageBySlug } from "../src/API/querys";
import Head from "next/head";
import Blocks from "../src/components/Organismos/Blocks";
import { FullScreenSlide } from "../src/components/Moleculas/Slides";
import Block_with_text_and_image from "../src/components/Moleculas/Block_with_text_and_image";

export const getStaticProps: GetStaticProps = async () => {
  const { pageTitle, hero, content } = await getPageBySlug("/");
  const props = {
    pageTitle: pageTitle,
    hero:
      hero._modelApiKey == "slide"
        ? { slides: hero.slides }
        : { content: hero.content },
    content: content,
  };
  return {
    props: props,
  };
};

interface IPageProps {
  pageTitle: string;
  hero: {
    content?: IBlock;
    slides?: IBlock[];
  };
  content: IBlock[];
}

export interface IBlock {
  textTitle: string;
  text: string;
  horizontalAlign: "start" | "center" | "end";
  image: Iimage;
  bgImage: boolean;
  isFullScreen?: boolean;
  _modelApiKey: string;
  direction: string;
  verticalAlign: "start" | "center" | "end";
}

interface Iimage {
  url: string;
  alt: string;
}

const Home: React.FC<IPageProps> = ({ hero, pageTitle, content }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>
        {hero?.slides ? (
          <FullScreenSlide slides={hero.slides} />
        ) : (
          <Block_with_text_and_image {...hero?.content} />
        )}

        <Blocks blocks={content} />
      </main>
    </>
  );
};

export default Home;

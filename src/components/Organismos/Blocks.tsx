import Block_with_text_and_image from "../Moleculas/Block_with_text_and_image";

interface Props {
  blocks: Array<Block_with_text_and_image_props>;
}

interface Block_with_text_and_image_props {
  textTitle: string;
  text: string;
  direction: string;
  bgImage: boolean;
  image: any;
  _modelApiKey: string;
}

interface Slide {
  slides: Block_with_text_and_image_props[];
}

const Blocks: React.FC<Props> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block) => {
        return <Block_with_text_and_image {...block} key={block.textTitle} />;
      })}
    </>
  );
};

export default Blocks;

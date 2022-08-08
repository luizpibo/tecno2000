import Block_with_text_and_image from "../Moleculas/Block_with_text_and_image";
import Product_carousel from "../Moleculas/Product_carousel";

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

const switchBlockComponent = (block, key: string) => {
  switch (block._modelApiKey) {
    case "block_with_text_and_image":
      return <Block_with_text_and_image {...block} key={key} />;
    case "product_carousel":
      return (
        <Product_carousel
          products={block.products}
          block_title={block.blockTitle}
          key={key}
        />
      );
    case "text_block":
      console.log("TEXTO");
      break;
    default:
      console.log("block defaul", block._modelApiKey);
  }
};

const Blocks: React.FC<Props> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        return switchBlockComponent(block, `${block.textTitle} + ${index}`);
      })}
    </>
  );
};

export default Blocks;

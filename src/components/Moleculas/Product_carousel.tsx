import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

interface IProduct {
  _modelApiKey: string;
  category: string;
  description: string;
  name: string;
  mainImage: { alt: string; url: string };
}

interface IProduct_carousel {
  products: IProduct[];
}
const Product_carousel: React.FC<IProduct_carousel> = ({ products }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3500}
    >
      {products.map((product) => {
        return (
          <div className="flex flex-col md:flex-row py-8 min-fit" key={product.name}>
            <div className="flex relative h-96 2xl:h-screen w-full md:w-1/2 justify-center items-center">
              <Image
                src={product.mainImage.url}
                alt={`Imagem do produto ${product.name}`}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="flex flex-col flex-1 justify-center p-4">
              <div className="flex flex-col gap-4 bg-slate-800 bg-opacity-70 text-white rounded-3xl p-4 shadow-lg relative lg:-left-40 lg:-top-14">
                <h2 className="text-white text-lg md:text-xl lg:text-2xl">
                  {product.name} | <span>{product.category}</span>
                </h2>
                <hr />
                <p>{product.description}</p>
                <a href={`${product.category}/${product.name}`} className="self-center px-4 py-3 w-fit text-slate-800 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition bg-slate-200">Saiba mais</a>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Product_carousel;
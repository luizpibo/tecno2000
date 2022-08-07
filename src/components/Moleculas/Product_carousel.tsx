import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { HeaderH2 } from "../Atomos/Headers";
import { PrincipalText } from "../Atomos/Texts";

interface IProduct {
  _modelApiKey: string;
  category: { name: string };
  description: string;
  name: string;
  mainImage: { alt: string; url: string };
}

interface IProduct_carousel {
  products: IProduct[];
  block_title: string;
}
const Product_carousel: React.FC<IProduct_carousel> = ({ products, block_title }) => {
  const [currentProduct, setCurrentProduct] = useState<IProduct>(products[0]);

  return (
    <div className="relative h-fit">
      <HeaderH2 className="text-center py-4 text-5xl font-bold">
        {block_title}
      </HeaderH2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 py-4 relative">
        <div className="h-fit w-full md:w-1/2 relative">
          <span className="absolute w-full h-full flex justify-center items-center">
            <span className="-skew-x-12 overflow-hidden h-96 w-72">
              <span className="flex flex-col gap-1 rotate-45 -translate-y-20 ">
                <span className="flex bg-slate-600 w-fit -translate-x-36 shadow-sm">
                  <span className="h-40 w-72" />
                  <span className="h-40 w-72" />
                </span>
                <span className="flex bg-slate-600 w-fit -translate-x-36 shadow-sm">
                  <span className="h-60 w-72" />
                  <span className="h-60 w-72" />
                </span>
                <span className="flex bg-slate-600 w-fit -translate-x-36 shadow-sm">
                  <span className="h-40 w-72" />
                  <span className="h-40 w-72" />
                </span>
              </span>
            </span>
          </span>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
            onChange={(product) => setCurrentProduct(products[product])}
          >
            {products.map((product) => {
              return (
                <div
                  className="h-96 w-full"
                  key={product.name}
                  style={{ minHeight: "30rem" }}
                >
                  <Image
                    src={product.mainImage.url}
                    alt={`Imagem do produto ${product.name}`}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="w-3/4 lg:w-2/5 flex flex-col gap-4 bg-slate-800 bg-opacity-80 text-white rounded-3xl p-4 shadow-2xl relative px-4 md:px-8 py-12">
          <HeaderH2>
            {currentProduct.name} | <span>{currentProduct.category.name}</span>
          </HeaderH2>
          <hr />
          <PrincipalText>{currentProduct.description}</PrincipalText>
          <a
            href={`${currentProduct.category.name}/${currentProduct.name}`}
            className="self-center px-4 py-3 w-fit text-slate-800 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition bg-slate-200"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product_carousel;

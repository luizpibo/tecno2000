import Image from "next/image";
import { relative } from "path";
import React from "react";
import { HeaderH2 } from "../Atomos/Headers";
import { PrincipalText } from "../Atomos/Texts";
interface Props {
  textTitle: string;
  text: string;
  direction: string;
  bgImage: boolean;
  image: Iimage;
}
interface Iimage {
  url: string;
  alt: string;
}
const Block_with_text_and_image: React.FC<Props> = ({
  bgImage,
  direction,
  textTitle,
  text,
  image,
}) => {
  return (
    <section
      className={`
      ${direction != "content" && "flex-col-reverse"} 
      ${direction != "content" && "lg:flex-row-reverse"} 
      flex flex-col lg:flex-row lg:h-4/5 max-h-fit w-full justify-center overflow-hidden relative px-4 pt-4 pb-4 gap-4
      `}
    >
      <div
        className="    
        flex flex-col gap-4 flex-1 justify-center items-center
        bg-slate-800 bg-opacity-70 text-white z-10
        shadow-lg
        rounded-3xl
        backdrop-blur-sm
        h-fit
        px-4 md:px-8 py-12
        "
      >
        <HeaderH2>{textTitle}</HeaderH2>
        <PrincipalText>{text}</PrincipalText>
      </div>
      <div
        className={`${
          !bgImage && "relative"
        } rounded-3xl flex flex-1 w-full px-5`}
        style={{ minHeight: "30rem" }}
      >
        <Image
          src={image.url}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={`${!bgImage && "rounded-3xl"}`}
        />
      </div>
    </section>
  );
};

export default Block_with_text_and_image;

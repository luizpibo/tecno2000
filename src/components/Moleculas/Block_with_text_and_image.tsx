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
      ${direction != "content" && "md:flex-row-reverse"} 
      flex flex-col md:flex-row h-screen w-full justify-center overflow-hidden relative  mt-8 px-4 gap-4
      `}
    >
      <div className="flex flex-1 py-4 items-center justify-center">
        <div
          className="    
        flex flex-col gap-5 justify-center items-center
        bg-slate-800 bg-opacity-70 text-white z-10
        shadow-2xl 
        rounded-lg 
        backdrop-blur-sm
        w-fit h-fit
        px-4 py-4
        "
        >
          <HeaderH2>{textTitle}</HeaderH2>
          <PrincipalText>{text}</PrincipalText>
        </div>
      </div>
      <div className={`${!bgImage && relative}  flex flex-1 p-5`}>
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

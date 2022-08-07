import Image from "next/image";
import { relative } from "path";
import React from "react";
import { HeaderH2 } from "../Atomos/Headers";
import { PrincipalText } from "../Atomos/Texts";
interface Props {
  textTitle: string;
  text: string;
  direction: string;
  verticalAlign: string;
  horizontalAlign: string;
  image: Iimage;
  bgImage: boolean;
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
  verticalAlign,
  horizontalAlign,
}) => {
  return (
    <section
      className={`
      flex lg:h-4/5 max-h-fit w-full overflow-hidden relative pb-4 px-3 gap-4
      ${
        direction == "content"
          ? "flex-col lg:flex-row"
          : "flex-col-reverse lg:flex-row-reverse"
      }
      ${bgImage ? "p-4 w-full shadow-xl" : ""}
      ${verticalAlign === "start" ? "items-start" : ""}
      ${verticalAlign === "center" ? "items-center" : ""}
      ${verticalAlign === "end" ? "items-end" : ""}
      ${bgImage && horizontalAlign === "start" ? "justify-start" : ""}
      ${bgImage && horizontalAlign === "center" ? "justify-center" : ""}
      ${bgImage && horizontalAlign === "end" ? "justify-end" : ""}
      `}
      style={{ minHeight: "30rem" }}
    >
      <div
        className={`  
        flex flex-col gap-4 justify-center items-center
        bg-slate-800 bg-opacity-70 text-white z-10
        shadow-md
        rounded-3xl
        backdrop-blur-sm
        h-fit
        w-full
        lg:w-1/2
        px-4 md:px-8 py-12
        `}
      >
        <HeaderH2>{textTitle}</HeaderH2>
        <PrincipalText>{text}</PrincipalText>
      </div>
      {bgImage ? (
        <Image
          src={image.url}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={`${!bgImage && "rounded-3xl"}`}
        />
      ) : (
        <div
          className={"relative rounded-3xl flex flex-1 w-full px-5"}
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
      )}
    </section>
  );
};

export default Block_with_text_and_image;

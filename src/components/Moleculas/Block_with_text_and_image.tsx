import Image from "next/image";
import React from "react";
import { HeaderH2 } from "../Atomos/Headers";
import { PrincipalText } from "../Atomos/Texts";
import { IBlock } from "../../../pages";

const Block_with_text_and_image: React.FC<IBlock> = ({
  bgImage,
  direction,
  textTitle,
  text,
  image,
  verticalAlign,
  horizontalAlign,
  isFullScreen,
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
      style={{ minHeight: isFullScreen ? "100vh" : "30rem" }}
      data-aos="fade-in"
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
        data-aos={
          bgImage ? "zoom-in" : direction == "content" ? "fade-right" : "fade-left"
        }
      >
        <HeaderH2 data-aos="fade-up">{textTitle}</HeaderH2>
        <PrincipalText data-aos="fade-up">{text}</PrincipalText>
      </div>
      {bgImage ? (
        <Image
          src={image.url}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={`${image.alt}`}
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
            alt={`${image.alt}`}
            className={`${!bgImage && "rounded-3xl"}`}
          />
        </div>
      )}
    </section>
  );
};

export default Block_with_text_and_image;

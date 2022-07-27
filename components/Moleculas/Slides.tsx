import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { HeaderH2 } from "../Atomos/headers";
import { PrincipalText } from "../Atomos/Texts";

interface Iimage {
  url: string;
  alt: string;
}

interface Islide {
  textTitle: string;
  text: string;
  position: number;
  bgImage: boolean;
  direction: string;
  image: Iimage;
}

const FullScreenSlide = ({ slides }: { slides: Islide[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="shadow-2xl">
      <div className="flex flex-col h-screen w-full justify-center items-center lg:items-start relative overflow-hidden">
        <div
          className="
    flex flex-col gap-5 justify-center items-center
    w-4/5 md:w-3/5 lg:w-3/6 xl:w-2/5
    mx-2 md:mx-8 lg:mx-12 xl:mx-14
    p-3 md:p-5 lg:p-6 xl:p-7
    bg-slate-800 bg-opacity-70
    shadow-lg 
    rounded-lg 
    backdrop-blur-sm
    text-white
    z-10
    absolute
    "
        >
          <HeaderH2>{slides[currentSlide].textTitle}</HeaderH2>
          <PrincipalText>{slides[currentSlide].text}</PrincipalText>
        </div>
        <div className="w-full overflow-hidden">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3500}
            onChange={(index) => {
              setCurrentSlide(index);
            }}
          >
            {slides.map((slide, index) => {
              return (
                <div
                  className="relative w-full h-screen"
                  key={index + slide.textTitle}
                >
                  <Image
                    layout="fill"
                    objectPosition="center"
                    objectFit="cover"
                    alt={`imagem sobre ${slide.textTitle}`}
                    width={1920}
                    height={1080}
                    quality={100}
                    src={slide.image.url}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { FullScreenSlide };

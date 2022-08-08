import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { IBlock } from "../../../pages";
import Block_with_text_and_image from "./Block_with_text_and_image";
import { Options } from "@splidejs/splide";
import { useRef, useEffect } from "react";
interface ISlide {
  slides: IBlock[];
  arialabelledby?: string;
}
interface ISimpleSlide {
  slides: { url: string; alt: string }[];
  arialabelledby?: string;
}
const FullScreenSlide: React.FC<ISlide> = ({ slides }) => {
  return (
    <Splide
      className="w-full overflow-hidden shadow-2xl mb-4"
      tag="section"
      options={{
        type: "fade",
        rewind: true,
        perPage: 1,
        autoplay: true,
        speed: 800,
        interval: 4000,
      }}
      aria-labelledby="dynamic-slides-example-heading"
    >
      {slides.map((slide, index) => {
        return (
          <SplideSlide key={index + slide.textTitle}>
            <Block_with_text_and_image
              {...slide}
              verticalAlign="center"
              horizontalAlign="center"
              isFullScreen={true}
            />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

const SimpleSlide: React.FC<ISimpleSlide> = ({
  slides,
  arialabelledby = "dynamic-slides-example-heading",
}) => {
  const slideRef = useRef<Splide>();
  useEffect(() => {
    if (slideRef.current) {
      console.log(slideRef.current.splide.index);
    }
  }, [slideRef]);

  const mainOptions: Options = {
    type: "fade",
    rewind: true,
    perPage: 1,
    autoplay: true,
    speed: 800,
    interval: 4000,
    pagination: false,
  };

  const thumbsOptions: Options = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
  };

  return (
    <div className="w-full lg:w-3/4 overflow-hidden shadow-lg mx-auto rounded-xl mb-4 bg-gradient-to-b from-gray-200 to-gray-300">
      <Splide
        tag="section"
        options={mainOptions}
        ref={slideRef}
        hasTrack={true}
        aria-labelledby={arialabelledby}
      >
        {slides.map((slide, index) => {
          return (
            <SplideSlide key={index + slide.url + slide.alt}>
              <div className="h-96 w-96">
                <Image
                  src={slide.url}
                  alt={slide.alt}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <Splide
        options={thumbsOptions}
        ref={slideRef}
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      >
        {slides.map((slide, index) => {
          return (
            <SplideSlide key={index + slide.url + slide.alt}>
              <div className="h-96 w-96">
                <Image
                  src={slide.url}
                  alt={slide.alt}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};
export { FullScreenSlide, SimpleSlide };

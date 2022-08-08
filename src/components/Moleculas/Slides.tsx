import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IBlock } from "../../../pages";
import Block_with_text_and_image from "./Block_with_text_and_image";

interface ISlide {
  slides: IBlock[];
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

export { FullScreenSlide };

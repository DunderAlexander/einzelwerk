"use client";

import { useDotButton } from "@/app/utils/useDotButton";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import DotButton from "./DotButton";

interface Video {
  provider: string;
  url: string;
  embed_video: string;
  title: string;
  thumb_url: string;
  description: string;
  preview: string;
}

interface DataItem {
  title: string;
  subtitle: string;
  video: Video;
  object_id: number;
}

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  containScroll: "trimSnaps",
};

const Hero = ({ values: { items } }: { values: { items: DataItem[] } }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <section ref={emblaRef} className="relative h-screen overflow-hidden">
      <div className="flex">
        {items.map((slide, idx) => (
          <div
            key={idx}
            className="h-screen w-full flex flex-col justify-center items-center flex-grow-0 flex-shrink-0"
          >
            <video
              loop
              autoPlay
              muted
              src={`https://testapi.einzelwerk.io/${slide.video.url}`}
              className="absolute -z-10 h-full w-screen object-cover"
            ></video>
            <div className="flex flex-col justify-center items-center text-center gap-4">
              <h1 className="text-white font-arboria-medium text-6xl">
                {slide.title}
              </h1>
              <p className="text-white font-arboria-book">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute flex gap-2 justify-center items-center z-10 bottom-4 left-0 right-0">
        {scrollSnaps.map((_, idx) => (
          <DotButton
            key={idx}
            onClick={() => onDotButtonClick(idx)}
            className={`bg-white rounded-full w-12 h-2 opacity-60 transition-all ${
              idx === selectedIndex ? "opacity-100 w-16" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};
export default Hero;

"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import "./embla.css";
import Fade from "embla-carousel-fade";

type Slide = {
  image: string;
  title?: string;
  description?: string;
};

const slides: Slide[] = [
  { image: "/images/lanscape-bp.png" },
  { image: "/images/jollof.jpeg" },
  { image: "/images/interior-ls.png" },
  { image: "/images/Spicy-Peppered-GOATMEAT.jpeg" },
  { image: "/images/exterior-1.png" },
  { image: "/images/img-7-1.jpg" },
  { image: "/images/img-7-1.jpg" },
];

const Hero: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
    Fade(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="relative h-screen text-white">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] h-full relative" key={index}>
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="ken-burns-animation"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="absolute mt-10 inset-0 flex flex-col items-center justify-center z-20 text-center">
        <h1 className="font-protest text-4xl md:text-6xl uppercase tracking-wider leading-tight">
          FOOD FROM <br /> HEART. MADE <br /> WITH LOVE.
        </h1>
        <div className="font-protest mt-4 flex items-center space-x-2 text-sm tracking-widest uppercase">
          <span className="w-16 h-px bg-white"></span>
          <span>Enjoy Each Bite</span>
          <span className="w-16 h-px bg-white"></span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/menu"
            className="font-kranky bg-brand-accent text-background tracking-widest px-6 py-3 text-md text-center hover:bg-opacity-80 transition-all"
          >
            View Menu
          </a>
          <a
            href="#reservations"
            className="font-fred border border-white text-white tracking-widest px-4 py-3 text-md text-center hover:bg-white hover:text-background transition-all"
          >
            Book a Table
          </a>
        </div>
      </div>

      <div className="absolute mt-6 bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

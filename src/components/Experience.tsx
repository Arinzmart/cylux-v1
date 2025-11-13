"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect } from "react";

const experienceData = [
  {
    image: "/images/Asun-basmati-rice.jpeg",
    title: "Asun rice",
  },
  {
    image: "/images/Shawarma.jpeg",
    title: "Shawarma",
  },
  {
    image: "/images/Cheese-Omelette.jpeg",
    title: "Cheese Omelette",
  },
  {
    image: "/images/Coffee.jpeg",
    title: "Coffee",
  },
  {
    image: "/images/beef-pepper-soup.jpeg",
    title: "beef pepper soup",
  },
  {
    image: "/images/jollof.jpeg",
    title: "jollof rice",
  },
  {
    image: "/images/Crispy-Chicken-Wings.jpeg",
    title: "Crispy Chicken Wings",
  },

  {
    image: "/images/Vanilla-milkshake.jpeg",
    title: "Vanilla milkshake",
  },
  {
    image: "/images/French-Fries.jpeg",
    title: "French Fries",
  },
  {
    image: "/images/Spicy-Peppered-GOATMEAT.jpeg",
    title: "Spicy Peppered Goatmeat",
  },
  {
    image: "/images/Glenfiddich-12.jpeg",
    title: "Glenfiddich 12 Year Old",
  },
  {
    image: "/images/deperado.jpeg",
    title: "Deperado",
  },
  {
    image: "/images/beer.jpeg",
    title: "Guinness Beer",
  },
  {
    image: "/images/img-10.jpg",
    title: "Platter",
  },
  {
    image: "/images/Jack-Daniels.jpeg",
    title: "Jack Daniels",
  },
  {
    image: "/images/Andre-Rose.jpeg",
    title: "Andre-Rose",
  },
  {
    image: "/images/Nwobi.jpeg",
    title: "Nkwobi",
  },
  {
    image: "/images/Nigerian-fried-rice.jpeg",
    title: "Fried rice",
  },
  {
    image: "/images/Nigerian-Pepper-Soup.jpeg",
    title: "Pepper Soup",
  },
  {
    image: "/images/Oreos-Milkshake.jpeg",
    title: "Oreos Milkshake",
  },
  {
    image: "/images/Plantain-Fritata.jpeg",
    title: "Plantain Fritata",
  },
];

const Experience = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.selectedScrollSnap();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onReInit = () => {
      emblaApi.scrollSnapList();
      onSelect();
    };
    onReInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className=" relative py-20  md:py-22 text-light/90">
      <div className="px-4 text-center">
        <h2 className="font-protest text-4xl md:text-5xl mb-20">
          EXPERIENCE THE
          <span className="text-brand-secondary font-fred tracking-widest">
            {" "}
            TASTE
          </span>
          {/* <br className="hidden md:block" />
          <span className="text-brand-secondary font-fred tracking-normal">
            Joy
          </span> */}
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-2"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-full aspect-[4/5] mb-3 max-w-xs mx-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-sm"
                    />
                  </div>
                  <div className="text-center">
                    <div className="h-8 w-px bg-brand-secondary mx-auto"></div>
                    <div className="border border-brand-secondary py-1 px-3 mt-2">
                      <p className="font-kranky text-xs tracking-widest">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-brand-secondary w-8"
                  : "bg-gray-300"
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Experience;

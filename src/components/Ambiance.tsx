"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  { src: "/images/IMG_6762.png", alt: "Elegant main dining hall" },
  { src: "/images/IMG_6763.png", alt: "Cozy corner seating" },
  { src: "/images/IMG_6761.png", alt: "Bar area with mood lighting" },
  { src: "/images/IMG_6764.png", alt: "Restaurant exterior view at dusk" },
  { src: "/images/IMG_6759.png", alt: "Restaurant exterior view at dusk" },
  { src: "/images/img-12.jpg", alt: "cocktail" },
];

const Ambiance = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <section className="bg-white py-20 md:py-20 text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-play bg-black max-w-md mx-auto p-3 text-4xl md:text-5xl text-brand-accent mb-4">
            The Experience
          </h2>
          <h3 className="font-protest text-4xl md:text-5xl  tracking-normal mb-8">
            Ambiance & Design
          </h3>
          <p className="font-sans text-md max-w-3xl mx-auto">
            Our restaurant is a carefully curated space designed to transport
            you. Every detail, from the soft lighting to the handcrafted
            furniture, has been chosen to create an atmosphere that is both
            sophisticated and inviting.
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] relative aspect-[5/4] px-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambiance;

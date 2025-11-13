"use client";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Critic",
    image: "/images/img-1.jpg",
    text: "An absolutely exceptional dining experience. The attention to detail in every dish is remarkable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Regular Guest",
    image: "/images/img-2.jpg",
    text: "CYLUX has become our go-to for special occasions. The ambiance and service are unmatched.",
    rating: 5,
  },
  {
    name: "Minidoo Chivir",
    role: "Culinary Enthusiast",
    image: "/images/img-3.jpg",
    text: "The chef's creativity shines through in every course. A true culinary masterpiece.",
    rating: 5,
  },
  {
    name: "David Agbo",
    // role: "First-time Visitor",
    image: "/images/img-4.jpg",
    text: "I was blown away by the flavors and the presentation. Can't wait to come back!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-10 md:py-10 text-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-play text-4xl md:text-4xl text-brand-accent mb-4">
          What Our Guests Say
        </h2>
        <h3 className="font-protest bg-background max-w-md mx-auto p-3 text-4xl md:text-5xl uppercase text-foreground tracking-wider mb-16">
          Testimonials
        </h3>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_90%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
              >
                <div className="bg-white p-8 rounded-sm h-full flex flex-col justify-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-brand-accent text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="font-sans text-lg italic mb-6 text-background/80 flex-grow">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 relative mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="font-sans text-sm text-background/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const allImages = [
  {
    src: "/images/IMG_6763.png",
    category: "interior",
    alt: "Restaurant interior",
  },

  {
    src: "/images/IMG_6761.png",
    category: "interior",
    alt: "Elegant table setup",
  },
  {
    src: "/images/interior-ls.png",
    category: "interior",
    alt: "Elegant table setup",
  },
  {
    src: "/images/IMG_6767.png",
    category: "interior",
    alt: "Elegant table setup",
  },
  {
    src: "/images/IMG_6766.png",
    category: "interior",
    alt: "Elegant table setup",
  },
  {
    src: "/images/IMG_6759.png",
    category: "interior",
    alt: "Elegant table setup",
  },

  {
    src: "/images/img-5.jpg",
    category: "cuisine",
    alt: "A spread of delicious dishes",
  },
  {
    src: "/images/img-6.jpg",
    category: "cuisine",
    alt: "Dessert presentation",
  },
  { src: "/images/img-7.avif", category: "cuisine", alt: "Truffle Risotto" },
  {
    src: "/images/img-8.jpg",
    category: "cuisine",
    alt: "Seared Scallops",
  },

  {
    src: "/images/lanscape-bp.png",
    category: "interior",
    alt: "Main dining hall",
  },

  {
    src: "/images/img-1.jpg",
    category: "events",
    alt: "A lively restaurant atmosphere",
  },
  {
    src: "/images/Asun-basmati-rice.jpeg",
    category: "cuisine",
    alt: "Asun rice",
  },
  {
    src: "/images/Shawarma.jpeg",
    category: "cuisine",
    alt: "Shawarma",
  },
  {
    src: "/images/Cheese-Omelette.jpeg",
    category: "cuisine",
    alt: "Cheese Omelette",
  },
  {
    src: "/images/Coffee.jpeg",
    category: "drinks",
    alt: "Coffee",
  },
  {
    src: "/images/beef-pepper-soup.jpeg",
    category: "cuisine",
    alt: "Beef pepper soup",
  },
  {
    src: "/images/jollof.jpeg",
    category: "cuisine",
    alt: "Jollof rice",
  },
  {
    src: "/images/Crispy-Chicken-Wings.jpeg",
    category: "cuisine",
    alt: "Crispy Chicken Wings",
  },
  {
    src: "/images/Vanilla-milkshake.jpeg",
    category: "drinks",
    alt: "Vanilla milkshake",
  },
  {
    src: "/images/French-Fries.jpeg",
    category: "cuisine",
    alt: "French Fries",
  },
  {
    src: "/images/Spicy-Peppered-GOATMEAT.jpeg",
    category: "cuisine",
    alt: "Spicy Peppered Goatmeat",
  },
  {
    src: "/images/Glenfiddich-12.jpeg",
    category: "drinks",
    alt: "Glenfiddich 12 Year Old whisky",
  },
  {
    src: "/images/deperado.jpeg",
    category: "drinks",
    alt: "Deperado beer",
  },
  {
    src: "/images/beer.jpeg",
    category: "drinks",
    alt: "Guinness Beer",
  },
  {
    src: "/images/img-10.jpg",
    category: "cuisine",
    alt: "Food platter",
  },
  {
    src: "/images/Jack-Daniels.jpeg",
    category: "drinks",
    alt: "Jack Daniels whiskey",
  },
  {
    src: "/images/Andre-Rose.jpeg",
    category: "drinks",
    alt: "Andre Rose wine",
  },
  {
    src: "/images/Nwobi.jpeg",
    category: "cuisine",
    alt: "Nkwobi",
  },
  {
    src: "/images/Nigerian-fried-rice.jpeg",
    category: "cuisine",
    alt: "Fried rice",
  },
  {
    src: "/images/Nigerian-Pepper-Soup.jpeg",
    category: "cuisine",
    alt: "Pepper Soup",
  },
  {
    src: "/images/Oreos-Milkshake.jpeg",
    category: "drinks",
    alt: "Oreos Milkshake",
  },
  {
    src: "/images/Plantain-Fritata.jpeg",
    category: "cuisine",
    alt: "Plantain Fritata",
  },
];

const FilterableGallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    filter === "all"
      ? allImages
      : allImages.filter((image) => image.category === filter);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section className="bg-black py-20 md:py-32 text-white/50">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:space-x mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`font-sans tracking-widest uppercase px-4 py-1 text-xs transition-all ${
              filter === "all"
                ? "bg-background text-white"
                : "bg-transparent hover:bg-background"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("cuisine")}
            className={`font-sans tracking-widest uppercase px-6 py-2 text-sm transition-all ${
              filter === "cuisine"
                ? "bg-background text-white"
                : "bg-transparent hover:bg-background"
            }`}
          >
            Cuisine
          </button>
          <button
            onClick={() => setFilter("interior")}
            className={`font-sans tracking-widest uppercase px-6 py-2 text-sm transition-all ${
              filter === "interior"
                ? "bg-background text-white"
                : "bg-transparent hover:bg-background"
            }`}
          >
            Interior
          </button>
          <button
            onClick={() => setFilter("events")}
            className={`font-sans tracking-widest uppercase px-6 py-2 text-sm transition-all ${
              filter === "events"
                ? "bg-background text-white"
                : "bg-transparent hover:bg-background"
            }`}
          >
            Events
          </button>
        </div>

        {/* Image Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(image.src)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-sm transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button className="absolute top-6 right-6 text-white hover:text-brand-accent transition-colors z-10">
            <X size={32} />
          </button>
          <div className="relative max-w-4xl max-h-[90vh]">
            <Image
              src={lightboxImage}
              alt="Lightbox image"
              width={1920}
              height={1080}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FilterableGallery;

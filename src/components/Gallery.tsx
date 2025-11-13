"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// const galleryImagesRow1 = [
//   { src: "/images/img-1.jpg", alt: "Spacious restaurant interior" },
//   { src: "/images/img-2.jpg", alt: "A vibrant, artistic cocktail" },
//   { src: "/images/img-3.jpg", alt: "Elegant dining table setup" },
//   { src: "/images/img-5.jpg", alt: "A spread of delicious dishes" },
//   { src: "/images/img-7.avif", alt: "Truffle Risotto" },
// ];
const galleryImagesRow1 = [
  { src: "/images/IMG_6763.png", alt: "Restaurant interior" },
  { src: "/images/IMG_6761.png", alt: "Elegant table setup" },
  { src: "/images/interior-ls.png", alt: "Elegant table setup" },
  { src: "/images/IMG_6767.png", alt: "Elegant table setup" },
  { src: "/images/IMG_6766.png", alt: "Elegant table setup" },
  { src: "/images/IMG_6759.png", alt: "Elegant table setup" },
  { src: "/images/img-5.jpg", alt: "A spread of delicious dishes" },
  { src: "/images/img-6.jpg", alt: "Dessert presentation" },
  { src: "/images/img-7.avif", alt: "Truffle Risotto" },
  { src: "/images/img-8.jpg", alt: "Seared Scallops" },
  { src: "/images/lanscape-bp.png", alt: "Main dining hall" },
  { src: "/images/img-1.jpg", alt: "A lively restaurant atmosphere" },

  { src: "/images/beef-pepper-soup.jpeg", alt: "Beef pepper soup" },
  { src: "/images/jollof.jpeg", alt: "Jollof rice" },
  { src: "/images/Crispy-Chicken-Wings.jpeg", alt: "Crispy Chicken Wings" },
];

// const galleryImagesRow2 = [
//   { src: "/images/img-4.jpg", alt: "Overhead view of the restaurant floor" },
//   { src: "/images/img-6.jpg", alt: "Dessert Presentation" },
//   { src: "/images/img-8.jpg", alt: "Seared Scallops" },
//   { src: "/images/img-1.jpg", alt: "Spacious restaurant interior" }, // Repeated
//   { src: "/images/img-3.jpg", alt: "Elegant dining table setup" }, // Repeated
// ];
const galleryImagesRow2 = [
  { src: "/images/Vanilla-milkshake.jpeg", alt: "Vanilla milkshake" },
  { src: "/images/French-Fries.jpeg", alt: "French Fries" },
  {
    src: "/images/Spicy-Peppered-GOATMEAT.jpeg",
    alt: "Spicy Peppered Goatmeat",
  },
  { src: "/images/Asun-basmati-rice.jpeg", alt: "Asun rice" },
  { src: "/images/Shawarma.jpeg", alt: "Shawarma" },
  { src: "/images/Cheese-Omelette.jpeg", alt: "Cheese Omelette" },
  { src: "/images/Coffee.jpeg", alt: "Coffee" },
  { src: "/images/img-10.jpg", alt: "Food platter" },

  { src: "/images/Nwobi.jpeg", alt: "Nkwobi" },
  { src: "/images/Nigerian-fried-rice.jpeg", alt: "Fried rice" },
  { src: "/images/Nigerian-Pepper-Soup.jpeg", alt: "Pepper Soup" },
  { src: "/images/Oreos-Milkshake.jpeg", alt: "Oreos Milkshake" },
  { src: "/images/Plantain-Fritata.jpeg", alt: "Plantain Fritata" },
];

const allGalleryImages = [...galleryImagesRow1, ...galleryImagesRow2];

const ImageCarousel = ({
  images,

  delay = 5000,
  onImageClick,
}: {
  images: { src: string; alt: string }[];
  direction?: "forward" | "backward";
  delay?: number;
  onImageClick: (index: number) => void;
}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-2"
            onClick={() => onImageClick(index)}
          >
            <div className="relative aspect-square cursor-pointer">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = useCallback(
    () => setLightboxIndex((prev) => (prev + 1) % allGalleryImages.length),
    []
  );

  const prevImage = useCallback(
    () =>
      setLightboxIndex(
        (prev) => (prev - 1 + allGalleryImages.length) % allGalleryImages.length
      ),
    []
  );

  return (
    <section
      id="gallery"
      className="relative bg-cover bg-center py-20 md:py-32 text-white"
      style={{ backgroundImage: "url('/images/section-bg-6-large-4.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/images/img-pattern.svg')" }}
      ></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-fred text-4xl bg-brand-accent max-w-md mx-auto p-3 md:text-5xl text-black mb-4">
          Visual Journey
        </h2>

        <h3 className="font-protest text-4xl md:text-5xl uppercase tracking-wider mb-16">
          Our Gallery
        </h3>

        <div className="space-y-4">
          <ImageCarousel
            images={galleryImagesRow1}
            direction="forward"
            delay={4000}
            onImageClick={(index) => openLightbox(index)}
          />
          <ImageCarousel
            images={galleryImagesRow2}
            direction="backward"
            delay={5500}
            onImageClick={(index) =>
              openLightbox(index + galleryImagesRow1.length)
            }
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <Image
              src={allGalleryImages[lightboxIndex].src}
              alt={allGalleryImages[lightboxIndex].alt}
              width={1920}
              height={1080}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white bg-black/50 px-4 py-2 rounded-md">
              <p className="font-sans tracking-widest">
                {allGalleryImages[lightboxIndex].alt}
              </p>
            </div>
          </div>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-brand-accent transition-colors z-10"
          >
            <X size={32} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-accent transition-colors bg-black/30 p-2 rounded-full z-10"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-accent transition-colors bg-black/30 p-2 rounded-full z-10"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;

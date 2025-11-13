"use client";

import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="relative py-20 md:py-20 text-light/90">
      {/* Decorative SVG Wave */}
      <div className="absolute inset-x-0 top-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
          <path
            d="M0 0v47.6l5-2c1 0 11 3 12 0 2 3 6-3 6 0 0-4 12 3 12 0 0 3 15-1 17 0 2-2 5-1 6 0 0-2 6 2 6 0s2 4 4 0c5 2 12-3 16 0 2-2 4-3 4 0 0 2 6-1 6 0 1 4 15-2 17 0h7c0 1 3-3 6 0h17c2 2 3 1 6 0h6c1-2 21-1 24 0 2 1 4 2 6 0 0-1 22 4 24 0 0 0 5-3 5 0 2-2 10 2 12 0 2 2 6 1 6 0 2 3 4-2 6 0 1 0 25-2 25 1l10-1c3 1 6 6 7 0 1 5 4-2 6 0 2-2 4 3 5 0h12c6 1 36 2 36 0 0 2 3 0 6 0h6c5-2 7 4 11 0 2 0 15 2 17 0h13c3-4 5 1 7 0h29c0-3 6 0 6 0h5c0 2 16-1 18 0 1 4 9-1 12 0s6-2 6 0c8-2 3 4 13 0h10c3 4 19 1 19 0 2 0 21 1 23-1 1 4 3-1 6 1 1 2 11-1 12-1 3 3 9 0 12 1 3-4 6 1 6 0h6c0-3 5 1 6-1 0 3 2 1 4 1 3 4 10-1 13 0 3-2 6-1 6 0 2 2 2 0 6 0 1-2 6 2 6 0 2 0 4 5 6 0h18c2 3 4 1 6 0l6-1c3 2 12 3 17 1 14 3 18 1 24 0 2-1 3 3 5 0 6 2 10-1 16 0 1 3 6 0 9 0 0-2 3 2 5 0 6-6 8 7 13 0 0-2 5 2 5 0 3 3 10 0 10 0 1 2 5-2 8 0 3-1 8 3 12 0h6c2 1 10 4 12 0h6c1-1 5 2 6 0 1 2 4-1 6 0 0-2 5 3 6-1 2 1 6 5 5 1 1 1 3-2 6 0 2-1 5 3 6 0 0 1 6 2 6 0 2 3 4-4 6 0 0-2 3 2 6 0 3 0 6 3 6 0 5 3 8-1 13 0 3-4 6 1 6 0h5c0-1 9 2 12 0 1-1 9 3 11 0h6c2 2 4 4 7 0 3 2 5-4 5-1 10 4 15-2 18 2 0-1 6 2 6-2 0 0 6-2 6 1 1 6 12 2 12 0 1 3 4-3 7 2 2-2 5 2 5 0 1 5 4-5 6 0 2-1 4 2 6 0 1 3 1 0 5 0V0H0Z"
            fill="#ffc"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <div className="text-center md:text-left">
            <h2 className="font-protest text-4xl md:text-5xl text-brand-accent mb-4">
              From Passion to Plate
            </h2>
            <h3 className="font-fred text-4xl md:text-5xl uppercase tracking-wider mb-8">
              Our Story
            </h3>
            <p className="font-sans text-md mb-6 text-light/80">
              Welcome to Cylux Restaurant, where great taste meets unforgettable
              experiences. Nestled in a warm and inviting space, we bring people
              together over carefully crafted meals, refreshing drinks, and an
              atmosphere that feels just like home.
            </p>
            <p className="font-sans text-md mb-8 text-light/80">
              We believe dining is more than just food—it’s about connection,
              comfort, and quality. Our chefs use the freshest ingredients to
              create a perfect blend of local and continental dishes that
              satisfy every craving. Whether you’re here for a casual lunch, a
              cozy dinner, or a night out with friends, every detail is designed
              to make your experience exceptional.
            </p>
          </div>

          {/* Video Thumbnail Column */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            <div
              className="relative w-full h-full p-4 border-4 border-brand-accent/20 rounded-sm cursor-pointer group"
              onClick={() => setIsOpen(true)}
            >
              <Image
                src="/images/video-thumbnail.png" // your video thumbnail
                alt="About Cylux Restaurant video"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-sm transition-transform duration-300 "
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-brand-accent p-6 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.25v13.5l13.5-6.75L5.25 5.25z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Modal for YouTube player */}
            {isOpen && (
              <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                onClick={() => setIsOpen(false)}
              >
                <div
                  className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    className="w-full h-full"
                    // src="https://www.youtube.com/embed/2MdQWo9fHZs?autoplay=1"
                    src="https://www.youtube.com/embed/JZ5bDhv-D1M?autoplay=1
"
                    title="About Cylux Restaurant"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-black bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Leaf, Fish, Award } from "lucide-react";

const principles = [
  {
    icon: <Leaf size={40} className="text-brand-accent" />,
    title: "Fresh & Local",
    description:
      "We believe in the power of fresh, locally-sourced ingredients. Our menu changes seasonally to reflect the best of what our region has to offer.",
  },
  {
    icon: <Fish size={40} className="text-brand-accent" />,
    title: "Sustainable Sourcing",
    description:
      "We are committed to responsible and sustainable practices, from our choice of seafood to our partnerships with local farmers.",
  },
  {
    icon: <Award size={40} className="text-brand-accent" />,
    title: "Culinary Innovation",
    description:
      "While rooted in tradition, we are always exploring new techniques and flavor combinations to create a truly unique dining experience.",
  },
];

const Philosophy = () => {
  return (
    <section className="relative py-20 md:py-32 bg-background text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/img-15.jpg')" }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-play text-4xl md:text-5xl text-brand-accent mb-4">
          Our Guiding Principles
        </h2>
        <h3 className="font-fred text-4xl md:text-5xl uppercase tracking-wider mb-16">
          Our Philosophy
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          {principles.map((principle, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-6">{principle.icon}</div>
              <h4 className="font-serif text-2xl mb-4">{principle.title}</h4>
              <p className="font-sans text-white/70 max-w-sm">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

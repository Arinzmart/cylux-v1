import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] text-white">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={`${title} - CYLUX Restaurant`}
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
      <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center items-center text-center">
        <h1 className="font-fred mt-20 text-5xl md:text-5xl uppercase tracking-wider">
          {title}
        </h1>
        <p className="font-play text-2xl md:text-3xl text-brand-accent mt-4">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;

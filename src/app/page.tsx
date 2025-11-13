import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import SpecialMenu from "@/components/SpecialMenu";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import BackgroundImage from "@/components/BackgroundImage";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ScrollAnimation>
        <About />

        <Experience />
      </ScrollAnimation>
      <ScrollAnimation>
        <SpecialMenu />
      </ScrollAnimation>

      <ScrollAnimation>
        <Reservations />
      </ScrollAnimation>

      <ScrollAnimation>
        <Gallery />
      </ScrollAnimation>
      <ScrollAnimation>
        <BackgroundImage
          imageUrl="/images/bg-light-2.png"
          className="py-20 md:py-32"
          bgColor="black"
          opacity={60}
        >
          <Testimonials />
        </BackgroundImage>
      </ScrollAnimation>
      <Footer />
    </main>
  );
}

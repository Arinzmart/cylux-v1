import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Ambiance from "@/components/Ambiance";
import Location from "@/components/Location";
import Reservations from "@/components/Reservations";
import ScrollAnimation from "@/components/ScrollAnimation";
import BackgroundImage from "@/components/BackgroundImage";

const AboutPage = () => {
  return (
    <>
      <Header />
      <PageHero
        title="Our Story"
        subtitle="Crafting memories, one dish at a time."
        backgroundImage="/images/img-17.jpg"
      />
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <ScrollAnimation>
        <Ambiance />
      </ScrollAnimation>
      <ScrollAnimation>
        <Philosophy />
      </ScrollAnimation>

      <ScrollAnimation>
        <Location />
      </ScrollAnimation>

      <Footer />
    </>
  );
};

export default AboutPage;

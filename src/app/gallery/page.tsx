import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FilterableGallery from "@/components/FilterableGallery";
import ScrollAnimation from "@/components/ScrollAnimation";

const GalleryPage = () => {
  return (
    <>
      <Header />
      <PageHero
        title="Visual Journey"
        subtitle="A Feast for the Eyes"
        backgroundImage="/images/IMG_6767.png"
      />

      <FilterableGallery />

      <Footer />
    </>
  );
};

export default GalleryPage;

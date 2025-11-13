import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FullMenu from "@/components/FullMenu";
import ScrollAnimation from "@/components/ScrollAnimation";

const MenuPage = () => {
  return (
    <>
      <Header />
      <PageHero
        title="Our Menu"
        subtitle="A Taste of Perfection"
        backgroundImage="/images/dishes-on-table.jpg"
      />
      <ScrollAnimation>
        <FullMenu />
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default MenuPage;

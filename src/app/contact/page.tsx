import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import ScrollAnimation from "@/components/ScrollAnimation";

const ContactPage = () => {
  return (
    <>
      <Header />
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        backgroundImage="/images/bg-2.jpg"
      />

      <ContactSection />

      <Footer />
    </>
  );
};

export default ContactPage;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reservations from "@/components/Reservations";
import ScrollAnimation from "@/components/ScrollAnimation";

const ReservationsPage = () => {
  return (
    <>
      <Header />
      <PageHero
        title="Reservations"
        subtitle="Book Your Table"
        backgroundImage="/images/bg-2.jpg"
      />
      <ScrollAnimation>
        <Reservations />
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default ReservationsPage;

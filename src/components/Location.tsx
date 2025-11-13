import { MapPin, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section className="bg-background py-20 md:py-32 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-play text-4xl md:text-5xl text-brand-accent mb-4">
            Visit Us
          </h2>
          <h3 className="font-protest text-4xl md:text-5xl uppercase tracking-wider mb-8">
            Our Location
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <InfoCard
              icon={<MapPin size={28} className="text-brand-accent" />}
              title="Address"
              line1="Along Vadekeiya street"
              line2="High-level, makurdi, Benue state"
            />
            <InfoCard
              icon={<Phone size={28} className="text-brand-accent" />}
              title="Phone"
              line1="General Inquiries: +234 807 334 5636"
              line2="Reservations: 0807 334 5636"
            />
            <InfoCard
              icon={<Mail size={28} className="text-brand-accent" />}
              title="Email"
              line1="General: info@cyluxresturant.com"
              line2="Reservations: reservations@cyluxresturant.com"
            />
          </div>

          {/* Map */}
          <div className="h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.906110111559!2d-0.09436238422964177!3d51.51495917963641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b531a437331%3A0x42f21367073215a3!2sBarbican%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon,
  title,
  line1,
  line2,
}: {
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2: string;
}) => (
  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 p-6 bg-white/5 rounded-lg border border-white/10 shadow-md hover:shadow-lg hover:border-white/20 transition-all duration-300">
    <div className="bg-brand-accent/10 p-4 rounded-full flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-serif text-2xl mb-2 text-white">{title}</h4>
      <p className="font-sans text-white/70">{line1}</p>
      <p className="font-sans text-white/70">{line2}</p>
    </div>
  </div>
);

export default Location;

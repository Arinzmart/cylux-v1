import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-background text-white pt-20 pb-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/img-pattern.svg')" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Restaurant Info */}
          <div className="md:col-span-1">
            <h3 className="font-fred text-4xl text-brand-accent mb-4">CYLUX</h3>
            <p className="font-sans text-sm text-white/60 mb-6">
              Experience culinary excellence in an atmosphere of sophisticated
              elegance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/share/v/17G1xVJSp7/"
                className="text-white/70 hover:text-brand-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/p/DQ-Hn3EjEm9/?igsh=YzAyMDM1MGJkZA=="
                className="text-white/70 hover:text-brand-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="text-sm space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/menu">Menu</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/reservations">Reservations</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl mb-6">Contact Info</h4>
            <div className="text-sm space-y-4">
              <ContactItem icon={<MapPin size={16} />}>
                Allong vandekeiya street
                <br />
                high-level, makurdi.
              </ContactItem>
              <ContactItem icon={<Phone size={16} />}>
                0807 334 5636
              </ContactItem>
              <ContactItem icon={<Mail size={16} />}>
                info@cyluxresturant.com
              </ContactItem>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl mb-6">Opening Hours</h4>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>6PM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>6PM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>5PM - 9PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="font-sans text-sm text-white/50">
            © 2024 CYLUX Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link href={href}>
      <span className="font-sans text-white/70 hover:text-brand-accent transition-colors">
        {children}
      </span>
    </Link>
  </li>
);

const ContactItem = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex items-start">
    <span className="text-brand-accent mt-1 mr-3 shrink-0">{icon}</span>
    <p className="font-sans text-white/70">{children}</p>
  </div>
);

export default Footer;

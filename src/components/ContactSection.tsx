"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const phoneNumber = "2348073345636"; // your WhatsApp number (no + or spaces)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Cylux Restaurant,%0A%0AI would like to make an enquiry:%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;

    // App deep link (tries to open WhatsApp app)
    const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    // Web fallback
    const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Try opening the WhatsApp app first
    const newWindow = window.open(whatsappAppUrl, "_blank");

    // If the browser blocks or fails to open WhatsApp, fallback to web
    setTimeout(() => {
      if (
        !newWindow ||
        newWindow.closed ||
        typeof newWindow.closed === "undefined"
      ) {
        window.open(whatsappWebUrl, "_blank");
      }
    }, 700);
  };

  return (
    <section
      className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/lanscape-bp.png')" }}
    >
      <div className="absolute inset-0 bg-background/90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden md:grid md:grid-cols-5">
          {/* Info Section */}
          <div className="md:col-span-2 md:col-start-4 bg-black/30 p-8 md:p-12 text-white">
            <h2 className="font-protest text-4xl text-brand-accent mb-2">
              Contact Info
            </h2>
            <h3 className="font-serif text-3xl uppercase tracking-widest mb-8">
              Get in Touch
            </h3>
            <div className="space-y-8">
              <InfoItem
                icon={<MapPin size={20} className="text-brand-accent" />}
                title="Our Location"
                value="Allong Vandekeiya Street, High-Level, Makurdi."
              />
              <InfoItem
                icon={<Mail size={20} className="text-brand-accent" />}
                title="Email Us"
                value="info@cyluxresturant.com"
              />
              <InfoItem
                icon={<Phone size={20} className="text-brand-accent" />}
                title="Call Us"
                value="0807 334 5636"
              />
              <InfoItem
                icon={<Clock size={20} className="text-brand-accent" />}
                title="Opening Hours"
                value="Mon-Sat: 11am - 10pm / Sun: 12pm - 9pm"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="md:col-span-3 md:row-start-1 md:col-start-1 p-8 md:p-12">
            <h2 className="font-play text-4xl text-brand-accent mb-2">
              Send a Message
            </h2>
            <h3 className="font-protest text-3xl uppercase tracking-widest text-white mb-8">
              We&apos;re Here to Help
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors resize-none"
                required
              ></textarea>
              <div className="text-left">
                <button
                  type="submit"
                  className="bg-brand-accent text-background font-sans font-bold tracking-widest uppercase px-12 py-4 rounded-md hover:bg-opacity-80 transition-all"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h4 className="font-serif text-xl text-white/90">{title}</h4>
      <p className="font-sans text-white/70">{value}</p>
    </div>
  </div>
);

export default ContactSection;

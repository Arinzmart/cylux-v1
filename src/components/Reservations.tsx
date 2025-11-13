"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { UtensilsCrossed } from "lucide-react";

// Define the type for the reservation form data
interface ReservationData {
  name: string;
  email: string;
  guests: string;
  date: string;
  time: string;
  requests: string;
}

const Reservations: React.FC = () => {
  // Initialize the state with the defined interface
  const [formData, setFormData] = useState<ReservationData>({
    name: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    requests: "",
  });

  // --- IMPORTANT: WhatsApp number used by the user ---
  const whatsappNumber: string = "2347068787629";

  // Handler for all input changes, explicitly typing the event
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission and open WhatsApp, explicitly typing the event
  const handleReservationSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (whatsappNumber === "YOUR_PHONE_NUMBER") {
      // Added an 'alert' replacement logic (though you provided a number, this is good practice)
      console.error(
        "Configuration Error: Please set the restaurant's WhatsApp number in the component code."
      );
      return;
    }

    const { name, email, guests, date, time, requests } = formData;

    // NOTE: Using \n for newlines here is cleaner, as encodeURIComponent handles it automatically.
    // Construct the URL-encoded message
    const rawMessage =
      `*** NEW TABLE RESERVATION ***\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Guests:* ${guests}\n` +
      `*Date:* ${date}\n` +
      `*Time:* ${time}\n` +
      `*Special Requests:* ${requests || "None"}`;

    const messageText: string = encodeURIComponent(rawMessage);

    // Construct the full WhatsApp URL
    const url: string = `https://wa.me/${whatsappNumber}?text=${messageText}`;

    // --- CRITICAL DEBUGGING STEP ---
    // 1. Check the browser console when you click 'Book Now'
    console.log("1. Form Data Submitted:", formData);
    console.log("2. WhatsApp URL Generated (Check the text=... part):", url);
    // ---------------------------------

    // Open the link in a new tab
    window.open(url, "_blank")?.focus();
  };

  return (
    <section
      id="reservations"
      className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/interior-ls.png')" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-1 gap-16 items-start">
          <div className="bg-background/50 border border-white/10 p-8 md:p-12 rounded-lg text-white">
            <h2 className="font-play text-4xl md:text-5xl text-brand-accent mb-4 text-center">
              Book Your Table
            </h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8 text-center">
              We welcome you to reserve your table for an unforgettable dining
              experience.
            </p>
            {/* Set the onSubmit handler */}
            <form
              className="text-sm space-y-6 max-w-lg mx-auto"
              onSubmit={handleReservationSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name" // Linked to state key
                  placeholder="Your Name"
                  value={formData.name} // Controlled component value
                  onChange={handleChange} // Controlled component handler
                  required
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                />
                <input
                  type="email"
                  name="email" // Linked to state key
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <input
                  type="number"
                  name="guests" // Linked to state key
                  placeholder="No of Guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                />
                <input
                  type="date"
                  name="date" // Linked to state key
                  placeholder="Select Date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                />
                <input
                  type="time"
                  name="time" // Linked to state key
                  placeholder="Select Time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <textarea
                name="requests" // Linked to state key
                placeholder="Special Requests (optional)"
                rows={4}
                value={formData.requests}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors resize-none"
              ></textarea>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-brand-accent text-background font-fred font-bold tracking-widest uppercase px-8 py-4 rounded-md hover:bg-opacity-80 transition-all"
                >
                  Book Now (via WhatsApp)
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;

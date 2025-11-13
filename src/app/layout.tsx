import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Cylux Restaurant",
  description: "Where great taste meets unforgettable experiences.",
  icons: {
    icon: "/images/cylux-logo.png", // can also be /favicon.png or /icon.svg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-light">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

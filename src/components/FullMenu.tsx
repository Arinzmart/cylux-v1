"use client";
import Image from "next/image";
import { foodMenu } from "@/app/menuData";

// --- MENU COMPONENTS ---

type MenuItemProps = {
  name: string;
  description?: string;
  price: number;
};

const MenuItem = ({ name, description, price }: MenuItemProps) => (
  <div className="border-b border-white/10 py-3">
    <div className="flex justify-between items-baseline">
      <h4 className="font-serif text-sm text-white">{name}</h4>
      <p className="font-kranky text-sm  bg-brand-accent px-4 py-1 text-background  shrink-0 pl-4 ">
        ₦{price.toLocaleString()}
      </p>
    </div>
    {description && <p className="text-sm text-white/60">{description}</p>}
  </div>
);

const MenuCategory = ({
  title,
  image,
  items,
}: {
  title: string;
  image: string;
  items: MenuItemProps[];
}) => (
  <div className="mb-16 animate-fade-in">
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-1 relative h-64 md:h-full rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="font-fred text-xl text-white text-center">{title}</h3>
        </div>
      </div>
      <div className="md:col-span-2">
        <h3 className="font-fred text-3xl text-brand-accent mb-6">{title}</h3>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FullMenu = () => {
  return (
    <section id="menu" className="bg-background py-20 md:py-32 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {foodMenu.map((menu) => (
            <MenuCategory
              key={menu.category}
              title={menu.category}
              image={menu.image}
              items={menu.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullMenu;

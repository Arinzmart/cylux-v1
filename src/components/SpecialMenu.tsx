import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { foodMenu } from "@/app/menuData";

// --- MENU COMPONENTS ---

type MenuItemProps = {
  name: string;
  description?: string;
  price: number;
};

const MenuItem = ({ name, description, price }: MenuItemProps) => (
  <div className="py-3">
    <div className="flex items-baseline">
      <h4 className="font-serif text-sm mb-1 shrink-1  pr-4">{name}</h4>
      <div className="flex-grow border-b border-dashed border-white/20"></div>
      <p className="font-kranky text-sm  bg-brand-accent px-2 py-1 text-background shrink-0 ">
        ₦{price.toLocaleString()}
      </p>
    </div>
    {description && <p className="text-sm text-white/60 pt-1">{description}</p>}
  </div>
);

const MenuCategory = ({
  title,
  items,
}: {
  title: string;
  items: MenuItemProps[];
}) => (
  <div>
    <h3 className="font-fred text-2xl text-brand-accent mb-4">{title}</h3>
    <div className="space-y-4">
      {items.slice(0, 8).map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const SpecialMenu = () => {
  const highlightedCategoryNames = [
    "MAIN DISH (Rice)",
    "BREAKFAST",
    "HOT APPETIZER",
  ];
  const highlightedCategories = foodMenu.filter((category) =>
    highlightedCategoryNames.includes(category.category)
  );

  return (
    <section
      id="menu"
      className="relative bg-cover bg-center py-20 md:py-32 text-white"
      style={{ backgroundImage: "url('/images/section-bg-6-large-4.jpeg')" }}
    >
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/images/img-pattern.svg')" }}
      ></div> */}
      <div className="absolute inset-x-0 top-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
          <path
            d="M0 0v47.6l5-2c1 0 11 3 12 0 2 3 6-3 6 0 0-4 12 3 12 0 0 3 15-1 17 0 2-2 5-1 6 0 0-2 6 2 6 0s2 4 4 0c5 2 12-3 16 0 2-2 4-3 4 0 0 2 6-1 6 0 1 4 15-2 17 0h7c0 1 3-3 6 0h17c2 2 3 1 6 0h6c1-2 21-1 24 0 2 1 4 2 6 0 0-1 22 4 24 0 0 0 5-3 5 0 2-2 10 2 12 0 2 2 6 1 6 0 2 3 4-2 6 0 1 0 25-2 25 1l10-1c3 1 6 6 7 0 1 5 4-2 6 0 2-2 4 3 5 0h12c6 1 36 2 36 0 0 2 3 0 6 0h6c5-2 7 4 11 0 2 0 15 2 17 0h13c3-4 5 1 7 0h29c0-3 6 0 6 0h5c0 2 16-1 18 0 1 4 9-1 12 0s6-2 6 0c8-2 3 4 13 0h10c3 4 19 1 19 0 2 0 21 1 23-1 1 4 3-1 6 1 1 2 11-1 12-1 3 3 9 0 12 1 3-4 6 1 6 0h6c0-3 5 1 6-1 0 3 2 1 4 1 3 4 10-1 13 0 3-2 6-1 6 0 2 2 2 0 6 0 1-2 6 2 6 0 2 0 4 5 6 0h18c2 3 4 1 6 0l6-1c3 2 12 3 17 1 14 3 18 1 24 0 2-1 3 3 5 0 6 2 10-1 16 0 1 3 6 0 9 0 0-2 3 2 5 0 6-6 8 7 13 0 0-2 5 2 5 0 3 3 10 0 10 0 1 2 5-2 8 0 3-1 8 3 12 0h6c2 1 10 4 12 0h6c1-1 5 2 6 0 1 2 4-1 6 0 0-2 5 3 6-1 2 1 6 5 5 1 1 1 3-2 6 0 2-1 5 3 6 0 0 1 6 2 6 0 2 3 4-4 6 0 0-2 3 2 6 0 3 0 6 3 6 0 5 3 8-1 13 0 3-4 6 1 6 0h5c0-1 9 2 12 0 1-1 9 3 11 0h6c2 2 4 4 7 0 3 2 5-4 5-1 10 4 15-2 18 2 0-1 6 2 6-2 0 0 6-2 6 1 1 6 12 2 12 0 1 3 4-3 7 2 2-2 5 2 5 0 1 5 4-5 6 0 2-1 4 2 6 0 1 3 1 0 5 0V0H0Z"
            // fill="#FFC700"
            fill="#fffaed"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-protest text-4xl md:text-5xl text-brand-accent mb-4">
            Taste of Luxury
          </h2>
          <h3 className="font-fred text-4xl md:text-5xl uppercase tracking-wider mb-8">
            Our Menu Highlights
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16 max-w-7xl mx-auto">
          {highlightedCategories.map((menu) => (
            <MenuCategory
              key={menu.category}
              title={menu.category}
              items={menu.items}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/menu">
            <span className="inline-block bg-transparent border border-brand-accent text-brand-accent font-fred  tracking-widest  px-4 py-4 text-md hover:bg-brand-accent hover:text-background transition-all group">
              View Full Menu
              <ArrowRight className="inline-block ml-2 transform group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;

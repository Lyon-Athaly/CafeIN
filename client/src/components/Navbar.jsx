import { Search, ShoppingCart } from "lucide-react";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 z-50 bg-primary-dark/90 backdrop-blur-sm border-b border-primary w-full">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#"className="text-primary font-black italic text-3xl tracking-wide">
          Cafe<span className="text-white">IN</span>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex gap-5 text-white font-medium text-lg tracking-wide">
          {navLinks.map((link, index) => (
            <a href={link.href} key={index} className="px-4 py-2 font-light text-bold rounded-full hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>

        {/* Search and Cart Icons */}
        <div className="flex items-center gap-6 text-white">
          <button >
            <Search className="hover:text-primary" />
          </button>

          <button>
            <ShoppingCart className="hover:text-primary"/>
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;

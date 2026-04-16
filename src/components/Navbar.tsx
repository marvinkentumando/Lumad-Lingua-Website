import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "MISSION", path: "/" },
    { name: "PARTNERS", path: "/about" },
    { name: "HELP CENTER", path: "/learn" },
    { name: "CONTACT", path: "/docs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl font-bold text-black tracking-tight">
              Lumad Lingua
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] font-extrabold tracking-[0.15em] transition-colors relative ${
                  location.pathname === link.path && link.name === "MISSION"
                    ? "text-gold-700 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gold-500"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="/learn" className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 rounded-full text-xs font-extrabold tracking-wider shadow-lg transition-all active:scale-95">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black/60 hover:text-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-black/5 px-4 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-xs font-extrabold tracking-widest text-black/60 hover:text-black"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/learn"
            onClick={() => setIsOpen(false)}
            className="bg-gold-500 text-black px-6 py-3 rounded-full text-xs font-extrabold text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

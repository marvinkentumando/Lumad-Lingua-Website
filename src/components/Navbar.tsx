import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Learning", path: "/learn" },
    { name: "Documentation", path: "/docs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest-900/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-gold-500 to-orange-500 flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-all duration-300">
              🌿
            </div>
            <span className="font-display text-2xl font-semibold text-gold-500 tracking-tight">
              Lumad Lingua
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-white bg-white/10 shadow-sm"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/learn" className="btn-3d-gold ml-6 !py-2.5 !px-6 !text-sm">
              Start Learning →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/60 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-forest-800 border-b border-white/10 px-4 py-4 flex flex-col gap-2"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                location.pathname === link.path
                  ? "text-white bg-white/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/learn"
            onClick={() => setIsOpen(false)}
            className="btn-3d-gold mt-2 text-center"
          >
            Start Learning →
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sun, Moon, Map } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-bg/80 dark:bg-forest-900/80 backdrop-blur-md border-b border-cream-brd/30 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gold-400 dark:bg-gold-500/20 text-forest-900 dark:text-gold-400 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <Map size={24} />
            </div>
            <span className="font-display text-2xl font-bold text-cream-text dark:text-white tracking-tight">
              Lumad Lingua
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={scrollToTop}
                className={`text-[11px] font-extrabold tracking-[0.15em] transition-colors relative ${
                  location.pathname === link.path
                    ? "text-gold-700 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gold-500"
                    : "text-cream-text3 hover:text-cream-text"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-cream-bg border border-cream-brd/50 text-cream-text2 hover:text-gold-600 hover:border-gold-500 transition-all dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:text-gold-500 overflow-hidden relative group"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'light' ? 0 : 180, scale: theme === 'light' ? 1 : 0.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </motion.div>
            </button>
            <Link to="/waitlist" onClick={scrollToTop} className="btn-sm">
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-cream-text2 dark:text-white/60 hover:text-gold-600 dark:hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-forest-800 border-b border-black/5 dark:border-white/10 px-4 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-extrabold tracking-widest text-cream-text3 uppercase">Menu</span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-cream-bg dark:bg-white/5 text-cream-text2 dark:text-white/60"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => { setIsOpen(false); scrollToTop(); }}
              className="text-xs font-extrabold tracking-widest text-cream-text3 dark:text-white/40 hover:text-cream-text dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/waitlist"
            onClick={() => { setIsOpen(false); scrollToTop(); }}
            className="bg-gold-500 text-black px-6 py-3 rounded-full text-xs font-extrabold text-center"
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}

import { Link } from "react-router-dom";
import { Globe, Users } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-forest-900 text-white py-12 px-4 border-t border-white/5 mx-4 mb-4 rounded-[18px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-display text-lg font-bold text-gold-500">
            Lumad Lingua
          </div>
          <p className="text-[10px] font-bold text-white/30 tracking-widest uppercase">
            © 2026 Lumad Lingua · Brand Guide v1.0
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-[10px] font-extrabold text-white/40 tracking-widest uppercase text-center">
          <Link to="/about" onClick={scrollToTop} className="hover:text-gold-500 transition-colors">About</Link>
          <Link to="#" onClick={scrollToTop} className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
          <Link to="#" onClick={scrollToTop} className="hover:text-gold-500 transition-colors">Terms of Service</Link>
          <Link to="#" onClick={scrollToTop} className="hover:text-gold-500 transition-colors">Community Guidelines</Link>
          <Link to="#" onClick={scrollToTop} className="hover:text-gold-500 transition-colors">Cultural Protocols</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <Globe size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <Users size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

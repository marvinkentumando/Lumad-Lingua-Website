import { Link } from "react-router-dom";
import { Globe, Users } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [showLang, setShowLang] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-forest-900 text-white py-12 px-4 border-t border-white/5 mx-4 mb-4 rounded-[18px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link to="/" onClick={scrollToTop} className="font-display text-lg font-bold text-gold-500 hover:text-gold-400 transition-colors">
            Lumad Lingua
          </Link>
          <p className="text-[10px] font-bold text-white/30 tracking-widest uppercase">
            © 2026 Lumad Lingua · Brand Guide v1.0
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-[10px] font-extrabold text-white/40 tracking-widest uppercase text-center">
          <Link to="/about" onClick={scrollToTop} className="hover:text-gold-500 transition-colors">About</Link>
          <Link to="/legal#privacy" onClick={scrollToTop} className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
          <Link to="/legal#terms" onClick={scrollToTop} className="hover:text-gold-500 transition-colors">Terms of Service</Link>
          <Link to="/legal#community" onClick={scrollToTop} className="hover:text-gold-500 transition-colors">Community Guidelines</Link>
          <Link to="/legal#protocols" onClick={scrollToTop} className="hover:text-gold-500 transition-colors">Cultural Protocols</Link>
        </div>

        <div className="flex items-center gap-4 relative">
          <div className="relative">
            <button 
              onClick={() => setShowLang(!showLang)}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors border border-white/10"
              title="Change Language"
            >
              <Globe size={18} />
            </button>
            {showLang && (
              <div className="absolute bottom-full right-0 mb-4 p-4 bg-forest-800 border border-white/10 rounded-2xl shadow-2xl min-w-[160px] animate-in fade-in slide-in-from-bottom-2 duration-300 z-50">
                <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-3 px-2">Select Dialect</div>
                <button className="w-full text-left p-2 rounded-lg bg-gold-500/10 text-gold-500 font-bold text-xs">Mansaka (Default)</button>
                <button className="w-full text-left p-2 rounded-lg text-white/40 hover:text-white font-bold text-xs transition-colors">Mandaya</button>
                <button className="w-full text-left p-2 rounded-lg text-white/40 hover:text-white font-bold text-xs transition-colors">Kamayo</button>
              </div>
            )}
          </div>
          
          <Link 
            to="/docs#who-validates-my-submissions"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors border border-white/10"
            title="Contributors"
          >
            <Users size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}


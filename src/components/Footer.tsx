import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-forest-900 border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-gold-500 to-orange-500 flex items-center justify-center text-base">
              🌿
            </div>
            <span className="font-display text-lg font-semibold text-gold-500">
              Lumad Lingua
            </span>
          </Link>
          <p className="text-white/40 text-sm max-w-md leading-relaxed">
            Preserving and revitalizing endangered Lumad languages through technology. 
            Built with and for the indigenous communities of Mindanao.
          </p>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-white/40">
            <li><Link to="/learn" className="hover:text-gold-500 transition-colors">Learning Module</Link></li>
            <li><Link to="/docs" className="hover:text-gold-500 transition-colors">Documentation Archive</Link></li>
            <li><Link to="/about" className="hover:text-gold-500 transition-colors">About the Project</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold mb-4">Community</h4>
          <ul className="space-y-2 text-sm text-white/40">
            <li><a href="#" className="hover:text-gold-500 transition-colors">Mansaka People</a></li>
            <li><a href="#" className="hover:text-gold-500 transition-colors">Mandaya People</a></li>
            <li><a href="#" className="hover:text-gold-500 transition-colors">NCIP Partners</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 font-bold uppercase tracking-widest">
        <p>© 2026 LUMAD LINGUA — BSIT CAPSTONE, DNSC</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

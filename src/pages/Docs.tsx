import { motion } from "motion/react";
import { Search, MapPin, Mic, BookOpen, Filter, Play, ArrowRight, Map } from "lucide-react";

export default function Docs() {
  const recordings = [
    { title: "Morning Greeting", lang: "Mansaka", speaker: "Elder Lumayao", location: "Kaligutan", date: "Mar 2026", duration: "0:45" },
    { title: "The Spirit of the Forest", lang: "Mandaya", speaker: "Bae Mandaya", location: "New Bataan", date: "Feb 2026", duration: "2:12" },
    { title: "Counting to Ten", lang: "Mansaka", speaker: "Datu Bago", location: "Maco", date: "Jan 2026", duration: "1:05" },
  ];

  return (
    <div className="bg-cream-bg min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="micro-label mb-4 block">Documentation Archive</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-10 text-cream-text">Explore the <span className="text-brand-green">Living</span> Archive</h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-cream-text3 group-focus-within:text-brand-green transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search words, recordings, places..." 
                className="w-full bg-white dark:bg-white/5 border border-cream-brd/50 dark:border-white/10 rounded-[20px] py-5 pl-14 pr-6 text-cream-text dark:text-white placeholder:text-cream-text3 focus:outline-none focus:border-brand-green/50 focus:bg-white/10 transition-all shadow-sm"
              />
            </div>
            <button className="btn-secondary !py-5 flex items-center gap-3 px-8">
              <Filter size={18} />
              Advanced Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream-brd/20 dark:border-white/5">
              <h2 className="font-display text-2xl font-semibold text-cream-text">Recent Recordings</h2>
              <div className="flex items-center gap-2 text-[10px] font-extrabold text-cream-text3 uppercase tracking-widest">
                Showing <span className="text-cream-text">3</span> of 47
              </div>
            </div>

            {recordings.map((rec, i) => (
              <motion.div
                key={rec.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[32px] bg-white dark:bg-white/5 border border-cream-brd/20 dark:border-white/5 hover:bg-gold-50 dark:hover:bg-white/10 hover:border-brand-green/20 transition-all cursor-pointer relative overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <Mic size={28} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold mb-2 text-cream-text group-hover:text-brand-green transition-colors">{rec.title}</h3>
                      <div className="flex flex-wrap gap-4">
                        <span className="px-3 py-1 rounded-lg bg-brand-green/10 text-brand-green text-[10px] font-extrabold uppercase tracking-widest">{rec.lang}</span>
                        <span className="text-xs font-bold text-cream-text2 flex items-center gap-1.5">
                          <MapPin size={14} className="text-cream-text3" /> {rec.location}
                        </span>
                        <span className="text-xs font-bold text-cream-text2 flex items-center gap-1.5">
                          <Play size={14} className="text-cream-text3" /> {rec.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:flex-col md:items-end gap-3">
                    <span className="text-[10px] font-extrabold text-cream-text3 uppercase tracking-widest">{rec.date}</span>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs font-bold text-cream-text2">{rec.speaker}</div>
                        <div className="text-[9px] font-extrabold text-cream-text3 uppercase tracking-widest">Speaker</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-cream-brd/20 dark:border-white/10 flex items-center justify-center text-lg shadow-sm">
                        👴🏽
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <button className="w-full py-5 rounded-[24px] border border-dashed border-cream-brd dark:border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-cream-text3 hover:border-gold-500 hover:text-gold-700 transition-all">
              Load More Recordings
            </button>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="card-cream p-8 overflow-hidden relative group">
              <div className="absolute top-[-20%] right-[-20%] p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-cream-text">
                <Map size={200} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-cream-text">Geo-Tag Map</h3>
              <p className="text-cream-text2 text-sm font-semibold mb-8 leading-relaxed">
                Visualize the distribution of recordings across Mindanao with our interactive heatmap.
              </p>
              <button className="btn-primary w-full py-4 !bg-brand-green !shadow-[0_5px_0_#226636]">
                Open Map View
              </button>
            </div>

            <div className="card-cream p-8 relative overflow-hidden">
               <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl" />
              <h3 className="font-display text-2xl font-bold mb-4 text-cream-text">Dictionary</h3>
              <p className="text-cream-text2 text-sm font-semibold mb-8 leading-relaxed">
                Search over 200+ validated dictionary entries with phonetic transcriptions.
              </p>
              <button className="btn-secondary w-full flex items-center justify-center gap-3 py-4">
                <BookOpen size={20} />
                Open Dictionary
              </button>
            </div>
            
            <div className="p-8 rounded-[32px] bg-brand-green/5 dark:bg-brand-green/10 border border-brand-green/20">
              <h3 className="font-display text-xl font-bold mb-4 text-brand-green">Contribute</h3>
              <p className="text-cream-text2 text-sm font-semibold mb-6 leading-relaxed">
                Are you a community member? Help us preserve your language.
              </p>
              <button className="text-xs font-extrabold text-cream-text hover:text-brand-green uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Learn how to contribute <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { Search, MapPin, Mic, BookOpen, Filter, Play, ArrowRight, Map } from "lucide-react";

export default function Docs() {
  const recordings = [
    { title: "Morning Greeting", lang: "Mansaka", speaker: "Elder Lumayao", location: "Kaligutan", date: "Mar 2026", duration: "0:45" },
    { title: "The Spirit of the Forest", lang: "Mandaya", speaker: "Bae Mandaya", location: "New Bataan", date: "Feb 2026", duration: "2:12" },
    { title: "Counting to Ten", lang: "Mansaka", speaker: "Datu Bago", location: "Maco", date: "Jan 2026", duration: "1:05" },
  ];

  return (
    <div className="bg-cream-bg dark:bg-forest-950 text-cream-text dark:text-white/90 min-h-screen font-sans selection:bg-gold-200 transition-colors duration-300">
      {/* Hero Section - Synchronized Editorial Style */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden bg-white dark:bg-forest-900 transition-colors duration-500">
        {/* Soft Glow Decoration */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-radial-[circle_at_70%_40%] from-gold-500/10 to-transparent pointer-events-none blur-3xl opacity-60 dark:opacity-20" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-2xl text-center lg:text-left order-2 lg:order-1"
          >
            <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">Documentation Archive</span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[80px] font-black mb-8 leading-[1.1] lg:leading-[80px] tracking-tight text-hero-heading dark:text-white">
              Explore the <span className="text-gold-600 italic">Living</span> Archive
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-hero-body dark:text-white/60 font-medium leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Access geo-tagged field recordings and validated linguistic artifacts from the 18 Lumad communities of Mindanao.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full px-0 sm:px-4 lg:px-0"
          >
            {/* Thematic Visual - Square & Balanced */}
            <div className="relative w-full aspect-square overflow-hidden mt-4 sm:mt-8 lg:mt-0 bg-white/20 border border-cream-brd/50 rounded-[40px] flex items-center justify-center shadow-lg backdrop-blur-sm group hover:bg-forest-900 transition-all duration-500">
              <Mic size={160} className="text-gold-500/40 group-hover:text-gold-500 transition-colors" />
              <div className="absolute inset-x-0 bottom-12 text-center text-xs font-black uppercase tracking-[0.4em] text-gold-700/30 group-hover:text-white/30">Linguistic Vault</div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-16 space-y-16">
          
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <section className="lg:col-span-8 space-y-4 lg:space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-cream-brd/20 dark:border-white/5 gap-4"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-semibold text-cream-text dark:text-white leading-tight text-left">Recent Recordings</h2>
            <div className="flex items-center gap-2 text-[10px] font-extrabold text-cream-text3 dark:text-white/40 uppercase tracking-widest whitespace-nowrap">
              Showing <span className="text-cream-text dark:text-white">3</span> of 47
            </div>
          </motion.div>

            {recordings.map((rec, i) => (
              <motion.div
                key={rec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
          </section>

          <section className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-cream p-8 overflow-hidden relative group"
            >
              <div className="absolute top-[-20%] right-[-20%] p-4 opacity-5 group-hover:opacity-100 transition-opacity duration-500 text-cream-text transform rotate-12">
                <Map size={200} />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4 text-cream-text dark:text-white">Geo-Tag Map</h2>
              <p className="text-cream-text2 dark:text-white/60 text-sm font-semibold mb-8 leading-relaxed">
                Visualize the distribution of recordings across Mindanao with our interactive heatmap.
              </p>
              <button className="btn-primary w-full py-4 !bg-brand-green dark:!bg-gold-500 !text-white dark:!text-forest-900 !shadow-[0_5px_0_#226636] dark:!shadow-[0_5px_0_#9a7d0a]">
                Open Map View
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-cream p-8 relative overflow-hidden"
            >
               <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl" />
              <h2 className="font-display text-2xl font-bold mb-4 text-cream-text">Dictionary</h2>
              <p className="text-cream-text2 text-sm font-semibold mb-8 leading-relaxed">
                Search over 200+ validated dictionary entries with phonetic transcriptions.
              </p>
              <button className="btn-secondary w-full flex items-center justify-center gap-3 py-4">
                <BookOpen size={20} />
                Open Dictionary
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[32px] bg-brand-green/5 dark:bg-brand-green/10 border border-brand-green/20"
            >
              <h2 className="font-display text-2xl font-bold mb-4 text-brand-green leading-tight">Contribute</h2>
              <p className="text-cream-text2 text-sm font-semibold mb-6 leading-relaxed">
                Are you a community member? Help us preserve your language.
              </p>
              <button className="text-xs font-extrabold text-cream-text hover:text-brand-green uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Learn how to contribute <ArrowRight size={14} />
              </button>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}

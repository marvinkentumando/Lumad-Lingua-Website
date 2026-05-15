import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Mic, BookOpen, Filter, Play, ArrowRight, Map, Rocket, GraduationCap, HeartHandshake, ShieldCheck, Wrench, ChevronRight, X, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Article {
  id: string;
  title: string;
  category: string;
  content: string[];
}

export default function Docs() {
  const location = useLocation();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const articles: Article[] = [
    {
      id: "how-do-i-record-a-word",
      title: "How do I record a word?",
      category: "Getting Started",
      content: [
        "1. Ensure you are in a quiet environment to minimize background noise.",
        "2. Click the 'Record' button on the mobile app's main dashboard.",
        "3. Speak the word clearly, maintaining a distance of about 6 inches from the microphone.",
        "4. Provide the correct spelling if known, and select the specific dialect (e.g., Mansaka).",
        "5. Add a brief context or example sentence if possible."
      ]
    },
    {
      id: "who-validates-my-submissions",
      title: "Who validates my submissions?",
      category: "For Contributors",
      content: [
        "Every submission undergoes a multi-tier validation process:",
        "Tier 1: Community Peer Review - Other learners and native speakers provide initial feedback.",
        "Tier 2: Linguistic Stewards - Domain experts verified by DNSC check for phonetic accuracy.",
        "Tier 3: Elder Council - Final oversight for cultural sensitivity and sacred terminology."
      ]
    },
    {
      id: "cultural-handbook",
      title: "Cultural Protocols Handbook",
      category: "Protocols",
      content: [
        "The Lumad Lingua platform operates under 'Deep Stewardship'.",
        "Respecting the Sacred: Certain terms related to rituals are marked as 'Restricted' and require elder permission to view.",
        "Intellectual Property: All rights to linguistic data remain with the respective indigenous communities.",
        "Dignity first: We avoid exoticizing the speakers; they are modern guardians of an ancient legacy."
      ]
    },
    {
      id: "understanding-the-ascent",
      title: "Understanding the Ascent Levels",
      category: "Getting Started",
      content: [
        "The Ascent is a 5-tier journey of linguistic proficiency:",
        "Level 1: Seed - Master basic greetings and essential nouns.",
        "Level 2: Root - Understand verb conjugations and basic sentence structures.",
        "Level 3: Stem - Engage in simple situational dialogues.",
        "Level 4: Leaf - Capable of storytelling and philosophical expression.",
        "Level 5: Tree - Fully proficient and capable of acting as a community mentor."
      ]
    }
  ];

  const recordings = [
    { title: "Morning Greeting", lang: "Mansaka", speaker: "Elder Lumayao", location: "Kaligutan", date: "Mar 2026", duration: "0:45" },
    { title: "The Spirit of the Forest", lang: "Mandaya", speaker: "Bae Mandaya", location: "New Bataan", date: "Feb 2026", duration: "2:12" },
    { title: "Counting to Ten", lang: "Mansaka", speaker: "Datu Bago", location: "Maco", date: "Jan 2026", duration: "1:05" },
  ];

  useEffect(() => {
    // Check for hash in URL to open specific article
    const hash = location.hash.replace("#", "");
    if (hash) {
      const article = articles.find(a => a.id === hash);
      if (article) setSelectedArticle(article);
    }
  }, [location]);

  return (
    <div className="bg-cream-bg dark:bg-forest-950 text-cream-text dark:text-white/90 min-h-screen font-sans selection:bg-gold-200 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden bg-white dark:bg-forest-900 transition-colors duration-500">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-cream-bg dark:from-forest-950 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-[60%] h-full bg-radial-[circle_at_70%_40%] from-gold-500/10 to-transparent pointer-events-none blur-3xl opacity-60 dark:opacity-20" />
        
        <div className="max-w-7xl mx-auto w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">Knowledge Hub</span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[80px] font-black mb-8 leading-[1.1] tracking-tight text-hero-heading dark:text-white">
              The Living <span className="text-gold-600 italic">Archive</span>
            </h1>
            
            <div className="max-w-2xl mx-auto relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-cream-text3 group-focus-within:text-gold-600 transition-colors" size={20} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides, recordings, or protocols..." 
                className="w-full bg-cream-bg/50 dark:bg-white/5 border border-cream-brd/50 dark:border-white/10 rounded-full py-6 pl-16 pr-8 text-cream-text dark:text-white placeholder:text-cream-text3 focus:outline-none focus:border-gold-500 focus:bg-white dark:focus:bg-white/10 transition-all shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Featured Articles / Help Search Results */}
          <section>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream-brd/20 dark:border-white/5">
              <h2 className="font-display text-3xl font-bold text-cream-text dark:text-white">Help Guides</h2>
              <div className="text-[10px] font-extrabold text-cream-text3 dark:text-white/40 uppercase tracking-widest leading-loose text-right">
                Filter: <span className="text-cream-text dark:text-white">All Resources</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase())).map((article, i) => (
                <motion.button
                  key={article.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedArticle(article)}
                  className="card-cream p-8 text-left group hover:border-gold-500 dark:hover:border-gold-500/50 transition-all shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-gold-400/10 text-gold-700 dark:text-gold-500 text-[9px] font-black uppercase tracking-widest border border-gold-500/20">
                      {article.category}
                    </span>
                    <ArrowRight size={16} className="text-cream-text3 group-hover:text-gold-600 transition-all transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-cream-text dark:text-white group-hover:text-gold-700 dark:group-hover:text-gold-500 transition-colors leading-tight">
                    {article.title}
                  </h3>
                </motion.button>
              ))}
            </div>
          </section>

          {/* Recent Recordings - Existing Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream-brd/20 dark:border-white/5">
              <h2 className="font-display text-3xl font-bold text-cream-text dark:text-white">Audio Archive</h2>
              <button className="text-[10px] font-black text-gold-700 dark:text-gold-500 uppercase tracking-widest hover:underline">Download Corpus (PDF)</button>
            </div>

            {recordings.map((rec, i) => (
              <motion.div
                key={rec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[32px] bg-white dark:bg-white/5 border border-cream-brd/20 dark:border-white/5 hover:bg-gold-50 dark:hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden shadow-sm"
              >
                <div className="flex flex-col md:flex-row justify-between gap-8 text-left">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-forest-500/10 flex items-center justify-center text-forest-700 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <Mic size={28} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold mb-2 text-cream-text dark:text-white group-hover:text-gold-700 transition-colors">{rec.title}</h3>
                      <div className="flex flex-wrap gap-4">
                        <span className="px-3 py-1 rounded-lg bg-forest-500/10 text-forest-700 text-[10px] font-extrabold uppercase tracking-widest">{rec.lang}</span>
                        <span className="text-xs font-bold text-cream-text2 flex items-center gap-1.5">
                          <MapPin size={14} className="text-cream-text3" /> {rec.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-forest-900 text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all self-center md:self-auto">
                    <Play size={20} fill="currentColor" />
                  </button>
                </div>
              </motion.div>
            ))}
          </section>

        </div>

        {/* Sidebar Info Panels */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-cream p-8 overflow-hidden relative group dark:bg-forest-900 dark:border-white/10"
          >
            <div className="absolute top-[-20%] right-[-20%] p-4 opacity-5 group-hover:opacity-100 transition-opacity duration-500 text-cream-text transform rotate-12">
              <Map size={200} />
            </div>
            <h2 className="font-display text-2xl font-bold mb-4 text-cream-text dark:text-white">Cultural Map</h2>
            <p className="text-cream-text2 dark:text-white/60 text-sm font-semibold mb-8 leading-relaxed text-left">
              Visualize the distribution of ancestors across Mindanao with our ethnographic heatmap.
            </p>
            <button className="btn-primary w-full py-4 bg-forest-900 text-white shadow-[0_5px_0_#1a3a2a]">
              Launch Map
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-cream p-8 relative overflow-hidden dark:bg-forest-900 dark:border-white/10 transition-colors duration-500"
          >
            <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-gold-500/5 rounded-full blur-3xl" />
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-cream-brd/30 dark:border-white/10">
              <Info size={24} className="text-gold-500" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-4 text-cream-text dark:text-white">Verify Status</h2>
            <p className="text-cream-text2 dark:text-white/60 text-sm font-semibold mb-8 leading-relaxed text-left">
              Become a verified linguistic steward by completing our cultural baseline assessment.
            </p>
            <button className="btn-secondary w-full py-4 text-xs font-black uppercase tracking-widest">
              Start Assessment
            </button>
          </motion.div>
        </div>

      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-forest-950/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-3xl bg-white dark:bg-forest-900 rounded-[40px] shadow-2xl overflow-hidden"
            >
              <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-10">
                  <span className="px-4 py-1.5 rounded-full bg-gold-400/10 text-gold-700 dark:text-gold-500 text-[10px] font-black uppercase tracking-widest border border-gold-500/20">
                    {selectedArticle.category}
                  </span>
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    className="w-10 h-10 rounded-full bg-cream-bg dark:bg-white/5 flex items-center justify-center text-cream-text3 hover:text-gold-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-forest-900 dark:text-white mb-10 leading-tight">
                  {selectedArticle.title}
                </h2>
                
                <div className="space-y-8 text-left">
                  {selectedArticle.content.map((para, i) => (
                    <p key={i} className="text-lg text-cream-text2 dark:text-white/70 font-medium leading-[1.8]">
                      {para}
                    </p>
                  ))}
                </div>
                
                <div className="mt-16 pt-8 border-t border-cream-brd/20 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-cream-text3 uppercase tracking-widest">Article ID: {selectedArticle.id}</span>
                  <button className="flex items-center gap-2 text-gold-700 dark:text-gold-500 font-bold hover:underline group">
                    Next Guide <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


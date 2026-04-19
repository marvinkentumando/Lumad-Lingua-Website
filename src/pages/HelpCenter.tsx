import { motion } from "motion/react";
import { Search, Rocket, GraduationCap, HeartHandshake, ShieldCheck, Wrench, BookOpen, HelpCircle, Mail, ExternalLink } from "lucide-react";

export default function HelpCenter() {
  const categories = [
    {
      title: "Getting Started",
      icon: <Rocket size={24} className="text-gold-700" />,
      iconBg: "bg-gold-100",
      links: ["How do I record a word?", "Setting up your cultural profile", "Understanding the Ascent levels"],
      count: 12
    },
    {
      title: "For Learners",
      icon: <GraduationCap size={24} className="text-forest-500" />,
      iconBg: "bg-forest-50",
      links: ["How to use the IPA field notes", "Practicing offline mode", "Earning community badges"],
      count: 8
    },
    {
      title: "For Contributors",
      icon: <HeartHandshake size={24} className="text-brand-red" />,
      iconBg: "bg-brand-red/10",
      links: ["Who validates my submissions?", "Recording environmental guidelines", "Language preservation ethics"],
      count: 15
    },
    {
      title: "Validation Protocol",
      icon: <ShieldCheck size={24} className="text-brand-blue" />,
      iconBg: "bg-brand-blue/10",
      links: ["The 3-tier verification process", "Elder council oversight", "Reporting inaccuracy"],
      count: 6
    },
    {
      title: "Technical Support",
      icon: <Wrench size={24} className="text-gold-700" />,
      iconBg: "bg-gold-100",
      links: ["Mic permissions troubleshoot", "Exporting your learning data", "Account recovery steps"],
      count: 21
    }
  ];

  const faqs = [
    {
      q: "Can I download audio for offline use?",
      a: "Yes! You can download entire dialect modules to your device via the \"Resource Library\" section in your settings. This is ideal for field work in remote areas."
    },
    {
      q: "How are the rewards calculated?",
      a: "Rewards (Ascent Points) are granted based on the accuracy of your recording, validation by a tier-2 contributor, and community engagement with your submitted artifacts."
    },
    {
      q: "What happens to my data if I delete my account?",
      a: "Personal identifiers are removed instantly. However, contributions made to the open linguistic database remain (anonymously) to ensure the continuity of language preservation effort."
    }
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
            <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">Support Center</span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[80px] font-black mb-8 leading-[1.1] lg:leading-[80px] tracking-tight text-hero-heading dark:text-white">
              How can we <br /> <span className="text-gold-600 italic">help</span> you today?
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative max-w-md mx-auto lg:mx-0 mb-8"
            >
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-cream-text3 dark:text-white/40" size={20} />
              <input 
                type="text" 
                placeholder="Search for guides, protocols..."
                className="w-full pl-14 pr-8 py-5 rounded-3xl bg-white dark:bg-forest-800 border border-cream-brd/50 dark:border-white/10 shadow-xl text-cream-text dark:text-white placeholder:text-cream-text3 dark:placeholder:text-white/20 focus:ring-2 focus:ring-gold-700 outline-none"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-3"
            >
              <span className="text-[10px] font-extrabold text-cream-text/40 dark:text-white/20 uppercase tracking-widest mr-2 underline decoration-gold-500/30">Popular:</span>
              {["Recording Guide", "Validator Access"].map(tag => (
                <button key={tag} className="px-4 py-1.5 rounded-full bg-forest-900/5 dark:bg-white/5 text-[11px] font-bold text-forest-900 dark:text-white/60 border border-forest-900/10 dark:border-white/10 hover:bg-forest-900 dark:hover:bg-white hover:text-white dark:hover:text-forest-900 transition-all">
                  {tag}
                </button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full px-0 sm:px-4 lg:px-0"
          >
            {/* Thematic Visual - Square & Balanced Video */}
            <div className="relative w-full aspect-square overflow-hidden mt-4 sm:mt-8 lg:mt-0">
              <iframe 
                id="js_video_iframe" 
                src="https://jumpshare.com/embed/HKHW0PIJ9dakVFjFnOVz" 
                frameBorder="0" 
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "transparent" }}
                title="Support Center Showcase"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-24 mb-16 lg:mb-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-cream dark:bg-forest-900 dark:border-white/10 !p-10 flex flex-col group transition-colors duration-500"
            >
              <div className={`w-14 h-14 ${cat.iconBg} dark:bg-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-cream-text dark:text-white group-hover:text-gold-700 dark:group-hover:text-gold-500 transition-colors">{cat.title}</h3>
              <ul className="space-y-4 mb-10 flex-grow text-left">
                {cat.links.map(link => (
                  <li key={link}>
                    <button className="text-cream-text2 dark:text-white/60 hover:text-gold-700 dark:hover:text-gold-500 font-semibold text-sm transition-colors text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
              <button className="text-gold-700 dark:text-gold-500 font-extrabold text-[11px] uppercase tracking-[0.2em] hover:text-gold-800 dark:hover:text-white transition-colors text-left">
                View All {cat.count} Articles
              </button>
            </motion.div>
          ))}

          {/* Cultural Protocols Special Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-forest-900 dark:bg-forest-800 rounded-[20px] p-10 flex flex-col text-white relative overflow-hidden group transition-colors duration-500"
          >
            <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-gold-500/10 rounded-full blur-3xl group-hover:bg-gold-500/20 transition-all" />
            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-8">
              <BookOpen size={24} className="text-gold-500" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-6">Cultural Protocols</h3>
            <p className="text-white/50 dark:text-white/40 text-sm font-medium leading-relaxed mb-10 flex-grow text-left">
              Learn about the sacred nature of the languages we preserve and the respectful ways to engage with the material.
            </p>
            <button className="btn-primary !bg-gold-500 !text-cream-text !py-3 !text-xs w-fit">
              Read Handbook <ExternalLink size={14} className="ml-1" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 mb-16 lg:mb-24 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold text-center mb-12 lg:mb-16 text-cream-text dark:text-white leading-tight"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-forest-900 p-8 rounded-[20px] shadow-sm border border-cream-brd/20 dark:border-white/10 transition-colors duration-500"
            >
              <div className="flex text-left gap-4 mb-4">
                <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <HelpCircle size={14} className="text-gold-700 dark:text-gold-500" />
                </div>
                <h4 className="font-display text-xl font-bold text-cream-text dark:text-white">{faq.q}</h4>
              </div>
              <p className="text-cream-text2 dark:text-white/60 text-base font-medium leading-relaxed pl-10 text-left">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-16 lg:mb-20 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-green/10 dark:bg-white/5 rounded-[30px] lg:rounded-[40px] p-12 md:p-16 lg:p-24 text-center relative overflow-hidden"
        >
          {/* Fern Decoration */}
          <motion.div 
            initial={{ opacity: 0, x: -20, rotate: -10 }}
            whileInView={{ opacity: 0.1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-[-5%] bottom-[-10%] pointer-events-none scale-75 lg:scale-100 text-brand-green"
          >
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20c0-4.418 3.582-8 8-8" />
              <path d="M11 20c0-7.18 5.82-13 13-13" />
              <path d="M11 20c0-2.209 1.791-4 4-4" />
            </svg>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20, rotate: 10 }}
            whileInView={{ opacity: 0.1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute right-[-5%] top-[-10%] pointer-events-none scale-75 lg:scale-100 text-brand-green"
          >
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20c-4.418 0-8-3.582-8-8" />
              <path d="M11 20c-7.18 0-13-5.82-13-13" />
            </svg>
          </motion.div>
 
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold mb-6 text-cream-text dark:text-white leading-tight">Can't find what you're looking for?</h2>
            <p className="text-base md:text-lg lg:text-xl text-cream-text2 dark:text-white/60 font-semibold mb-10 lg:mb-12">
              Our cultural stewards and technical team are available to help you on your ascent.
            </p>
            <button className="btn-primary !bg-forest-900 dark:!bg-gold-500 !text-white dark:!text-forest-900 !px-10 !py-5 shadow-2xl">
              <Mail size={20} className="mr-2" /> Contact Support Team
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

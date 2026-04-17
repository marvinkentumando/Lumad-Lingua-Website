import { motion } from "motion/react";
import { Search, Rocket, GraduationCap, HeartHandshake, ShieldCheck, Wrench, BookOpen, HelpCircle, Mail, ExternalLink } from "lucide-react";

export default function Learn() {
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
    <div className="bg-cream-bg min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gold-500 pt-32 pb-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Fern Decoration */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20c0-4.418 3.582-8 8-8" />
            <path d="M11 20c0-7.18 5.82-13 13-13" />
            <path d="M11 20c0-2.209 1.791-4 4-4" />
            <path d="M11 20c0-9.941 8.059-18 18-18" />
            <path d="M11 20c-4.418 0-8-3.582-8-8" />
            <path d="M11 20c-7.18 0-13-5.82-13-13" />
            <path d="M11 20c-2.209 0-4-1.791-4-4" />
            <path d="M11 20c-9.941 0-18-8.059-18-18" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-[96px] font-bold text-cream-text mb-10"
          >
            How can we help you today?
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-2xl mx-auto mb-8"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-cream-text3" size={20} />
            <input 
              type="text" 
              placeholder="Search for guides, protocols, or technical help..."
              className="w-full pl-14 pr-8 py-5 rounded-full bg-white border-none shadow-xl text-cream-text placeholder:text-cream-text3 focus:ring-2 focus:ring-gold-700 outline-none"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-3"
          >
            <span className="text-[10px] font-extrabold text-cream-text/40 uppercase tracking-widest mr-2">Popular:</span>
            {["Recording Guide", "Validator Access", "Privacy Policy"].map(tag => (
              <button key={tag} className="px-4 py-1.5 rounded-full bg-white/20 text-[11px] font-bold text-cream-text hover:bg-white/30 transition-colors">
                {tag}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-cream !p-10 flex flex-col group"
            >
              <div className={`w-14 h-14 ${cat.iconBg} rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-cream-text group-hover:text-gold-700 transition-colors">{cat.title}</h3>
              <ul className="space-y-4 mb-10 flex-grow">
                {cat.links.map(link => (
                  <li key={link}>
                    <button className="text-cream-text2 hover:text-gold-700 font-semibold text-sm transition-colors text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
              <button className="text-gold-700 font-extrabold text-[11px] uppercase tracking-[0.2em] hover:text-gold-800 transition-colors text-left">
                View All {cat.count} Articles
              </button>
            </motion.div>
          ))}

          {/* Cultural Protocols Special Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-forest-900 rounded-[20px] p-10 flex flex-col text-white relative overflow-hidden group"
          >
            <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-gold-500/10 rounded-full blur-3xl group-hover:bg-gold-500/20 transition-all" />
            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-8">
              <BookOpen size={24} className="text-gold-500" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-6">Cultural Protocols</h3>
            <p className="text-white/50 text-sm font-medium leading-relaxed mb-10 flex-grow">
              Learn about the sacred nature of the languages we preserve and the respectful ways to engage with the material.
            </p>
            <button className="btn-primary !bg-gold-500 !text-cream-text !py-3 !text-xs w-fit">
              Read Handbook <ExternalLink size={14} className="ml-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 mb-32">
        <h2 className="font-display text-[60px] font-bold text-center mb-16 text-cream-text">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[20px] shadow-sm border border-cream-brd/20"
            >
              <div className="flex gap-4 mb-4">
                <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <HelpCircle size={14} className="text-gold-700" />
                </div>
                <h4 className="font-display text-xl font-bold text-cream-text">{faq.q}</h4>
              </div>
              <p className="text-cream-text2 text-base font-medium leading-relaxed pl-10">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-20">
        <div className="bg-brand-green/10 rounded-[40px] p-16 md:p-24 text-center relative overflow-hidden">
          {/* Fern Decoration */}
          <div className="absolute left-[-5%] bottom-[-10%] opacity-10 pointer-events-none">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20c0-4.418 3.582-8 8-8" />
              <path d="M11 20c0-7.18 5.82-13 13-13" />
              <path d="M11 20c0-2.209 1.791-4 4-4" />
            </svg>
          </div>
          <div className="absolute right-[-5%] top-[-10%] opacity-10 pointer-events-none">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20c-4.418 0-8-3.582-8-8" />
              <path d="M11 20c-7.18 0-13-5.82-13-13" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-[60px] font-bold mb-6 text-cream-text">Can't find what you're looking for?</h2>
            <p className="text-cream-text2 text-lg font-semibold mb-12">
              Our cultural stewards and technical team are available to help you on your ascent.
            </p>
            <button className="btn-primary !bg-forest-900 !text-white !px-10 !py-5 !text-base shadow-2xl">
              <Mail size={20} className="mr-2" /> Contact Support Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

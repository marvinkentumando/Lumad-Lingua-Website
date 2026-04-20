import { motion } from "motion/react";
import { Heart, Check, Sparkles, Sprout, Landmark } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Seed",
      price: "$0",
      description: "For the curious learner and casual storyteller.",
      icon: <Sprout className="text-forest-700" size={32} />,
      features: [
        "Access to 500+ common phrases",
        "Personal language progress tracker",
        "Community forum access",
        "Basic cultural context guides",
        "Learning streak rewards"
      ],
      cta: "Start Learning",
      highlight: false
    },
    {
      name: "Root",
      price: "₱299",
      period: "/month",
      description: "For enthusiasts committed to deep linguistic immersion.",
      icon: <Heart className="text-gold-600" size={32} />,
      features: [
        "Everything in Seed, plus:",
        "Full dialect audio downloads",
        "High-fidelity IPA field notes",
        "Priority tribal verification",
        "Exclusive 'Guardian' profile badge",
        "Ad-free immersion experience"
      ],
      cta: "Join the Ascent",
      highlight: true
    },
    {
      name: "Tree",
      price: "₱2999",
      period: "/month",
      description: "For researchers, educators, and institutional partners.",
      icon: <Landmark className="text-brand-green" size={32} />,
      features: [
        "Everything in Root, plus:",
        "Advanced corpus research tools",
        "Bulk metadata exports (JSON/CSV)",
        "Curriculum integration kit",
        "Dedicated elder council liaison",
        "Custom institutional analytics"
      ],
      cta: "Partner with Us",
      highlight: false
    }
  ];

  return (
    <div className="bg-cream-bg dark:bg-forest-950 text-cream-text dark:text-white/90 min-h-screen font-sans selection:bg-gold-200 transition-colors duration-300">
      {/* Hero Section - Pricing Focus */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden bg-white dark:bg-forest-900 transition-colors duration-500">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[60%] h-full bg-radial-[circle_at_70%_40%] from-gold-500/10 to-transparent pointer-events-none blur-3xl opacity-60 dark:opacity-20" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-2xl text-center lg:text-left"
          >
            <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500 underline decoration-gold-500/30 underline-offset-4">Investment Tiers</span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[80px] font-black mb-8 leading-[1.1] lg:leading-[80px] tracking-tight text-hero-heading dark:text-white">
              Support the <span className="text-gold-600 italic">Ascent</span> of Heritage
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-hero-body dark:text-white/60 font-medium leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Your support fuels the preservation of indigenous languages, ensuring every word remains a bridge to the future. Choose a plan that fits your journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end w-full"
          >
             {/* Thematic Visual - Pricing Hero */}
             <div className="relative w-full aspect-square overflow-hidden mt-4 sm:mt-8 lg:mt-0">
              <iframe 
                id="js_video_iframe" 
                src="https://jumpshare.com/embed/HKHW0PIJ9dakVFjFnOVz" 
                frameBorder="0" 
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "transparent" }}
                title="Heritage Investment Story"
               ></iframe>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 lg:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`p-8 lg:p-12 rounded-[40px] border transition-all duration-500 flex flex-col relative overflow-hidden ${
                tier.highlight 
                  ? "bg-forest-900 dark:bg-gold-500 border-forest-900 dark:border-gold-500 text-white dark:text-forest-900 shadow-2xl scale-105 z-10" 
                  : "bg-white dark:bg-forest-900 border-cream-brd/30 dark:border-white/10 text-forest-900 dark:text-white"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-8 right-8">
                   <Sparkles className={tier.highlight ? "text-gold-500 dark:text-forest-900" : ""} size={24} />
                </div>
              )}
              
              <div className="mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${tier.highlight ? "bg-white/10 dark:bg-black/10" : "bg-forest-50 dark:bg-white/5"}`}>
                  {tier.icon}
                </div>
                <h3 className="font-display text-3xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-black">{tier.price}</span>
                  {tier.period && <span className="text-lg opacity-60 font-semibold">{tier.period}</span>}
                </div>
                <p className="font-medium opacity-80 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {tier.features.map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check size={18} className={`shrink-0 mt-1 ${tier.highlight ? "text-gold-500 dark:text-forest-900" : "text-brand-green"}`} />
                    <span className="text-sm font-semibold opacity-90">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-bold tracking-tight transition-all text-lg ${
                tier.highlight 
                  ? "bg-gold-500 dark:bg-forest-900 text-forest-900 dark:text-white hover:scale-[1.02]" 
                  : "bg-forest-900 dark:bg-gold-500 text-white dark:text-forest-900 hover:bg-forest-800 dark:hover:bg-gold-400"
              }`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table Section - Refined */}
      <section className="py-24 bg-white/50 dark:bg-forest-900/50 backdrop-blur-sm border-y border-cream-brd/30 dark:border-white/5 selection:bg-gold-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
           <span className="micro-label mb-4 block text-forest-700 dark:text-gold-500">The Fine Print</span>
           <h2 className="font-display text-4xl lg:text-5xl font-bold mb-16 text-forest-900 dark:text-white">Feature <span className="text-gold-600 italic">Comparison</span></h2>
           
           <div className="w-full overflow-x-auto pb-4">
             <div className="min-w-[600px] space-y-4 text-left">
                {/* Headers */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-4 pb-4 border-b-2 border-forest-900 dark:border-gold-500 items-end"
                >
                  <span className="font-bold text-forest-900 dark:text-white text-lg">Features</span>
                  <span className="font-bold text-forest-900 dark:text-white text-center">Seed</span>
                  <span className="font-bold text-forest-900 dark:text-white text-center">Root</span>
                  <span className="font-bold text-forest-900 dark:text-white text-center">Tree</span>
                </motion.div>
                {[
                  { label: "Community Support", seed: true, root: true, tree: true },
                  { label: "Offline Modules", seed: false, root: true, tree: true },
                  { label: "Institutional Export", seed: false, root: false, tree: true },
                  { label: "Phone/Email Support", seed: false, root: true, tree: true },
                  { label: "Cultural Validation Access", seed: "Read-only", root: "Voter", tree: "Partner" },
                ].map((item, index) => (
                  <motion.div 
                    key={item.label} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="grid grid-cols-4 py-6 border-b border-cream-brd/20 dark:border-white/5 items-center gap-4 hover:bg-forest-50/50 dark:hover:bg-white/[0.02] rounded-xl px-2 transition-colors"
                  >
                    <span className="font-bold text-forest-900 dark:text-white/80">{item.label}</span>
                    <div className="text-center flex justify-center">{typeof item.seed === 'boolean' ? (item.seed ? <Check size={18} className="text-brand-green" /> : "-") : <span className="text-xs font-bold opacity-50">{item.seed}</span>}</div>
                    <div className="text-center flex justify-center">{typeof item.root === 'boolean' ? (item.root ? <Check size={18} className="text-brand-green" /> : "-") : <span className="text-xs font-bold opacity-50">{item.root}</span>}</div>
                    <div className="text-center flex justify-center">{typeof item.tree === 'boolean' ? (item.tree ? <Check size={18} className="text-brand-green" /> : "-") : <span className="text-xs font-bold opacity-50">{item.tree}</span>}</div>
                  </motion.div>
                ))}
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}

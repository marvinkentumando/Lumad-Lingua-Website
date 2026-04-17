import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Landmark, Users, Shield, Flower2, Mountain, ArrowRight, Sparkles, Heart, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-cream-bg text-cream-text font-sans overflow-x-hidden selection:bg-gold-200 transition-colors duration-300">
      {/* Hero Section - Clean Editorial Layout */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-0 sm:px-8 lg:px-12 overflow-hidden">
        {/* Soft Glow Decoration */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-radial-[circle_at_70%_40%] from-gold-500/10 to-transparent pointer-events-none blur-3xl" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-2xl text-center lg:text-left order-2 lg:order-1 px-6 sm:px-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8 mx-auto lg:mx-0">
              <Mountain size={14} className="text-gold-700" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-700">Level 1: The Foothills</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[96px] font-black mb-6 lg:mb-8 leading-[1.1] lg:leading-[80px] tracking-tight text-hero-heading">
              The Ancestral Ascent
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-hero-body font-medium leading-relaxed mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0">
              Learning a language is not just acquiring words; it is an ascent up a mist-shrouded mountain of heritage. Every step reveals a story, every breath a connection to those who walked before us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/learn" 
                className="px-8 lg:px-10 py-4 lg:py-5 rounded-full bg-forest-700 text-white font-bold text-base lg:text-lg hover:bg-black transition-all shadow-lg shadow-forest-900/10 text-center"
              >
                Start Learning Now
              </Link>
              <Link 
                to="/about" 
                className="px-8 lg:px-10 py-4 lg:py-5 rounded-full bg-cream-bg border-2 border-hero-heading text-hero-heading font-bold text-base lg:text-lg hover:bg-forest-700 hover:text-white transition-all text-center dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-forest-900"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full px-0 sm:px-4 lg:px-0"
          >
            {/* Hero Video Embed - Square & Balanced */}
            <div className="relative w-full aspect-square overflow-hidden mt-4 sm:mt-8 lg:mt-0">
              <iframe 
                id="js_video_iframe" 
                src="https://jumpshare.com/embed/Z1BFmctjRwB1ZuI9jIqV" 
                frameBorder="0" 
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Ancestral Ascent Showcase"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
      

      {/* Community Progress Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 bg-white dark:bg-forest-900/30 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="micro-label mb-4 block">Live Community Impact</span>
              <h2 className="font-display text-[60px] font-bold mb-6 text-hero-heading">The Collective Ascent</h2>
              <p className="text-lg text-hero-body font-medium mb-10 leading-relaxed">
                We are currently at <span className="text-gold-700 font-black">68%</span> of our goal to document the 18 major Lumad dialects. Every recording you contribute brings us closer to the summit.
              </p>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-xs font-extrabold tracking-widest uppercase text-hero-body">Dialect Documentation</span>
                    <span className="text-xs font-black text-gold-700">68%</span>
                  </div>
                  <div className="ascent-progress-track">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "68%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="ascent-progress-bar"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-xs font-extrabold tracking-widest uppercase text-hero-body">Sacred Stories Preserved</span>
                    <span className="text-xs font-black text-gold-700">42%</span>
                  </div>
                  <div className="ascent-progress-track">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "42%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="ascent-progress-bar !bg-forest-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Words Recorded", value: "12.4k+", color: "text-gold-700" },
                { label: "Active Stewards", value: "840", color: "text-forest-500" },
                { label: "Dialects Saved", value: "12", color: "text-brand-blue" },
                { label: "Audio Hours", value: "3.2k", color: "text-brand-red" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-cream !p-8 text-center"
                >
                  <div className={`text-3xl md:text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="micro-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Story - Woven Grid */}
      <section className="pt-40 pb-10 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="micro-label mb-6 block">Our Philosophy</span>
              <h2 className="font-display text-[60px] font-bold mb-8 text-forest-700 dark:text-white leading-[50px]">
                A Space That Feels <br />
                <span className="text-[#0d1e0d]">Woven</span> Rather Than Coded
              </h2>
              <p className="text-cream-text2 text-xl font-semibold leading-relaxed mb-10">
                Lumad Lingua was born from a digital earthwork philosophy—rejecting the sterile, boxy constraints of modern tech.
              </p>
              <div className="flex items-center gap-6 text-cream-text3">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-gold-50 bg-cream-brd flex items-center justify-center text-xs font-bold overflow-hidden">
                      <img src={`https://picsum.photos/seed/elder${i}/100/100`} alt="Elder" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-extrabold tracking-widest uppercase">Validated by Elders</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Digital Earthwork",
                  desc: "We treat language learning as a cultural ceremony, incorporating floral micro-illustrations and geometric textures.",
                  icon: <Flower2 className="text-brand-green" />
                },
                {
                  title: "The Oral Tradition",
                  desc: "Bridging the gap between playful accessibility and scholarly precision with IPA technical notations.",
                  icon: <Globe className="text-brand-blue" />
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-cream flex gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-cream-brd/30 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-2 text-cream-text">{item.title}</h3>
                    <p className="text-cream-text2 font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Enhanced */}
      <section className="pt-0 pb-20 px-4">
        <div className="max-w-7xl mx-auto bg-white dark:bg-forest-900/40 border border-cream-brd/30 dark:border-white/10 rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden transition-colors duration-500">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-[circle_at_100%_0%] from-gold-500/10 to-transparent pointer-events-none" />
          
          <span className="micro-label mb-6 block">Collaborators</span>
          <h2 className="font-display text-[60px] font-bold mb-6 text-[#0d1e0d]">Our Partners in Preservation</h2>
          <p className="text-hero-body/60 text-lg font-bold mb-20 uppercase tracking-widest max-w-2xl mx-auto">
            Working directly with the guardians of ancestral voices.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {[
              { icon: <Landmark size={32} />, label: "NCIP" },
              { icon: <Users size={32} />, label: "MANSAKA COUNCIL" },
              { icon: <Shield size={32} />, label: "MANDAYA ELDERS" },
              { icon: <Flower2 size={32} />, label: "CULTURAL CENTER" }
            ].map((partner) => (
              <motion.div 
                key={partner.label} 
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="w-24 h-24 rounded-[32px] bg-cream-bg dark:bg-white/5 border border-cream-brd/50 dark:border-white/10 flex items-center justify-center text-gold-500 shadow-xl backdrop-blur-sm">
                  {partner.icon}
                </div>
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-hero-body/40 uppercase">{partner.label}</span>
              </motion.div>
            ))}
          </div>

          <Link to="/about" className="btn-primary inline-flex items-center gap-2">
            Meet the Guardians <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Core Pillars - Card Overhaul */}
      <section className="py-40 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="font-display text-[60px] font-bold text-[#0d1e0d] mb-6">The Three Core Pillars</h2>
          <p className="micro-label">Foundational Truths</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "Rootedness",
              desc: "Identity is inseparable from language. We anchor learners in ancestral vocabulary.",
              icon: <Mountain className="text-brand-green" />,
              bg: "bg-brand-green/5"
            },
            {
              title: "Joy",
              desc: "Preservation shouldn't feel like a chore. We infuse every interaction with celebration.",
              icon: <Sparkles className="text-gold-600" />,
              bg: "bg-gold-500/5"
            },
            {
              title: "Community",
              desc: "A language only lives if it is shared. We build bridges between generations.",
              icon: <Heart className="text-brand-red" />,
              bg: "bg-brand-red/5"
            }
          ].map((pillar, i) => (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-12 rounded-[48px] ${pillar.bg} border border-cream-brd/20 flex flex-col items-center text-center group hover:shadow-2xl hover:shadow-gold-500/5 transition-all duration-500`}
            >
              <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-3xl mb-10 shadow-sm border border-cream-brd/30 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="font-display text-3xl font-bold mb-6 text-cream-text">{pillar.title}</h3>
              <p className="text-cream-text2 text-lg font-semibold leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA - Join the Ascent */}
      <section className="py-40 px-4 sm:px-8 lg:px-12 relative bg-cream-bg overflow-hidden">
        {/* Large Faint Tree Outlines */}
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 text-forest-900/5 pointer-events-none">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2L1 21h22L12 2zm0 3.83L18.5 19H5.5L12 5.83z" />
          </svg>
        </div>
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 text-forest-900/5 pointer-events-none rotate-180">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2L1 21h22L12 2zm0 3.83L18.5 19H5.5L12 5.83z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-10">
            <div className="text-gold-800 flex gap-1">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 18h16L12 2zm0 4.5L16.5 16h-9L12 6.5zM11 18h2v4h-2v-4z" />
              </svg>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="-ml-6 mt-2">
                <path d="M12 2L4 18h16L12 2zm0 4.5L16.5 16h-9L12 6.5zM11 18h2v4h-2v-4z" />
              </svg>
            </div>
          </div>
          
          <h2 className="font-display text-[60px] font-black mb-8 text-[#0d1e0d]">
            Join the Ascent
          </h2>
          <p className="text-lg md:text-xl text-hero-heading font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            Whether you are a descendant seeking your roots or a global citizen honoring cultural diversity, your journey starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/learn" 
              className="px-12 py-6 rounded-full bg-forest-900 text-white font-bold text-lg hover:bg-black transition-all shadow-xl shadow-forest-900/20"
            >
              Start Learning Now
            </Link>
            <Link 
              to="/docs" 
              className="px-12 py-6 rounded-full bg-cream-bg border-2 border-hero-heading text-hero-heading font-bold text-lg hover:bg-forest-700 hover:text-white transition-all dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-forest-900"
            >
              Contribute Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

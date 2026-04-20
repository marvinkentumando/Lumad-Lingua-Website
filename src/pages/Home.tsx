import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Landmark, Users, Shield, Flower2, Mountain, ArrowRight, Sparkles, Heart, Globe, Mic, Map, BookOpen, Gamepad2, History, CheckCircle, Award, Layout, ShieldCheck, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-cream-bg text-cream-text dark:bg-forest-950 dark:text-white/90 font-sans overflow-x-hidden selection:bg-gold-200 transition-colors duration-300">
      {/* Hero Section - Clean Editorial Layout */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden">
        {/* Animated Mist/Topography Lines Backdrop */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              d="M-100 200C100 150 400 300 700 250C1000 200 1300 350 1500 300" 
              stroke="currentColor" strokeWidth="2" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
              d="M-100 400C200 350 500 500 800 450C1100 400 1350 550 1550 500" 
              stroke="currentColor" strokeWidth="1" 
            />
          </svg>
        </div>
        {/* Soft Glow Decoration */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-radial-[circle_at_70%_40%] from-gold-500/10 to-transparent pointer-events-none blur-3xl opacity-50 dark:opacity-20" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-2xl text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8 mx-auto lg:mx-0">
              <Mountain size={14} className="text-gold-700 dark:text-gold-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-700 dark:text-gold-500">Reviving Indigenous Voices</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[96px] font-black mb-6 lg:mb-8 leading-[1.1] lg:leading-[80px] tracking-tight text-hero-heading dark:text-white">
              The Ancestral <span className="text-gold-600 italic">Ascent</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-hero-body dark:text-white/60 font-medium leading-relaxed mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0">
              Learning a language is not just acquiring words; it is an ascent up a mist-shrouded mountain of heritage. Every step reveals a story, every breath a connection to those who walked before us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/contact" 
                className="px-8 lg:px-10 py-4 lg:py-5 rounded-full bg-forest-700 dark:bg-gold-600 text-white dark:text-forest-900 font-bold text-base lg:text-lg hover:bg-black dark:hover:bg-white transition-all shadow-lg shadow-forest-900/10 text-center"
              >
                Start Learning Now
              </Link>
              <Link 
                to="/about" 
                className="px-8 lg:px-10 py-4 lg:py-5 rounded-full flex flex-row gap-3 items-center justify-center bg-cream-bg dark:bg-white/5 border-2 border-hero-heading dark:border-white/20 text-hero-heading dark:text-white font-bold text-base lg:text-lg hover:bg-forest-700 hover:text-white dark:hover:bg-white dark:hover:text-forest-900 transition-all text-center"
              >
                <PlayCircle size={24} />
                Watch Demo
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
      

      {/* Community Progress Section - Bento Polish */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white dark:bg-forest-900 transition-colors duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 text-center lg:text-left">
              <span className="micro-label mb-4 block">Live Statistics</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold mb-8 text-forest-900 dark:text-white leading-[1.1] tracking-tight">
                Measuring the <br />
                <span className="text-gold-600 italic">Resurgence</span>
              </h2>
              <p className="text-lg md:text-xl text-cream-text2 dark:text-white/60 font-medium mb-12 leading-relaxed">
                Our documentation efforts are synchronized with tribal leaders across three provinces, ensuring every audio byte is a verified cultural asset.
              </p>
              
              <div className="space-y-10">
                <div className="group">
                  <div className="flex justify-between mb-4">
                    <span className="text-xs font-black tracking-[0.2em] uppercase text-forest-700/60 dark:text-white/40 group-hover:text-forest-700 dark:group-hover:text-white transition-colors">Dialect Documentation</span>
                    <span className="text-xs font-black text-gold-600">68%</span>
                  </div>
                  <div className="h-4 w-full bg-cream-bg dark:bg-white/5 rounded-full overflow-hidden border border-cream-brd/30 dark:border-white/10 p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "68%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-forest-700 dark:bg-gold-500 rounded-full relative overflow-hidden"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between mb-4">
                    <span className="text-xs font-black tracking-[0.2em] uppercase text-forest-700/60 dark:text-white/40 group-hover:text-forest-700 dark:group-hover:text-white transition-colors">Sacred Stories Preserved</span>
                    <span className="text-xs font-black text-brand-blue">42%</span>
                  </div>
                  <div className="h-4 w-full bg-cream-bg dark:bg-white/5 rounded-full overflow-hidden border border-cream-brd/30 dark:border-white/10 p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "42%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      className="h-full bg-brand-blue rounded-full relative overflow-hidden"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {[
                { label: "Words Documented", value: "12,482", color: "bg-forest-900 dark:bg-forest-800 text-white", sub: "Verified lexicon entries" },
                { label: "Village Stewards", value: "840", color: "bg-white dark:bg-white/5 text-forest-900 dark:text-white border border-cream-brd dark:border-white/10", sub: "Indigenous contributors" },
                { label: "Oral Recordings", value: "3,200h", color: "bg-gold-500 dark:bg-gold-600 text-forest-900", sub: "High-fidelity sessions" },
                { label: "Community Clusters", value: "18", color: "bg-cream-bg dark:bg-white/10 text-forest-900 dark:text-white border border-cream-brd dark:border-white/10", sub: "Geotagged regions" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className={`${stat.color} p-10 rounded-[40px] flex flex-col justify-between group hover:scale-[1.02] transition-all duration-500 shadow-xl shadow-black/5`}
                >
                  <div>
                    <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight group-hover:scale-105 transition-transform origin-left">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-8">{stat.label}</div>
                  </div>
                  <div className="text-xs font-semibold opacity-40 italic">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* How Our System Works Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white dark:bg-forest-900 transition-colors duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-[circle_at_30%_20%] from-gold-500/5 to-transparent pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16 lg:mb-24">
            <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">How it Works</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold mb-6 text-forest-900 dark:text-white leading-tight">
              The Path of <span className="text-gold-600 italic">Preservation</span>
            </h2>
            <p className="text-cream-text2 dark:text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              How we transform endangered oral traditions into a living digital heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative text-center lg:text-left">
            {/* Connecting Path (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gold-200 dark:border-white/10 z-0" />
            
            {[
              {
                step: "Phase 01",
                title: "Digital Archiving",
                desc: "Implementing a centralized system for high-fidelity audio recordings and linguistics metadata.",
                icon: <Mic size={28} />,
                color: "text-brand-red",
                bg: "bg-brand-red/5 dark:bg-brand-red/10"
              },
              {
                step: "Phase 02",
                title: "Geo-Spatial Mapping",
                desc: "Associating recordings with GPS coordinates to visualize language distribution via heatmaps.",
                icon: <Map size={28} />,
                color: "text-brand-blue dark:text-blue-400",
                bg: "bg-brand-blue/5 dark:bg-brand-blue/10"
              },
              {
                step: "Phase 03",
                title: "Gamified Learning",
                desc: "Developing interactive modules with storylines, points, and progress tracking for youth engagement.",
                icon: <Gamepad2 size={28} />,
                color: "text-brand-green dark:text-green-400",
                bg: "bg-brand-green/5 dark:bg-brand-green/10"
              },
              {
                step: "Phase 04",
                title: "Elder Validation",
                desc: "Establishing a secure multi-role workflow where Council Elders verify every cultural artifact.",
                icon: <ShieldCheck size={28} />,
                color: "text-gold-600",
                bg: "bg-gold-500/5 dark:bg-gold-500/10"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 group"
              >
                <div className={`w-24 h-24 rounded-[32px] ${item.bg} border-2 border-white dark:border-white/10 flex items-center justify-center mb-8 mx-auto lg:mx-0 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-black/5 ring-4 ring-transparent group-hover:ring-gold-100 dark:group-hover:ring-white/10`}>
                  <div className={`${item.color}`}>
                    {item.icon}
                  </div>
                </div>
                <div className={`${item.color} text-[10px] font-black mb-4 tracking-[0.3em] uppercase`}>{item.step}</div>
                <h3 className="font-display text-2xl font-bold mb-4 text-forest-900 dark:text-white">{item.title}</h3>
                <p className="text-cream-text2 dark:text-white/60 text-sm font-semibold leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Showcase Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-cream-bg/50 dark:bg-forest-950 transition-colors duration-500 relative overflow-hidden text-center lg:text-left">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cream-brd/50 dark:via-white/10 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">Capabilities</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold text-forest-900 dark:text-white leading-tight">
                Features Engineered for <br />
                <span className="text-gold-600 italic">Cultural Continuity</span>
              </h2>
            </div>
            <p className="text-cream-text2 dark:text-white/60 text-lg font-medium lg:max-w-xs border-t lg:border-t-0 lg:border-l-2 border-gold-200 dark:border-gold-500/30 pt-6 lg:pt-0 lg:pl-8">
              Every feature aligns with our vision for a tech-enabled indigenous renaissance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Geo-Tagged Archive",
                desc: "Recordings are mapped with GPS coordinates to identify documentation gaps across regions.",
                icon: <Layout className="text-brand-blue dark:text-blue-400" />
              },
              {
                title: "Interactive Heatmaps",
                desc: "Leaflet.js integration visualizing linguistic density and preservation progress spatially.",
                icon: <Map className="text-gold-600" />
              },
              {
                title: "Digital Dictionary",
                desc: "Searchable database with Filipino/English translations, native audio, and usage context.",
                icon: <BookOpen className="text-forest-600 dark:text-forest-400" />
              },
              {
                title: "Self-Assessment",
                desc: "Waveform comparison algorithm allowing users to evaluate their pronunciation against elders.",
                icon: <Award className="text-brand-red" />
              },
              {
                title: "Version History",
                desc: "Wikipedia-lite change tracking ensures transparency and auditability for all contributions.",
                icon: <History className="text-cream-text dark:text-white" />
              },
              {
                title: "MTB-MLE Alignment",
                desc: "Curriculum-ready resources designed for early education and linguistic revitalization.",
                icon: <CheckCircle className="text-brand-green dark:text-green-400" />
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: i % 3 === 0 ? -20 : i % 3 === 2 ? 20 : 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-forest-800 p-10 rounded-[40px] border border-cream-brd/30 dark:border-white/10 hover:shadow-2xl hover:shadow-gold-500/5 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-cream-bg dark:bg-white/5 flex items-center justify-center mb-8 mx-auto lg:mx-0 group-hover:rotate-6 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-forest-900 dark:text-white">{feature.title}</h3>
                <p className="text-cream-text2 dark:text-white/60 text-base font-semibold leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Partners Section - Editorial Integration */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden bg-white dark:bg-forest-900 transition-colors duration-500">
        <div className="absolute inset-0 bg-radial-[circle_at_100%_100%] from-gold-500/5 to-transparent pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto text-center"
        >
          <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">Our Guardians</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-forest-900 dark:text-white tracking-tight">Institutional & <span className="text-gold-600 italic">Tribal Guardianship</span></h2>
          <p className="text-cream-text2 dark:text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-20 leading-relaxed">
            Working directly with government bodies and indigenous councils to ensure absolute cultural accuracy.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12 mb-20">
            {[
              { icon: <Landmark size={32} />, label: "NCIP", desc: "Legal Stewardship" },
              { icon: <Users size={32} />, label: "MANSAKA COUNCIL", desc: "Lexical Validation" },
              { icon: <Shield size={32} />, label: "MANDAYA ELDERS", desc: "Knowledge Custody" },
              { icon: <Flower2 size={32} />, label: "CULTURAL CENTER", desc: "Archival Support" }
            ].map((partner, i) => (
              <motion.div 
                key={partner.label} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group flex flex-col items-center bg-white dark:bg-forest-800 p-8 sm:p-12 rounded-[40px] sm:rounded-[60px] border border-cream-brd/30 dark:border-white/10 shadow-xl shadow-black/5 hover:shadow-gold-500/10 transition-all duration-700"
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-[40px] bg-cream-bg dark:bg-white/5 text-gold-600 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {partner.icon}
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-forest-900 dark:text-white uppercase mb-3">{partner.label}</span>
                <span className="text-[8px] sm:text-[10px] font-bold text-cream-text2/50 dark:text-white/30 uppercase tracking-widest">{partner.desc}</span>
              </motion.div>
            ))}
          </div>

          <Link to="/about" className="inline-flex items-center gap-4 text-forest-900 dark:text-gold-500 font-black uppercase text-xs tracking-[0.3em] hover:text-gold-600 dark:hover:text-white transition-colors group">
            The Partnership Story <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>


      {/* Final CTA - Join the Ascent - Overhauled UI/UX (White / Dark Mode Friendly) */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden bg-white dark:bg-forest-900 transition-colors duration-500">
        {/* Background Textures & Atmosphere */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-radial-[circle_at_50%_50%] from-gold-500/5 dark:from-gold-500/10 to-transparent pointer-events-none" />
        
        {/* Large Decorative Floating Icon */}
        <motion.div 
          initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
          whileInView={{ opacity: 0.05, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -right-10 sm:-right-20 -bottom-10 sm:-bottom-20 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] text-forest-900 dark:text-white pointer-events-none"
        >
          <Mountain className="w-full h-full" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-4 mb-10 px-6 py-3 rounded-full bg-cream-bg dark:bg-white/5 border border-cream-brd/50 dark:border-white/10 shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-forest-900 bg-gold-100 overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-500">Join 800+ Stewardship Members</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold mb-10 text-forest-900 dark:text-white leading-tight lg:leading-[60px] tracking-tighter">
            Your Ancestry <span className="text-gold-600 italic">Awaits</span>
          </h2>
          
          <p className="text-lg md:text-xl text-cream-text2 dark:text-white/60 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            Lumad Lingua is built for the generation that refuses to let the silence win. Take your first step into the living heritage of our people.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group relative px-10 sm:px-12 py-5 sm:py-7 rounded-full bg-forest-900 dark:bg-gold-500 text-white dark:text-forest-900 font-bold text-base sm:text-lg overflow-hidden transition-all shadow-2xl shadow-forest-900/20 active:scale-95"
            >
              <div className="absolute inset-0 bg-gold-600 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-3">Create your free account <ArrowRight size={20} /></span>
            </Link>
            <Link 
              to="/about" 
              className="px-10 sm:px-12 py-5 sm:py-7 rounded-full border-2 border-forest-900 dark:border-white/20 text-forest-900 dark:text-white font-bold text-base sm:text-lg hover:bg-forest-900 dark:hover:bg-white hover:text-white dark:hover:text-forest-900 transition-all shadow-xl"
            >
              Learn the Story
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

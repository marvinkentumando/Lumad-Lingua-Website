import { motion } from "motion/react";
import { Users, Heart, Shield, Mountain, Landmark, Flower2, Handshake, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="bg-cream-bg dark:bg-forest-950 text-cream-text dark:text-white/90 min-h-screen font-sans selection:bg-gold-200 transition-colors duration-300">
      {/* Hero Section - Synchronized Editorial Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-8 lg:px-12 overflow-hidden bg-white dark:bg-forest-900 transition-colors duration-500">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
        {/* Soft Glow Decoration */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-radial-[circle_at_70%_40%] from-gold-500/10 to-transparent pointer-events-none blur-3xl opacity-60 dark:opacity-20" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-2xl text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-cream-brd/50 dark:border-white/10 shadow-sm mb-10 mx-auto lg:mx-0">
               <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.25em] text-forest-700 dark:text-gold-500">Rooted in Capstone Research</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[110px] font-black mb-10 leading-[0.9] tracking-tighter text-forest-900 dark:text-white">
              The <span className="text-gold-600 block">Living</span> Genealogy
            </h1>
            <p className="text-lg sm:text-xl text-cream-text2 dark:text-white/60 font-medium leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Lumad Lingua is more than a platform—it is a digital earthwork. Born as a BSIT Capstone at DNSC, it has grown into a cross-generational bridge for the indigenous voices of Mindanao.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
               <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-forest-800 bg-cream-bg dark:bg-white/20 overflow-hidden shadow-lg">
                       <img src={`https://picsum.photos/seed/researcher${i}/100/100`} alt="Researcher" referrerPolicy="no-referrer" />
                    </div>
                  ))}
               </div>
               <div className="text-left">
                  <div className="text-xs font-black text-forest-900 dark:text-white uppercase tracking-widest">The Research Team</div>
                  <div className="text-[10px] font-bold text-cream-text2 dark:text-white/40 uppercase tracking-widest opacity-60">DNSC Institute of Computing</div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            {/* Thematic Visual - Square & Balanced Video */}
            <div className="relative w-full aspect-square overflow-hidden rounded-[40px] sm:rounded-[80px] shadow-2xl shadow-forest-900/10 border-[8px] sm:border-[16px] border-white dark:border-forest-800">
              <iframe 
                id="js_video_iframe" 
                src="https://jumpshare.com/embed/595wOvVRFzNEpShu6NTr" 
                frameBorder="0" 
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "#f8f6f2" }}
                title="About Us Story Showcase"
              ></iframe>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-forest-900 dark:bg-gold-500 p-8 rounded-[40px] text-white dark:text-forest-900 shadow-2xl z-20 hidden lg:block border border-white/10 dark:border-forest-900/10 capitalize font-display italic text-2xl">
               "For the Ancestors"
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white/40 dark:bg-white/5 border-y border-cream-brd/30 dark:border-white/10 overflow-hidden transition-colors duration-500">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          <div className="space-y-6 lg:space-y-10 text-center lg:text-left">
            <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold text-cream-text dark:text-white leading-tight">
              The <span className="text-brand-green dark:text-green-400">Mission</span>
            </h2>
            <p className="text-base md:text-lg text-cream-text2 dark:text-white/60 font-medium leading-relaxed border-l-4 border-brand-green/30 dark:border-green-400/30 pl-6 lg:pl-8">
              To preserve and revitalize endangered Lumad languages through technology — 
              combining geo-tagged documentation with gamified learning built in 
              partnership with indigenous communities.
            </p>
            <div className="p-10 rounded-[40px] bg-cream-bg dark:bg-white/5 border border-cream-brd/50 dark:border-white/10 italic text-cream-text2 dark:text-white/60 font-semibold leading-relaxed shadow-sm">
              "Every visual and linguistic decision is held against one question: 
              <span className="text-gold-700 dark:text-gold-500 not-italic font-bold ml-2">Would this make a Lumad elder proud?</span>"
            </div>
          </div>
          <div className="relative aspect-square group">
             <div className="absolute inset-0 bg-radial-[circle_at_center] from-gold-500/20 to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
             <div className="relative h-full w-full bg-white dark:bg-forest-800 border border-cream-brd/50 dark:border-white/10 rounded-[40px] sm:rounded-[60px] flex items-center justify-center text-[8rem] sm:text-[12rem] grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 cursor-default shadow-xl">
              🌿
            </div>
          </div>
        </motion.div>
      </section>

      {/* Platform Story - Woven Grid (Our Philosophy) */}
      <section className="py-16 lg:py-28 px-4 sm:px-8 lg:px-12 relative overflow-hidden bg-cream-bg dark:bg-forest-950 transition-colors duration-500">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="text-center lg:text-left">
              <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">Our Philosophy</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold mb-8 text-forest-700 dark:text-white/90 leading-tight">
                A Space That Feels <br />
                <span className="text-forest-900 dark:text-white">Woven</span> Rather Than Coded
              </h2>
              <p className="text-cream-text2 dark:text-white/60 text-lg md:text-xl font-semibold leading-relaxed mb-10">
                Lumad Lingua was born from a digital earthwork philosophy—rejecting the sterile, boxy constraints of modern tech in favor of cultural texture.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6 text-cream-text3 dark:text-white/40">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-forest-900 bg-cream-brd dark:bg-white/10 flex items-center justify-center text-xs font-bold overflow-hidden">
                      <img src={`https://picsum.photos/seed/elder${i}/100/100`} alt="Elder" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-extrabold tracking-widest uppercase">Validated by Council Elders</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Digital Earthwork",
                  desc: "We treat language learning as a cultural ceremony, incorporating floral micro-illustrations and geometric textures.",
                  icon: <Flower2 className="text-brand-green dark:text-green-400" />
                },
                {
                  title: "The Oral Tradition",
                  desc: "Bridging the gap between playful accessibility and scholarly precision with IPA technical notations.",
                  icon: <Globe className="text-brand-blue dark:text-blue-400" />
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-forest-900 p-8 rounded-[32px] border border-cream-brd/30 dark:border-white/10 flex gap-6 items-start shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-cream-bg dark:bg-white/5 flex items-center justify-center shadow-sm border border-cream-brd/30 dark:border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-2xl font-bold mb-2 text-cream-text dark:text-white">{item.title}</h3>
                    <p className="text-cream-text2 dark:text-white/60 font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Values Section - Bento Editorial */}
      <section className="py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white dark:bg-forest-900 transition-colors duration-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20 text-center lg:text-left">
            <div className="max-w-xl mx-auto lg:mx-0">
              <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">Our Ethos</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-forest-900 dark:text-white leading-tight tracking-tight">The Values That <br /> <span className="text-gold-600">Root</span> Our Work</h2>
            </div>
            <p className="text-cream-text2 dark:text-white/60 text-lg font-medium lg:max-w-sm border-t lg:border-t-0 lg:border-l-2 border-gold-200 dark:border-gold-500 pt-6 lg:pt-0 lg:pl-8">
              We operate under a strict code of cultural dignity, ensuring the platform remains a community-owned asset.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Value 1 Large */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-7 bg-cream-bg dark:bg-white/5 p-12 rounded-[40px] sm:rounded-[60px] flex flex-col justify-between group min-h-[350px] lg:h-[400px] hover:shadow-2xl hover:shadow-black/5 transition-all duration-700"
            >
               <div className="w-16 h-16 rounded-3xl bg-white dark:bg-white/5 flex items-center justify-center text-3xl mb-8 shadow-sm">🌿</div>
               <div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-forest-900 dark:text-white">Community Ownership</h3>
                  <p className="text-lg sm:text-xl text-cream-text2 dark:text-white/60 font-semibold">The platform belongs to the community. We build with, not for, indigenous partners, ensuring intellectual property remains tribal.</p>
               </div>
            </motion.div>

            {/* Value 2 Small */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="lg:col-span-5 bg-forest-900 dark:bg-forest-800 p-12 rounded-[40px] sm:rounded-[60px] text-white flex flex-col justify-between group min-h-[350px] lg:h-[400px]"
            >
               <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-3xl mb-8 shadow-sm">❤️</div>
               <div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4">Deep Rootedness</h3>
                  <p className="text-lg sm:text-xl text-white/60 font-semibold">Grounded in authentic indigenous knowledge, validated by community elders through every iteration.</p>
               </div>
            </motion.div>

            {/* Value 3 Small */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="lg:col-span-5 bg-gold-500 p-12 rounded-[40px] sm:rounded-[60px] text-forest-900 flex flex-col justify-between group min-h-[350px] lg:h-[400px] shadow-2xl shadow-gold-500/20"
            >
               <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center text-3xl mb-8 shadow-sm">🛡️</div>
               <div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-forest-900">Integrity & Dignity</h3>
                  <p className="text-lg sm:text-xl text-forest-900/60 font-semibold">We do not romanticize or exoticize. We document and amplify with technical precision and cultural dignity.</p>
               </div>
            </motion.div>

            {/* Value 4 Large */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="lg:col-span-7 bg-cream-brd/10 dark:bg-white/5 border border-cream-brd/30 dark:border-white/10 p-12 rounded-[40px] sm:rounded-[60px] flex flex-col justify-between group min-h-[350px] lg:h-[400px]"
            >
               <div className="w-16 h-16 rounded-3xl bg-white dark:bg-white/5 flex items-center justify-center text-3xl mb-8 shadow-sm">⛰️</div>
               <div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-forest-900 dark:text-white">Cultural Ascent</h3>
                  <p className="text-lg sm:text-xl text-cream-text2 dark:text-white/60 font-semibold">Reflecting the cultural truth: language learning is an act of returning to the summit of one's identity.</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Integrated Section - Refined Editorial */}
      <section className="py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white dark:bg-forest-900 transition-colors duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-[circle_at_100%_0%] from-gold-500/5 to-transparent pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-12 text-center lg:text-left mb-12">
               <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">Our Guardians</span>
               <h2 className="font-display text-4xl md:text-6xl font-bold text-forest-900 dark:text-white leading-tight">Built with the Stewardship of <span className="text-gold-600 block sm:inline">Indigenous Nations</span></h2>
            </div>
            
            <div className="lg:col-span-12 lg:grid lg:grid-cols-12 gap-12 items-center">
               <div className="lg:col-span-5 text-center lg:text-left">
                  <p className="text-xl text-cream-text2 dark:text-white/60 font-medium leading-relaxed border-t lg:border-t-0 lg:border-l-4 border-gold-500 pt-6 lg:pt-0 lg:pl-8 mb-12">
                  Content is strictly co-created with NCIP-recognized tribal leaders and validated by 
                  the Council of Elders from the Mansaka and Mandaya peoples. Every record is a sacred trust.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12 lg:mb-0">
                     <div className="px-6 py-3 rounded-full bg-cream-bg dark:bg-white/5 border border-cream-brd dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-forest-700 dark:text-gold-500">68% Validation Score</div>
                     <div className="px-6 py-3 rounded-full bg-cream-bg dark:bg-white/5 border border-cream-brd dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-forest-700 dark:text-gold-500">Certified by NCIP</div>
                  </div>
               </div>

               <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                     { icon: <Landmark size={24} />, name: "NCIP", role: "Legal & Human Rights" },
                     { icon: <Users size={24} />, name: "Mansaka Council", role: "Linguistic Validation" },
                     { icon: <Shield size={24} />, name: "Mandaya Elders", role: "Oral History Custody" },
                     { icon: <Flower2 size={24} />, name: "Cultural Center", role: "Digital Archiving Partner" }
                  ].map((p, i) => (
                     <motion.div 
                        key={p.name} 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-6 p-8 rounded-[40px] bg-cream-bg dark:bg-white/5 border border-cream-brd/50 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 group"
                     >
                        <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center text-gold-600 shadow-sm border border-cream-brd/30 dark:border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {p.icon}
                        </div>
                        <div className="text-left">
                           <div className="text-xs font-black text-forest-900 dark:text-white uppercase tracking-widest mb-1">{p.name}</div>
                           <div className="text-[10px] font-bold text-cream-text2 dark:text-white/40 uppercase tracking-widest opacity-60 leading-none">{p.role}</div>
                        </div>
                     </motion.div>
                  ))}
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Research Team Section */}
      <section className="py-16 lg:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-forest-900/40 border border-cream-brd/30 dark:border-white/10 rounded-[40px] lg:rounded-[60px] p-8 lg:p-16 overflow-hidden relative shadow-xl">
           {/* Heritage Pattern Background Watermark */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none translate-x-32 -translate-y-32">
            <svg width="400" height="400" viewBox="0 0 100 100" className="text-forest-900 fill-current">
              <path d="M0 50 L50 0 L100 50 L50 100 Z" />
              <path d="M25 50 L50 25 L75 50 L50 75 Z" />
            </svg>
          </div>

          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 lg:mb-20"
            >
              <span className="micro-label mb-4 block">The Architects</span>
              <h3 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold text-hero-heading flex items-center justify-center gap-4 lg:gap-8 leading-tight">
                The Research <span className="text-gold-600 italic">Team</span>
              </h3>
              <p className="text-hero-body/60 text-sm md:text-base font-medium max-w-xl mx-auto mt-4">
                A interdisciplinary group of students and scholars dedicated to the digital preservation of ancestral voices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { 
                  label: "Developer", 
                  name: "Giverola", 
                  dialect: "Mansaka Focus",
                  pattern: "radial-gradient(circle at 0% 0%, rgba(255,194,0,0.1) 0%, transparent 50%)",
                  sig: "Giverola"
                },
                { 
                  label: "Designer", 
                  name: "Laureto", 
                  dialect: "Mandaya Visuals",
                  pattern: "radial-gradient(circle at 100% 0%, rgba(61,175,92,0.1) 0%, transparent 50%)",
                  sig: "Laureto"
                },
                { 
                  label: "Researcher", 
                  name: "Tumando", 
                  dialect: "Oral Traditions",
                  pattern: "radial-gradient(circle at 100% 100%, rgba(240,72,72,0.1) 0%, transparent 50%)",
                  sig: "Tumando"
                },
                { 
                  label: "Cohort", 
                  name: "BSIT 3B", 
                  dialect: "Collective Peer Review",
                  pattern: "linear-gradient(45deg, rgba(59,145,224,0.05) 0%, transparent 100%)",
                  sig: "The Cohort"
                }
              ].map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-8 rounded-[32px] bg-cream-bg dark:bg-forest-900/60 border border-cream-brd/30 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group overflow-hidden h-full flex flex-col"
                  style={{ backgroundImage: member.pattern }}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-[9px] font-black text-gold-600/60 uppercase tracking-[0.3em] mb-4">{member.label}</div>
                    <div className="text-2xl font-black text-hero-heading mb-2 tracking-tight">{member.name}</div>
                    <div className="text-[10px] font-bold text-hero-body/40 mb-10 uppercase tracking-widest">{member.dialect}</div>
                    
                    <div className="mt-auto pt-6 border-t border-cream-brd/10 flex justify-between items-end">
                       <div className="font-serif italic text-sm text-hero-body/30 group-hover:text-gold-700/60 transition-colors duration-500 transform -rotate-3 pl-2">
                         {member.sig}
                       </div>
                       <div className="h-2 w-2 rounded-full bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <div className="absolute top-[-20%] right-[-20%] w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none rotate-12">
                     <Handshake size={80} className="text-gold-900" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 lg:mt-24 pt-10 border-t border-cream-brd/20 dark:border-white/5 text-center flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
              <div className="text-[10px] font-extrabold text-hero-body/30 uppercase tracking-[0.4em]">Institution</div>
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500/30 hidden sm:block" />
              <div className="text-base font-black text-hero-body/80 tracking-tight">Davao del Norte State College</div>
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500/30 hidden sm:block" />
              <div className="text-[10px] font-extrabold text-hero-body/30 uppercase tracking-[0.4em]">BSIT Program</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

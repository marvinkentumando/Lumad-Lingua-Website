import { motion } from "motion/react";
import { Handshake, Flower2, Users, Heart, Shield, Mountain } from "lucide-react";

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
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[96px] font-black mb-10 leading-[0.9] lg:leading-[90px] tracking-tighter text-forest-900 dark:text-white">
              The Living <br /> <span className="text-gold-600">Genealogy</span>
            </h1>
            <p className="text-lg sm:text-xl text-cream-text2 dark:text-white/60 font-medium leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Lumad Lingua is more than a platform—it is a digital earthwork. Born as a BSIT Capstone at DNSC, it has grown into a cross-generational bridge for the indigenous voices of Mindanao.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            {/* Thematic Visual - No background, border, or shadows as requested */}
            <div className="relative w-full aspect-square overflow-hidden">
              <iframe 
                id="js_video_iframe" 
                src="https://jumpshare.com/embed/595wOvVRFzNEpShu6NTr" 
                frameBorder="0" 
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "transparent" }}
                title="About Story Showcase"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Refined Visuals */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white/40 dark:bg-white/5 border-y border-cream-brd/30 dark:border-white/10 overflow-hidden transition-colors duration-500">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="space-y-8 lg:space-y-12 text-center lg:text-left order-2 lg:order-1">
            <div>
               <span className="micro-label mb-4 block text-forest-700 dark:text-gold-500">The Mission</span>
               <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold text-forest-900 dark:text-white leading-[1.1]">
                 To Breathe Life Into <br /> <span className="text-gold-600 block italic">Silent Echoes</span>
               </h2>
            </div>
            <p className="text-lg md:text-xl text-cream-text2 dark:text-white/60 font-medium leading-relaxed">
              Preserving and revitalizing endangered Lumad languages through technology—combining geo-tagged documentation with gamified learning built in partnership with indigenous communities.
            </p>
            <div className="relative pl-8 sm:pl-10 py-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="absolute left-0 top-0 text-7xl text-gold-500/20 font-serif leading-none mt-2">"</div>
              <p className="text-xl sm:text-2xl text-forest-900 dark:text-white/90 font-medium leading-relaxed italic mb-4 relative z-10">
                Every visual and linguistic decision is held against one question:
              </p>
              <p className="text-gold-700 dark:text-gold-400 font-bold text-sm uppercase tracking-[0.2em] relative z-10">
                Would this make a Lumad elder proud?
              </p>
            </div>
          </div>
          
          <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] w-full order-1 lg:order-2">
             <div className="absolute inset-0 bg-gold-500/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
             
             {/* Dynamic Image Mosaic */}
             <div className="relative w-full h-full grid grid-cols-12 grid-rows-12 gap-4">
                {/* Tall Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="col-span-8 row-span-10 row-start-2 col-start-1 rounded-[40px] overflow-hidden border border-cream-brd/50 dark:border-white/10 shadow-xl relative group"
                >
                  <img src="https://i.pinimg.com/1200x/58/46/ae/5846ae914cb7ac123017a160c8ccf54a.jpg" alt="Ancestral Territory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-60" />
                </motion.div>
                
                {/* Small Image overlapping */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="col-span-6 row-span-6 row-start-6 col-start-7 rounded-[30px] overflow-hidden border border-cream-brd/50 dark:border-white/10 shadow-2xl shadow-forest-900/20 relative group z-10"
                >
                  <img src="https://i.pinimg.com/1200x/c3/d5/8b/c3d58b21d5681d9f8d38a89aa8c625e3.jpg" alt="Cultural Textures" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </motion.div>
                
                {/* Decorative Element */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute top-24 -right-4 lg:-right-8 w-20 h-20 sm:w-28 sm:h-28 bg-white dark:bg-forest-900 rounded-full flex items-center justify-center border border-cream-brd/50 dark:border-white/10 shadow-xl z-20"
                >
                   <div className="w-[85%] h-[85%] rounded-full border border-gold-500/30 border-dashed flex items-center justify-center animate-[spin_20s_linear_infinite]">
                     <Flower2 size={24} className="text-gold-500 animate-[spin_20s_linear_infinite_reverse]" />
                   </div>
                </motion.div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Platform Story - Woven Grid (Our Philosophy) */}
      <section className="py-16 lg:py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden bg-cream-bg dark:bg-forest-950 transition-colors duration-500">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="text-center lg:text-left">
              <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">Our Philosophy</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold mb-8 text-forest-900 dark:text-white leading-tight">
                A Space That Feels <br />
                <span className="text-gold-600 italic">Woven</span> Rather Than Coded
              </h2>
              <p className="text-xl text-cream-text2 dark:text-white/60 font-medium leading-relaxed mb-12">
                Lumad Lingua was born from a digital earthwork philosophy—rejecting the sterile, boxy constraints of modern tech in favor of cultural texture and ancestral rhythm.
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
            
            <div className="grid grid-cols-1 gap-8 relative before:absolute before:inset-y-0 before:left-[1.375rem] before:border-l before:border-dashed before:border-cream-brd/50 dark:before:border-white/10 pl-2 lg:pl-0">
              {[
                {
                  step: "01",
                  title: "Digital Earthwork",
                  desc: "We treat language learning as a cultural ceremony, treating the interface as a woven canvas rather than a sterile grid.",
                },
                {
                  step: "02",
                  title: "The Oral Tradition",
                  desc: "Bridging the gap between playful accessibility and scholarly precision, letting voices dictate the structure.",
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16 sm:pl-20 flex gap-6 items-start group"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-cream-bg dark:bg-forest-900 flex items-center justify-center border-2 border-gold-500 text-gold-600 font-bold text-sm shadow-[0_0_0_4px_var(--color-cream-bg)] dark:shadow-[0_0_0_4px_var(--color-forest-950)] shrink-0 z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-gold-700">
                    {item.step}
                  </div>
                  <div className="text-left pt-2 pb-6 border-b border-cream-brd/30 dark:border-white/10 w-full group-last-[.group]:border-none">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-forest-900 dark:text-white group-hover:text-gold-600 transition-colors">{item.title}</h3>
                    <p className="text-lg text-cream-text2 dark:text-white/60 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Values Section - Bento Editorial */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white dark:bg-forest-900 transition-colors duration-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">Our Ethos</span>
              <h2 className="font-display text-5xl md:text-[60px] font-bold text-forest-900 dark:text-white leading-[0.9] lg:leading-[75px] tracking-tighter">The Values That <br /> <span className="text-gold-600 italic">Root</span> Our Work</h2>
            </div>
            <p className="text-lg md:text-xl text-cream-text2 dark:text-white/60 font-medium lg:max-w-md border-t lg:border-t-0 lg:border-l-4 border-gold-500 pt-8 lg:pt-0 lg:pl-10">
              We operate under a strict code of cultural dignity, ensuring the platform remains a community-owned asset and a sacred trust.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Value 1 Large */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="relative lg:col-span-7 bg-cream-bg dark:bg-white/5 p-8 sm:p-10 rounded-[30px] sm:rounded-[40px] flex flex-col justify-between group flex-1 lg:h-[320px] overflow-hidden hover:shadow-2xl hover:shadow-forest-900/10 dark:hover:shadow-black/30 transition-all duration-700"
            >
               <div className="absolute -right-8 -top-8 text-gold-500/10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <Users size={180} className="stroke-[0.5]" />
               </div>
               <div className="relative z-10 w-12 h-12 rounded-2xl bg-white dark:bg-forest-800 flex items-center justify-center mb-6 shadow-sm border border-cream-brd/30 dark:border-white/10 group-hover:bg-gold-500 transition-colors duration-500">
                   <Users className="text-forest-900 dark:text-gold-500 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} size={24} />
               </div>
               <div className="relative z-10">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-forest-900 dark:text-white">Community Ownership</h3>
                  <p className="text-base sm:text-lg text-cream-text2 dark:text-white/70 font-medium leading-relaxed max-w-lg">The platform belongs to the community. We build with, not for, indigenous partners, ensuring intellectual property remains tribal.</p>
               </div>
            </motion.div>

            {/* Value 2 Small */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="relative lg:col-span-5 bg-forest-900 dark:bg-forest-800 p-8 sm:p-10 rounded-[30px] sm:rounded-[40px] text-white flex flex-col justify-between group flex-1 lg:h-[320px] overflow-hidden shadow-xl hover:-translate-y-1 transition-transform duration-700"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
               <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-green transition-colors duration-500">
                   <Heart className="text-white" strokeWidth={1.5} size={24} />
               </div>
               <div className="relative z-10">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-white">Deep Rootedness</h3>
                  <p className="text-base sm:text-lg text-white/70 font-medium leading-relaxed">Grounded in authentic indigenous knowledge, validated by community elders.</p>
               </div>
            </motion.div>

            {/* Value 3 Small */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="relative lg:col-span-5 bg-gold-500 dark:bg-gold-600 p-8 sm:p-10 rounded-[30px] sm:rounded-[40px] text-forest-900 flex flex-col justify-between group flex-1 lg:h-[320px] shadow-2xl shadow-gold-500/20 overflow-hidden hover:-translate-y-1 transition-transform duration-700"
            >
               <div className="absolute inset-0 bg-gradient-to-tl from-forest-900/10 to-transparent pointer-events-none" />
               <div className="relative z-10 w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-forest-900 transition-colors duration-500">
                   <Shield className="text-gold-600 dark:text-gold-700 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} size={24} />
               </div>
               <div className="relative z-10">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-forest-900">Integrity & Dignity</h3>
                  <p className="text-base sm:text-lg text-forest-900/80 font-medium leading-relaxed">We do not romanticize or exoticize. We document and amplify with technical precision.</p>
               </div>
            </motion.div>

            {/* Value 4 Large */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="relative lg:col-span-7 bg-white dark:bg-forest-900 border border-cream-brd/50 dark:border-white/10 p-8 sm:p-10 rounded-[30px] sm:rounded-[40px] flex flex-col justify-between group flex-1 lg:h-[320px] overflow-hidden hover:shadow-2xl hover:shadow-forest-900/10 transition-all duration-700"
            >
               <div className="absolute -left-8 -bottom-8 text-forest-900/5 dark:text-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <Mountain size={200} className="stroke-[0.5]" />
               </div>
               <div className="relative z-10 w-12 h-12 rounded-2xl bg-cream-bg dark:bg-white/5 flex items-center justify-center mb-6 shadow-sm border border-cream-brd/30 dark:border-white/10 group-hover:border-gold-500 group-hover:bg-gold-500 transition-colors duration-500 self-end">
                   <Mountain className="text-forest-900 dark:text-white group-hover:text-forest-900 transition-colors duration-500" strokeWidth={1.5} size={24} />
               </div>
               <div className="relative z-10 flex flex-col items-end text-right">
                  <div className="w-full">
                     <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-forest-900 dark:text-white">Cultural Ascent</h3>
                     <p className="text-base sm:text-lg text-cream-text2 dark:text-white/70 font-medium leading-relaxed ml-auto max-w-lg">Reflecting the truth: language learning is an act of returning to the ancestral summit of one's identity.</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Research Team Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-forest-900/40 border border-cream-brd/30 dark:border-white/10 rounded-[40px] lg:rounded-[60px] p-8 lg:p-12 overflow-hidden relative shadow-xl">
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
              <h3 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold text-forest-900 dark:text-white leading-[0.85] lg:leading-[75px] tracking-tighter">
                The Research <span className="text-gold-600 italic">Team</span>
              </h3>
              <p className="text-cream-text2 dark:text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto mt-8">
                An interdisciplinary group of digital architects dedicated to the preservation of ancestral voices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { 
                  label: "Developer", 
                  name: "Giverola", 
                  dialect: "Chief Operating Officer",
                  pattern: "radial-gradient(circle at 0% 0%, rgba(255,194,0,0.1) 0%, transparent 50%)",
                  sig: "Giverola"
                },
                { 
                  label: "Designer", 
                  name: "Laureto", 
                  dialect: "Chief Technology Officer",
                  pattern: "radial-gradient(circle at 100% 0%, rgba(61,175,92,0.1) 0%, transparent 50%)",
                  sig: "Laureto"
                },
                { 
                  label: "Researcher", 
                  name: "Tumando", 
                  dialect: "Chief Marketing Officer",
                  pattern: "radial-gradient(circle at 100% 100%, rgba(240,72,72,0.1) 0%, transparent 50%)",
                  sig: "Tumando"
                },
                { 
                  label: "Startup", 
                  name: "Passion Project", 
                  dialect: "Startup",
                  pattern: "linear-gradient(45deg, rgba(59,145,224,0.05) 0%, transparent 100%)",
                  sig: "Passion Project"
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
            

          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "motion/react";
import { Users, Heart, Shield, Mountain, Landmark, Flower2, Handshake, Globe } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Users className="text-gold-600" />,
      title: "Community First",
      desc: "The platform belongs to the community. We build with, not for, indigenous partners.",
    },
    {
      icon: <Heart className="text-brand-red" />,
      title: "Rootedness",
      desc: "Grounded in authentic indigenous knowledge, validated by community elders.",
    },
    {
      icon: <Shield className="text-brand-green" />,
      title: "Integrity",
      desc: "We do not romanticize or exoticize. We document and amplify with dignity.",
    },
    {
      icon: <Mountain className="text-brand-blue" />,
      title: "Ascent",
      desc: "Reflecting the cultural truth: language learning is an act of returning to the summit.",
    },
  ];

  const partners = [
    { icon: <Landmark size={24} />, name: "NCIP", role: "Legal & Rights" },
    { icon: <Users size={24} />, name: "Mansaka Council", role: "Linguistic Validation" },
    { icon: <Shield size={24} />, name: "Mandaya Elders", role: "Knowledge Keepers" },
    { icon: <Flower2 size={24} />, name: "Cultural Center", role: "Archival Support" }
  ];

  return (
    <div className="bg-cream-bg min-h-screen font-sans selection:bg-gold-200 transition-colors duration-300">
      {/* Hero Section - Synchronized Editorial Style */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-12 px-0 sm:px-8 lg:px-12 overflow-hidden">
        {/* Soft Glow Decoration */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-radial-[circle_at_70%_40%] from-gold-500/10 to-transparent pointer-events-none blur-3xl" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-2xl text-center lg:text-left order-2 lg:order-1 px-6 sm:px-0"
          >
            <span className="micro-label mb-6 block">Our Story</span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[80px] font-black mb-8 leading-[1.1] lg:leading-[80px] tracking-tight text-hero-heading">
              Preserving the <span className="text-gold-600 italic">Soul</span> of Mindanao
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-hero-body font-medium leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Lumad Lingua began as a BSIT Capstone project at Davao del Norte State College. 
              What started as a technical challenge evolved into a deep commitment to the 
              indigenous peoples of Mindanao.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full px-0 sm:px-4 lg:px-0"
          >
            {/* Thematic Visual - Square & Balanced */}
            <div className="relative w-full aspect-square overflow-hidden mt-4 sm:mt-8 lg:mt-0 bg-white/20 border border-cream-brd/50 rounded-[40px] flex items-center justify-center shadow-lg backdrop-blur-sm">
              <Mountain size={160} className="text-gold-500/40" />
              <div className="absolute inset-x-0 bottom-12 text-center text-xs font-black uppercase tracking-[0.4em] text-gold-700/30">Heritage Pride</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white/40 border-y border-cream-brd/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6 lg:space-y-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold text-cream-text leading-tight">
              The <span className="text-brand-green">Mission</span>
            </h2>
            <p className="text-base md:text-lg text-cream-text2 font-medium leading-relaxed border-l-4 border-brand-green/30 pl-6 lg:pl-8">
              To preserve and revitalize endangered Lumad languages through technology — 
              combining geo-tagged documentation with gamified learning built in 
              partnership with indigenous communities.
            </p>
            <div className="p-10 rounded-[40px] bg-cream-bg border border-cream-brd/50 italic text-cream-text2 font-semibold leading-relaxed shadow-sm">
              "Every visual and linguistic decision is held against one question: 
              <span className="text-gold-700 not-italic font-bold ml-2">Would this make a Lumad elder proud?</span>"
            </div>
          </div>
          <div className="relative aspect-square group">
             <div className="absolute inset-0 bg-radial-[circle_at_center] from-gold-500/20 to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
             <div className="relative h-full w-full bg-white border border-cream-brd/50 rounded-[60px] flex items-center justify-center text-[12rem] grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 cursor-default shadow-xl">
              🌿
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold text-cream-text mb-4 leading-tight">Our Core Values</h2>
          <p className="micro-label">The foundation of our work</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-cream group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-cream-brd/30">
                {value.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-cream-text mb-4">{value.title}</h3>
              <p className="text-cream-text2 text-sm font-semibold leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Integrated Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white dark:bg-forest-900/40 border-y border-cream-brd/30 dark:border-white/10 relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-[circle_at_100%_0%] from-gold-500/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="micro-label mb-6 block">Collaborators</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold mb-8 text-hero-heading leading-tight">Built by the <span className="text-gold-500">Community</span></h2>
              <p className="text-hero-body/60 text-base md:text-lg font-medium mb-12 leading-relaxed">
                Content co-created with NCIP-recognized tribal leaders and validated by 
                community elders of the Mansaka and Mandaya peoples.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {partners.map((p) => (
                  <div key={p.name} className="flex items-center gap-4 p-4 rounded-2xl bg-cream-bg dark:bg-white/5 border border-cream-brd/50 dark:border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-500">
                      {p.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-hero-heading">{p.name}</div>
                      <div className="text-[10px] text-hero-body/40 uppercase tracking-widest font-bold">{p.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-[40px] border border-cream-brd/30 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/community-weaving/800/800" 
                alt="Community Weaving" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-bottom p-8">
                <span className="text-white text-xs font-black uppercase tracking-widest">Cultural Validation Session</span>
              </div>
            </div>
          </div>
        </div>
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
            <div className="text-center mb-12 lg:mb-20">
              <span className="micro-label mb-4 block">The Architects</span>
              <h3 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold text-hero-heading flex items-center justify-center gap-4 lg:gap-8 leading-tight">
                The Research <span className="text-gold-600 italic">Team</span>
              </h3>
              <p className="text-hero-body/60 text-sm md:text-base font-medium max-w-xl mx-auto mt-4">
                A interdisciplinary group of students and scholars dedicated to the digital preservation of ancestral voices.
              </p>
            </div>

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

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
    <div className="bg-cream-bg min-h-screen font-sans selection:bg-gold-200">
      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl"
        >
          <span className="micro-label mb-6 block">Our Story</span>
          <h1 className="font-display text-[96px] font-bold mb-10 leading-[0.85] tracking-tight text-cream-text">
            Preserving the <br />
            <span className="text-gold-600 italic">Soul</span> of Mindanao
          </h1>
          <p className="text-cream-text2 text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl">
            Lumad Lingua began as a BSIT Capstone project at Davao del Norte State College. 
            What started as a technical challenge evolved into a deep commitment to the 
            indigenous peoples of Mindanao.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-4 sm:px-8 lg:px-12 bg-white/40 border-y border-cream-brd/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="font-display text-[60px] font-bold text-cream-text leading-tight">
              The <span className="text-brand-green">Mission</span>
            </h2>
            <p className="text-cream-text2 text-lg font-medium leading-relaxed border-l-4 border-brand-green/30 pl-8">
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
      <section className="py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-[60px] font-bold text-cream-text mb-4">Our Core Values</h2>
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
      <section className="py-32 px-4 sm:px-8 lg:px-12 bg-white dark:bg-forest-900/40 border border-cream-brd/30 dark:border-white/10 rounded-[60px] mx-4 mb-32 relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-[circle_at_100%_0%] from-gold-500/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="micro-label mb-6 block">Collaborators</span>
              <h2 className="font-display text-[60px] font-bold mb-8 text-hero-heading">Built by the <span className="text-gold-500">Community</span></h2>
              <p className="text-hero-body/60 text-lg font-medium mb-12 leading-relaxed">
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
            
            <div className="bg-cream-bg dark:bg-white/5 border border-cream-brd/50 dark:border-white/10 rounded-[40px] p-12">
              <h3 className="font-display text-2xl font-bold mb-10 text-center text-hero-heading">The Research Team</h3>
              <div className="grid grid-cols-2 gap-12">
                {[
                  { label: "Developer", name: "Giverola" },
                  { label: "Designer", name: "Laureto" },
                  { label: "Researcher", name: "Tumando" },
                  { label: "Cohort", name: "BSIT 3B" }
                ].map((member) => (
                  <div key={member.name} className="text-center">
                    <div className="text-[10px] font-extrabold text-gold-500/60 uppercase tracking-[0.2em] mb-2">{member.label}</div>
                    <div className="text-lg font-bold text-hero-heading tracking-tight">{member.name}</div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-12 border-t border-cream-brd/30 dark:border-white/10 text-center">
                <div className="text-[10px] font-extrabold text-hero-body/30 uppercase tracking-[0.3em] mb-4">Institution</div>
                <div className="text-sm font-bold text-hero-body/80">Davao del Norte State College</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

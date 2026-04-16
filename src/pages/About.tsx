import { motion } from "motion/react";
import { Users, Heart, Shield, Mountain } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Users className="text-gold-500" />,
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

  return (
    <div className="pt-40 pb-32 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mb-32"
      >
        <span className="micro-label mb-6 block">Our Story</span>
        <h1 className="font-display text-6xl md:text-8xl font-semibold mb-10 leading-[0.95] tracking-tight">Preserving the <span className="text-gold-500 italic">Soul</span> of Mindanao</h1>
        <p className="text-white/60 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
          Lumad Lingua began as a BSIT Capstone project at Davao del Norte State College. 
          What started as a technical challenge evolved into a deep commitment to the 
          indigenous peoples of Mindanao.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
        <div className="space-y-10">
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">The <span className="text-brand-green">Mission</span></h2>
          <p className="text-white/50 text-lg font-medium leading-relaxed border-l-2 border-brand-green/30 pl-8">
            To preserve and revitalize endangered Lumad languages through technology — 
            combining geo-tagged documentation with gamified learning built in 
            partnership with indigenous communities.
          </p>
          <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 italic text-white/70 font-medium leading-relaxed">
            "Every visual and linguistic decision is held against one question: 
            <span className="text-gold-500 not-italic font-bold ml-2">Would this make a Lumad elder proud?</span>"
          </div>
        </div>
        <div className="relative aspect-square">
           <div className="absolute inset-0 bg-radial-[circle_at_center] from-gold-500/20 to-transparent blur-3xl opacity-50" />
           <div className="relative h-full w-full bg-white/5 border border-white/10 rounded-[40px] flex items-center justify-center text-[12rem] grayscale opacity-20 hover:opacity-40 hover:grayscale-0 transition-all duration-700 cursor-default">
            🌿
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-glass group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              {value.icon}
            </div>
            <h3 className="font-display text-2xl font-semibold mb-4">{value.title}</h3>
            <p className="text-white/40 text-sm font-medium leading-relaxed">{value.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="p-16 md:p-24 rounded-[60px] bg-linear-to-br from-gold-500/10 via-forest-800 to-transparent border border-gold-500/20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-[circle_at_0%_0%] from-gold-500/5 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8">Built by the <span className="text-gold-500">Community</span></h2>
          <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
            Content co-created with NCIP-recognized tribal leaders and validated by 
            community elders of the Mansaka and Mandaya peoples.
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-extrabold text-white/20 uppercase tracking-[0.3em]">
            <div className="flex flex-col gap-2">
              <span className="text-white/40">Developer</span>
              <span>Giverola</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/40">Designer</span>
              <span>Laureto</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/40">Researcher</span>
              <span>Tumando</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/40">Cohort</span>
              <span>BSIT 3B</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

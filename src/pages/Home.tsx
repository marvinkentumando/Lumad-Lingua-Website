import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Book, Map, Users, Globe, Sparkles, Play, Mic, Shield } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-forest-900">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150%] h-[80%] bg-radial-[ellipse_60%_50%_at_50%_0%] from-gold-500/15 via-gold-500/5 to-transparent opacity-80 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-radial-[circle_at_center] from-brand-green/10 to-transparent opacity-40 blur-3xl" />
          <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-radial-[circle_at_center] from-brand-blue/5 to-transparent opacity-30 blur-3xl" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.01)_0,rgba(255,255,255,0.01)_1px,transparent_0,transparent_50%)] bg-[length:12px_12px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="micro-label mb-8 px-5 py-2 rounded-full bg-gold-500/5 border border-gold-500/20 inline-block"
          >
            🌿 Preserving Lumad Heritage Through Technology
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold leading-[0.95] mb-8 tracking-tight text-balance"
          >
            Speak the <span className="text-gold-500 italic">Ancestors'</span> <span className="text-brand-green">Words</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/60 text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed text-balance"
          >
            A geo-tagged documentation platform and gamified learning app 
            for the endangered Lumad languages of Mindanao.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-5 mb-20">
            <Link to="/learn" className="btn-3d-gold px-10 py-4 text-lg">
              🎮 Start Learning
            </Link>
            <Link to="/docs" className="btn-3d-secondary px-10 py-4 text-lg">
              🗺️ Explore Archive
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Dictionary entries", value: "214", icon: <Book size={14} /> },
              { label: "Audio recordings", value: "47", icon: <Mic size={14} /> },
              { label: "Communities", value: "3", icon: <Users size={14} /> },
              { label: "Lesson modules", value: "5", icon: <Play size={14} /> },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-1 group hover:bg-white/10 transition-colors">
                <div className="text-gold-500/40 group-hover:text-gold-500 transition-colors mb-1">{stat.icon}</div>
                <span className="text-2xl font-display font-semibold text-white">{stat.value}</span>
                <span className="text-[10px] font-extrabold text-white/30 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20"
        >
          <span>Explore Journey</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Modules Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="micro-label mb-4 block">Two platforms, one mission</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold mb-6 leading-tight">Everything you need to <span className="text-gold-500">learn</span> and <span className="text-brand-green">preserve</span></h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/50 text-lg font-medium leading-relaxed border-l-2 border-gold-500/30 pl-8">
              Whether you're a student discovering your heritage or a researcher documenting languages, 
              Lumad Lingua provides the bridge between generations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Learn Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="card-cream group relative overflow-hidden flex flex-col"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl group-hover:bg-gold-500/20 transition-all duration-500" />
            <div className="w-20 h-20 rounded-3xl bg-gold-500/10 flex items-center justify-center text-4xl mb-8 shadow-inner">🎮</div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/15 text-gold-700 text-[10px] font-extrabold uppercase tracking-widest mb-6 w-fit">Learning Module</span>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-cream-text mb-6">Gamified Learning</h3>
            <p className="text-cream-text2 text-lg font-medium mb-10 leading-relaxed">
              Master Mansaka and Mandaya vocabulary through interactive quizzes, listening exercises, 
              and word challenges — all designed like a game.
            </p>
            <div className="space-y-4 mb-12 flex-grow">
              {[
                { text: "Multiple-choice translation drills", icon: "💬" },
                { text: "Listening comprehension exercises", icon: "🎧" },
                { text: "Word arrangement challenges", icon: "📝" },
                { text: "XP, streaks & heart system", icon: "⭐" },
              ].map((feat) => (
                <div key={feat.text} className="flex items-center gap-4 text-sm font-bold text-cream-text2">
                  <div className="w-6 h-6 rounded-lg bg-gold-500/10 flex items-center justify-center text-xs">{feat.icon}</div>
                  {feat.text}
                </div>
              ))}
            </div>
            <Link to="/learn" className="btn-3d-gold w-full justify-center py-5 text-lg">
              Start Learning →
            </Link>
          </motion.div>

          {/* Docs Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="card-cream group relative overflow-hidden flex flex-col"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl group-hover:bg-brand-green/20 transition-all duration-500" />
            <div className="w-20 h-20 rounded-3xl bg-brand-green/10 flex items-center justify-center text-4xl mb-8 shadow-inner">🗺️</div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/15 text-brand-green text-[10px] font-extrabold uppercase tracking-widest mb-6 w-fit">Documentation Module</span>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-cream-text mb-6">Language Archive</h3>
            <p className="text-cream-text2 text-lg font-medium mb-10 leading-relaxed">
              Explore geo-tagged audio recordings, a searchable digital dictionary, 
              and interactive maps showing where each language lives.
            </p>
            <div className="space-y-4 mb-12 flex-grow">
              {[
                { text: "Interactive heatmap of recordings", icon: "🗺️" },
                { text: "Audio archive with waveform player", icon: "🎵" },
                { text: "Searchable digital dictionary", icon: "📖" },
                { text: "Community validator workflow", icon: "✅" },
              ].map((feat) => (
                <div key={feat.text} className="flex items-center gap-4 text-sm font-bold text-cream-text2">
                  <div className="w-6 h-6 rounded-lg bg-brand-green/10 flex items-center justify-center text-xs">{feat.icon}</div>
                  {feat.text}
                </div>
              ))}
            </div>
            <Link to="/docs" className="btn-3d-gold !bg-brand-green !shadow-[0_6px_0_#226636] w-full justify-center py-5 text-lg">
              Explore Archive →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-linear-to-b from-forest-800 to-forest-900 border-y border-white/10 py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-gold-500/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-7xl mb-12 drop-shadow-2xl"
          >
            🌏
          </motion.div>
          <span className="micro-label mb-6 block">Our foundation</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-8 leading-tight text-balance">Every language lost is a <span className="text-gold-500">library burned</span></h2>
          <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
            UNESCO estimates 2,500 languages worldwide are currently endangered. 
            Mansaka and Mandaya are among them. Each language encodes unique frameworks 
            for understanding nature, kinship, and community.
          </p>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 text-base font-extrabold text-brand-blue shadow-lg">
            <Shield size={20} />
            🎓 Aligned with UN SDG 4 — Quality Education
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <span className="micro-label mb-4 block">Who it's for</span>
          <h2 className="font-display text-5xl font-semibold mb-6">Built for the <span className="text-gold-500">Community</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "👴🏽", title: "Elders & Leaders", desc: "Validate recordings and ensure cultural accuracy of the documentation." },
            { icon: "🧒🏽", title: "Youth & Students", desc: "Learn through games and rediscover ancestral languages in a modern format." },
            { icon: "🎓", title: "Educators", desc: "Access dictionary resources and lesson content aligned with MTB-MLE." },
            { icon: "🔬", title: "Researchers", desc: "Analyze geo-tagged recordings and identify documentation gaps." },
            { icon: "📢", title: "Contributors", desc: "Upload recordings and add dictionary entries to build the archive." },
            { icon: "🏛️", title: "NCIP & DepEd", desc: "Identify communities needing priority intervention and resources." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-glass text-center group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/40 text-sm font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

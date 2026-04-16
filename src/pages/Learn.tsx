import { motion } from "motion/react";
import { Play, Star, Heart, Trophy, Sparkles } from "lucide-react";

export default function Learn() {
  const modules = [
    { title: "Greetings", level: 1, xp: 100, icon: "👋", color: "bg-gold-500/10", textColor: "text-gold-500" },
    { title: "Family", level: 2, xp: 250, icon: "👨‍👩‍👧‍👦", color: "bg-brand-green/10", textColor: "text-brand-green" },
    { title: "Nature", level: 3, xp: 500, icon: "🌿", color: "bg-brand-blue/10", textColor: "text-brand-blue" },
    { title: "Numbers", level: 1, xp: 150, icon: "🔢", color: "bg-brand-red/10", textColor: "text-brand-red" },
  ];

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
        <div>
          <span className="micro-label mb-4 block">Learning Path</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold">Master the <span className="text-gold-500">Language</span></h1>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center">
              <Star className="text-gold-500" size={20} />
            </div>
            <div>
              <div className="text-[10px] font-extrabold text-white/30 uppercase tracking-widest">Total XP</div>
              <div className="font-display font-semibold text-xl">1,240</div>
            </div>
          </div>
          <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center">
              <Heart className="text-brand-red" size={20} />
            </div>
            <div>
              <div className="text-[10px] font-extrabold text-white/30 uppercase tracking-widest">Hearts</div>
              <div className="font-display font-semibold text-xl">5</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-cream group flex flex-col"
            >
              <div className={`w-16 h-16 rounded-2xl ${mod.color} flex items-center justify-center text-3xl mb-8 shadow-inner`}>
                {mod.icon}
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-3xl font-semibold text-cream-text">{mod.title}</h3>
                <span className="px-3 py-1 rounded-full bg-cream-text/5 text-[10px] font-extrabold text-cream-text3 uppercase tracking-widest">Level {mod.level}</span>
              </div>
              <p className="text-cream-text2 text-base font-medium mb-10 leading-relaxed flex-grow">Master common {mod.title.toLowerCase()} in Mansaka and Mandaya.</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-cream-brd/50">
                <div className="flex items-center gap-2 text-xs font-extrabold text-cream-text3 uppercase tracking-widest">
                  <Trophy size={14} className="text-gold-500" />
                  {mod.xp} XP Reward
                </div>
                <button className="w-12 h-12 rounded-2xl bg-gold-500 flex items-center justify-center text-cream-text shadow-[0_4px_0_theme(colors.gold.700)] group-active:translate-y-[4px] group-active:shadow-none transition-all hover:scale-105">
                  <Play size={20} fill="currentColor" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="card-glass p-8 relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-gold-500/5 rounded-full blur-3xl" />
            <h3 className="font-display text-2xl font-semibold mb-8">Daily Quest</h3>
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex justify-between text-[10px] font-extrabold uppercase tracking-widest mb-3">
                  <span className="text-white/40">Complete 3 lessons</span>
                  <span className="text-gold-500">2 / 3</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "66%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-linear-to-r from-gold-500 to-orange-500 rounded-full" 
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] italic">
                <Sparkles size={12} />
                Resets in 14 hours
              </div>
            </div>
          </div>

          <div className="card-glass p-8">
            <h3 className="font-display text-2xl font-semibold mb-8">Leaderboard</h3>
            <div className="space-y-5">
              {[
                { name: "Datu_Mansaka", xp: "4,200", rank: 1, avatar: "👴🏽" },
                { name: "Lumad_Warrior", xp: "3,850", rank: 2, avatar: "🏹" },
                { name: "Mindanao_Preserve", xp: "3,100", rank: 3, avatar: "🌿" },
              ].map((user) => (
                <div key={user.name} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 text-center font-display font-bold text-lg ${user.rank === 1 ? "text-gold-500" : "text-white/20"}`}>
                      {user.rank}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {user.avatar}
                    </div>
                    <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{user.name}</span>
                  </div>
                  <span className="text-xs font-extrabold text-white/30 uppercase tracking-widest">{user.xp} XP</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 rounded-xl border border-white/10 text-[10px] font-extrabold uppercase tracking-widest text-white/40 hover:bg-white/5 hover:text-white transition-all">
              View Full Rankings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

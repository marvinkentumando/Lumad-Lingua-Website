import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Landmark, Users, Shield, Flower2, Mountain } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#FDFBF4] text-[#1A1A1A] font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="lg:w-1/2 relative z-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md aspect-[3/4] bg-linear-to-b from-transparent to-black/5 rounded-[60px] flex items-end justify-center overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/lumad/800/1200" 
              alt="Lumad Character" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
              referrerPolicy="no-referrer"
            />
            {/* Soft Glow behind character */}
            <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-gold-500/20 to-transparent" />
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tight"
          >
            The Ancestral <br /> Ascent
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-black/70 font-medium leading-relaxed mb-12 max-w-xl"
          >
            Learning a language is not just acquiring words; it is an ascent up a mist-shrouded mountain of heritage. Every step reveals a story, every breath a connection to those who walked before us.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/learn" className="bg-[#0D1A11] text-white px-10 py-4 rounded-full text-sm font-extrabold tracking-widest hover:bg-black transition-all active:scale-95 shadow-xl">
              Start Learning Now
            </Link>
            <Link to="/about" className="border-2 border-black text-black px-10 py-4 rounded-full text-sm font-extrabold tracking-widest hover:bg-black/5 transition-all active:scale-95">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Our Platform Story */}
      <section className="py-32 px-4 max-w-5xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Our Platform Story</h2>
        <p className="text-black/60 text-lg font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
          Lumad Lingua was born from a digital earthwork philosophy—rejecting the sterile, boxy constraints of modern tech to create a space that feels woven rather than coded.
        </p>

        <div className="space-y-8">
          {[
            {
              title: "Digital Earthwork",
              desc: "We treat language learning as a cultural ceremony. Our interface incorporates floral micro-illustrations and geometric Pakudos textures to provide a high-end editorial feel that respects the oral traditions we preserve."
            },
            {
              title: "The Oral Tradition",
              desc: "By using warm typography and International Phonetic Alphabet (IPA) technical notations, we bridge the gap between playful accessibility and scholarly precision, acting as a living field note for indigenous wisdom."
            },
            {
              title: "Community Co-Creation",
              desc: "Every lesson, audio clip, and cultural note is validated by tribal elders and community leaders, ensuring that Lumad Lingua is not just an app, but a vessel for community sovereignty."
            }
          ].map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F7F3E8] p-10 md:p-14 rounded-[40px] text-left border border-black/5"
            >
              <h3 className="font-display text-2xl font-bold mb-4">{story.title}</h3>
              <p className="text-black/50 text-base font-medium leading-relaxed">{story.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-[#EBE8DF] rounded-[60px] p-12 md:p-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Partners in Preservation</h2>
          <p className="text-black/40 text-lg font-medium mb-20">
            We are honored to work directly with the guardians of these ancestral voices.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Landmark size={32} />, label: "NCIP" },
              { icon: <Users size={32} />, label: "MANSAKA TRIBAL COUNCIL" },
              { icon: <Shield size={32} />, label: "MANDAYA ELDERS" },
              { icon: <Flower2 size={32} />, label: "CULTURAL CENTER" }
            ].map((partner) => (
              <div key={partner.label} className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white/50 flex items-center justify-center text-black/60 shadow-inner">
                  {partner.icon}
                </div>
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-black/40 uppercase">{partner.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-32 px-4 max-w-7xl mx-auto relative overflow-hidden">
        {/* Subtle Watermarks */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Mountain size={400} />
        </div>
        <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none">
          <Flower2 size={300} />
        </div>

        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-500 mb-6">The Three Core Pillars</h2>
          <p className="text-black/40 text-lg font-medium max-w-2xl mx-auto">
            Our mission is anchored in these foundational truths that guide every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          {[
            {
              title: "Rootedness",
              desc: "We believe that identity is inseparable from language. By anchoring our learners in ancestral vocabulary, we provide a sense of place in a globalized world.",
              icon: "🌱",
              color: "bg-green-500/10"
            },
            {
              title: "Joy",
              desc: "Preservation shouldn't feel like a chore. We infuse every interaction with the vibrant colors and celebrations inherent to Lumad life and culture.",
              icon: "✨",
              color: "bg-gold-500/10"
            },
            {
              title: "Community",
              desc: "A language only lives if it is shared. We build bridges between generations and cultures, fostering a collective ascent toward understanding.",
              icon: "🤝",
              color: "bg-blue-500/10"
            }
          ].map((pillar) => (
            <div key={pillar.title} className="flex flex-col items-center text-center group">
              <div className={`w-16 h-16 rounded-2xl ${pillar.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}>
                {pillar.icon}
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-black/50 text-base font-medium leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Ascent */}
      <section className="py-40 px-4 text-center relative overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-10%] opacity-[0.05] pointer-events-none">
          <Mountain size={600} />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <Mountain size={48} className="text-gold-500" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">Join the Ascent</h2>
          <p className="text-black/50 text-lg md:text-xl font-medium leading-relaxed mb-16">
            Whether you are a descendant seeking your roots or a global citizen honoring cultural diversity, your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn" className="bg-[#0D1A11] text-white px-12 py-5 rounded-full text-sm font-extrabold tracking-widest hover:bg-black transition-all active:scale-95 shadow-xl">
              Start Learning Now
            </Link>
            <Link to="/docs" className="border-2 border-black text-black px-12 py-5 rounded-full text-sm font-extrabold tracking-widest hover:bg-black/5 transition-all active:scale-95">
              Contribute Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

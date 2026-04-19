import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Globe, MessageSquare, Heart } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-cream-bg dark:bg-forest-950 text-cream-text dark:text-white/90 min-h-screen font-sans selection:bg-gold-200 transition-colors duration-300">
      {/* Hero Section - Synchronized Editorial Style */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden bg-white dark:bg-forest-900 transition-colors duration-500">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
        {/* Soft Glow Decoration */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-radial-[circle_at_70%_40%] from-gold-500/10 to-transparent pointer-events-none blur-3xl opacity-60 dark:opacity-20" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-2xl text-center lg:text-left order-2 lg:order-1"
          >
            <span className="micro-label mb-6 block text-forest-700 dark:text-gold-500">Get in Touch</span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[80px] font-black mb-8 leading-[1.1] lg:leading-[80px] tracking-tight text-hero-heading dark:text-white">
              Let's <span className="text-gold-600 italic">Connect</span> with Heritage
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-hero-body dark:text-white/60 font-medium leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Whether you have a question about our research, want to contribute a story, or simply wish to support the ascent, we're here to listen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full px-0 sm:px-4 lg:px-0"
          >
            {/* Thematic Visual - Square & Balanced Video */}
            <div className="relative w-full aspect-square overflow-hidden mt-4 sm:mt-8 lg:mt-0">
              <iframe 
                id="js_video_iframe" 
                src="https://jumpshare.com/embed/0uf6Plw55TEXKnOWHUW7" 
                frameBorder="0" 
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "transparent" }}
                title="Contact Heritage Showcase"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-cream dark:bg-forest-900 dark:border-white/10 p-6 sm:p-8 md:p-12 shadow-xl transition-colors duration-500"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-cream-text dark:text-white leading-tight">Send a Message</h2>
            <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4 dark:text-gold-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Juan Dela Cruz"
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-forest-800 border border-cream-brd/50 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-semibold text-cream-text dark:text-white placeholder:text-cream-text3/40 dark:placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4 dark:text-gold-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="juan@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-forest-800 border border-cream-brd/50 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-semibold text-cream-text dark:text-white placeholder:text-cream-text3/40 dark:placeholder:text-white/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4 dark:text-gold-500">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-forest-800 border border-cream-brd/50 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-semibold appearance-none text-cream-text dark:text-white">
                  <option>General Inquiry</option>
                  <option>Contribute a Story</option>
                  <option>Partnership Proposal</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4 dark:text-gold-500">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-forest-800 border border-cream-brd/50 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-semibold resize-none text-cream-text dark:text-white placeholder:text-cream-text3/40 dark:placeholder:text-white/20"
                ></textarea>
              </div>
              <button className="btn-primary w-full py-5 flex items-center justify-center gap-3 group !bg-forest-900 dark:!bg-gold-500 !text-white dark:!text-forest-900">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between py-8 text-left"
          >
            <div className="space-y-8 lg:space-y-12">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-cream-text dark:text-white leading-tight">Contact Information</h2>
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-forest-800 shadow-sm border border-cream-brd/50 dark:border-white/10 flex items-center justify-center text-gold-600 dark:text-gold-500 shrink-0 group-hover:bg-gold-500 dark:group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 dark:text-white/40 mb-1">Email Us</div>
                      <div className="text-xl font-bold text-cream-text dark:text-white">hello@lumadlingua.ph</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-forest-800 shadow-sm border border-cream-brd/50 dark:border-white/10 flex items-center justify-center text-gold-600 dark:text-gold-500 shrink-0 group-hover:bg-gold-500 dark:group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 dark:text-white/40 mb-1">Visit Us</div>
                      <div className="text-xl font-bold text-cream-text dark:text-white leading-tight">
                        Davao del Norte State College<br />
                        Panabo City, Davao del Norte
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-forest-800 shadow-sm border border-cream-brd/50 dark:border-white/10 flex items-center justify-center text-gold-600 dark:text-gold-500 shrink-0 group-hover:bg-gold-500 dark:group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 dark:text-white/40 mb-1">Call Us</div>
                      <div className="text-xl font-bold text-cream-text dark:text-white">+63 (084) 628 4301</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 rounded-[40px] bg-forest-900 dark:bg-forest-800 text-white relative overflow-hidden transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl" />
                <h3 className="font-display text-2xl font-bold mb-4 relative z-10">Community Support</h3>
                <p className="text-white/60 dark:text-white/40 font-medium mb-8 relative z-10">
                  Are you a tribal leader or educator? We have dedicated channels for cultural validation and curriculum integration.
                </p>
                <button className="flex items-center gap-2 text-gold-500 font-bold hover:text-gold-400 dark:hover:text-white transition-colors relative z-10">
                  <MessageSquare size={18} /> Access Portal
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-12">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 dark:text-white/40">Follow the Ascent</span>
              <div className="flex gap-4">
                {[Globe, MessageSquare, Heart].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-full bg-white dark:bg-forest-800 border border-cream-brd/50 dark:border-white/10 flex items-center justify-center text-cream-text3 dark:text-white/40 hover:text-gold-600 dark:hover:text-gold-500 hover:border-gold-500 transition-all">
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

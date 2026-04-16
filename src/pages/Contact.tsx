import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Globe, MessageSquare, Heart } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-cream-bg min-h-screen font-sans selection:bg-gold-200">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="micro-label mb-6 block">Get in Touch</span>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-10 leading-[0.85] tracking-tight text-cream-text">
            Let's <span className="text-gold-600 italic">Connect</span>
          </h1>
          <p className="text-cream-text2 text-xl md:text-2xl font-semibold leading-relaxed max-w-2xl">
            Whether you have a question about our research, want to contribute a story, or simply wish to support the ascent, we're here to listen.
          </p>
        </motion.div>
      </section>

      <section className="pb-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card-cream p-8 md:p-12 shadow-xl"
          >
            <h2 className="font-display text-3xl font-bold mb-8 text-cream-text">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Juan Dela Cruz"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-cream-brd/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-semibold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="juan@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-cream-brd/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-semibold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white border border-cream-brd/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-semibold appearance-none">
                  <option>General Inquiry</option>
                  <option>Contribute a Story</option>
                  <option>Partnership Proposal</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-cream-brd/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-semibold resize-none"
                ></textarea>
              </div>
              <button className="btn-primary w-full py-5 flex items-center justify-center gap-3 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-between py-8"
          >
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-3xl font-bold mb-8 text-cream-text">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-cream-brd/50 flex items-center justify-center text-gold-600 shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 mb-1">Email Us</div>
                      <div className="text-xl font-bold text-cream-text">hello@lumadlingua.ph</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-cream-brd/50 flex items-center justify-center text-gold-600 shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 mb-1">Visit Us</div>
                      <div className="text-xl font-bold text-cream-text leading-tight">
                        Davao del Norte State College<br />
                        Panabo City, Davao del Norte
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-cream-brd/50 flex items-center justify-center text-gold-600 shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 mb-1">Call Us</div>
                      <div className="text-xl font-bold text-cream-text">+63 (084) 628 4301</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 rounded-[40px] bg-forest-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl" />
                <h3 className="font-display text-2xl font-bold mb-4 relative z-10">Community Support</h3>
                <p className="text-white/60 font-medium mb-8 relative z-10">
                  Are you a tribal leader or educator? We have dedicated channels for cultural validation and curriculum integration.
                </p>
                <button className="flex items-center gap-2 text-gold-500 font-bold hover:text-gold-400 transition-colors relative z-10">
                  <MessageSquare size={18} /> Access Portal
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-12">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3">Follow the Ascent</span>
              <div className="flex gap-4">
                {[Globe, MessageSquare, Heart].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-full bg-white border border-cream-brd/50 flex items-center justify-center text-cream-text3 hover:text-gold-600 hover:border-gold-500 transition-all">
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

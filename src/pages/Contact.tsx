import { motion, AnimatePresence } from "motion/react";
import { Search, Rocket, GraduationCap, HeartHandshake, ShieldCheck, Wrench, BookOpen, HelpCircle, Mail, ExternalLink, Phone, ChevronDown, Loader2, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const messagesCollection = 'contactMessages';
      await addDoc(collection(db, messagesCollection), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'contactMessages');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const categories = [
    {
      title: "Getting Started",
      icon: <Rocket size={24} className="text-gold-700" />,
      iconBg: "bg-gold-100",
      links: [
        { text: "How do I record a word?", id: "how-do-i-record-a-word" },
        { text: "Setting up your cultural profile", id: "understanding-the-ascent" },
        { text: "Understanding the Ascent levels", id: "understanding-the-ascent" }
      ],
      count: 12
    },
    {
      title: "For Learners",
      icon: <GraduationCap size={24} className="text-forest-500" />,
      iconBg: "bg-forest-50",
      links: [
        { text: "How to use the IPA field notes", id: "how-do-i-record-a-word" },
        { text: "Practicing offline mode", id: "how-do-i-record-a-word" },
        { text: "Earning community badges", id: "understanding-the-ascent" }
      ],
      count: 8
    },
    {
      title: "For Contributors",
      icon: <HeartHandshake size={24} className="text-brand-red" />,
      iconBg: "bg-brand-red/10",
      links: [
        { text: "Who validates my submissions?", id: "who-validates-my-submissions" },
        { text: "Recording environmental guidelines", id: "how-do-i-record-a-word" },
        { text: "Language preservation ethics", id: "cultural-handbook" }
      ],
      count: 15
    },
    {
      title: "Validation Protocol",
      icon: <ShieldCheck size={24} className="text-brand-blue" />,
      iconBg: "bg-brand-blue/10",
      links: [
        { text: "The 3-tier verification process", id: "who-validates-my-submissions" },
        { text: "Elder council oversight", id: "who-validates-my-submissions" },
        { text: "Reporting inaccuracy", id: "who-validates-my-submissions" }
      ],
      count: 6
    },
    {
      title: "Technical Support",
      icon: <Wrench size={24} className="text-gold-700" />,
      iconBg: "bg-gold-100",
      links: [
        { text: "Mic permissions troubleshoot", id: "how-do-i-record-a-word" },
        { text: "Exporting your learning data", id: "how-do-i-record-a-word" },
        { text: "Account recovery steps", id: "how-do-i-record-a-word" }
      ],
      count: 21
    }
  ];

  const faqs = [
    {
      q: "Can I download audio for offline use?",
      a: "Yes! You can download entire dialect modules to your device via the \"Resource Library\" section in your settings. This is ideal for field work in remote areas."
    },
    {
      q: "How are the rewards calculated?",
      a: "Rewards (Ascent Points) are granted based on the accuracy of your recording, validation by a tier-2 contributor, and community engagement with your submitted artifacts."
    },
    {
      q: "What happens to my data if I delete my account?",
      a: "Personal identifiers are removed instantly. However, contributions made to the open linguistic database remain (anonymously) to ensure the continuity of language preservation effort."
    }
  ];

  return (
    <div className="bg-cream-bg dark:bg-forest-950 text-cream-text dark:text-white/90 min-h-screen font-sans selection:bg-gold-200 transition-colors duration-300">
      {/* Hero Section - Synchronized Editorial Style */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden bg-white dark:bg-forest-900 transition-colors duration-500">
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

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-20 mb-12 lg:mb-16 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-cream dark:bg-forest-900 dark:border-white/10 !p-10 flex flex-col group transition-colors duration-500"
            >
              <div className={`w-14 h-14 ${cat.iconBg} dark:bg-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-cream-text dark:text-white group-hover:text-gold-700 dark:group-hover:text-gold-500 transition-colors">{cat.title}</h3>
              <ul className="space-y-4 mb-10 flex-grow text-left">
                {cat.links.map((link, j) => (
                  <li key={`${cat.title}-${link.id}-${j}`}>
                    <Link 
                      to={`/docs#${link.id}`}
                      onClick={scrollToTop}
                      className="text-cream-text2 dark:text-white/60 hover:text-gold-700 dark:hover:text-gold-500 font-semibold text-sm transition-colors text-left"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link 
                to="/docs"
                onClick={scrollToTop}
                className="text-gold-700 dark:text-gold-500 font-extrabold text-[11px] uppercase tracking-[0.2em] hover:text-gold-800 dark:hover:text-white transition-colors text-left"
              >
                View All {cat.count} Articles
              </Link>
            </motion.div>
          ))}

          {/* Cultural Protocols Special Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-forest-900 dark:bg-forest-800 rounded-[20px] p-10 flex flex-col text-white relative overflow-hidden group transition-colors duration-500"
          >
            <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-gold-500/10 rounded-full blur-3xl group-hover:bg-gold-500/20 transition-all" />
            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-8">
              <BookOpen size={24} className="text-gold-500" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-6">Cultural Protocols</h3>
            <p className="text-white/50 dark:text-white/40 text-sm font-medium leading-relaxed mb-10 flex-grow text-left">
              Learn about the sacred nature of the languages we preserve and the respectful ways to engage with the material.
            </p>
            <Link 
              to="/docs#cultural-handbook"
              onClick={scrollToTop}
              className="btn-primary !bg-gold-500 !text-forest-900 !py-3 !text-xs w-fit flex items-center gap-2"
            >
              Read Handbook <ExternalLink size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 mb-16 lg:mb-24 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold text-center mb-12 lg:mb-16 text-cream-text dark:text-white leading-tight"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-forest-900 rounded-[20px] shadow-sm border border-cream-brd/20 dark:border-white/10 transition-colors duration-500 overflow-hidden"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle size={14} className="text-gold-700 dark:text-gold-500" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-cream-text dark:text-white">{faq.q}</h4>
                </div>
                <ChevronDown 
                  size={20} 
                  className={`text-cream-text2 dark:text-white/60 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-cream-text2 dark:text-white/60 text-base font-medium leading-relaxed pl-18 pr-8 pb-8 text-left">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section - Merged from Contact Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-16 lg:pb-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="micro-label mb-4 block text-forest-700 dark:text-gold-500">Need more help?</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold text-forest-900 dark:text-white leading-tight">Send Us a <span className="text-gold-600 italic">Message</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-cream dark:bg-forest-900 dark:border-white/10 p-8 md:p-12 shadow-xl"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-gold-600 dark:text-gold-500" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-forest-900 dark:text-white">Message Sent!</h3>
                <p className="text-cream-text2 dark:text-white/60 font-medium mb-8">
                  Thank you for reaching out. A steward from our team will connect with you soon.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-gold-700 dark:text-gold-500 font-bold text-sm uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6 text-left" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4 dark:text-gold-500">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Juan Dela Cruz" 
                      className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-forest-800 border border-cream-brd/50 dark:border-white/10 focus:ring-2 focus:ring-gold-500 outline-none text-cream-text dark:text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4 dark:text-gold-500">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@example.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-forest-800 border border-cream-brd/50 dark:border-white/10 focus:ring-2 focus:ring-gold-500 outline-none text-cream-text dark:text-white" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4 dark:text-gold-500">Message</label>
                  <textarea 
                    required
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-forest-800 border border-cream-brd/50 dark:border-white/10 focus:ring-2 focus:ring-gold-500 outline-none text-cream-text dark:text-white resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={loading}
                  className="group relative w-full px-10 sm:px-12 py-5 sm:py-7 rounded-full bg-forest-900 dark:bg-gold-500 text-white dark:text-forest-900 font-bold text-base sm:text-lg overflow-hidden transition-all shadow-2xl shadow-forest-900/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gold-600 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? (
                      <>Sending... <Loader2 size={20} className="animate-spin" /></>
                    ) : (
                      <>Send Message <Mail size={20} /></>
                    )}
                  </span>
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center text-left space-y-10"
          >
            <div>
              <h3 className="font-display text-3xl font-bold mb-4 text-forest-900 dark:text-white">Direct Contact</h3>
              <p className="text-cream-text2 dark:text-white/60 text-lg font-medium leading-relaxed mb-8">
                Our support team is available Monday through Friday, 8:00 AM to 5:00 PM (PST).
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600"><Mail size={18} /></div>
                  <span className="font-bold text-forest-900 dark:text-white">hello@lumadlingua.ph</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600"><Phone size={18} /></div>
                  <span className="font-bold text-forest-900 dark:text-white">+63 (084) 628 4301</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-[30px] bg-cream-bg dark:bg-white/5 border border-cream-brd/50 dark:border-white/10">
              <h4 className="font-bold text-forest-900 dark:text-white mb-2">Institution</h4>
              <p className="text-sm text-cream-text2 dark:text-white/40 font-medium">
                Davao del Norte State College<br />
                Panabo City, Davao del Norte
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "motion/react";
import React, { useState, FormEvent } from "react";
import { Mail, User, Send, CheckCircle2, Loader2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    interest: 'Language Learner'
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const waitlistCollection = 'waitlist';
      await addDoc(collection(db, waitlistCollection), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'waitlist');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className="bg-cream-bg dark:bg-forest-950 min-h-screen pt-32 pb-20 px-4 transition-colors duration-300 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white dark:bg-forest-900 border border-cream-brd/30 dark:border-white/10 p-12 rounded-[40px] text-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} className="text-gold-600 dark:text-gold-500" />
          </div>
          <h2 className="font-display text-3xl font-bold mb-4 text-forest-900 dark:text-white">You're on the List!</h2>
          <p className="text-cream-text2 dark:text-white/60 font-medium mb-8">
            Thank you for joining our waitlist. We'll notify you as soon as early access becomes available.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="btn-primary w-full py-4 text-sm font-black uppercase tracking-widest"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-cream-bg dark:bg-forest-950 min-h-screen transition-colors duration-300">
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-8 lg:px-12 overflow-hidden bg-white dark:bg-forest-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[60%] h-full bg-radial-[circle_at_70%_40%] from-gold-500/10 to-transparent pointer-events-none blur-3xl opacity-60 dark:opacity-20" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-2xl text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-cream-brd/50 dark:border-white/10 shadow-sm mb-10 mx-auto lg:mx-0">
               <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.25em] text-forest-700 dark:text-gold-500">Early Access Opportunity</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[80px] font-black mb-10 leading-[1.1] lg:leading-[90px] tracking-tighter text-forest-900 dark:text-white">
              Join the <br /> <span className="text-gold-600 italic">Waitlist</span>
            </h1>
            <p className="text-lg sm:text-xl text-cream-text2 dark:text-white/60 font-medium leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Be the first to experience the ancestral ascent. Join our exclusive waitlist and help us build the future of indigenous language preservation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="bg-cream-bg dark:bg-forest-800/50 backdrop-blur-md border border-cream-brd/30 dark:border-white/10 p-10 md:p-14 rounded-[50px] shadow-2xl">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4 dark:text-gold-500">Full Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-cream-text3" />
                    <input 
                      required
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Juan Dela Cruz" 
                      className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-forest-900 border border-cream-brd/50 dark:border-white/10 focus:ring-2 focus:ring-gold-500 outline-none text-cream-text dark:text-white transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4 dark:text-gold-500">Email Address</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-cream-text3" />
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@example.com" 
                      className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-forest-900 border border-cream-brd/50 dark:border-white/10 focus:ring-2 focus:ring-gold-500 outline-none text-cream-text dark:text-white transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-cream-text3 ml-4 dark:text-gold-500">Your Interest</label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-6 py-5 rounded-2xl bg-white dark:bg-forest-900 border border-cream-brd/50 dark:border-white/10 focus:ring-2 focus:ring-gold-500 outline-none text-cream-text dark:text-white transition-all appearance-none"
                  >
                    <option>Language Learner</option>
                    <option>Native Speaker / Contributor</option>
                    <option>Institutional Partner</option>
                    <option>Linguistics Researcher</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="group relative w-full h-20 rounded-full bg-forest-900 dark:bg-gold-500 text-white dark:text-forest-900 font-bold text-lg overflow-hidden transition-all shadow-2xl shadow-forest-900/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gold-600 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? (
                      <>Processing... <Loader2 size={20} className="animate-spin" /></>
                    ) : (
                      <>Join Waitlist <Send size={20} /></>
                    )}
                  </span>
                </button>
                
                <p className="text-[10px] text-center font-bold text-cream-text3 dark:text-white/30 tracking-widest uppercase px-8">
                  By joining, you agree to receive updates about the Lumad Lingua platform.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

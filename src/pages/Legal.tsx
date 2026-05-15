import { motion, AnimatePresence } from "motion/react";
import { Shield, FileText, Users, Heart, X, ChevronRight, Download } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { jsPDF } from "jspdf";

interface LegalSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: {
    subtitle: string;
    paragraphs: string[];
  }[];
}

export default function Legal() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("privacy");

  const handleDownload = () => {
    toast.promise(
      async () => {
        const doc = new jsPDF();
        const margin = 20;
        let cursorY = 20;

        // Title
        doc.setFontSize(22);
        doc.setTextColor(26, 58, 42); // Forest 900
        doc.text("Lumad Lingua", margin, cursorY);
        cursorY += 10;

        doc.setFontSize(10);
        doc.setTextColor(150);
        doc.text("Cultural Governance Framework", margin, cursorY);
        cursorY += 15;

        // Section Title
        doc.setFontSize(18);
        doc.setTextColor(0);
        doc.text(activeData.title, margin, cursorY);
        cursorY += 10;

        doc.setFontSize(8);
        doc.setTextColor(184, 134, 11); // Gold
        doc.text("Last Updated: May 2026", margin, cursorY);
        cursorY += 15;

        // Content
        activeData.content.forEach((item) => {
          doc.setFontSize(14);
          doc.setTextColor(26, 58, 42);
          doc.text(item.subtitle, margin, cursorY);
          cursorY += 8;

          doc.setFontSize(11);
          doc.setTextColor(60);
          
          item.paragraphs.forEach((p) => {
            const lines = doc.splitTextToSize(p, 170);
            doc.text(lines, margin, cursorY);
            cursorY += (lines.length * 6) + 6;

            if (cursorY > 270) {
              doc.addPage();
              cursorY = 20;
            }
          });
          cursorY += 4;
        });

        // Footer
        doc.setFontSize(8);
        doc.setTextColor(200);
        doc.text("© 2026 Lumad Lingua - Preserving Mindanao's Heritage", margin, 285);

        doc.save(`LumadLingua_${activeData.id}.pdf`);
      },
      {
        loading: 'Generating cultural legal document...',
        success: `${activeData.title} downloaded successfully.`,
        error: 'Failed to generate PDF.',
      }
    );
  };

  const sections: LegalSection[] = [
    {
      id: "privacy",
      title: "Privacy Policy",
      icon: <Shield size={24} />,
      content: [
        {
          subtitle: "Data Stewardship",
          paragraphs: [
            "We believe that linguistic data belongs to the communities that speak them. Lumad Lingua acts as a steward, not an owner.",
            "Any recordings you upload are encrypted and stored securely. Your personal geolocation is only used to tag recordings to specific ancestral domains with your explicit consent."
          ]
        },
        {
          subtitle: "Voice Privacy",
          paragraphs: [
            "Your voice is a unique identifier. We do not sell voice samples to third-party AI companies for synthetic voice generation without individual and community agreement."
          ]
        }
      ]
    },
    {
      id: "terms",
      title: "Terms of Service",
      icon: <FileText size={24} />,
      content: [
        {
          subtitle: "User Conduct",
          paragraphs: [
            "By using Lumad Lingua, you agree to respect the cultural integrity of the indigenous peoples of Mindanao.",
            "Misuse of recordings for mockery, commercial exploitation without permission, or misrepresentation of linguistic facts is strictly prohibited."
          ]
        },
        {
          subtitle: "Intellectual Property",
          paragraphs: [
            "All linguistic artifacts remain the intellectual property of the respective Lumad communities under the principle of Collective Cultural Property."
          ]
        }
      ]
    },
    {
      id: "community",
      title: "Community Guidelines",
      icon: <Users size={24} />,
      content: [
        {
          subtitle: "Safe Space",
          paragraphs: [
            "This platform is a sanctuary for marginalized languages. We maintain a zero-tolerance policy for hate speech, ethnic discrimination, or cultural erasure.",
            "Constructive correction of linguistic data is encouraged, but must be done with humility and respect for the elders and native speakers."
          ]
        }
      ]
    },
    {
      id: "protocols",
      title: "Cultural Protocols",
      icon: <Heart size={24} />,
      content: [
        {
          subtitle: "The Sacred and the Public",
          paragraphs: [
            "Users must acknowledge that some words and chants are sacred and should not be played in inappropriate contexts.",
            "Before recording elders, users must perform the necessary local protocols, which may include offerings or seeking permission from the tribal council."
          ]
        },
        {
          subtitle: "Deep Stewardship",
          paragraphs: [
            "We follow the 'Deep Stewardship' model, ensuring that the technology serves the culture, and not the other way around."
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && sections.find(s => s.id === hash)) {
      setActiveSection(hash);
    }
  }, [location]);

  const activeData = sections.find(s => s.id === activeSection) || sections[0];

  return (
    <div className="bg-cream-bg dark:bg-forest-950 text-cream-text dark:text-white/90 min-h-screen font-sans transition-colors duration-300 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center lg:text-left"
        >
          <span className="micro-label mb-4 block text-gold-600">Legal Framework</span>
          <h1 className="font-display text-5xl lg:text-7xl font-black mb-6 tracking-tight">
            Governance & <span className="text-gold-600 italic">Protection</span>
          </h1>
          <p className="text-xl text-cream-text2 dark:text-white/60 max-w-2xl font-medium">
            Our legal structure is built on the foundations of IPRA (Indigenous Peoples' Rights Act) and modern data sovereignty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-4 p-6 rounded-2xl transition-all text-left ${
                  activeSection === section.id
                    ? "bg-forest-900 text-white shadow-xl translate-x-2"
                    : "bg-white dark:bg-white/5 text-cream-text2 dark:text-white/40 hover:bg-gold-50 dark:hover:bg-white/10"
                }`}
              >
                <div className={`${activeSection === section.id ? "text-gold-500" : "text-cream-text3"}`}>
                  {section.icon}
                </div>
                <span className="font-display font-bold text-lg">{section.title}</span>
                {activeSection === section.id && <ChevronRight className="ml-auto" size={20} />}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 bg-white dark:bg-forest-900 rounded-[40px] p-8 lg:p-16 shadow-sm border border-cream-brd/50 dark:border-white/5 transition-colors duration-500">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                <div className="pb-8 border-b border-cream-brd/20 dark:border-white/10">
                  <h2 className="font-display text-4xl font-bold mb-4">{activeData.title}</h2>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-600">Last Updated: May 2026</p>
                </div>

                <div className="space-y-12">
                  {activeData.content.map((item, idx) => (
                    <div key={idx} className="space-y-6">
                      <h3 className="font-display text-2xl font-bold text-forest-900 dark:text-gold-500">{item.subtitle}</h3>
                      <div className="space-y-4">
                        {item.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="text-lg leading-relaxed text-cream-text2 dark:text-white/70 font-medium">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-12 mt-12 border-t border-cream-brd/20 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <p className="text-xs font-bold text-cream-text3">Need clarification? Contact our legal steward team.</p>
                  <button 
                    onClick={handleDownload}
                    className="btn-secondary !py-3 !px-6 text-xs font-black uppercase tracking-widest bg-cream-bg dark:bg-white/5 flex items-center gap-2 group"
                  >
                    <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                    Download PDF
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, FileText, Download, Award } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const downloadResume = (format: "pdf" | "txt") => {
    const content = `NUPUR RAJORIA
Strategic Communications & Portfolio Marketing Lead
London, United Kingdom | nupurrajoria@gmail.com | Portfolio: nupurrajoria.com

================================================================================
EXECUTIVE PROFILE
================================================================================
A highly analytical and creative Strategy & Communications Lead specializing in
transformative corporate storytelling, GTM positioning, and high-engagement 
audience models across national media, global healthcare, and higher education. 
Proven track record of converting clinical formulation values and reader intent
into high-margin advertiser retention and recurring audience acquisition loops.

================================================================================
CORE COMPETENCIES
================================================================================
- Strategic Communications & CXO Boardroom Engagement
- B2B2C Omnichannel Marketing & Brand Positioning
- Campaign Lifecycle Architecture (STAR Framework)
- High-Traffic Visual Curation & Layout Taxonomy
- Stakeholder Relations & Editorial Resource Coordination
- Web Analytics, Audience Metrics & Conversion Optimization

================================================================================
KEY PORTFOLIO TRIUMPHS
================================================================================

1. THE TIMES GROUP: Influencing a Country (2019 - 2021)
   Role: Regional Lead, Creative Strategy & Mass Engagement
   -----------------------------------------------------------------------------
   * Problem: Addressed print subscription attrition and advertising client 
     erosion due to accelerating digital transition.
   * Solution: Designed and executed a nationwide interactive cross-media 
     format spanning print, digital thread discussions, and broadcast.
   * Key Innovation: Developed the "Key Hook" methodology, proving localized, High-
     Intent regional reader pattern demographics directly to corporate advertisers.
   * Business Impact: Secured high-value advertiser retention and drove a 20% 
     year-on-year increase in user dwell-time and direct reader interactions.
   * Prestige: Awarded the INMA Global Media Award for "Best Idea to Encourage 
     Reader Engagement".

2. HUNGAROTRIAL: Influencing CXOs (LinkedIn Enterprise Growth)
   Role: Strategic Content Lead & B2B GTM Planner
   -----------------------------------------------------------------------------
   * Solution: Authored clinical-to-commercial narrative translations. Created
     highly localized organic LinkedIn content loops detailing drug trial efficiency.
   * Business Impact: Established HungaroTrial as the regional subject matter 
     expert for international trial sponsors, securing high-value enterprise leads.

3. UNIVERSITY OF BATH: Influencing Globally (Admissions & Campaigns)
   Role: Student Recruitment Content Strategy Lead
   -----------------------------------------------------------------------------
   * Solution: Designed peer-to-peer organic welcome assets and campus guide 
     campaigns deployed to touchpoints for international scholars.
   * Business Impact: Substantially optimized student onboarding sentiment and 
     consistently drove successful international student admissions volumes.

================================================================================
PROFESSIONAL VALUE METRICS
================================================================================
* INMA Global Media Award Winner           * 20%+ Annual Reader Dwell Growth
* 100% CXO-Aligned B2B Accounts Saved      * Million+ Global Impressions Scaled

================================================================================
EDUCATION & RECOGNITION
================================================================================
* Masters in Marketing & Strategy (UK Higher Education)
* Certified Brand Innovation & Narrative Designer
* INMA Global Media Council - Recognized Strategy Innovator
`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Nupur_Rajoria_Resume.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 text-gray-900">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="w-full max-w-md bg-white rounded-3xl border border-gray-150 shadow-2xl p-6 relative z-10 overflow-hidden"
          >
            {/* Elegant glass streak decorations */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-[#ff3e00]/5 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#ff3e00]">
                  <FileText size={18} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                    Executive Dossier
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-gray-950">
                  Acquire Document
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-black transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main Action Block: Only Download cv options and PDF in brackets */}
            <div className="space-y-4 py-2">
              <p className="text-sm text-gray-500 font-mono leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                Access Nupur Rajoria's professional resume from the download channels below.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => downloadResume("pdf")}
                  className="w-full py-4 bg-[#ff3e00] hover:bg-black text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg hover:shadow-orange-200/20 active:scale-[0.98] cursor-pointer"
                >
                  <Download size={14} />
                  Download CV [PDF]
                </button>

                <button
                  onClick={() => downloadResume("txt")}
                  className="w-full py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-150 text-xs font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.98] cursor-pointer"
                >
                  <Download size={14} className="text-gray-450" />
                  Download CV [Plain Text]
                </button>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-3 p-3.5 bg-orange-50/40 rounded-2xl border border-orange-100/50 mt-4">
                <span className="p-1.5 bg-[#ff3e00]/10 text-[#ff3e00] rounded-lg">
                  <Award size={14} />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff3e00] font-mono">
                  INMA Global Award Recipient & Strategy Lead
                </span>
              </div>
            </div>

            {/* Footer Close button */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={onClose}
                className="py-2.5 px-6 bg-gray-150 hover:bg-gray-200 text-gray-800 text-xs font-black uppercase tracking-[0.15em] rounded-xl transition-colors active:scale-[0.98] cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

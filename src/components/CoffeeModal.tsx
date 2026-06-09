import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Coffee, MapPin, Clock, ExternalLink, Sparkles } from "lucide-react";

interface CoffeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoffeeModal({ isOpen, onClose }: CoffeeModalProps) {
  const shops = [
    {
      name: "Katsute 100",
      neighborhood: "Islington / Soho",
      address: "100 Islington High St, London N1 8EG",
      specialty: "Artisanal Matcha & Rare Japanese Teas",
      description:
        "An elegant, tranquil Japanese tea sanctuary featuring antique wood styling and a peaceful stone garden. The perfect, calm oasis for refined, highly focused strategic discussions.",
      time: "Mon - Sun: 10:00 - 20:00",
      accent: "from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/30",
      badge: "TRADITIONAL & CALM",
    },
    {
      name: "Where's Fred",
      neighborhood: "The City of London",
      address: "7 Copthall Ave, London EC2R 7NJ",
      specialty: "Single-Origin Espresso & Brutalist Chic",
      description:
        "Tucked in the City's historic lanes, combining rustic brickwork with a spacious, sunlit minimalist aesthetic. Serves outstanding specialty roasts, ideal for crisp executive syncs.",
      time: "Mon - Fri: 07:30 - 16:30",
      accent: "from-amber-600/10 to-amber-800/10 hover:border-amber-600/30",
      badge: "MINIMALIST & SHARP",
    },
    {
      name: "Arome Bakery",
      neighborhood: "Covent Garden / Fitzrovia",
      address: "9 Mercer St, London WC2H 9QE",
      specialty: "East Asian Pastries & Caramelized Toast",
      description:
        "A sensation where French patisserie techniques weave with East Asian flavors. Famous for its crispy honey butter toast and lively, sensory, and highly creative atmosphere.",
      time: "Mon - Sun: 08:00 - 17:00",
      accent: "from-orange-500/10 to-[#ff3e00]/10 hover:border-[#ff3e00]/30",
      badge: "VIBRANT & INSPIRATIONAL",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
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
            className="w-full max-w-lg bg-white rounded-3xl border border-gray-150 shadow-2xl p-6 md:p-8 relative z-10 overflow-hidden"
          >
            {/* Elegant glass streak decorations */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-[#ff3e00]/5 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#ff3e00]">
                  <Coffee size={18} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                    London Rendezvous
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-gray-950">
                  Let's Talk Over Coffee
                </h3>
                <p className="text-xs text-gray-400 font-mono">
                  Select your preferred setting for our campaign consultation:
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Direct Email Integration */}
            <div className="mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-150 flex flex-row justify-between items-center gap-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#ff3e00]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-2 relative z-10">
                <span className="w-1.5 h-1.5 bg-[#ff3e00] rounded-full animate-pulse shrink-0" />
                <h4 className="text-xs font-black text-gray-950 tracking-tight leading-none">
                  Let’s schedule a chat
                </h4>
              </div>

              <a 
                href="mailto:nupurrajoria@gmail.com?subject=Strategic Campaign Consultation&body=Hi Nupur,%0A%0AWe are interested in aligning on a brand campaign strategy. Let's trace our goals and schedules."
                className="text-xs font-mono font-bold text-[#ff3e00] hover:underline relative z-10 block shrink-0"
              >
                nupurrajoria@gmail.com
              </a>
            </div>

            {/* Content List */}
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1 scrollbar-thin">
              {shops.map((shop, i) => (
                <div
                  key={shop.name}
                  className={`p-4 rounded-2xl bg-gradient-to-br ${shop.accent} border border-gray-100 hover:shadow-md transition-all duration-300 relative group`}
                >
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <div>
                      <div className="text-[8px] font-black tracking-widest text-[#ff3e00] opacity-80 uppercase">
                        {shop.badge}
                      </div>
                      <h4 className="text-base font-black text-gray-900 group-hover:text-[#ff3e00] transition-colors flex items-center gap-1.5">
                        {shop.name}
                        <span className="text-[10px] font-medium text-gray-400">
                          ({shop.neighborhood})
                        </span>
                      </h4>
                    </div>
                    {/* Tiny map direction link */}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.name + " " + shop.address)}`}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="text-[10px] text-gray-400 hover:text-[#ff3e00] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span>Directions</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-serif italic mb-3">
                    "{shop.description}"
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-gray-500 font-mono border-t border-gray-100/50 pt-2.5">
                    <span className="flex items-center gap-1 font-semibold text-gray-700">
                      <Sparkles size={11} className="text-[#ff3e00]/75" />
                      {shop.specialty}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-gray-400" />
                      {shop.address}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} className="text-gray-400" />
                      {shop.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Close Button */}
            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
              <button
                onClick={onClose}
                className="w-full py-3 bg-black hover:bg-[#ff3e00] text-white text-xs font-black uppercase tracking-[0.25em] rounded-xl transition-all duration-300 transform active:scale-95 shadow-md"
              >
                Close Selection
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

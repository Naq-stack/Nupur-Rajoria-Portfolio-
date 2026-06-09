import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  ThumbsUp,
  Share2,
  MessageSquare,
  Linkedin,
  Instagram,
  Globe,
  Newspaper,
  ShoppingBag,
  ArrowRight,
  Zap,
  Target,
  Plus,
  Search,
  Menu,
  User,
  Bell,
  Home,
  Briefcase,
  Users,
  ChevronRight,
  ChevronLeft,
  Activity,
  Star,
  Clapperboard,
  TrendingUp,
  QrCode,
  BarChart3,
  ShoppingCart,
  Trash2,
  Sparkles,
} from "lucide-react";
import * as d3 from "d3";
import CoffeeModal from "./components/CoffeeModal";

// --- Components ---

const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < text.length) {
        const charTimer = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(charTimer);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [index, text, delay]);

  return (
    <span className="font-mono">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-2 h-full bg-current ml-1 align-middle"
      >
        &nbsp;
      </motion.span>
    </span>
  );
};

const Navbar = ({ onCoffeeClick }: { onCoffeeClick: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-[100] px-8 py-6 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-10 bg-black text-white flex items-center justify-center font-black tracking-tighter rounded-lg shadow-lg text-sm">
        N.R.
      </div>
      <span className="font-black uppercase tracking-tighter text-xl">
        Portfolio.
      </span>
    </div>
    <div className="hidden md:flex space-x-8 text-[11px] font-black uppercase tracking-widest text-gray-400">
      <a
        href="#hungaro-linkedin"
        className="hover:text-black transition-colors"
      >
        HungaroTrial
      </a>
      <a href="#times-newspaper" className="hover:text-black transition-colors">
        The Times Group
      </a>
      <a href="#bath-insta" className="hover:text-black transition-colors">
        University of Bath
      </a>
      <a href="#kenvue-store" className="hover:text-black transition-colors">
        Kenvue
      </a>
    </div>
    <div className="flex items-center space-x-4">
      <div
        onClick={onCoffeeClick}
        className="px-5 py-2 bg-black text-white text-[10px] font-bold uppercase rounded-full shadow-lg cursor-pointer hover:bg-[#ff3e00] transition-all"
      >
        Coffee
      </div>
    </div>
  </nav>
);

// --- LinkedIn Card (HungaroTrial) ---
const LinkedInPost = ({
  title,
  body,
  stats,
  metric,
  i,
  star,
  accentColor = "#0077b5",
}: {
  title: string;
  body: string;
  stats: string;
  metric: string;
  i: number;
  star?: {
    situation: string;
    task: string;
    action: string;
    result: string;
    reaction: string;
  };
  accentColor?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
        viewport={{ once: true }}
        onClick={() => setIsOpen(true)}
        className="linkedin-card p-4 xs:p-6 space-y-4 mb-6 cursor-pointer hover:shadow-md transition-shadow group h-full flex flex-col"
      >
        <div className="flex justify-between items-start">
          <div className="flex space-x-3 items-center">
            <div
              className="w-10 h-10 xs:w-12 xs:h-12 flex-shrink-0 flex items-center justify-center rounded-sm text-white font-bold text-lg xs:text-xl ring-4"
              style={
                {
                  backgroundColor: accentColor,
                  ringColor: `${accentColor}20`,
                } as any
              }
            >
              HT
            </div>
            <div>
              <h4 className="font-bold text-xs xs:text-sm text-gray-900 leading-tight group-hover:opacity-80 transition-opacity">
                HungaroTrial Enterprise
              </h4>
              <p className="text-[9px] xs:text-[10px] text-gray-500">
                7,000 followers • Promoted
              </p>
              <div className="flex items-center text-[9px] xs:text-[10px] text-gray-400 space-x-1">
                <span>2d</span>
                <span>•</span>
                <Globe size={10} />
              </div>
            </div>
          </div>
          <MoreHorizontal size={20} className="text-gray-400 flex-shrink-0" />
        </div>

        <div className="space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="text-xs xs:text-sm text-gray-800 leading-relaxed font-serif">
              <span className="font-bold block mb-1 text-sm xs:text-base">
                {title}
              </span>
              {body}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 xs:p-6 border border-gray-100 flex flex-col items-center justify-center space-y-1 xs:space-y-2 text-center group-hover:bg-blue-50/10 transition-colors mt-4">
            <div
              className="text-4xl xs:text-5xl font-black tracking-tighter"
              style={{ color: accentColor }}
            >
              {metric}
            </div>
            <div className="text-[9px] xs:text-[10px] uppercase font-black tracking-[0.3em] text-gray-400">
              {stats}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-gray-400">
          <div className="flex flex-wrap gap-2 xs:gap-4">
            <div
              className="flex items-center space-x-1 hover:opacity-70 cursor-pointer transition-colors"
              style={{ color: accentColor }}
            >
              <ThumbsUp size={14} />
              <span className="text-[9px] xs:text-[10px] font-bold">Like</span>
            </div>
            <div
              className="flex items-center space-x-1 hover:opacity-70 cursor-pointer transition-colors"
              style={{ color: accentColor }}
            >
              <MessageSquare size={14} />
              <span className="text-[9px] xs:text-[10px] font-bold">
                Comment
              </span>
            </div>
            <div
              className="flex items-center space-x-1 hover:opacity-70 cursor-pointer transition-colors"
              style={{ color: accentColor }}
            >
              <Share2 size={14} />
              <span className="text-[9px] xs:text-[10px] font-bold">
                Repost
              </span>
            </div>
          </div>
          <Send
            size={14}
            className="cursor-pointer hover:text-gray-900 transition-colors flex-shrink-0"
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && star && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="p-6 border-b border-gray-100 text-white flex justify-between items-center"
                style={{ backgroundColor: accentColor }}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-8 h-8 bg-white rounded-sm flex items-center justify-center font-bold"
                    style={{ color: accentColor }}
                  >
                    HT
                  </div>
                  <div>
                    <div className="text-sm font-bold">Strategic Detail</div>
                    <div className="text-[10px] opacity-80 font-black uppercase tracking-widest">
                      Audit Context
                    </div>
                  </div>
                </div>
                <Plus
                  className="rotate-45 cursor-pointer hover:rotate-90 transition-transform"
                  size={24}
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-gray-950 leading-none">
                    {title}
                  </h3>
                  <p className="text-gray-500 font-serif italic text-lg leading-relaxed">
                    {body}
                  </p>
                </div>

                <div className="grid gap-6">
                  {[
                    { l: "S", t: "Situation", c: star.situation },
                    { l: "T", t: "Task", c: star.task },
                    { l: "A", t: "Action", c: star.action },
                    { l: "R", t: "Result", c: star.result },
                    { l: "R", t: "Reaction", c: star.reaction },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 md:gap-8 items-start group"
                    >
                      <div
                        className="w-10 h-10 md:w-14 md:h-14 bg-gray-50 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-lg md:text-xl text-gray-300 group-hover:text-white transition-colors border border-gray-100"
                        style={{ "--hover-bg": accentColor } as any}
                      >
                        {item.l}
                      </div>
                      <div className="space-y-1 pt-1">
                        <h4
                          className="text-[10px] font-black uppercase tracking-widest leading-none mb-1"
                          style={{ color: accentColor }}
                        >
                          {item.t}
                        </h4>
                        <p className="text-sm text-gray-600 leading-normal">
                          {item.c}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50 text-center flex justify-between items-center text-[8px] font-black uppercase tracking-[0.4em] text-gray-400">
                <span>HungaroTrial Case Study</span>
                <span>Ref: HT-LKD-21</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Instagram Post (Bath) ---
const StoryModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] bg-gray-950/70 backdrop-blur-md flex flex-col items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          className="relative w-full max-w-[380px] h-[80vh] md:h-[720px] bg-white rounded-[3rem] border-[10px] border-gray-900 shadow-3xl overflow-hidden flex flex-col items-center justify-center p-10 text-center space-y-12"
          onClick={(e) => e.stopPropagation()}
        >
          {/* iPhone Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl" />

          <div
            className="absolute top-8 right-8 text-gray-400 cursor-pointer hover:text-gray-900 transition-colors"
            onClick={onClose}
          >
            <Plus size={24} className="rotate-45" />
          </div>

          <div className="space-y-4">
            <div className="text-[10px] font-black uppercase text-[#ff3e00] tracking-[0.5em]">
              Global Strategic Impact
            </div>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-gray-950 leading-[0.85]">
              200% <br /> GROWTH.
            </h2>
          </div>

          <p className="text-lg text-gray-600 font-serif italic leading-relaxed">
            "Verified result: Achieved 200% growth in following through
            independent strategy and creative direction with sustained uplift
            and active audience engagement."
          </p>

          <div className="pt-12 flex flex-col items-center w-full">
            <div className="h-[1px] w-12 bg-gray-200 mb-6" />
            <div className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-400">
              Marketing_University of Bath
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-900/20 rounded-full" />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const InstaMedia = ({
  label,
  i,
  letter,
  bgColor,
}: {
  label: string;
  i: number;
  letter?: string;
  bgColor: string;
}) => {
  return (
    <div className="w-full h-full bg-[#f4f1ea] text-black border border-black/15 flex flex-col items-between justify-between p-5 text-center relative overflow-hidden h-full select-none">
      {/* Background paper texture & subtle grid line */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="absolute inset-0 border border-black/[0.03] pointer-events-none m-2" />

      {/* Card Header Tag - Consistent across all cards */}
      <span className="font-mono text-[8px] font-black uppercase text-red-700 tracking-[0.3em] block z-10">
        Phase {String(i).padStart(2, "0")}
      </span>

      {/* Graphical Showcase - Centered illustration */}
      <div className="flex-1 w-full flex items-center justify-center relative z-10 py-2 overflow-hidden">
        {label === "ENGAGEMENT GAP" && (
          <div className="w-full max-w-[120px] flex flex-col space-y-2 opacity-80">
            <div className="flex justify-between text-[7px] font-black tracking-widest text-black/40">
              <span>REACH</span>
              <span>RESONANCE</span>
            </div>
            <div className="relative h-2 bg-black/10 rounded-full overflow-hidden flex justify-between items-center px-1">
              <div className="w-4 h-full bg-black rounded-l-full" />
              <div className="h-0.5 flex-1 border-t border-dashed border-black/40 mx-2" />
              <div className="w-8 h-full bg-red-700 rounded-r-full" />
            </div>
          </div>
        )}

        {label === "AUTHENTIC STUDENT LIFE" && (
          <div className="relative flex items-center justify-center">
            {/* The polaroid picture style! Extremely beautiful, completely robust and never gets student images cut */}
            <div className="bg-white p-2 pb-5 border border-black/10 shadow-md rotate-[-3deg] w-24 h-28 flex flex-col relative">
              {/* Profile card instead of random cropped student pictures */}
              <div className="flex-1 bg-gray-50 flex items-center justify-center overflow-hidden border border-black/5 rounded">
                <Users
                  size={28}
                  strokeWidth={1.5}
                  className="text-black/60 translate-y-0.5"
                />
              </div>
              <div className="absolute bottom-1.5 left-0 right-0 text-center">
                <span className="font-serif italic text-[7px] tracking-tight text-black/60">
                  Bath Campus
                </span>
              </div>
            </div>
            {/* Companion shadow student icon next to it */}
            <div className="absolute -right-3 -top-2 bg-white/70 backdrop-blur-sm p-1.5 border border-black/5 rounded-full shadow-sm rotate-[12deg]">
              <User size={14} className="text-red-700" />
            </div>
          </div>
        )}

        {label === "DATA-DRIVEN DEPLOYMENT" && (
          <div className="w-full max-w-[120px] h-12 flex items-end justify-between px-1 opacity-80">
            {[35, 65, 45, 85, 70].map((h, idx) => (
              <div
                key={idx}
                className="w-3.5 rounded-t-sm transition-all duration-500"
                style={{
                  height: `${h}%`,
                  backgroundColor: idx === 3 ? "#ff3e00" : "#000000",
                }}
              />
            ))}
          </div>
        )}

        {label === "200% GROWTH ACHIEVEMENT" && (
          <div className="flex flex-col items-center justify-center">
            <span className="font-serif text-3xl font-black italic tracking-tighter leading-none text-red-700">
              200%
            </span>
            <span className="text-[7px] font-black uppercase tracking-widest text-black/40 mt-1">
              Sustained Growth
            </span>
          </div>
        )}

        {label === "PEER VALIDATION" && (
          <div className="w-16 h-16 border-2 border-dashed border-black/20 rounded-full flex flex-col items-center justify-center p-1 font-serif italic text-[11px] leading-tight opacity-80">
            <div className="font-bold text-red-700">Audit</div>
            <div className="text-[6px] uppercase font-sans font-black tracking-widest text-black/40">
              Verified
            </div>
          </div>
        )}

        {label === "FUTURE BLUEPRINT" && (
          <div className="w-20 h-10 border border-dashed border-black/25 flex items-center justify-center relative opacity-70">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-black/25" />
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-black/25" />
            <div className="w-5 h-5 rounded-full border border-black bg-white" />
          </div>
        )}
      </div>

      {/* Card Footer Label - Balanced and completely aligned */}
      <span className="font-black text-[9px] uppercase tracking-[0.25em] text-black leading-tight block z-10 md:px-2">
        {label}
      </span>
    </div>
  );
};

const InstaPostCard = ({
  post,
  index,
  onClick,
}: {
  post: {
    id: number;
    label: string;
    title: string;
    content: string;
    bgColor: string;
  };
  index: number;
  onClick: () => void;
  key?: React.Key;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="aspect-square relative group cursor-pointer overflow-hidden rounded-xl border border-gray-100 shadow-sm"
    >
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center text-white space-y-2">
        <div className="flex space-x-4 font-bold text-sm">
          <div className="flex items-center space-x-1">
            <Heart fill="white" size={16} /> <span>143</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle fill="white" size={16} /> <span>12</span>
          </div>
        </div>
        <p className="text-[9px] uppercase font-black tracking-widest px-4 text-center">
          {post.label}
        </p>
      </div>
      <div className="w-full h-full relative overflow-hidden">
        <InstaMedia i={index + 1} label={post.label} bgColor={post.bgColor} />
      </div>
    </motion.div>
  );
};

const InstaFeedModal = ({
  isOpen,
  initialIndex,
  posts,
  onClose,
}: {
  isOpen: boolean;
  initialIndex: number | null;
  posts: Array<{
    id: number;
    label: string;
    title: string;
    content: string;
    bgColor: string;
  }>;
  onClose: () => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && initialIndex !== null && containerRef.current) {
      // Find the specific post element and scroll to it smoothly
      const element = containerRef.current.querySelector(
        `#insta-feed-post-${initialIndex}`,
      );
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "auto", block: "start" });
        }, 50);
      }
    }
  }, [isOpen, initialIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[400] bg-black/80 backdrop-blur-md flex items-center justify-center p-0 md:p-4"
        onClick={onClose}
      >
        <Plus
          className="fixed top-6 right-6 text-white cursor-pointer rotate-45 z-[500] hover:scale-110 hover:opacity-100 transition-all opacity-80"
          size={32}
          onClick={onClose}
        />

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl h-screen md:h-[90vh] overflow-y-auto space-y-8 py-10 md:py-16 px-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent scroll-smooth snap-y snap-mandatory"
        >
          {posts.map((post, idx) => (
            <div
              key={post.id}
              id={`insta-feed-post-${idx}`}
              className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl w-full border border-gray-150 min-h-[500px] snap-start"
            >
              {/* Media Section */}
              <div className="w-full md:w-[350px] aspect-square relative shrink-0">
                <InstaMedia
                  i={idx + 1}
                  label={post.label}
                  bgColor={post.bgColor}
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/50 backdrop-blur-md rounded-xl border border-black/5 uppercase tracking-[0.2em] font-black text-[8px] text-gray-400 text-center z-10">
                  Strategy Card {idx + 1}
                </div>
              </div>

              {/* Feed Content Section */}
              <div className="flex-1 flex flex-col bg-white overflow-hidden justify-between">
                <div>
                  {/* Header */}
                  <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center font-bold text-[10px] ring-2 ring-[#ff3e00] ring-offset-2">
                        <TrendingUp size={12} className="text-[#ff3e00]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111]">
                          Marketing_University of Bath
                        </div>
                        <div className="text-[8px] text-gray-400 uppercase tracking-widest">
                          Somerset, UK
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 space-y-4">
                    <h4 className="text-[10px] font-black uppercase text-[#ff3e00] tracking-[0.4em]">
                      {post.label}
                    </h4>
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none text-gray-950">
                      {post.title}
                    </h3>
                    <div className="h-1 w-12 bg-gray-150" />
                    <p className="text-gray-600 font-serif italic text-base leading-relaxed">
                      {post.content}
                    </p>
                  </div>
                </div>

                {/* Engagement / Footer */}
                <div className="p-6 border-t border-gray-100 space-y-4 bg-gray-50/50 mt-auto">
                  <div className="flex justify-between items-center text-gray-900">
                    <div className="flex space-x-6">
                      <Heart
                        size={24}
                        className="hover:text-rose-500 cursor-pointer transition-colors"
                      />
                      <MessageCircle
                        size={24}
                        className="hover:text-[#ff3e00] cursor-pointer transition-colors"
                      />
                      <Send
                        size={24}
                        className="hover:text-indigo-500 cursor-pointer transition-colors"
                      />
                    </div>
                    <Bookmark
                      size={24}
                      className="hover:text-amber-500 cursor-pointer transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-[#111]">
                      2,143 likes
                    </div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      2 DAYS AGO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- Newspaper Column (Times) ---
const NewsColumn = ({
  headline,
  text,
  i,
  animate = true,
}: {
  headline: string;
  text: string;
  i: number;
  animate?: boolean;
}) => {
  if (!animate) {
    return (
      <div className="space-y-4">
        <h3 className="font-serif text-3xl font-bold leading-none tracking-tight border-b-2 border-black pb-4 hover:text-fusion-accent transition-colors cursor-default">
          {headline}
        </h3>
        <div className="columns-1 gap-6 text-sm leading-relaxed font-cormorant text-justify">
          <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            {text}
          </p>
        </div>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: i * 0.3 }}
      className="space-y-4"
    >
      <h3 className="font-serif text-3xl font-bold leading-none tracking-tight border-b-2 border-black pb-4 hover:text-[#ff3e00] transition-colors cursor-default">
        {headline}
      </h3>
      <div className="columns-1 gap-6 text-sm leading-relaxed font-cormorant text-justify">
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          {text}
        </p>
      </div>
    </motion.div>
  );
};

// --- Kenvue Strategic Lead (STAR Framework) ---
const StarCard = ({
  letter,
  title,
  body,
  i,
}: {
  letter: string;
  title: string;
  body: string;
  i: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}
    viewport={{ once: true }}
    className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] space-y-6 group hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
  >
    <div className="flex items-center justify-between">
      <div className="w-12 h-12 rounded-full border-2 border-fusion-accent flex items-center justify-center text-fusion-accent font-black text-xl group-hover:bg-fusion-accent group-hover:text-white transition-colors">
        {letter}
      </div>
      <div className="h-px flex-1 bg-gray-50 mx-6" />
      <Plus
        size={16}
        className="text-gray-200 group-hover:text-fusion-accent transition-colors"
      />
    </div>
    <div className="space-y-3">
      <h4 className="text-xl font-black uppercase tracking-tighter text-gray-950">
        {title}
      </h4>
      <p className="text-sm text-gray-500 leading-relaxed font-serif italic">
        {body}
      </p>
    </div>
  </motion.div>
);

export default function App() {
  const [timesPage, setTimesPage] = useState(1);
  const [storyOpen, setStoryOpen] = useState(false);
  const [isCoffeeOpen, setIsCoffeeOpen] = useState(false);
  const [activeInstaPostIndex, setActiveInstaPostIndex] = useState<
    number | null
  >(null);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [kenvueTab, setKenvueTab] = useState<
    "challenge" | "audit" | "execution" | "impact" | "qr_analysis"
  >("challenge");

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const cases = [
    {
      shortTitle: "ABM Lead Gen",
      title: "Case Study 01: 200+ Leads.",
      body: "Architecting a high-touch, account-based social strategy targeting US and EU pharmaceutical sponsors to bypass clinical noise and capture high-intent inbound RFP inquiries.",
      metric: "200+",
      stats: "B2B Leads Generated",
      accentColor: "#0077b5",
      star: {
        situation:
          "Clinical trial sponsor procurement is highly relationship-driven, where conventional generic cold outreach often faces massive resistance from busy VC-backed and pharma decision makers.",
        task: "Bypass typical B2B digital noise to establish immediate operational authority and fuel a robust commercial sales funnel.",
        action:
          "Developed and executed an Account-Based Marketing (ABM) strategy on LinkedIn, deploying role-based segmentations and educational thought leadership that addressed trial execution risks.",
        result:
          "Forged high-trust connect points with key US and EU sponsor leads, feeding them highly relevant regulatory insights and localized execution proof-points.",
        reaction:
          "Successfully generated over 200+ qualified B2B leads, converting our organic social presence into an active commercial pipeline engine.",
      },
    },
    {
      shortTitle: "Organic Scale",
      title: "Case Study 02: 270% Growth.",
      body: "Overhauling content delivery and SEO thought patterns to establish sustained, top-of-mind brand equity in highly competitive global spheres.",
      metric: "270%",
      stats: "Brand Following Gain",
      accentColor: "#005582",
      star: {
        situation:
          "CRO selection requires solid regulatory and regional trust. Static corporate announcements and standard press updates failed to differentiate the brand from larger competitors.",
        task: "Elevate brand visibility globally where physical sales teams lacked deep local footprint, using content as an active brand authority driver.",
        action:
          "Shifted focus to SEO-optimized, highly helpful regulatory guides, partnering with company leaders to deliver clinical execution analysis of complex FDA/EMA policies.",
        result:
          "Built a reliable publishing tempo that positioned HungaroTrial as the regional subject matter expert for international trial sponsors.",
        reaction:
          "Scaled followings from 1,900 to 7,000 (+270%) while securing consistent improvements in profile visits and organic inbound search keywords.",
      },
    },
    {
      shortTitle: "Frictionless Hub",
      title: "Case Study 03: htdevice.com.",
      body: "Isolating medical device testing interests on a specialized GTM microsite, solving navigation fragmentation.",
      metric: "10%",
      stats: "Referral Flow Uplift",
      accentColor: "#003b5c",
      star: {
        situation:
          "Device developers faced high search fatigue navigating the primary molecule-heavy corporate site. This caused bounce rates to spike for this high-margin sector.",
        task: "Consolidate device trial specifications into a fast, dedicated entry hub built for frictionless information discovery.",
        action:
          "Led development of htdevice.com: structuring direct conversion pathways, benefit-led layouts, and explicit regulatory compliance maps.",
        result:
          "Created a focused digital path that clearly answered device-safety standards and separated drug from non-drug requirements.",
        reaction:
          "Delivered a 10% direct lift in high-intent referral traffic to the parent site, converting casual technical lookups into active partnership briefs.",
      },
    },
    {
      shortTitle: "GenAI Efficiency",
      title: "Case Study 04: AI Workflow ROI.",
      body: "Injecting automated generative systems into copywriting and analytics routines to expand content volume without headcount growth.",
      metric: "40%",
      stats: "Production Time Saved",
      accentColor: "#002133",
      star: {
        situation:
          "Scaling multi-market campaign variations triggered severe bandwidth caps, pulling staff away from critical analytics analysis and value strategy.",
        task: "Build safe, prompt-engineered content generators to automate repetitive operational tasks while strictly safeguarding regulatory compliance.",
        action:
          "Built custom writing structures and automated analytics dashboards that unified reporting data across LinkedIn organic and Google Analytics 4 (GA4).",
        result:
          "Decoupled asset asset generation speed from raw manual hours, enabling faster testing of creative ad/SEO copy in real-time.",
        reaction:
          "Reduced content creation cycles by over 40% while freeing up critical hours for qualitative performance modeling and GTM strategy.",
      },
    },
    {
      shortTitle: "Integrated GTM",
      title: "Case Study 05: Event GTM.",
      body: "Structuring physical conference touchpoints with digital marketing loops to speed up deal-flow and secure direct face-to-face partner alignments.",
      metric: "15%",
      stats: "Deal Pipeline Speedup",
      accentColor: "#00111a",
      star: {
        situation:
          "Clinical event sponsors often experience low physical booth conversions because the event planning runs isolated from digital marketing pre-work.",
        task: "Create an active physical-to-digital cycle that warms up targets digitally before in-person handshakes ever take place.",
        action:
          "Governed the GTM pipeline and logistics for ~10 major global pharma conferences, running targeted digital content on social threads that mirrored booth topics.",
        result:
          "Established repeated brand warm-ups, ensuring that booth delegates engaged with highly receptive, pre-notified industry decision-makers.",
        reaction:
          "Drove a 15% acceleration in contract decision cycles, proving that coordinated multi-channel touchpoints yield superior commercial returns.",
      },
    },
  ];

  const bathPosts = [
    {
      id: 1,
      label: "ENGAGEMENT GAP",
      title: "Strategic Situation",
      content:
        "Instagram engagement was stagnant during the critical student welcome cycle: a vital window for building brand affinity. Traditional institutional messaging failed to resonate with incoming students experiencing pre-arrival hesitation, showing that standard broadcast approaches can fail to capture high-value student connection opportunities.",
      bgColor: "bg-gray-50",
    },
    {
      id: 2,
      label: "AUTHENTIC STUDENT JOURNEY",
      title: "Strategic Why & Initiative",
      content:
        "Generation Z heavily rejects generic corporate advertising, seeking real peer validation instead. I pivoted the content strategy entirely toward relatable, student-first narrative streams: directing high-impact videos of real accommodation, collaborative study hubs, and local culture. This provided immediate 'social proof' that visually neutralized relocation anxieties and solidified enrollment commitments.",
      bgColor: "bg-gray-100",
    },
    {
      id: 3,
      label: "WORKFLOW STANDARDIZATION",
      title: "Implementation Strategy",
      content:
        "High-output media creation requires robust operational governance to avoid brand dilution and delay. I standardized campaign workflows end-to-end within Sprout Social, building a template-driven scheduling system. I paired these digital loops with an interactive Open Day experience: allowing potential students to validate online narratives in-person.",
      bgColor: "bg-gray-50",
    },
    {
      id: 5,
      label: "PEER VALIDATION ROI",
      title: "Business Reasoning",
      content:
        "By treating prospective students as active visual stakeholders rather than a passive audience, the Instagram profile evolved into a genuine recommendation hub. Authentic tours and transparent stories outperformed standard recruitment broadcasts: driving massive engagement lifts by acting as a highly credible source of truth.",
      bgColor: "bg-gray-50",
    },
    {
      id: 6,
      label: "REPLICABLE BLUEPRINT",
      title: "Impact & Scale",
      content:
        "Sustained organic following growth (200%) verified that human narrative alignment is far more effective than media volume. This campaign established a data-derived GTM template for future university welcome cycles: proving that trust and peer proof-points drive high-quality enrollment outcomes.",
      bgColor: "bg-gray-105",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar onCoffeeClick={() => setIsCoffeeOpen(true)} />
      <StoryModal isOpen={storyOpen} onClose={() => setStoryOpen(false)} />
      <CoffeeModal isOpen={isCoffeeOpen} onClose={() => setIsCoffeeOpen(false)} />
      <InstaFeedModal
        isOpen={activeInstaPostIndex !== null}
        initialIndex={activeInstaPostIndex}
        posts={bathPosts}
        onClose={() => setActiveInstaPostIndex(null)}
      />

      {/* ==========================================
          0. COVER PAGE
          ========================================== */}
      <section
        id="campaign-launch"
        className="min-h-screen flex flex-col items-center justify-center pt-32 px-8 overflow-hidden relative bg-white"
      >
        <div className="absolute inset-0 modern-jali opacity-[0.03]" />

        <motion.div
          style={{ scale, opacity }}
          className="relative z-10 text-center space-y-16"
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="px-6 py-2 border-2 border-black text-black text-[10px] font-black uppercase tracking-[0.5em] rounded-full">
              The Portfolio Campaign
            </div>
            <h1 className="text-7xl md:text-9xl lg:text-[11.5rem] leading-[0.8] font-black uppercase tracking-tighter text-gray-950">
              Creative <br /> Strategy <br />{" "}
              <span className="text-[#ff3e00]">Audit.</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-black text-[10px] uppercase tracking-[0.4em] text-gray-400">
            <div>London • 2026</div>
            <div className="w-2 h-2 bg-[#ff3e00] rounded-full" />
            <div>Full Spectrum Marketing</div>
          </div>

          <div className="max-w-xl mx-auto text-xl font-serif italic text-gray-500 leading-relaxed">
            "A high-impact narrative demonstrating the synergy between
            cross-border strategy, behavioral analytics, and media resonance."
          </div>
        </motion.div>
      </section>

      {/* ==========================================
          1. HUNGAROTRIAL SECTION (First Project)
          ========================================== */}
      <section
        id="hungaro-linkedin"
        className="py-24 pt-36 bg-gray-50 relative overflow-hidden scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-6 lg:space-y-8 sticky lg:top-36 h-fit mb-10 lg:mb-0 w-full">
              <div className="flex items-center space-x-3 text-[#0077b5]">
                <Linkedin size={28} className="flex-shrink-0" />
                <span className="font-bold tracking-tighter text-xl xs:text-2xl">
                  LinkedIn Network
                </span>
              </div>
              <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] lg:leading-[0.8] tracking-tighter uppercase text-gray-950">
                Authority <br /> Through <br />{" "}
                <span className="text-[#0077b5]">Insight.</span>
              </h2>
              <p className="text-gray-500 font-serif italic text-lg xs:text-xl leading-relaxed">
                Our strategic communications and digital acquisition channels were developed specifically for CXO level decision makers including Directors, VPs, and CEOs within biotech and pharmaceutical sponsor organizations globally.
              </p>
              <div className="pt-4 lg:pt-8 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[9px] xs:text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">
                    Platform Reach
                  </div>
                  <div className="text-xl xs:text-2xl font-black text-[#0077b5]">
                    7,000+
                  </div>
                </div>
                <div>
                  <div className="text-[9px] xs:text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">
                    Authority Lift
                  </div>
                  <div className="text-xl xs:text-2xl font-black text-[#0077b5]">
                    2.5 Years
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Tabs of Case Studies */}
            <div className="lg:col-span-8 w-full overflow-hidden">
              {/* Horizontal Tab Navigation */}
              <div className="flex border-b border-gray-200 mb-8 overflow-x-auto scrollbar-none gap-2 pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
                {cases.map((c, idx) => {
                  const shortTitle = c.shortTitle;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveCaseIndex(idx)}
                      className={`pb-4 px-3 sm:px-6 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] border-b-2 transition-all duration-300 relative shrink-0 cursor-pointer ${
                        activeCaseIndex === idx
                          ? "border-[#0077b5] text-[#0077b5]"
                          : "border-transparent text-gray-400 hover:text-gray-900"
                      }`}
                    >
                      {`0${idx + 1}. ${shortTitle}`}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Panel */}
              <div className="w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCaseIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <div className="text-[10px] uppercase font-black tracking-widest text-[#0077b5] mb-3 px-1">
                      Active Case Study: 0{activeCaseIndex + 1}
                    </div>
                    <LinkedInPost
                      i={activeCaseIndex}
                      title={cases[activeCaseIndex].title}
                      body={cases[activeCaseIndex].body}
                      metric={cases[activeCaseIndex].metric}
                      stats={cases[activeCaseIndex].stats}
                      star={cases[activeCaseIndex].star}
                      accentColor={cases[activeCaseIndex].accentColor}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. THE TIMES GROUP SECTION (Second Project)
          ========================================== */}
      <section id="times-newspaper" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-5xl mx-auto px-8 relative">
          <AnimatePresence mode="wait">
            {timesPage === 1 ? (
              <motion.div
                key="page1"
                initial={{ opacity: 0, rotateY: -10, x: 20 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: 10, x: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="newspaper-paper p-12 md:p-24 space-y-16 relative"
              >
                <div className="text-center space-y-8 border-b-4 border-black pb-12">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em]">
                    <span>Times Special</span>
                    <span>2019 - 2021</span>
                  </div>
                  <h1 className="text-[22px] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black tracking-tighter leading-none italic uppercase whitespace-nowrap">
                    The Times Group.
                  </h1>
                  <div className="flex justify-center space-x-12 text-[10px] font-black uppercase tracking-widest opacity-60">
                    <span>B2B Strategy</span>
                    <span>Media Evolution</span>
                    <span>Corporate Resonance</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                  <NewsColumn
                    headline="Influencing High-Stakes Investment."
                    animate={false}
                    text="Transitioning into the B2B sphere required a highly targeted, strategic shift in mindset. Our communications and campaign narratives were developed specifically for key enterprise partners, including CXO level decision makers, VPs, and Directors across top-tier brand portfolios, alongside mass India-based reader audiences. This dual-focus approach redefined Advertiser Brand Loyalty and reader retention through authoritative, data-led GTM storytelling."
                    i={1}
                  />
                  <div className="space-y-12">
                  <NewsColumn
                    headline="The 'Key Hook' Methodology."
                    animate={false}
                    text="To resolve advertising client erosion, I developed our 'Key Hook' methodology to demonstrate absolute media efficiency. Instead of selling standard ad units based on generic volume alone, we pitched the high-intent localized reader patterns of regional language editions. This secured vital B2B advertiser retention because we proved we could drive direct, geographic customer acquisitions for their portfolios."
                    i={2}
                  />
                    <div className="p-8 bg-[#791315] text-white rounded-lg space-y-4 shadow-xl">
                      <h4 className="text-[10px] font-black uppercase tracking-widest">
                        Global Dispatch
                      </h4>
                      <p className="text-xl font-serif italic leading-tight">
                        "Asset creation for an all-India campaign blending
                        technical precision with executive warmth."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-16 pr-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-12 relative">
                  <div className="flex space-x-12 text-sm font-bold uppercase tracking-tighter">
                    <span>Marketing Report</span>
                    <span>Crisis Strategy</span>
                    <span>Editorial Review</span>
                  </div>

                  <button
                    onClick={() => setTimesPage(2)}
                    className="group flex items-center space-x-3 text-xs font-black uppercase tracking-widest hover:text-[#ff3e00] transition-colors cursor-pointer"
                    id="times-next-page"
                  >
                    <span>Next Page</span>
                    <ChevronRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="page2"
                initial={{ opacity: 0, rotateY: 10, x: -20 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: -10, x: 20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="newspaper-paper p-12 md:p-24 space-y-16 relative"
              >
                <div className="text-center space-y-8 border-b-4 border-black pb-12">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em]">
                    <span>Special Edition</span>
                    <span>2019 - 2021 Special Edition</span>
                  </div>
                  <h1 className="text-[22px] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black tracking-tighter leading-none italic uppercase whitespace-nowrap">
                    The Times Group.
                  </h1>
                  <div className="flex justify-center space-x-12 text-[10px] font-black uppercase tracking-widest opacity-60">
                    <span>B2B2C Focus</span>
                    <span>Mass Engagement</span>
                    <span>National Scale</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <div className="campaign-tag w-fit">National Archive</div>
                      <h3 className="font-serif text-5xl font-bold leading-none tracking-tight">
                        B2B2C Nationwide Drive: Mass Engagement.
                      </h3>
                    </div>
                    <NewsColumn
                      headline="SITUATION: Reader Fragmentation."
                      text="Print media faces subscription attrition as consumer focus transitions to digital feeds. To reverse this pattern and protect our high-margin advertising real estate, we needed to design a nationwide interactive campaign format that united digital and print channels into a single, high-dwell narrative."
                      i={1}
                    />
                  </div>
                  <div className="space-y-12">
                    <NewsColumn
                      headline="INITIATIVE: Cross-Media Synergy."
                      text="We launched a multi-channel interactive format spanning Digital, Print, and Broadcast. By anchoring core clues in print and routing answers through social threads on Instagram and LinkedIn discussions, we built a rhythmic loop that converted passive readers into an active community."
                      i={2}
                    />
                    <div className="bg-gray-100 p-8 rounded-lg border-2 border-dashed border-black/10 space-y-6">
                      <div className="space-y-2">
                        <span className="text-[9px] font-black uppercase text-gray-400 tracking-wider">
                          IMPLEMENTATION
                        </span>
                        <p className="text-xs text-gray-700 leading-relaxed font-sans">
                          We secured tier-1 advertiser sponsorships from global consumer brands to fund the interactive reward ecosystem. This co-branding strategy elevated campaign credibility while allowing partners to capture organic interest directly from our highly engaged B2B and B2C audiences.
                        </p>
                      </div>

                      <div className="space-y-2 border-t border-black/5 pt-4">
                        <div className="flex items-center space-x-3 text-red-700">
                          <Plus size={16} />
                          <span className="text-xs font-bold font-sans uppercase">
                            RESULTS & BUSINESS REASONING
                          </span>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed font-sans">
                          Awarded the prestigious INMA Global Media Award for "Best Idea to Encourage Reader Engagement". Beyond driving a 20% year-on-year increase in user interaction, the campaign provided a validated, highly profitable GTM template that secured advertiser commitments for subsequent quarters.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-16 pr-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-12 relative">
                  <button
                    onClick={() => setTimesPage(1)}
                    className="group flex items-center space-x-3 text-xs font-black uppercase tracking-widest hover:text-[#ff3e00] transition-colors cursor-pointer"
                    id="times-prev-page"
                  >
                    <ChevronLeft
                      size={20}
                      className="group-hover:-translate-x-1 transition-transform"
                    />
                    <span>Previous Page</span>
                  </button>

                  <div className="flex space-x-12 text-sm font-bold uppercase tracking-tighter">
                    <span>Digital Synergy</span>
                    <span>Audience Loops</span>
                    <span>Conversion Hub</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ==========================================
          3. UNIVERSITY OF BATH SECTION (Third Project)
          ========================================== */}
      <section id="bath-insta" className="py-24 bg-gray-50/50 scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 xs:px-6 md:px-8 space-y-16 xs:space-y-24">
          
          {/* Header Block to maintain flow consistency across portfolio */}
          <div className="border-b border-gray-250 pb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#bc1888] rounded-full animate-pulse shadow-[0_0_8px_#bc1888]" />
                <span className="text-[10px] xs:text-xs font-black uppercase tracking-[0.3em] text-[#bc1888]">
                  Digital Content Strategy
                </span>
              </div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-950 leading-none">
                University <br /> of Bath.
              </h2>
              <p className="text-gray-650 font-serif italic text-sm xs:text-base sm:text-lg leading-relaxed pt-1">
                Our social campaigns and creative content assets were developed specifically for existing and upcoming students and scholars from across the world, driving dynamic peer-to-peer engagement and strategic student recruitment during critical university welcome cycles.
              </p>
            </div>
            <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest font-bold">
              Digital Marketing / Content Strategy
            </div>
          </div>

          {/* Instagram Profile Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 xs:gap-12">
            <div className="flex items-center space-x-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setStoryOpen(true)}
                className="w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-[#f09433] to-[#bc1888] shadow-2xl cursor-pointer relative group"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] animate-pulse opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="w-full h-full rounded-full border-4 border-white bg-white flex flex-col items-center justify-center overflow-hidden relative z-10 transition-colors group-hover:bg-gray-50">
                  <div className="text-4xl font-black text-gray-950 flex flex-col items-center justify-center">
                    <span>200%</span>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <h3 className="text-2xl font-bold">
                    Marketing_University of Bath
                  </h3>
                </div>
                <div className="flex space-x-12 text-xs">
                  <div>
                    <b>158</b> posts
                  </div>
                  <div>
                    <b>12.4k</b> followers
                  </div>
                  <div>
                    <b>432</b> following
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-black text-gray-950 uppercase tracking-tighter">
                    INSTAGRAM STRATEGY
                  </div>
                  <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
                    Designed high-performing organic social campaigns and creative content guidelines developed specifically for existing and upcoming students and studies from across the world, driving dynamic peer engagement and strategic student recruitment during critical university welcome cycles.
                    <br />
                    <span className="text-[10px] font-bold text-gray-400 mt-2 block">
                      Key Tools: Canva, Sprout Social
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram Grid Divider */}
          <div className="space-y-12">
            <div className="flex justify-center border-t border-gray-150">
              <div className="flex space-x-16 -mt-px">
                <div className="flex items-center space-x-2 py-4 border-t border-black cursor-pointer">
                  <div className="w-3 h-3 border border-black grid grid-cols-2 gap-[1px] p-[1px]">
                    <div className="bg-black" /> <div className="bg-black" />{" "}
                    <div className="bg-black" /> <div className="bg-black" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Posts
                  </span>
                </div>
                <div className="flex items-center space-x-2 py-4 text-gray-400 cursor-pointer hover:text-black transition-colors">
                  <Clapperboard size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Reels
                  </span>
                </div>
                <div className="flex items-center space-x-2 py-4 text-gray-400 cursor-pointer hover:text-black transition-colors">
                  <Bookmark size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Saved
                  </span>
                </div>
              </div>
            </div>

            {/* Responsive Feed Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {bathPosts.map((post, idx) => (
                <InstaPostCard
                  key={post.id}
                  index={idx}
                  post={post}
                  onClick={() => setActiveInstaPostIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="kenvue-store"
        className="py-20 xs:py-24 md:py-32 bg-slate-50 text-gray-900 relative overflow-hidden scroll-mt-28"
      >
        {/* Modernist Storefront Facade Window Panes (Thin silver metal grid partitions) */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-40 select-none">
          {/* Outer boutique frame borders */}
          <div className="absolute inset-0 border-y-2 border-gray-200" />
          {/* Vertical glass pane seam lines */}
          <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gray-300/40 via-gray-200/10 to-transparent hidden lg:block" />
          <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gray-300/40 via-gray-200/10 to-transparent hidden lg:block" />
          {/* Horizontal transom bar typical of high-end storefront windows */}
          <div className="absolute top-[15%] left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Ambient Backlighting (Store aisle internal glow peering through window glaze) */}
        <div className="absolute top-[10%] left-[15%] w-[250px] xs:w-[350px] h-[250px] xs:h-[350px] rounded-full bg-gradient-to-br from-[#ff3e00]/5 to-transparent blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-[350px] xs:w-[450px] h-[350px] xs:h-[450px] rounded-full bg-gradient-to-br from-orange-400/5 to-transparent blur-[140px] pointer-events-none" />
        <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] rounded-full bg-blue-300/5 blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 relative z-25 w-full">
               {/* Store Window Glass Decals / Subtle framing signage representing active store presence */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200/80 pb-6 mb-10 xs:mb-14 sm:mb-16 gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff3e00] rounded-full animate-pulse shadow-[0_0_8px_#ff3e00]" />
              <span className="text-[10px] xs:text-xs font-black uppercase tracking-[0.3em] text-[#ff3e00] drop-shadow-[0_0_5px_rgba(255,62,0,0.2)]">
                Storefront Window: Audits & Executions
              </span>
            </div>
            <div className="text-[9px] xs:text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">
              EST. 2026 // FACADE REFLECTION LEVEL P-04
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xs:gap-10 lg:gap-14 xl:gap-16 items-start">
            
            {/* Left Column: Store Decal Plaque (Frosted light glassmorphism layout card hanging on window) */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-6 sm:space-y-8 lg:sticky lg:top-36 h-fit w-full backdrop-blur-xl bg-white/70 border border-gray-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] relative overflow-hidden transition-all duration-500 hover:border-gray-300">
              {/* Glossy glare sweeping line */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-100/10 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1.2px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />

              <div className="flex items-center space-x-4 text-[#ff3e00]">
                <div className="h-px w-8 bg-[#ff3e00]" />
                <span className="font-black uppercase tracking-[0.35em] text-[8.5px] xs:text-[9.5px]">
                  Visual Merchandising Blueprint
                </span>
              </div>

              {/* Title replicating storefront lettering */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#ff3e00]/10 border border-[#ff3e00]/20 rounded-2xl text-[#ff3e00] shadow-[0_4px_12px_rgba(255,62,0,0.1)] shrink-0">
                    <ShoppingBag size={22} className="text-[#ff3e00]" />
                  </div>
                  <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-3xl xl:text-4.5xl font-black uppercase tracking-tighter text-gray-950 leading-none">
                    Kenvue <span className="text-[#ff3e00] drop-shadow-[0_0_8px_rgba(255,62,0,0.2)]">Shopper</span> <br /> Audit.
                  </h2>
                </div>
                <p className="text-gray-650 font-serif italic text-sm xs:text-base sm:text-lg leading-relaxed pt-1">
                  Bridging the gap between clinical formulation values and physical retail shelves. Our strategic blueprints were developed specifically for mass UK shopper audiences evaluating health, household, and personal care products for daily household usage, restructuring the in-aisle navigational architecture to drive brand-led education and intuitive premium portfolio discovery.
                </p>
              </div>

              <div className="border-t border-gray-150 pt-6 space-y-3">
                <div className="text-[9px] font-black uppercase tracking-widest text-[#ff3e00]">
                  Core Product Marketing Objectives:
                </div>
                <ul className="space-y-2 text-xs text-gray-500 font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff3e00] font-bold mt-0.5">•</span>
                    <span>Simplify clinical concepts to enable self-guided selection on self-service shelves.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff3e00] font-bold mt-0.5">•</span>
                    <span>Transform traditional retail clutter into structured, visual, benefits-led story blocks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff3e00] font-bold mt-0.5">•</span>
                    <span>Drive multi-product basket attachment by mapping logical skincare and care regimens.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Interactive Diagnostic Glass Window Panel */}
            <div className="lg:col-span-12 xl:col-span-7 bg-white/70 backdrop-blur-xl p-5 xs:p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-200/80 shadow-[0_25px_60px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] min-h-[500px] w-full overflow-hidden relative transition-all duration-500 hover:border-gray-300">
              
              {/* Outer storefront window glare decal lines */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-55/5 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

              {/* Horizontal Case tabs representing boutique sections */}
              <div className="flex border-b border-gray-200 mb-8 overflow-x-auto scrollbar-none gap-2 pb-1.5 -mx-4 px-4 sm:mx-0 sm:px-0">
                {[
                  { id: "challenge", label: "01. The Challenge" },
                  { id: "audit", label: "02. Shopper Strategy" },
                  { id: "impact", label: "03. Strategic Impact" },
                ].map((item) => {
                  const active = kenvueTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setKenvueTab(item.id as any)}
                      className={`pb-3 px-3 sm:px-5 text-[10px] sm:text-[11px] md:text-xs font-black uppercase tracking-[0.12em] sm:tracking-[0.2em] border-b-2 transition-all duration-300 relative shrink-0 cursor-pointer min-h-[44px] flex items-center justify-center ${
                        active
                          ? "border-[#ff3e00] text-[#ff3e00] drop-shadow-[0_0_8px_rgba(255,62,0,0.3)] font-black"
                          : "border-transparent text-gray-400 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                {kenvueTab === "challenge" && (
                  <motion.div
                    key="challenge"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] xs:text-[10px] font-black uppercase tracking-[0.25em] text-[#ff3e00] block">
                        Category Positioning & Friction
                      </span>
                      <h3 className="text-xl xs:text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-950">
                        In-Aisle Friction & Passive Selection
                      </h3>
                    </div>

                    <p className="text-sm xs:text-base text-gray-650 font-serif italic leading-relaxed">
                      "While high-density health and personal care categories command steady foot traffic, products frequently face severe shopping barriers when shelf structures prioritize raw item density over intuitive benefits."
                    </p>

                    <div className="space-y-4 pt-2">
                      <div className="p-4 sm:p-5 bg-red-50/50 rounded-2xl border border-gray-150 space-y-1">
                        <span className="text-[10px] font-black uppercase text-[#ff3e00] tracking-wider block">
                          Friction Point: Decision Paralysis
                        </span>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          Unstructured shelf density leads to choice frustration. Shoppers default back to passive habit patterns or exit the aisle without exploring adjacent high-efficacy formulations.
                        </p>
                      </div>

                      <div className="p-4 sm:p-5 bg-red-50/50 rounded-2xl border border-gray-150 space-y-1">
                        <span className="text-[10px] font-black uppercase text-[#ff3e00] tracking-wider block">
                          Friction Point: Proposition Deficit
                        </span>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          Standard commercial packaging elements fail to communicate doctor-recommended clinical value in rapid-decision, self-guided shelf environments.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {kenvueTab === "audit" && (
                  <motion.div
                    key="audit"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] xs:text-[10px] font-black uppercase tracking-[0.25em] text-[#ff3e00] block">
                        Shopper Journey Insights
                      </span>
                      <h3 className="text-xl xs:text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-950">
                        Eyeline Hotspots & Benefit-Led Layouts
                      </h3>
                    </div>

                    <p className="text-sm xs:text-base text-gray-650 font-serif italic leading-relaxed">
                      "Analyzing physical pharmacy lanes revealed clear browsing behaviors. By converting passive eye-level scanning into intentional content triggers, we reorganized standard planograms for natural discoverability."
                    </p>

                    <div className="space-y-4 pt-2">
                      <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-150 space-y-1">
                        <span className="text-[10px] font-black uppercase text-gray-900 tracking-wider block">
                          Active Anchors at Eyeline
                        </span>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          By placing distinct shopper benefit headers at prime touchpoints, we disrupt habitual viewing paths and guide attention toward high-value treatment segments.
                        </p>
                      </div>

                      <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-150 space-y-1">
                        <span className="text-[10px] font-black uppercase text-gray-900 tracking-wider block">
                          Frictionless Regimen Pairings
                        </span>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          Grouping complementary products under logical treatment stages directly improves average basket attachment and cross-discovery without adding sensory clutter.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {kenvueTab === "impact" && (
                  <motion.div
                    key="impact"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] xs:text-[10px] font-black uppercase tracking-[0.25em] text-[#ff3e00] block">
                        Proven Omnichannel Outcomes & Playbooks
                      </span>
                      <h3 className="text-xl xs:text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-950 border-none font-sans">
                        POS Playbooks & QR Retail Analysis
                      </h3>
                    </div>

                    <p className="text-sm xs:text-base text-gray-650 font-serif italic leading-relaxed">
                      "By modeling multi-year, interactive QR scan data across target pharmacy accounts, we translated hidden offline actions into clear retail visual guides, delivering steady trade-up growth."
                    </p>

                    <div className="space-y-4 pt-2">
                      <div className="p-4 sm:p-5 bg-gradient-to-br from-[#ff3e00]/5 to-transparent border border-[#ff3e00]/15 rounded-2xl space-y-1">
                        <span className="text-[10px] font-black uppercase text-[#ff3e00] tracking-wider block">
                          Boots & Superdrug Implementation
                        </span>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          Converted stagnant scan stats into physical planogram rules. Custom height-optimized QR visual layouts were integrated into retail guides—reducing consumer hesitation and boosting self-directed learning in-store.
                        </p>
                      </div>

                      <div className="p-4 sm:p-5 bg-gradient-to-br from-[#ff3e00]/5 to-transparent border border-[#ff3e00]/15 rounded-2xl space-y-1">
                        <span className="text-[10px] font-black uppercase text-[#ff3e00] tracking-wider block">
                          Category Uplift & Trade Value
                        </span>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          The structured retail playbooks empower international sales teams to deploy localized, evidence-based setups, securing strong commercial commitments and protecting total lane productivity.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-black text-white relative flex flex-col items-center">
        <div className="max-w-4xl text-center space-y-8 mb-20 px-8">
          <div className="accent-pill inline-block border-white/20 text-white/40">
            Campaign Planning
          </div>
          <h2 className="text-6xl font-black tracking-tighter uppercase leading-none">
            Synergy & <br />
            <span className="text-fusion-accent">Strategy Cluster.</span>
          </h2>
        </div>

        <div className="w-full h-[600px] bg-gray-900/50 rounded-[4rem] border border-white/10 mx-6 relative overflow-hidden">
          <div className="absolute inset-0 modern-jali opacity-[0.05]" />
          <MindMap />
        </div>
      </section>

      <footer className="py-40 pb-20 px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-24">
          <h2 className="text-8xl md:text-[12rem] font-black tracking-tighter uppercase leading-[0.8]">
            <Typewriter text="Let's Launch." delay={500} />
          </h2>

          <div className="flex flex-col items-center space-y-12">
            <button
              onClick={() => setIsCoffeeOpen(true)}
              className="group cursor-pointer appearance-none border-none bg-transparent"
            >
              <div className="px-12 py-5 bg-black text-white rounded-full font-black uppercase tracking-[0.4em] text-xs shadow-2xl transition-all group-hover:scale-105 group-hover:bg-[#ff3e00]">
                Don’t hesitate, let’s talk over coffee.
              </div>
            </button>
          </div>

          <div className="pt-20 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-widest text-gray-400 gap-8">
            <div>© 2026 POWERFUL NARRATIVE - LONDON</div>
            <div className="flex space-x-12">
              <a href="#" className="hover:text-black">
                Privacy
              </a>
              <a href="#" className="hover:text-black">
                Terms
              </a>
              <a href="#" className="hover:text-black">
                Archive
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MindMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      if (!entries[0]) return;
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height: height || 550 });
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const { width, height } = dimensions;

    const nodesData = [
      { id: "Strategy", group: 0, size: 14, color: "#ff3e00", side: "center" },
      // Technical skillsets (Left side)
      {
        id: "ABM Architectures",
        group: 1,
        size: 8,
        color: "#00d2ff",
        side: "left",
      },
      {
        id: "Media Activation",
        group: 1,
        size: 8,
        color: "#00d2ff",
        side: "left",
      },
      {
        id: "ROI Modeling",
        group: 1,
        size: 7,
        color: "rgba(0, 210, 255, 0.65)",
        side: "left",
      },
      {
        id: "GTM Analytics",
        group: 1,
        size: 7,
        color: "rgba(0, 210, 255, 0.65)",
        side: "left",
      },
      {
        id: "Digital Experience (DX)",
        group: 1,
        size: 7,
        color: "rgba(0, 210, 255, 0.65)",
        side: "left",
      },
      // Audience demographics (Right side)
      {
        id: "Clinical Sponsors",
        group: 2,
        size: 8,
        color: "#ff9f00",
        side: "right",
      },
      {
        id: "B2B Advertisers",
        group: 2,
        size: 8,
        color: "#ff9f00",
        side: "right",
      },
      {
        id: "Higher Ed Students",
        group: 2,
        size: 7,
        color: "rgba(255, 159, 0, 0.65)",
        side: "right",
      },
      {
        id: "Millennial Shoppers",
        group: 2,
        size: 7,
        color: "rgba(255, 159, 0, 0.65)",
        side: "right",
      },
      {
        id: "Enterprise VPs",
        group: 2,
        size: 7,
        color: "rgba(255, 159, 0, 0.65)",
        side: "right",
      },
      {
        id: "Key Decision Makers",
        group: 2,
        size: 9,
        color: "#ff9f00",
        side: "right",
      },
      // Bottom Channels (South side)
      {
        id: "Instagram",
        group: 3,
        size: 7,
        color: "#ec4899",
        side: "bottom",
      },
      {
        id: "LinkedIn",
        group: 3,
        size: 7,
        color: "#ec4899",
        side: "bottom",
      },
      {
        id: "Pinterest",
        group: 3,
        size: 7,
        color: "#ec4899",
        side: "bottom",
      },
      {
        id: "Google Ads",
        group: 3,
        size: 7,
        color: "#ec4899",
        side: "bottom",
      },
      {
        id: "Newspaper Publications",
        group: 3,
        size: 6,
        color: "rgba(236, 72, 153, 0.65)",
        side: "bottom",
      },
      {
        id: "In-Store Marketing",
        group: 3,
        size: 8,
        color: "#ec4899",
        side: "bottom",
      },
      {
        id: "Radio & TV",
        group: 3,
        size: 6,
        color: "rgba(236, 72, 153, 0.65)",
        side: "bottom",
      },
      // Top Tools (North side)
      {
        id: "Sprout Social",
        group: 4,
        size: 7,
        color: "#10b981",
        side: "top",
      },
      {
        id: "Buffer",
        group: 4,
        size: 7,
        color: "#10b981",
        side: "top",
      },
      {
        id: "Mailchimp",
        group: 4,
        size: 7,
        color: "#10b981",
        side: "top",
      },
      {
        id: "Canva",
        group: 4,
        size: 7,
        color: "#10b981",
        side: "top",
      },
      {
        id: "Wix",
        group: 4,
        size: 6,
        color: "rgba(16, 185, 129, 0.65)",
        side: "top",
      },
      {
        id: "WordPress",
        group: 4,
        size: 6,
        color: "rgba(16, 185, 129, 0.65)",
        side: "top",
      },
      {
        id: "AI Studio",
        group: 4,
        size: 8,
        color: "#10b981",
        side: "top",
      },
      {
        id: "GitHub",
        group: 4,
        size: 6,
        color: "rgba(16, 185, 129, 0.65)",
        side: "top",
      },
    ];

    const linksData = [
      { source: "Strategy", target: "ABM Architectures" },
      { source: "Strategy", target: "Media Activation" },
      { source: "Strategy", target: "Key Decision Makers" },
      { source: "Key Decision Makers", target: "Clinical Sponsors" },
      { source: "Key Decision Makers", target: "B2B Advertisers" },
      { source: "Key Decision Makers", target: "Enterprise VPs" },
      { source: "ABM Architectures", target: "ROI Modeling" },
      { source: "Media Activation", target: "GTM Analytics" },
      { source: "ABM Architectures", target: "Digital Experience (DX)" },
      { source: "Clinical Sponsors", target: "Higher Ed Students" },
      { source: "B2B Advertisers", target: "Millennial Shoppers" },

      // Bottom channels connected to main strategy node
      { source: "Strategy", target: "Instagram" },
      { source: "Strategy", target: "LinkedIn" },
      { source: "Strategy", target: "Pinterest" },
      { source: "Strategy", target: "Google Ads" },
      { source: "Strategy", target: "Newspaper Publications" },
      { source: "Strategy", target: "In-Store Marketing" },
      { source: "Strategy", target: "Radio & TV" },

      // Top tools connected to main strategy node
      { source: "Strategy", target: "Sprout Social" },
      { source: "Strategy", target: "Buffer" },
      { source: "Strategy", target: "Mailchimp" },
      { source: "Strategy", target: "Canva" },
      { source: "Strategy", target: "Wix" },
      { source: "Strategy", target: "WordPress" },
      { source: "Strategy", target: "AI Studio" },
      { source: "Strategy", target: "GitHub" },
    ];

    // Deep copy data to prevent reactivation issues and D3 mutating source array references
    const nodesCopy = nodesData.map((d) => ({ ...d }));
    const linksCopy = linksData.map((d) => ({ ...d }));

    const defs = svg.append("defs");
    const filter = defs.append("filter").attr("id", "glow");
    filter
      .append("feGaussianBlur")
      .attr("stdDeviation", "2.5")
      .attr("result", "coloredBlur");
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    const simulation = d3
      .forceSimulation(nodesCopy as any)
      .force(
        "link",
        d3
          .forceLink()
          .id((d: any) => d.id)
          .links(linksCopy)
          .distance(width < 768 ? 60 : 115),
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collide",
        d3.forceCollide().radius((d: any) => d.size + 30),
      )
      .force(
        "x",
        d3
          .forceX()
          .x((d: any) => {
            if (d.side === "left") return width * 0.21;
            if (d.side === "right") return width * 0.79;
            return width / 2;
          })
          .strength(0.12),
      )
      .force(
        "y",
        d3
          .forceY()
          .y((d: any) => {
            if (d.side === "top") return height * 0.18;
            if (d.side === "bottom") return height * 0.82;
            return height / 2;
          })
          .strength(0.12),
      );

    const link = svg
      .append("g")
      .selectAll("line")
      .data(linksCopy)
      .enter()
      .append("line")
      .attr("stroke", "rgba(255,255,255,0.12)")
      .attr("stroke-width", 1.5);

    const node = svg
      .append("g")
      .selectAll("g")
      .data(nodesCopy)
      .enter()
      .append("g")
      .attr(
        "class",
        "cursor-grab active:cursor-grabbing hover:opacity-100 transition-opacity",
      )
      .call(
        d3
          .drag<SVGGElement, any>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }),
      );

    node
      .append("circle")
      .attr("r", (d) => d.size)
      .attr("fill", (d) => d.color)
      .style("filter", "url(#glow)");

    node
      .append("text")
      .attr("dx", (d) => d.size + 8)
      .attr("dy", ".35em")
      .text((d) => d.id)
      .attr("fill", "rgba(255,255,255,0.85)")
      .attr("font-size", "10px")
      .attr("font-family", "Inter, sans-serif")
      .attr("font-weight", "700")
      .attr("text-transform", "uppercase")
      .attr("letter-spacing", "0.1em")
      .style("pointer-events", "none")
      .style("opacity", (d: any) => (d.group === 0 ? 1 : 0.65));

    simulation.on("tick", () => {
      // Keep nodes beautifully bound inside view limits
      nodesCopy.forEach((d: any) => {
        d.x = Math.max(d.size + 15, Math.min(width - d.size - 130, d.x));
        d.y = Math.max(d.size + 15, Math.min(height - d.size - 15, d.y));
      });

      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
    };
  }, [dimensions]);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[500px] relative">
      {/* Absolute Left Label */}
      <div className="absolute top-8 left-8 pointer-events-none select-none text-left space-y-1 z-10">
        <span className="text-[9px] font-black uppercase text-[#00d2ff] tracking-[0.3em] block">
          Technical Skillset
        </span>
        <span className="text-[8px] font-mono uppercase tracking-widest text-white/30 block">
          Campaign Systems
        </span>
      </div>

      {/* Absolute Right Label */}
      <div className="absolute top-8 right-8 pointer-events-none select-none text-right space-y-1 z-10">
        <span className="text-[9px] font-black uppercase text-[#ff9f00] tracking-[0.3em] block">
          Target Demographics
        </span>
        <span className="text-[8px] font-mono uppercase tracking-widest text-white/30 block">
          Audience Activation
        </span>
      </div>

      {/* Absolute Top Label */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none text-center space-y-1 z-10">
        <span className="text-[9px] font-black uppercase text-[#10b981] tracking-[0.3em] block">
          Strategic Tools Stack
        </span>
        <span className="text-[8px] font-mono uppercase tracking-widest text-white/30 block">
          Software & Automation
        </span>
      </div>

      {/* Absolute Bottom Label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none select-none text-center space-y-1 z-10">
        <span className="text-[9px] font-black uppercase text-[#ec4899] tracking-[0.3em] block">
          Omnichannel Delivery
        </span>
        <span className="text-[8px] font-mono uppercase tracking-widest text-white/30 block">
          Media & Channels
        </span>
      </div>

      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      />
    </div>
  );
}

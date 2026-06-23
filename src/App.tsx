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
  X,
  Pin,
  UploadCloud,
  Check,
  AlertCircle,
  Play,
} from "lucide-react";
import * as d3 from "d3";
import { put } from "@vercel/blob";
import ResumeModal from "./components/ResumeModal";

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

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-10 bg-black text-white flex items-center justify-center font-black tracking-tighter rounded-lg shadow-lg text-sm">
        N.R.
      </div>
      <span className="font-black uppercase tracking-tighter text-xl">
        Portfolio.
      </span>
    </div>
    <div className="hidden lg:flex space-x-6 xl:space-x-8 text-[10px] xl:text-[11px] font-black uppercase tracking-widest text-gray-400">
      <a
        href="#hungaro-linkedin"
        className="hover:text-black transition-colors"
      >
        HUNGAROTRIAL: Influencing CXOs
      </a>
      <a href="#times-newspaper" className="hover:text-black transition-colors">
        THE TIMES GROUP: Influencing a country
      </a>
      <a href="#bath-insta" className="hover:text-black transition-colors">
        UNIVERSITY OF BATH: Influencing globally
      </a>
    </div>
    <div className="flex items-center space-x-4">
      {/* Resume Button Removed */}
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

              <div className="flex-1 overflow-y-auto p-5 xs:p-8 md:p-12 space-y-8 md:space-y-10">
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

              <div className="p-6 border-t border-gray-100 bg-gray-50 text-center flex justify-center items-center text-[8px] font-black uppercase tracking-[0.4em] text-gray-400">
                <span>HungaroTrial Case Study</span>
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
          className="relative w-full max-w-[380px] h-fit max-h-[85vh] md:h-[720px] bg-white rounded-[3rem] border-[10px] border-gray-900 shadow-3xl overflow-y-auto flex flex-col items-center justify-center p-6 xs:p-10 text-center space-y-6 xs:space-y-12"
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

const getMediaDetails = (label: string) => {
  switch (label) {
    case "ENGAGEMENT GAP":
      return {
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop",
        gradient: "from-amber-500/15 via-red-500/10 to-transparent",
        color: "text-gray-950",
      };
    case "AUTHENTIC STUDENT JOURNEY":
    case "AUTHENTIC STUDENT LIFE":
      return {
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
        gradient: "from-amber-500/15 via-orange-500/10 to-transparent",
        color: "text-gray-950",
      };
    case "WORKFLOW STANDARDIZATION":
    case "DATA-DRIVEN DEPLOYMENT":
      return {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
        gradient: "from-[#0077b5]/15 via-blue-500/10 to-transparent",
        color: "text-gray-950",
      };
    case "PEER VALIDATION ROI":
    case "PEER VALIDATION":
      return {
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop",
        gradient: "from-emerald-500/15 via-teal-500/10 to-transparent",
        color: "text-gray-950",
      };
    case "REPLICABLE BLUEPRINT":
    case "FUTURE BLUEPRINT":
      return {
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
        gradient: "from-purple-500/15 via-violet-500/10 to-transparent",
        color: "text-gray-950",
      };
    default:
      return {
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop",
        gradient: "from-gray-500/10 to-transparent",
        color: "text-gray-950",
      };
  }
};

const InstaMedia = ({
  label,
  i,
  bgColor,
}: {
  label: string;
  i: number;
  bgColor: string;
}) => {
  const media = getMediaDetails(label);

  return (
    <div className="w-full h-full text-gray-900 border border-gray-150 flex flex-col justify-between p-4 sm:p-5 text-center relative overflow-hidden select-none bg-gray-50">
      {/* Background Image with ReferrerPolicy No-Referrer */}
      {media.image && (
        <img
          src={media.image}
          alt={label}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 group-hover:scale-105 transition-transform duration-500"
        />
      )}
      {/* Gradient Overlay for high-end text readability */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${media.gradient} z-10`} />
      
      {/* Background paper texture & subtle grid line */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="absolute inset-0 border border-white/20 pointer-events-none m-2 z-20" />

      {/* Card Header Tag - Consistent across all cards with backdrop blur for ultra contrast */}
      <div className="relative z-20 self-center">
        <span className="font-mono text-[8px] sm:text-[9px] font-black uppercase text-[#ff3e00] tracking-[0.3em] px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full shadow-xs border border-gray-200/50">
          Phase {String(i).padStart(2, "0")}
        </span>
      </div>

      {/* Graphical Showcase - Centered placeholder to align spacing */}
      <div className="flex-1 w-full flex items-center justify-center relative z-20 py-2 overflow-hidden" />

      {/* Card Footer Label with premium backdrop filter capsule */}
      <div className="relative z-20 w-full">
        <span className="font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-950 leading-tight inline-block px-3 py-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xs border border-gray-200/50 w-full">
          {label}
        </span>
      </div>
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
      className="aspect-square relative group cursor-pointer overflow-hidden rounded-xl border border-gray-150 shadow-sm"
    >
      <div className="absolute inset-0 bg-white/95 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center text-gray-900 space-y-2">
        <div className="flex space-x-4 font-black tracking-widest text-[#ff3e00] text-[10px]">
          <div className="flex items-center space-x-1">
            <Heart fill="#ff3e00" size={12} className="text-[#ff3e00]" /> <span>143</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle fill="#ff3e00" size={12} className="text-[#ff3e00]" /> <span>12</span>
          </div>
        </div>
        <p className="text-[9px] uppercase font-black tracking-[0.15em] px-4 text-center text-gray-900">
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
          className="w-full max-w-4xl h-screen md:h-[90vh] overflow-y-auto space-y-8 py-10 md:py-16 px-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent scroll-smooth"
        >
          {posts.map((post, idx) => (
            <div
              key={post.id}
              id={`insta-feed-post-${idx}`}
              className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl w-full border border-gray-150 min-h-[500px]"
            >
              {/* Media Section */}
              <div className="w-full md:w-1/2 aspect-square relative shrink-0">
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

export interface Reel {
  id: string;
  videoUrl: string;
  caption: string;
  username: string;
  likes: number;
  comments: number;
  date: string;
  isBlob: boolean;
}

export default function App() {
  const [timesPage, setTimesPage] = useState(1);
  const [storyOpen, setStoryOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeInstaPostIndex, setActiveInstaPostIndex] = useState<
    number | null
  >(null);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [activeInstaTab, setActiveInstaTab] = useState<"posts" | "reels" | "saved">("posts");
  const [showCoffeeToast, setShowCoffeeToast] = useState(false);
  const [isContactOptionsOpen, setIsContactOptionsOpen] = useState(false);
  const [blobUploading, setBlobUploading] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  // Vercel Blob Reels & Video Upload State Management
  const [reels, setReels] = useState<Reel[]>([
    {
      id: "reel-1",
      videoUrl: "https://ihzztna9b14wuolg.public.blob.vercel-storage.com/2022%20Open%20Day/IMG_6647.mov",
      caption: "Our high-impact 2022 Open Day! 🎓 Welcoming upcoming students and scholars from across the globe to the beautiful University of Bath campus. Peer-to-peer social strategy in action. #uob #openday #unilife #bath",
      username: "nupur_rajoria",
      likes: 3842,
      comments: 189,
      date: "June 23, 2026",
      isBlob: true,
    }
  ]);
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [manualToken, setManualToken] = useState("");
  const [newCaption, setNewCaption] = useState("");
  const [uploadProgress, setUploadProgress] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleCoffeeClick = () => {
    navigator.clipboard.writeText("nupurrajoria@gmail.com");
    setShowCoffeeToast(true);
    setTimeout(() => {
      setShowCoffeeToast(false);
    }, 3500);
    // Open a mail client with pre-filled subject
    window.location.href = "mailto:nupurrajoria@gmail.com?subject=Let's%20discuss%2520over%2520coffee";
  };

  const handleSimulateBlobUpload = () => {
    if (blobUploading) return;
    setBlobUploading(true);
    setBlobUrl(null);
    setTimeout(() => {
      setBlobUploading(false);
      setBlobUrl("https://g9vj3oas1z.public.blob.vercel-storage.com/articles/blob-NupurRajoria.txt");
    }, 1500);
  };

  // Drag & Drop & Browse handlers for Reels Section
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("video/")) {
        setSelectedFile(file);
      } else {
        setUploadProgress("Warning: please select a valid mp4/video file.");
        setTimeout(() => setUploadProgress(null), 4000);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith("video/")) {
        setSelectedFile(file);
      } else {
        setUploadProgress("Warning: please select a valid mp4/video file.");
        setTimeout(() => setUploadProgress(null), 4000);
      }
    }
  };

  const handleRealBlobUpload = async () => {
    if (!selectedFile) {
      setUploadProgress("Error: Please choose a video file first.");
      setTimeout(() => setUploadProgress(null), 4000);
      return;
    }

    setUploadProgress("Uploading via @vercel/blob put()...");

    try {
      const tokenToUse = manualToken.trim() || ((import.meta as any).env)?.VITE_BLOB_READ_WRITE_TOKEN || "";
      let finalUrl = "";
      let uploadedToBlob = false;

      if (tokenToUse) {
        // Run the actual requested code
        const blobResult = await put(`articles/${Date.now()}-${selectedFile.name}`, selectedFile, {
          access: "public",
          token: tokenToUse,
        });
        finalUrl = blobResult.url;
        uploadedToBlob = true;
      } else {
        // Fallback Sandbox preview ObjectURL
        finalUrl = URL.createObjectURL(selectedFile);
      }

      const newReel: Reel = {
        id: `reel-${Date.now()}`,
        videoUrl: finalUrl,
        caption: newCaption.trim() || `Authentic Student Journey: ${selectedFile.name} 📈 #bathuni #studentvoice #digitalcamp`,
        username: "nupur_rajoria",
        likes: Math.floor(Math.random() * 500) + 120,
        comments: Math.floor(Math.random() * 25) + 6,
        date: "Today",
        isBlob: uploadedToBlob,
      };

      setReels((prev) => [newReel, ...prev]);
      setSelectedFile(null);
      setNewCaption("");
      setUploadProgress(uploadedToBlob ? "Uploaded successfully to Vercel Blob!" : "Success! Local Sandbox Preview created (Input token to hit CDN).");
      setTimeout(() => setUploadProgress(null), 5000);
    } catch (err: any) {
      console.error(err);
      setUploadProgress(`Upload Failed: ${err.message || "Network exception during put()"}`);
      setTimeout(() => setUploadProgress(null), 6000);
    }
  };

  const useSampleVideo = () => {
    const sampleVideos = [
      "https://assets.mixkit.co/videos/preview/mixkit-student-in-library-looking-at-camera-40019-large.mp4",
      "https://assets.mixkit.co/videos/preview/mixkit-students-walking-on-university-campus-4519-large.mp4",
      "https://assets.mixkit.co/videos/preview/mixkit-group-of-students-studying-together-in-library-40018-large.mp4"
    ];
    const randomUrl = sampleVideos[Math.floor(Math.random() * sampleVideos.length)];
    setUploadProgress("Simulating processing of student video...");
    
    setTimeout(() => {
      const newReel: Reel = {
        id: `reel-${Date.now()}`,
        videoUrl: randomUrl,
        caption: newCaption.trim() || "Dynamic student housing walkthrough! Authentic validation GTM 🌟 #bathuniversity #socialproof",
        username: "nupur_rajoria",
        likes: Math.floor(Math.random() * 400) + 200,
        comments: Math.floor(Math.random() * 30) + 12,
        date: "Today",
        isBlob: false,
      };
      setReels((prev) => [newReel, ...prev]);
      setNewCaption("");
      setUploadProgress("Success! Loaded sample university video into Reels.");
      setTimeout(() => setUploadProgress(null), 3500);
    }, 1000);
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const cases = [
    {
      shortTitle: "ABM Lead Gen",
      title: "Case Study 01: 200+ MQLs.",
      body: "Architecting a high-touch ABM social strategy targeting US and EU sponsors to capture high-intent inbound RFP enquiries.",
      metric: "200+",
      stats: "B2B MQLs Generated",
      accentColor: "#0077b5",
      star: {
        situation:
          "The company was failing to communicate with its relevant audiences through the right channels to be available at the right place and time to develop high-functioning relationships, meaning conventional cold outreach faced massive resistance.",
        task: "To bypass this barrier, I suggested establishing a social strategy to be in front of the right audiences and the right target companies to generate high-quality leads.",
        action:
          "I developed and executed an ABM strategy on LinkedIn, deploying role-based segmentation and educational thought leadership content that addressed trial execution risks while promoting the brand's services.",
        result:
          "Forged high-trust connect points with key US and EU sponsor leads, feeding them highly relevant regulatory insights and localized execution proof-points.",
        reaction:
          "Successfully generated over 200+ marketing qualified B2B leads (MQLs), leading to high-quality SQLs (sales-qualified leads). The management saw the clear merit in implementing this strategy and now highly encourages active LinkedIn campaigns to attract audiences and build trust.",
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
          "The CRO selection process requires solid regulatory and regional trust. The existing strategy of static corporate announcements and standard press updates did not capture or differentiate the brand from larger competitors, prompting a need for a quick change.",
        task: "I realized that we needed to make the brand visible globally by using content that would actually leave the audience with valuable learning or speak directly to the specific problem statements they faced.",
        action:
          "I shifted our focus to SEO-optimized, highly helpful regulatory guides and shared learnings from FDA and EMA policies.",
        result:
          "The result was incredible. Over the years, we built a reliable publishing tempo that positions the brand HungaroTrial as an expert organization that can seamlessly conduct studies and serve as an authority for international trial sponsors.",
        reaction:
          "This growth was highly noticed by management as our follower count jumped from 1,900 to 7,000 followers, leading to over 270% growth while securing consistent improvements in profile visits and organic inbound search keywords.",
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
          "There was a separate, dormant site that existed for htdevice.com which was not generating any leads or interest, leading to an increased bounce rate for this sector.",
        task: "I recognized this issue and suggested that we update and link this site to the main website to generate high-quality interest and reduce the bounce rate.",
        action:
          "I developed a revised htdevice.com site, structuring direct conversation pathways, benefit-oriented layouts, and explicit regulatory compliance maps to funnel traffic to the main company website.",
        result:
          "As a result, this created a focused digital path that clearly answered medical device safety standards and cleanly separated drug from non-drug trials.",
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
          "Decoupled asset generation speed from raw manual hours, enabling faster testing of creative ad/SEO copy in real-time.",
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
      <Navbar />
      <StoryModal isOpen={storyOpen} onClose={() => setStoryOpen(false)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <InstaFeedModal
        isOpen={activeInstaPostIndex !== null}
        initialIndex={activeInstaPostIndex}
        posts={bathPosts}
        onClose={() => setActiveInstaPostIndex(null)}
      />

      {/* Reel Player Modal (Immersive smartphone mockup view) */}
      <AnimatePresence>
        {selectedReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[600] bg-black/95 backdrop-blur-xl flex items-center justify-center p-0 xs:p-2 sm:p-4"
            onClick={() => setSelectedReel(null)}
          >
            <div 
              className="relative bg-zinc-950 w-full max-w-sm h-full xs:h-[90vh] sm:h-[85vh] xs:rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header bar */}
              <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-20 flex items-center justify-between text-white">
                <div className="flex items-center space-x-3">
                  <div className="text-left">
                    <span className="text-xs font-black tracking-wide block uppercase tracking-widest">University of Bath</span>
                    <span className="text-[9px] text-gray-300 block font-mono">Welcome Campaign</span>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => setSelectedReel(null)}
                  className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/60 hover:scale-105 transition cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Video Player Main Stream */}
              <div className="flex-1 w-full relative flex items-center justify-center bg-black">
                <video
                  src={selectedReel.videoUrl}
                  autoPlay
                  loop
                  controls
                  playsInline
                  className="w-full h-full object-cover xs:rounded-3xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floater overlay actions like likes, comment counts */}
                <div className="absolute right-4 bottom-28 z-20 flex flex-col items-center space-y-6 text-white text-xs font-bold">
                  <button className="group flex flex-col items-center focus:outline-none transition hover:scale-110 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-red-600/30">
                      <Heart size={18} className="fill-current text-white group-hover:text-red-500 transition-colors" />
                    </div>
                    <span className="mt-1 text-[9px] drop-shadow font-mono">{selectedReel.likes}</span>
                  </button>
                  <button className="group flex flex-col items-center focus:outline-none transition hover:scale-110 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-[#ff3e00]/30">
                      <MessageCircle size={18} className="text-white group-hover:text-[#ff3e00] transition-colors" />
                    </div>
                    <span className="mt-1 text-[9px] drop-shadow font-mono">{selectedReel.comments}</span>
                  </button>
                  <button className="group flex flex-col items-center focus:outline-none transition hover:scale-110 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-amber-500/30">
                      <Bookmark size={18} className="text-white group-hover:text-amber-500 transition-colors" />
                    </div>
                    <span className="mt-1 text-[9px] drop-shadow font-mono">SAVE</span>
                  </button>
                </div>

                {/* Bottom text overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 pt-12 z-10 text-white text-left">
                  <div className="space-y-1.5 max-w-[85%]">
                    <p className="text-[11px] leading-relaxed font-sans font-medium">
                      {selectedReel.caption}
                    </p>
                    <div className="flex items-center space-x-1.5 text-[9px] text-gray-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Published {selectedReel.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================
          0. COVER PAGE
          ========================================== */}
      <section
        id="campaign-launch"
        className="min-h-screen flex flex-col items-center justify-center pt-32 px-4 sm:px-8 overflow-hidden relative bg-white"
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
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[11.5rem] leading-[0.8] font-black uppercase tracking-tighter text-gray-950">
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
                Formulating strategic communication and digital acquisition channel strategies for engaging CXO-level decision-makers, including Directors, VPs, and CEOs within biotech and pharmaceutical sponsor organizations globally.
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
        <div className="max-w-5xl mx-auto px-4 xs:px-6 sm:px-8 relative">
          <AnimatePresence mode="wait">
            {timesPage === 1 ? (
              <motion.div
                key="page1"
                initial={{ opacity: 0, rotateY: -10, x: 20 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: 10, x: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="newspaper-paper p-6 xs:p-10 md:p-16 space-y-12 md:space-y-16 relative"
              >
                <div className="text-center space-y-6 sm:space-y-8 border-b-4 border-black pb-8 sm:pb-12">
                  <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em]">
                    <span>Times Special</span>
                    <span>2019 - 2021</span>
                  </div>
                  <h1 className="text-[16px] xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-black tracking-tighter leading-none italic uppercase whitespace-nowrap">
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
                    text="Transitioning into the B2B sphere required a highly targeted, strategic shift in mindset. Our communications and campaign narratives were developed specifically for key enterprise partners, including CXO-level decision-makers, VPs, and Directors across top-tier brand portfolios, alongside mass India-based reader audiences. This dual-focus approach redefined Advertiser Brand Loyalty and reader retention through authoritative, data-led GTM storytelling."
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

                <div className="pt-16 pr-0 md:pr-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 relative">
                  <div className="flex flex-wrap justify-center md:justify-start gap-x-6 sm:gap-x-12 gap-y-2 text-xs sm:text-sm font-bold uppercase tracking-tighter text-center">
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
                className="newspaper-paper p-6 xs:p-10 md:p-16 space-y-12 md:space-y-16 relative"
              >
                <div className="text-center space-y-6 sm:space-y-8 border-b-4 border-black pb-8 sm:pb-12">
                  <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em]">
                    <span>Special Edition</span>
                    <span>2019 - 2021 Special Edition</span>
                  </div>
                  <h1 className="text-[16px] xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-black tracking-tighter leading-none italic uppercase whitespace-nowrap">
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
                      <div className="campaign-tag w-fit bg-black text-white text-[9px] font-black uppercase tracking-widest px-3 py-1">B2B2C NATIONWIDE DRIVE</div>
                      <h3 className="font-serif text-3xl font-black italic tracking-tight leading-none uppercase">
                        MASS ENGAGEMENT
                      </h3>
                    </div>
                    <NewsColumn
                      headline="SITUATION"
                      text="Traditional newspaper readership was fragmenting. The challenge was reversing the trend and driving high-intent nationwide excitement."
                      i={1}
                    />
                  </div>
                  <div className="space-y-12">
                    <NewsColumn
                      headline="INITIATIVE"
                      text="Conceived and led a nationwide interactive challenge: an innovative format spanning Television, LinkedIn, and Instagram to mobilize dynamic audience connection."
                      i={2}
                    />
                    <div className="bg-gray-50 p-8 rounded-lg border-2 border-dashed border-black/10 space-y-6">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider">
                          IMPLEMENTATION
                        </span>
                        <p className="text-sm font-serif italic text-gray-800 leading-relaxed">
                          Partnered with global brands to anchor the contest in print while driving traffic across digital loops: reinforcing each channel.
                        </p>
                      </div>

                      <div className="space-y-2 border-t border-black/10 pt-4">
                        <div className="flex items-center space-x-3 text-red-700 mb-2">
                          <Plus size={16} />
                          <span className="text-[10px] font-black font-sans uppercase tracking-widest">
                            RESULTS & RECOGNITION
                          </span>
                        </div>
                        <p className="text-sm font-sans text-gray-900 font-bold leading-relaxed">
                          Won the INMA Global Media Award for 'Best Idea to Encourage Reader Engagement' and created a replicable marketing asset.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-16 pr-0 md:pr-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 relative">
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

                  <div className="flex flex-wrap justify-center md:justify-start gap-x-6 sm:gap-x-12 gap-y-2 text-xs sm:text-sm font-bold uppercase tracking-tighter text-center">
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
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8 w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setStoryOpen(true)}
                className="w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-[#f09433] to-[#bc1888] shadow-2xl cursor-pointer relative shrink-0 group"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] animate-pulse opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="w-full h-full rounded-full border-4 border-white bg-white flex flex-col items-center justify-center overflow-hidden relative z-10 transition-colors group-hover:bg-gray-50">
                  <div className="text-4xl font-black text-gray-950 flex flex-col items-center justify-center">
                    <span>200%</span>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-4 flex-1 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-center sm:justify-start gap-4">
                  <h3 className="text-2xl font-bold">
                    Marketing_University of Bath
                  </h3>
                </div>
                <div className="flex justify-center sm:justify-start space-x-6 xs:space-x-12 text-sm xs:text-xs">
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
                  <p className="text-sm text-gray-600 max-w-sm sm:max-w-md mx-auto sm:mx-0 leading-relaxed">
                    Designed high-performing organic social campaigns and creative content guidelines developed specifically for existing and upcoming students and scholars from across the world, driving dynamic peer engagement and strategic student recruitment during critical university welcome cycles.
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
              <div className="flex space-x-12 sm:space-x-16 -mt-px">
                <button
                  type="button"
                  onClick={() => setActiveInstaTab("posts")}
                  className={`flex items-center space-x-2 py-4 border-t-2-clean cursor-pointer transition-all ${
                    activeInstaTab === "posts"
                      ? "border-t border-black text-black font-black"
                      : "border-t border-transparent text-gray-400 hover:text-gray-900"
                  }`}
                >
                  <div className={`w-3 h-3 border grid grid-cols-2 gap-[1px] p-[1px] ${
                    activeInstaTab === "posts" ? "border-black" : "border-gray-400"
                  }`}>
                    <div className={activeInstaTab === "posts" ? "bg-black" : "bg-gray-400"} />
                    <div className={activeInstaTab === "posts" ? "bg-black" : "bg-gray-400"} />
                    <div className={activeInstaTab === "posts" ? "bg-black" : "bg-gray-400"} />
                    <div className={activeInstaTab === "posts" ? "bg-black" : "bg-gray-400"} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest">
                    Posts
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveInstaTab("reels")}
                  className={`flex items-center space-x-2 py-4 border-t-2-clean cursor-pointer transition-all ${
                    activeInstaTab === "reels"
                      ? "border-t border-black text-black font-black"
                      : "border-t border-transparent text-gray-400 hover:text-gray-900"
                  }`}
                >
                  <Clapperboard size={14} />
                  <span className="text-[10px] uppercase tracking-widest">
                    Reels
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveInstaTab("saved")}
                  className={`flex items-center space-x-2 py-4 border-t-2-clean cursor-pointer transition-all ${
                    activeInstaTab === "saved"
                      ? "border-t border-black text-black font-black"
                      : "border-t border-transparent text-gray-400 hover:text-gray-900"
                  }`}
                >
                  <Bookmark size={14} />
                  <span className="text-[10px] uppercase tracking-widest">
                    Saved
                  </span>
                </button>
              </div>
            </div>

            {/* Responsive Feed Grid / Reels / Saved Viewports */}
            <AnimatePresence mode="wait">
              {activeInstaTab === "posts" && (
                <motion.div
                  key="posts"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                >
                  {bathPosts.map((post, idx) => (
                    <InstaPostCard
                      key={post.id}
                      index={idx}
                      post={post}
                      onClick={() => setActiveInstaPostIndex(idx)}
                    />
                  ))}
                </motion.div>
              )}

              {activeInstaTab === "reels" && (
                <motion.div
                  key="reels"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {reels.map((reel, idx) => (
                      <div
                        key={reel.id}
                        className="group relative cursor-pointer aspect-[9/16] bg-zinc-950 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        onClick={() => setSelectedReel(reel)}
                      >
                        {/* Real-time background Video loop */}
                        <video
                          src={reel.videoUrl}
                          muted
                          loop
                          playsInline
                          autoPlay
                          className="w-full h-full object-cover select-none pointer-events-none"
                          referrerPolicy="no-referrer"
                        />

                        {/* Hover Overlay with standard metrics */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10">
                          <div className="flex justify-end">
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                              <Play size={14} className="fill-current ml-0.5" />
                            </div>
                          </div>

                          <div className="space-y-2 text-white text-left">
                            <p className="text-[11px] font-sans font-bold line-clamp-2 leading-relaxed">
                              {reel.caption}
                            </p>
                            
                            <div className="flex items-center space-x-4 text-[10px] font-mono text-gray-200">
                              <div className="flex items-center space-x-1">
                                <Heart size={11} className="fill-current text-white" />
                                <span>{reel.likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle size={11} className="text-white" />
                                <span>{reel.comments}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Soft bottom gradient to protect text on dark backing */}
                        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeInstaTab === "saved" && (
                <motion.div
                  key="saved"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="max-w-md mx-auto text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-gray-150 shadow-inner">
                    <Bookmark className="text-gray-400" size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-950 uppercase tracking-wider text-xs">Saved Creative Assets</h4>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                      Your bookmarked moodboards, creative typography grids, and style guidelines from the University of Bath collections are saved here.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-white text-gray-950 border-t border-b border-gray-100 relative flex flex-col items-center scroll-mt-32">
        <div className="max-w-4xl text-center space-y-8 mb-20 px-8">
          <div className="accent-pill inline-block border-gray-200 text-gray-400 bg-gray-50/50 uppercase text-[9px] font-black tracking-widest px-4 py-1.5 rounded-full border">
            Campaign Planning
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-none text-black">
            Synergy & <br />
            <span className="text-fusion-accent">Strategy Cluster.</span>
          </h2>
        </div>

        <div className="w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-7xl h-[450px] md:h-[600px] bg-gray-50/50 rounded-[2rem] md:rounded-[4rem] border border-gray-200 mx-auto relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 modern-jali opacity-[0.02]" />
          <MindMap />
        </div>
      </section>

      <footer className="py-20 md:py-40 pb-20 px-4 sm:px-8 text-center bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto space-y-16 sm:space-y-24">
          <h2 className="text-4xl xs:text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter uppercase leading-[0.8] break-words">
            <Typewriter text="Let's Launch." delay={500} />
          </h2>

          <div className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
            {/* Clickable Simple Button Tab */}
            <button
              onClick={() => setIsContactOptionsOpen(!isContactOptionsOpen)}
              className="group cursor-pointer appearance-none border-none bg-transparent w-full"
            >
              <div className="w-full px-8 py-5 bg-black text-white hover:bg-fusion-accent rounded-full font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02] flex items-center justify-center">
                Don’t hesitate. Let’s discuss over coffee.
              </div>
            </button>

            {/* Expandable Options Panel */}
            <AnimatePresence>
              {isContactOptionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="w-full bg-gray-50 border border-gray-150 rounded-2xl p-5 shadow-inner mt-2 overflow-hidden"
                >
                  <div className="flex flex-col items-center space-y-3 text-center">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400 block font-bold">
                      Connect Directly:
                    </span>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-[11px] sm:text-xs">
                      <a
                        href="mailto:nupurrajoria@gmail.com?subject=Let's%20discuss%20over%20coffee"
                        className="font-black text-gray-950 hover:text-fusion-accent border-b border-gray-950/20 hover:border-fusion-accent pb-0.5 transition-colors uppercase tracking-wider"
                      >
                        nupurrajoria@gmail.com
                      </a>
                      <span className="text-gray-300 hidden sm:inline">|</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("nupurrajoria@gmail.com");
                          setShowCoffeeToast(true);
                          setTimeout(() => setShowCoffeeToast(false), 3500);
                        }}
                        className="text-[10px] font-black uppercase tracking-widest text-[#ff3e00] hover:text-black cursor-pointer transition-colors"
                      >
                        COPY EMAIL
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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

      {/* Coffee Dialogue Copy Feedback Toast */}
      <AnimatePresence>
        {showCoffeeToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] px-6 py-3.5 bg-black text-white rounded-full font-mono text-[10px] uppercase font-black tracking-widest border border-white/10 shadow-2xl flex items-center gap-3 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Email copied to clipboard (nupurrajoria@gmail.com)</span>
          </motion.div>
        )}
      </AnimatePresence>
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
      .attr("stroke", "rgba(0,0,0,0.08)")
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
      .attr("fill", "#0f0f0f")
      .attr("font-size", "9px")
      .attr("font-family", "Inter, sans-serif")
      .attr("font-weight", "800")
      .attr("text-transform", "uppercase")
      .attr("letter-spacing", "0.08em")
      .style("pointer-events", "none")
      .style("opacity", (d: any) => (d.group === 0 ? 1 : 0.70));

    simulation.on("tick", () => {
      // Keep nodes beautifully bound inside view limits
      nodesCopy.forEach((d: any) => {
        const xVal = typeof d.x === "number" ? d.x : (width / 2);
        const yVal = typeof d.y === "number" ? d.y : (height / 2);
        d.x = Math.max(d.size + 15, Math.min(width - d.size - 130, xVal));
        d.y = Math.max(d.size + 15, Math.min(height - d.size - 15, yVal));
      });

      link
        .attr("x1", (d: any) => (d.source && typeof d.source === "object" ? d.source.x : 0))
        .attr("y1", (d: any) => (d.source && typeof d.source === "object" ? d.source.y : 0))
        .attr("x2", (d: any) => (d.target && typeof d.target === "object" ? d.target.x : 0))
        .attr("y2", (d: any) => (d.target && typeof d.target === "object" ? d.target.y : 0));

      node.attr("transform", (d: any) => `translate(${typeof d.x === "number" ? d.x : 0},${typeof d.y === "number" ? d.y : 0})`);
    });

    return () => {
      simulation.stop();
    };
  }, [dimensions]);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[500px] relative">
      {/* Absolute Left Label */}
      <div className="absolute top-8 left-8 pointer-events-none select-none text-left space-y-1 z-10">
        <span className="text-[9px] font-black uppercase text-[#0077b5] tracking-[0.3em] block">
          Technical Skillset
        </span>
        <span className="text-[8px] font-mono uppercase tracking-widest text-gray-400 block">
          Campaign Systems
        </span>
      </div>

      {/* Absolute Right Label */}
      <div className="absolute top-8 right-8 pointer-events-none select-none text-right space-y-1 z-10">
        <span className="text-[9px] font-black uppercase text-[#d97706] tracking-[0.3em] block">
          Target Demographics
        </span>
        <span className="text-[8px] font-mono uppercase tracking-widest text-gray-400 block">
          Audience Activation
        </span>
      </div>

      {/* Absolute Top Label */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none text-center space-y-1 z-10">
        <span className="text-[9px] font-black uppercase text-[#059669] tracking-[0.3em] block">
          Strategic Tools Stack
        </span>
        <span className="text-[8px] font-mono uppercase tracking-widest text-gray-400 block">
          Software & Automation
        </span>
      </div>

      {/* Absolute Bottom Label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none select-none text-center space-y-1 z-10">
        <span className="text-[9px] font-black uppercase text-[#db2777] tracking-[0.3em] block">
          Omnichannel Delivery
        </span>
        <span className="text-[8px] font-mono uppercase tracking-widest text-gray-400 block">
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

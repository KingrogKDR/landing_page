"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  RefreshCw,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";
import MotionDiv from "./ui/MotionDiv";

export default function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Interactive Simulations",
      desc: "Explore scientific concepts with ready-to-use simulations that respond to your touch.",
      icon: Play,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      stats: "500+ Simulations",
      detail:
        "Physics, Chemistry, Biology, and Math simulations at your fingertips",
    },
    {
      title: "Lightning Integration",
      desc: "Seamlessly embed simulations into your workflow with one-click deployment.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      stats: "< 5 Minutes Setup",
      detail: "Copy, paste, and go live instantly across any platform",
    },
    {
      title: "Real-Time Updates",
      desc: "Always stay in sync with the latest science modules and content updates.",
      icon: RefreshCw,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      stats: "Daily Updates",
      detail:
        "Automatic content sync ensures you're always using the latest version",
    },
    {
      title: "Cross-Platform",
      desc: "Works flawlessly on desktop, tablet, and mobile with responsive design.",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
      stats: "Any Device",
      detail: "Optimized performance across all screen sizes and platforms",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-400 rounded-full filter blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <MotionDiv className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-100 to-blue-100 border border-slate-200 text-sm font-medium text-slate-700 shadow-sm mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
            Powerful Features
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
            Everything You Need
          </h2>

          <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Discover the tools and features that make educational content
            creation effortless and engaging
          </p>
        </MotionDiv>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredFeature === idx;

            return (
              <MotionDiv key={idx} delay={idx * 0.15}>
                <motion.div
                  className={`relative p-8 rounded-2xl shadow-lg bg-white border border-slate-200/50 cursor-pointer group overflow-hidden ${feature.hoverColor} transition-all duration-300`}
                  onHoverStart={() => setHoveredFeature(idx)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  {/* Background gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    animate={{ scale: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg`}
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <IconComponent className="w-8 h-8" />
                  </motion.div>

                  {/* Stats Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${feature.bgColor} text-slate-700 border border-slate-200`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isHovered ? 1 : 0.7,
                      x: isHovered ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.stats}
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4 group-hover:text-slate-700 transition-colors">
                      {feature.desc}
                    </p>

                    {/* Expandable Detail */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-slate-200/50">
                        <p className="text-xs text-slate-500 font-medium">
                          {feature.detail}
                        </p>
                      </div>
                    </motion.div>

                    {/* Learn More Button */}
                    <motion.button
                      className="flex items-center text-sm font-semibold text-blue-600 mt-4 group-hover:text-blue-700 transition-colors"
                      whileHover={{ x: 4 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.button>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              </MotionDiv>
            );
          })}
        </div>

        {/* Call to action */}
        <MotionDiv delay={0.8} className="text-center mt-16">
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </MotionDiv>
      </div>
    </section>
  );
}

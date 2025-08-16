"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Model from "./ui/Model";
import { Button } from "./ui/button";

export default function HeroSection() {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setRotation((prev) => prev + Math.PI / 4);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x: x * 0.3, y: -y * 0.2 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (rotation !== 0) {
      const timer = setTimeout(() => {
        setRotation(0);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [rotation]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="text-center max-w-4xl relative z-10 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-7xl font-black tracking-tight">
            <span className="block text-slate-900 leading-tight">
              Bring Educational
            </span>
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Concepts
              </span>{" "}
              <span className="text-slate-900">to Life</span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Transform complex ideas into immersive 3D experiences that students
            can explore, interact with, and truly understand.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="w-full max-w-4xl h-[480px] cursor-pointer mt-20 relative"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateY: rotation,
          rotateX: mousePosition.y * 20,
          rotateZ: mousePosition.x * 10,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/50">
          <Canvas
            camera={{ position: [0, 0, 6], fov: 35 }}
            className="bg-transparent"
          >
            <ambientLight intensity={isHovered ? 0.8 : 0.6} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={isHovered ? 1.5 : 1.2}
              castShadow
            />
            <pointLight
              position={[-5, -5, 5]}
              intensity={0.3}
              color="#3b82f6"
            />
            <Environment files="/forest.exr" background={false} />
            <Model scale={isHovered ? 1.1 : 1.0} position={[0, 0, 0]} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={isHovered}
              autoRotateSpeed={0.5}
            />
          </Canvas>

          {/* Interactive hint */}
          <motion.div
            className="absolute bottom-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-slate-600 font-medium shadow-lg border border-white/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0.7, y: 0 }}
            transition={{ delay: 1 }}
          >
            Click to rotate • Hover to explore
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 mt-16 z-10"
      >
        <Button
          className="text-lg font-semibold py-6 px-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white shadow-xl border-0 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          variant="default"
        >
          Book a Demo
        </Button>

        <Button
          variant="outline"
          className="text-lg font-semibold py-6 px-8 rounded-2xl border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 hover:shadow-lg"
        >
          Watch Preview
        </Button>
      </motion.div>

      {/* Stats or features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-8 mt-20 text-sm text-slate-500 font-medium"
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          10,000+ Interactive Models
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          Real-time Collaboration
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
          AI-Powered Content
        </div>
      </motion.div>
    </section>
  );
}

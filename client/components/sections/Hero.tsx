import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const FloatingShapes = () => {
  return (
    <group>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-2, 1, -1]} rotation={[0.4, 0.2, 0.1]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[2, -1, -2]} rotation={[0.2, 0.5, 0.3]}>
          <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.4, 32, 32]} position={[0, 2, -3]}>
          <MeshDistortMaterial color="#ec4899" speed={2} distort={0.5} />
        </Sphere>
      </Float>
    </group>
  );
};

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
              className="mr-1"
            >
              👋
            </motion.span>
            My name is Mudavath Kumar
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                MUDAVATH
              </motion.span>
            </span>
            <span className="block overflow-hidden outline-text">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block"
              >
                KUMAR
              </motion.span>
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="flex gap-2 text-xl md:text-3xl font-bold uppercase tracking-widest text-muted-foreground">
              <motion.span
                animate={{ scale: [1, 1.05, 1], color: ["#666", "#000", "#666"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Full Stack
              </motion.span>
              <span className="text-primary">&</span>
              <motion.span
                animate={{ scale: [1, 1.05, 1], color: ["#666", "#000", "#666"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                Developer
              </motion.span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mt-4">
              Crafting immersive digital experiences in Hyderabad, India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href="#projects"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-border rounded-full text-lg font-bold hover:bg-muted transition-colors"
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

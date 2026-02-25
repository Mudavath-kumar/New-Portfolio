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
    <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden pt-20 px-6 md:px-20">
      {/* 3D Background - Subtler as per minimal design */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content - Aligned Left as per image */}
      <div className="relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-muted-foreground font-medium tracking-tight text-lg mb-10 flex items-center gap-2">
            <span className="text-2xl animate-bounce">👋</span>
            <span>, my name is <span className="text-foreground font-bold">Mudavath Kumar</span> and I am a</span>
          </p>

          <div className="relative mb-8">
            <h1 className="text-7xl md:text-[160px] font-black tracking-tighter leading-[0.9] flex flex-col">
              <span className="block text-black dark:text-white">AI Developer</span>
              <span className="block outline-text">& Developer</span>
            </h1>

            {/* Circular Arrow Button from image */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute right-[-20px] md:right-[150px] top-[10%] md:top-[20%] w-16 h-16 md:w-24 md:h-24 border border-black dark:border-white rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-8 h-8 md:w-12 md:h-12 group-hover:rotate-45 transition-transform"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mt-12"
          >
            based in Hyderabad, India.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-20"
      >
        <div className="w-6 h-10 border border-muted-foreground rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-muted-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

// components/Hero.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            We create <span className="text-orange-500">solutions</span> for your business
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Our team keeps an eye on emerging trends and technologies to ensure your marketing campaigns remain cutting-edge.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition">
              Get Started
            </button>
            <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition">
              Explore more ↓
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <Image
            src="/illustrations/hero-people.png"
            alt="Team working"
            width={600}
            height={500}
            className="relative z-10"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

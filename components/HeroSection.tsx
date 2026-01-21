'use client';

import { motion } from 'framer-motion';
import { Download, Star, User } from 'lucide-react';
import dynamic from 'next/dynamic';

const PhoneModel = dynamic(() => import('./PhoneModel'), { ssr: false });

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Majesticpride.apk';
    link.download = 'MajesticPride.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-[url('/mobilebgimg.jpg')] sm:bg-[url('/backimg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-transparent to-blue-100/30 pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 z-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full"
            >
              <Star className="w-4 h-4 text-sky-600 fill-sky-600" />
              <span className="text-sm font-medium text-sky-700">Premium Gaming Experience</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
                <span className="text-[#AB2D03]">
                Majestic Pride
              </span>
              <br />
              <span className="text-white text-3xl sm:text-4xl lg:text-5xl">विश्वास का धंदा विश्वास के साथ</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white/90 leading-relaxed max-w-xl"
            >
              India's No 1 Matka App
              <br />
              आज ही download करे
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex gap-6 text-lg"
            >
              <span className="font-extrabold text-white/90">Automatic DEPOSIT</span>
              <span className="font-extrabold text-white/90">Automatic WITHDRAWAL</span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 text-white font-bold text-lg rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  <Download className="w-6 h-6" />
                  Download Majestic Pride APK
                </span>
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg border border-sky-100"
              >
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
  <img src="/images/user1.avif" className="w-full h-full object-cover" />
</div>

<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
  <img src="/images/user2.avif" className="w-full h-full object-cover" />
</div>

<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
  <img src="/images/user3.avif" className="w-full h-full object-cover" />
</div>

                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800">50K+</div>
                  <div className="text-sm text-gray-500">Downloads</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center"
          >
            <PhoneModel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

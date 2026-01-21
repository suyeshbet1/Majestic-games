'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Header() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/app.apk';
    link.download = 'MajesticPride.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-sky-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden border border-sky-100">
              <img src="/gameicon.png" alt="Majestic Pride Logo" className="w-full h-full object-contain p-1" />
            </div>
            <span className="text-2xl font-bold text-[#AB2D03]">
              Majestic Pride
            </span>
          </motion.div>

          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Download className="w-5 h-5" />
            <span className="hidden sm:inline">Download APK</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Heart, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-12 px-4 bg-gradient-to-t from-sky-50 to-transparent border-t border-sky-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">M</span>
              </div>
                <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                Majestic Pride
              </span>
            </div>
            <p className="text-gray-600">
              Your ultimate gaming destination. Experience premium games with stunning graphics and smooth gameplay.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-sky-600 transition-colors">
                  Download App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sky-600 transition-colors">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sky-600 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="font-bold text-gray-800 mb-4">Download Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Smartphone className="w-5 h-5 text-sky-600" />
                <span>Android 5.0+</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 rounded-full text-sm font-medium text-sky-700">
                Free to Download
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-8 border-t border-sky-100 text-center"
        >
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for gamers
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 Majestic Pride. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

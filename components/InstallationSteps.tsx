'use client';

import { motion } from 'framer-motion';
import { Settings, Shield, Download, PlayCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Settings,
    title: 'Click On Settings',
    description: 'Open your device settings to allow app installation',
    color: 'from-sky-400 to-blue-500',
  },
  {
    number: 2,
    icon: Shield,
    title: 'Enable unknown sources',
    description: 'Enable unknown sources and go back',
    color: 'from-blue-400 to-sky-500',
  },
  {
    number: 3,
    icon: Download,
    title: 'Click On Install',
    description: 'Tap the install button to begin installation',
    color: 'from-sky-500 to-blue-600',
  },
  {
    number: 4,
    icon: PlayCircle,
    title: 'Open And Start Playing!',
    description: 'After install, click "Open" and enjoy gaming',
    color: 'from-blue-500 to-sky-600',
  },
];

export default function InstallationSteps() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-50/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-sky-600 bg-sky-100 px-4 py-2 rounded-full">
              Easy Installation
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
              HOW TO INSTALL APP
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-semibold">Majestic Games</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 to-blue-300/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-sky-100 hover:border-sky-300 transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                        className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-md`}
                      >
                        {step.number}
                      </motion.span>
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                  className={`h-1 bg-gradient-to-r ${step.color} rounded-full mt-6 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-green-700">
              Installation takes less than 30 seconds!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

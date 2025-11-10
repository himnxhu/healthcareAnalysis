'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Activity, BarChart3, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <Activity className="h-16 w-16 text-blue-600 mx-auto" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Healthcare Data Insights Dashboard
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Analyze hospital efficiency, patient satisfaction, and insurance
            claim data to improve healthcare decision-making.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/dashboard"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View Dashboard
              <BarChart3 className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hospital Efficiency
              </h3>
              <p className="text-gray-600">
                Track average wait times, treatment success rates, and
                operational metrics to optimize hospital performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Patient Satisfaction
              </h3>
              <p className="text-gray-600">
                Analyze patient ratings, reviews, and survey results to enhance
                care quality and patient experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Insurance Claims
              </h3>
              <p className="text-gray-600">
                Monitor approved vs rejected claims, identify patterns, and
                streamline the claims approval process.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="bg-blue-600 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Healthcare Analytics?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Explore interactive visualizations and data-driven insights.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

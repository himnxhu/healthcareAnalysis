'use client';

import { motion } from 'framer-motion';
import {
  Database,
  BarChart3,
  Code,
  Zap,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

export default function About() {
  const technologies = [
    { name: 'Next.js 13', description: 'React framework for production' },
    { name: 'React 18', description: 'UI component library' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'Recharts', description: 'Composable charting library' },
    { name: 'Framer Motion', description: 'Animation library' },
    { name: 'TypeScript', description: 'Type-safe JavaScript' },
  ];

  const features = [
    'Multi-category healthcare data classification',
    'Interactive data visualizations with tooltips',
    'Real-time performance metrics',
    'Responsive design for all devices',
    'Color-coded charts and legends',
    'Professional healthcare UI',
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About This Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive healthcare data analysis and visualization platform
            built with modern web technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Database className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Project Overview
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              This Healthcare Data Insights Dashboard performs{' '}
              <strong>multi-category classification and visualization</strong>{' '}
              for healthcare Key Performance Indicators (KPIs). The project
              simulates a complete data analytics pipeline combining backend
              data processing concepts with modern frontend visualization.
            </p>

            <p>
              The application analyzes three critical healthcare domains:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <TrendingUp className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">
                  Hospital Efficiency
                </h3>
                <p className="text-sm">
                  Tracks wait times, treatment success rates, and operational
                  metrics across multiple facilities.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <BarChart3 className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">
                  Patient Satisfaction
                </h3>
                <p className="text-sm">
                  Analyzes patient ratings and survey results to improve care
                  quality and experience.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <CheckCircle className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Insurance Claims</h3>
                <p className="text-sm">
                  Monitors claim approval rates and identifies patterns to
                  streamline processes.
                </p>
              </div>
            </div>

            <p>
              While the backend analytics are simulated using static JSON data
              (mimicking results from Python libraries like{' '}
              <strong>Pandas</strong> and <strong>Seaborn</strong>), the
              frontend delivers production-ready, interactive visualizations
              using <strong>Recharts</strong> and <strong>React</strong>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <Code className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <Zap className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Built for Professional Presentation
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            This project demonstrates proficiency in data visualization,
            analytics concepts, and modern frontend development practices. Ready
            for deployment to Vercel with zero backend dependencies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">
              Data Analytics
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              React/Next.js
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              Data Visualization
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              Responsive Design
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

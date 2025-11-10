'use client';

import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Activity, TrendingUp, Shield, Clock, Users } from 'lucide-react';
import healthcareData from '@/data/healthcare-data.json';

export default function Dashboard() {
  const totalPatients = healthcareData.reduce(
    (sum, h) => sum + h.total_patients,
    0
  );
  const totalClaims = healthcareData.reduce(
    (sum, h) => sum + h.claims_approved + h.claims_rejected,
    0
  );
  const avgSatisfaction =
    healthcareData.reduce((sum, h) => sum + h.patient_satisfaction, 0) /
    healthcareData.length;
  const avgEfficiency =
    healthcareData.reduce((sum, h) => sum + h.efficiency_score, 0) /
    healthcareData.length;

  const efficiencyData = healthcareData.map((h) => ({
    name: h.hospital_name.split(' ')[0],
    efficiency: h.efficiency_score,
    satisfaction: h.patient_satisfaction,
    waitTime: h.avg_wait_time,
  }));

  const claimsData = healthcareData.map((h) => ({
    name: h.hospital_name.split(' ')[0],
    approved: h.claims_approved,
    rejected: h.claims_rejected,
  }));

  const totalApproved = healthcareData.reduce(
    (sum, h) => sum + h.claims_approved,
    0
  );
  const totalRejected = healthcareData.reduce(
    (sum, h) => sum + h.claims_rejected,
    0
  );

  const pieData = [
    { name: 'Approved', value: totalApproved, color: '#10b981' },
    { name: 'Rejected', value: totalRejected, color: '#ef4444' },
  ];

  const successRateData = healthcareData.map((h) => ({
    name: h.hospital_name.split(' ')[0],
    rate: h.treatment_success_rate,
  }));

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Healthcare Analytics Dashboard
          </h1>
          <p className="text-gray-600 mb-8">
            Real-time insights and performance metrics across healthcare
            facilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Patients</p>
                <p className="text-3xl font-bold text-gray-900">
                  {totalPatients.toLocaleString()}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg Efficiency</p>
                <p className="text-3xl font-bold text-gray-900">
                  {avgEfficiency.toFixed(1)}%
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg Satisfaction</p>
                <p className="text-3xl font-bold text-gray-900">
                  {avgSatisfaction.toFixed(1)}%
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Activity className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Claims</p>
                <p className="text-3xl font-bold text-gray-900">
                  {totalClaims.toLocaleString()}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Hospital Efficiency & Satisfaction
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="efficiency" fill="#3b82f6" name="Efficiency %" />
                <Bar
                  dataKey="satisfaction"
                  fill="#10b981"
                  name="Satisfaction %"
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-600" />
              Insurance Claims Overview
            </h2>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-orange-600" />
              Average Wait Time by Hospital
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="waitTime"
                  fill="#f59e0b"
                  name="Wait Time (min)"
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Activity className="h-5 w-5 mr-2 text-green-600" />
              Treatment Success Rate Trend
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={successRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="Success Rate %"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white p-6 rounded-xl shadow-md mt-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Claims Breakdown by Hospital
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={claimsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="approved" stackId="a" fill="#10b981" name="Approved" />
              <Bar dataKey="rejected" stackId="a" fill="#ef4444" name="Rejected" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { CheckCircle, Clock, XCircle, TrendingUp, TrendingDown, Minus } from "lucide-react"
// import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, Line, LineChart
} from "recharts";
import Header from "../components/Header";

const Dashboard = () => {
  const [stats, setStats] = useState({ done: 10, pending: 2, undone: 5 });
  const [chartType, setChartType] = useState('bar');


  const data = [
    { name: "Done", value: stats.done },
    { name: "Pending", value: stats.pending },
    { name: "Undone", value: stats.undone },
  ];

  const COLORS = ["#4ade80", "#facc15", "#f87171"];

  const toggleChart = (type) => {
    setChartType(type);
  };
  

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Task Dashboard</h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            
            {/* Done Tasks Card */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  <h2 className="font-semibold">Done Tasks</h2>
                </div>
              </div>
            </div>



            {/* Pending Tasks Card */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-yellow-500 mr-2" />
                  <h2 className="font-semibold">Pending Tasks</h2>
                </div>
              </div>
            </div>



            {/* Undone Tasks Card */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <XCircle className="w-6 h-6 text-red-500 mr-2" />
                  <h2 className="font-semibold">Undone Tasks</h2>
                </div>
              </div>
            </div>

          </div>

           {/* charts */}
          <div className="flex justify-center mb-4">
            <nav>
              <button className="p-2 px-4 bg-blue-200 text-gray-800 rounded-md mr-2 hover:bg-blue-300 cursor-pointer" onClick={() => toggleChart('bar')}>Bar</button>
              <button className="p-2 px-4 bg-blue-200 text-gray-800 rounded-md mr-2 hover:bg-blue-300 cursor-pointer" onClick={() => toggleChart('pie')}>Pie</button>
            </nav>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold mb-4">Task Trends</h2>

            <div className="h-80">
            <ResponsiveContainer width="100%" height={300}>
              {chartType === 'bar' ? (
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#60a5fa" isAnimationActive={true} />
                </BarChart>
              ) : (
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                    isAnimationActive={true}
                  >
                    {data.map((entry, index) => (
                      <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              )}
            </ResponsiveContainer>


            </div>
          </div>
        </div>
      </div>


     








      
    </>
  );
};

export default Dashboard;

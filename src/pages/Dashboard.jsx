import React, { useEffect, useState } from "react";
// import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import Header from "../components/Header";

const Dashboard = () => {
  const [stats, setStats] = useState({ done: 10, pending: 2, undone: 5 });
  const [chartType, setChartType] = useState(true);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/task-stats")
//       .then(res => setStats(res.data))
//       .catch(err => console.error("Error fetching stats:", err));
//   }, []);

  const data = [
    { name: "Done", value: stats.done },
    { name: "Pending", value: stats.pending },
    { name: "Undone", value: stats.undone },
  ];

  const COLORS = ["#4ade80", "#facc15", "#f87171"];

  const toggleChart = () => {
    setChartType((prev) => (!prev));
  };

  return (
    <>
      <Header />
      <div className="w-full max-w-4xl mx-auto p-4 bg-gray-800 text-white rounded-2xl shadow-md mt-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Task Trend Overview</h2>

        <div className="flex justify-center mb-4">
          <button
            onClick={toggleChart}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all cursor-pointer"
          >
            Switch to {chartType ? "Pie" : "Bar"} Chart
          </button>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-medium mb-2 text-center">
            {chartType? "Bar Chart" : "Pie Chart"}
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            {chartType ? (
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
    </>
  );
};

export default Dashboard;

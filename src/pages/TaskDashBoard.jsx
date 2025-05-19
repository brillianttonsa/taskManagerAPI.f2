"use client"

import { useState } from "react"
import { CheckCircle, Clock, XCircle, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Mock data - replace with your actual data source
const mockData = [
  { date: "Mon", done: 5, pending: 3, undone: 2 },
  { date: "Tue", done: 7, pending: 4, undone: 1 },
  { date: "Wed", done: 6, pending: 5, undone: 3 },
  { date: "Thu", done: 9, pending: 3, undone: 2 },
  { date: "Fri", done: 12, pending: 2, undone: 1 },
  { date: "Sat", done: 8, pending: 3, undone: 0 },
  { date: "Sun", done: 10, pending: 1, undone: 1 },
]

// Calculate totals and changes
const calculateStats = (data) => {
  const current = data[data.length - 1]
  const previous = data[data.length - 2]

  return {
    done: {
      count: current.done,
      change: ((current.done - previous.done) / previous.done) * 100,
    },
    pending: {
      count: current.pending,
      change: ((current.pending - previous.pending) / previous.pending) * 100,
    },
    undone: {
      count: current.undone,
      change: ((current.undone - previous.undone) / previous.undone) * 100 || 0,
    },
  }
}

const TaskDashboard = () => {
  const [data] = useState(mockData)
  const stats = calculateStats(data)

  // Helper function to render trend icon
  const renderTrendIcon = (change) => {
    if (change > 0) return <TrendingUp className="w-4 h-4" />
    if (change < 0) return <TrendingDown className="w-4 h-4" />
    return <Minus className="w-4 h-4" />
  }

  // Helper function to determine trend color
  const getTrendColor = (change, isPositive) => {
    if (change === 0) return "text-gray-500"
    return change > 0
      ? isPositive
        ? "text-green-500"
        : "text-red-500"
      : isPositive
        ? "text-red-500"
        : "text-green-500"
  }

  return (
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
              <span className="text-2xl font-bold">{stats.done.count}</span>
            </div>
            <div className="mt-2 flex items-center">
              <span className={`flex items-center text-sm ${getTrendColor(stats.done.change, true)}`}>
                {renderTrendIcon(stats.done.change)}
                {Math.abs(stats.done.change).toFixed(1)}%
              </span>
              <span className="text-gray-500 text-sm ml-1">vs yesterday</span>
            </div>
          </div>

          {/* Pending Tasks Card */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-yellow-500 mr-2" />
                <h2 className="font-semibold">Pending Tasks</h2>
              </div>
              <span className="text-2xl font-bold">{stats.pending.count}</span>
            </div>
            <div className="mt-2 flex items-center">
              <span className={`flex items-center text-sm ${getTrendColor(stats.pending.change, false)}`}>
                {renderTrendIcon(stats.pending.change)}
                {Math.abs(stats.pending.change).toFixed(1)}%
              </span>
              <span className="text-gray-500 text-sm ml-1">vs yesterday</span>
            </div>
          </div>

          {/* Undone Tasks Card */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <XCircle className="w-6 h-6 text-red-500 mr-2" />
                <h2 className="font-semibold">Undone Tasks</h2>
              </div>
              <span className="text-2xl font-bold">{stats.undone.count}</span>
            </div>
            <div className="mt-2 flex items-center">
              <span className={`flex items-center text-sm ${getTrendColor(stats.undone.change, false)}`}>
                {renderTrendIcon(stats.undone.change)}
                {Math.abs(stats.undone.change).toFixed(1)}%
              </span>
              <span className="text-gray-500 text-sm ml-1">vs yesterday</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold mb-4">Task Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="done"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Done"
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="pending"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  name="Pending"
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="undone"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="Undone"
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDashboard

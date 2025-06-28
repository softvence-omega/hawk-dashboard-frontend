"use client";

import { User, DollarSign, TrendingUp, Calendar, Eye } from "lucide-react";
import { TiHome } from "react-icons/ti";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";
import {
  auctionTrendsData,
  bidActivityData,
  monthlyRevenueData,
  propertyStatusData,
  recentActivities,
} from "@/lib/data/HomeData";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="#">
              <Button variant="outline" size="sm" className="border-gray-300">
                View Properties
              </Button>
            </Link>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Admin
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your property auctions today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Properties
              </CardTitle>
              <TiHome className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">147</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Auctions
              </CardTitle>
              <Calendar className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">45</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$2.1M</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +23% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Avg. Property Value
              </CardTitle>
              <Eye className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$287K</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Trend Chart */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Revenue Trends
              </CardTitle>
              <CardDescription className="text-gray-600">
                Monthly revenue and property sales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyRevenueData}>
                  <defs>
                    <linearGradient
                      id="colorRevenue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #E5E7EB",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Property Status Distribution */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Property Status
              </CardTitle>
              <CardDescription className="text-gray-600">
                Distribution of property statuses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={propertyStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {propertyStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #E5E7EB",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Bid Activity Chart */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Weekly Bid Activity
              </CardTitle>
              <CardDescription className="text-gray-600">
                Accepted, rejected, and pending bids
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={bidActivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="day" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #E5E7EB",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="accepted"
                    fill="#10B981"
                    name="Accepted"
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar
                    dataKey="rejected"
                    fill="#EF4444"
                    name="Rejected"
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar
                    dataKey="pending"
                    fill="#F59E0B"
                    name="Pending"
                    radius={[2, 2, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Auction Trends */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Auction Trends
              </CardTitle>
              <CardDescription className="text-gray-600">
                Average prices and auction volume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={auctionTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#6B7280" />
                  <YAxis yAxisId="left" stroke="#6B7280" />
                  <YAxis yAxisId="right" orientation="right" stroke="#6B7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #E5E7EB",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="avgPrice"
                    stroke="#8B5CF6"
                    strokeWidth={3}
                    name="Avg Price ($)"
                    dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="totalAuctions"
                    stroke="#F59E0B"
                    strokeWidth={3}
                    name="Total Auctions"
                    dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Recent Activity
            </CardTitle>
            <CardDescription className="text-gray-600">
              Latest updates from your property auctions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.status === "pending"
                          ? "bg-yellow-500"
                          : activity.status === "active"
                          ? "bg-green-500"
                          : activity.status === "sold"
                          ? "bg-blue-500"
                          : "bg-red-500"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {activity.message}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      activity.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : activity.status === "active"
                        ? "bg-green-100 text-green-800"
                        : activity.status === "sold"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                View All Activity
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Home;

export const monthlyRevenueData = [
  { month: "Jan", revenue: 245000, properties: 12, bids: 45 },
  { month: "Feb", revenue: 312000, properties: 18, bids: 67 },
  { month: "Mar", revenue: 189000, properties: 9, bids: 34 },
  { month: "Apr", revenue: 421000, properties: 24, bids: 89 },
  { month: "May", revenue: 367000, properties: 21, bids: 76 },
  { month: "Jun", revenue: 298000, properties: 16, bids: 58 },
];

export const propertyStatusData = [
  { name: "Active", value: 45, color: "#10B981" },
  { name: "Reviewed", value: 23, color: "#F59E0B" },
  { name: "Sold", value: 67, color: "#3B82F6" },
  { name: "Pending", value: 12, color: "#8B5CF6" },
];

export const bidActivityData = [
  { day: "Mon", accepted: 12, rejected: 8, pending: 5 },
  { day: "Tue", accepted: 15, rejected: 6, pending: 9 },
  { day: "Wed", accepted: 8, rejected: 12, pending: 7 },
  { day: "Thu", accepted: 18, rejected: 4, pending: 11 },
  { day: "Fri", accepted: 22, rejected: 9, pending: 6 },
  { day: "Sat", accepted: 16, rejected: 7, pending: 8 },
  { day: "Sun", accepted: 11, rejected: 5, pending: 4 },
];

export const auctionTrendsData = [
  { month: "Jan", avgPrice: 265000, totalAuctions: 28 },
  { month: "Feb", avgPrice: 289000, totalAuctions: 34 },
  { month: "Mar", avgPrice: 245000, totalAuctions: 22 },
  { month: "Apr", avgPrice: 312000, totalAuctions: 41 },
  { month: "May", avgPrice: 298000, totalAuctions: 38 },
  { month: "Jun", avgPrice: 276000, totalAuctions: 31 },
];

export const recentActivities = [
  {
    id: 1,
    type: "bid",
    message: "New bid of $285,000 on 333 Willow Way, Chandler",
    time: "2 minutes ago",
    status: "pending",
  },
  {
    id: 2,
    type: "property",
    message: "Property added: 456 Oak Ave, Scottsdale",
    time: "15 minutes ago",
    status: "active",
  },
  {
    id: 3,
    type: "auction",
    message: "Auction completed for 789 Pine St, Phoenix",
    time: "1 hour ago",
    status: "sold",
  },
  {
    id: 4,
    type: "bid",
    message: "Bid rejected for 123 Main St, Tempe",
    time: "2 hours ago",
    status: "rejected",
  },
];

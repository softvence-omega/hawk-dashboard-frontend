import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BidData {
  id: string;
  address: string;
  submittedBy: string;
  submittedTime: string;
  submittedBid: number;
  aiOffer: number;
  variance: number;
  aiArv: number;
  potentialProfit: number;
  estRehabCost: number;
  potentialRoi: number;
}

interface ApprovalHistoryData {
  id: string;
  address: string;
  submittedBid: number;
  finalStatus: "Approved" | "Rejected";
  decidedBy: string;
  decisionDate: string;
  rejectionReason?: string;
}

const BidApproval = () => {
  const [activeTab, setActiveTab] = useState<"pending" | "history">("pending");

  const [pendingBids] = useState<BidData[]>([
    {
      id: "1",
      address: "123 W Main St, Phoenix, AZ 85001",
      submittedBy: "admin@azdealhub.com",
      submittedTime: "31 minutes ago",
      submittedBid: 285000,
      aiOffer: 262500,
      variance: 22500,
      aiArv: 410000,
      potentialProfit: 80000,
      estRehabCost: 45000,
      potentialRoi: 24.2,
    },
    {
      id: "2",
      address: "789 E Pine Ln, Scottsdale, AZ 85251",
      submittedBy: "assistant@azdealhub.com",
      submittedTime: "2 hours ago",
      submittedBid: 680000,
      aiOffer: 675000,
      variance: 5000,
      aiArv: 950000,
      potentialProfit: 190000,
      estRehabCost: 80000,
      potentialRoi: 25.0,
    },
    {
      id: "3",
      address: "789 E Pine Ln, Scottsdale, AZ 85251",
      submittedBy: "assistant@azdealhub.com",
      submittedTime: "2 hours ago",
      submittedBid: 680000,
      aiOffer: 675000,
      variance: 5000,
      aiArv: 950000,
      potentialProfit: 190000,
      estRehabCost: 80000,
      potentialRoi: 25.0,
    },
  ]);

  const [approvalHistory] = useState<ApprovalHistoryData[]>([
    {
      id: "1",
      address: "888 Grand Ave, Phoenix, AZ",
      submittedBid: 310000,
      finalStatus: "Approved",
      decidedBy: "admin@azdealhub.com",
      decisionDate: "25/06/2025, 10:50:36",
    },
    {
      id: "2",
      address: "777 Rural Rd, Tempe, AZ",
      submittedBid: 250000,
      finalStatus: "Rejected",
      decidedBy: "admin@azdealhub.com",
      decisionDate: "24/06/2025, 10:50:36",
      rejectionReason: "Bid was too high relative to ARV.",
    },
    {
      id: "3",
      address: "666 Gilbert Rd, Gilbert, AZ",
      submittedBid: 450000,
      finalStatus: "Approved",
      decidedBy: "assistant@azdealhub.com",
      decisionDate: "23/06/2025, 10:50:36",
    },
  ]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="p-6  mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Bid Approvals</h1>

      {/* Custom Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab("pending")}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === "pending"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span>Pending Review</span>
              <Badge
                variant="secondary"
                className="bg-gray-100 text-gray-600 text-xs"
              >
                {pendingBids.length}
              </Badge>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === "history"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Approval History
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "pending" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pendingBids.map((bid) => (
            <div
              key={bid.id}
              className="bg-white border border-gray-200 rounded-2xl shadow transition-all hover:shadow-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {bid.address}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Submitted {bid.submittedTime} by{" "}
                    <span className="font-medium text-gray-700">
                      {bid.submittedBy}
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-5">
                <div>
                  <p className="text-xs text-gray-500 mb-1">SUBMITTED BID</p>
                  <p className="text-lg font-bold text-blue-600">
                    {formatCurrency(bid.submittedBid)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">AI 75% OFFER</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatCurrency(bid.aiOffer)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">VARIANCE</p>
                  <p className="text-lg font-semibold text-red-500">
                    +{formatCurrency(bid.variance)}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Left Column */}
                <div className="grid gap-3 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 uppercase">
                      AI ARV
                    </span>
                    <span className="text-base font-semibold text-gray-800">
                      {formatCurrency(bid.aiArv)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 uppercase">
                      Potential Profit
                    </span>
                    <span className="text-base font-semibold text-green-600">
                      {formatCurrency(bid.potentialProfit)}
                    </span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="grid gap-3 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 uppercase">
                      Est. Rehab Cost
                    </span>
                    <span className="text-base font-semibold text-gray-800">
                      {formatCurrency(bid.estRehabCost)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 uppercase">
                      Potential ROI
                    </span>
                    <span className="text-base font-semibold text-indigo-600">
                      {formatPercentage(bid.potentialRoi)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 flex justify-end space-x-3">
                <Button
                  variant="outline"
                  className="text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700"
                >
                  Reject
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Approve Bid
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "history" && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Property Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted Bid
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Final Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Decided By
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Decision Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rejection Reason
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {approvalHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.address}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(item.submittedBid)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        variant={
                          item.finalStatus === "Approved"
                            ? "default"
                            : "destructive"
                        }
                        className={
                          item.finalStatus === "Approved"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                        }
                      >
                        {item.finalStatus}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.decidedBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.decisionDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.rejectionReason || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BidApproval;

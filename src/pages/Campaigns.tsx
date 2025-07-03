import React from "react";
import { MoreHorizontal } from "lucide-react";

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      name: "Q4 Free Trial - Urgency Angle",
      status: "Active",
      statusColor: "bg-green-500",
      targetSegment: "Leads who abandoned checkout",
      channel: "SMS",
      offer: "Free Trial",
      leads: { current: 75, total: 250 },
      messagesSent: 182,
      engagement: {
        replies: "15.0%",
        ctaClicks: "$22.0%",
        signups: "8 (3.2%)",
      },
      trendData: [20, 35, 45, 40, 50, 55, 48, 52],
    },
    {
      id: 2,
      name: "Win-Back Email Sequence",
      status: "Paused",
      statusColor: "bg-yellow-500",
      targetSegment: "Anxiety-Prone Leads",
      channel: "Email",
      offer: "$1.95 Trial",
      leads: { current: 150, total: 500 },
      messagesSent: 450,
      engagement: {
        opens: "45.0%",
        ctaClicks: "$11.0%",
        signups: "12 (2.7%)",
      },
      trendData: [60, 45, 35, 30, 25, 35, 40, 42],
    },
    {
      id: 3,
      name: "Q3 Summer Sale",
      status: "Completed",
      statusColor: "bg-gray-500",
      targetSegment: "All New Apollo Leads",
      channel: "SMS + Email",
      offer: "Discounted Bundle",
      leads: { current: 1000, total: 1000 },
      messagesSent: 2500,
      engagement: {
        opens: "60.0%",
        ctaClicks: "$18.0%",
        signups: "54 (5.4%)",
      },
      trendData: [30, 45, 55, 60, 65, 58, 52, 50],
    },
    {
      id: 4,
      name: "New Year Kickstart",
      status: "Draft",
      statusColor: "bg-gray-400",
      targetSegment: "Unconverted Trials",
      channel: "SMS",
      offer: "Free Trial",
      leads: { current: 0, total: 400 },
      messagesSent: 0,
      engagement: {
        replies: "0.0%",
        ctaClicks: "$0.0%",
        signups: "0 (0.0%)",
      },
      trendData: [0, 0, 0, 0, 0, 0, 0, 0],
    },
  ];

  interface CampaignEngagement {
    replies?: string;
    opens?: string;
    ctaClicks: string;
    signups: string;
  }

  interface CampaignLeads {
    current: number;
    total: number;
  }

  interface Campaign {
    id: number;
    name: string;
    status: string;
    statusColor: string;
    targetSegment: string;
    channel: string;
    offer: string;
    leads: CampaignLeads;
    messagesSent: number;
    engagement: CampaignEngagement;
    trendData: number[];
  }

  const renderMiniChart = (data: number[]): React.ReactElement => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    const points = data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * 100;
        const y = 100 - ((value - min) / range) * 100;
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <svg width="120" height="40" className="text-blue-500">
        <polyline
          points={points}
          fill="none"
          stroke="currentColor" 
          strokeWidth="2"
          className="drop-shadow-sm"
        />
      </svg>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 leading-tight">
            AI Campaign Management
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base lg:text-lg whitespace-nowrap self-start sm:self-auto">
            Launch New Campaign
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Campaign Name & Status
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Target Segment
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Channel & Offer
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Progress & Volume
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Engagement Funnel
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Performance Trend (7D)
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div
                          className={`w-2 h-2 rounded-full mr-3 ${campaign.statusColor}`}
                        ></div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 mb-1">
                            {campaign.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {campaign.status}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">
                        {campaign.targetSegment}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900 mb-1">
                        Channel: {campaign.channel}
                      </div>
                      <div className="text-sm text-gray-500">
                        Offer: {campaign.offer}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900 mb-1">
                        Leads: {campaign.leads.current} / {campaign.leads.total}
                      </div>
                      <div className="text-sm text-gray-500">
                        Messages Sent: {campaign.messagesSent}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        {campaign.engagement.replies && (
                          <div className="text-sm text-gray-900">
                            Replies: {campaign.engagement.replies}
                          </div>
                        )}
                        {campaign.engagement.opens && (
                          <div className="text-sm text-gray-900">
                            Opens: {campaign.engagement.opens}
                          </div>
                        )}
                        <div className="text-sm text-gray-900">
                          CTA Clicks: {campaign.engagement.ctaClicks}
                        </div>
                        <div className="text-sm text-gray-500">
                          Signups (CVR): {campaign.engagement.signups}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        {renderMiniChart(campaign.trendData)}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;

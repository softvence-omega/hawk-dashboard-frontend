import { useState } from "react";

const Leads = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [campaignFilter, setCampaignFilter] = useState("All");
  const [emotionFilter, setEmotionFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");

  const leads = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      status: "Replied",
      statusColor: "text-orange-600",
      statusBg: "bg-orange-50",
      lastContacted: "3 hours ago",
      source: "Apollo API",
      campaign: "Q4 Free Trial - Urgency Angle",
      emotion: "Anxiety",
      offer: "$1.95 Trial",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.smith@example.com",
      status: "Converted",
      statusColor: "text-green-600",
      statusBg: "bg-green-50",
      lastContacted: "1 days ago",
      source: "CSV Import",
      campaign: "Win-Back Email Sequence",
      emotion: "Curiosity",
      offer: "Discounted Bundle",
    },
    {
      id: 3,
      name: "Emily White",
      email: "emily.w@example.com",
      status: "New",
      statusColor: "text-blue-600",
      statusBg: "bg-blue-50",
      lastContacted: "Never",
      source: "Manual Entry",
      campaign: "None",
      emotion: "",
      offer: "",
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael.b@example.com",
      status: "Contacted",
      statusColor: "text-blue-600",
      statusBg: "bg-blue-50",
      lastContacted: "5 days ago",
      source: "Apollo API",
      campaign: "Q3 Summer Sale",
      emotion: "Fatigue",
      offer: "$1.95 Trial",
    },
    {
      id: 5,
      name: "Sarah Green",
      email: "sarah.g@example.com",
      status: "Unsubscribed",
      statusColor: "text-red-600",
      statusBg: "bg-red-50",
      lastContacted: "7 days ago",
      source: "CSV Import",
      campaign: "Q3 Summer Sale",
      emotion: "Urgency",
      offer: "Free Trial",
    },
    {
      id: 6,
      name: "David Black",
      email: "david.b@example.com",
      status: "Do Not Contact",
      statusColor: "text-red-600",
      statusBg: "bg-red-50",
      lastContacted: "1 months ago",
      source: "Manual Entry",
      campaign: "None",
      emotion: "Negative",
      offer: "",
    },
  ];

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("All");
    setCampaignFilter("All");
    setEmotionFilter("All");
    setDateFilter("");
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || lead.status === statusFilter;
    const matchesCampaign =
      campaignFilter === "All" || lead.campaign === campaignFilter;
    const matchesEmotion =
      emotionFilter === "All" || lead.emotion === emotionFilter;

    return matchesSearch && matchesStatus && matchesCampaign && matchesEmotion;
  });

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className=" mx-auto">
        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-end">
            {/* Search Input */}
            <div className="flex-1 min-w-64">
              <input
                type="text"
                placeholder="Search by Name, Email, or Phone"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div className="min-w-32">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">Status: All</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Replied">Replied</option>
                <option value="Converted">Converted</option>
                <option value="Unsubscribed">Unsubscribed</option>
                <option value="Do Not Contact">Do Not Contact</option>
              </select>
            </div>

            {/* Campaign Filter */}
            <div className="min-w-32">
              <select
                value={campaignFilter}
                onChange={(e) => setCampaignFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">Campaign: All</option>
                <option value="Q4 Free Trial - Urgency Angle">
                  Q4 Free Trial - Urgency Angle
                </option>
                <option value="Win-Back Email Sequence">
                  Win-Back Email Sequence
                </option>
                <option value="Q3 Summer Sale">Q3 Summer Sale</option>
                <option value="None">None</option>
              </select>
            </div>

            {/* AI Emotion Filter */}
            <div className="min-w-32">
              <select
                value={emotionFilter}
                onChange={(e) => setEmotionFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">AI Emotion: All</option>
                <option value="Anxiety">Anxiety</option>
                <option value="Curiosity">Curiosity</option>
                <option value="Fatigue">Fatigue</option>
                <option value="Urgency">Urgency</option>
                <option value="Negative">Negative</option>
              </select>
            </div>

            {/* Date Filter */}
            <div className="min-w-40">
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  /* Apply filters logic */
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Lead Info
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Last Contacted
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Assigned Campaign
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    AI Profile
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {lead.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {lead.email}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${lead.statusBg} ${lead.statusColor}`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">
                        {lead.lastContacted}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">{lead.source}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">
                        {lead.campaign}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-500">
                        {lead.emotion && (
                          <div className="mb-1">Emotion: {lead.emotion}</div>
                        )}
                        {lead.offer && <div>Offer: {lead.offer}</div>}
                      </div>
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

export default Leads;

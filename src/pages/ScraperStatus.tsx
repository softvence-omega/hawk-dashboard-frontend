import { Play, FileText } from "lucide-react";

const ScraperStatus = () => {
  const scrapers = [
    {
      id: 1,
      name: "BuyAZForeclosures",
      url: "https://portal.buyazforeclosures.com/borrower/auction",
      status: "success",
      lastRun: "28/06/2025, 10:46:36",
      found: "12 New, 5 Updated",
      duration: "45.2s",
      frequency: "Every 5 minutes (M-F, 8am-4pm)",
      nextRun: "-",
    },
    {
      id: 2,
      name: "Tiffany & Bosco, P.A.",
      url: "https://fs.tblaw.com",
      status: "error",
      lastRun: "28/06/2025, 02:50:36",
      found: "0 New, 0 Updated",
      duration: "12.5s",
      frequency: "Daily at 2:00 AM",
      nextRun: "In 13h 47m 30s",
    },
    {
      id: 3,
      name: "Maricopa County Recorder",
      url: "https://recorder.maricopa.gov/recdocdata/",
      status: "running",
      lastRun: "28/06/2025, 10:34:36",
      found: "3 New, 21 Updated",
      duration: "92.1s",
      frequency: "Every 15 minutes",
      nextRun: "-",
    },
    {
      id: 4,
      name: "Old Republic Title",
      url: "https://www.oldrepublictitle.com/az-trustee-sales",
      status: "idle",
      lastRun: "25/06/2025, 10:50:36",
      found: "88 New, 12 Updated",
      duration: "125.8s",
      frequency: "Weekly on Mondays at 5 AM",
      nextRun: "30/06/2025",
    },
  ];

  interface Scraper {
    id: number;
    name: string;
    url: string;
    status: "success" | "error" | "running" | "idle" | string;
    lastRun: string;
    found: string;
    duration: string;
    frequency: string;
    nextRun: string;
  }

  const getStatusColor = (status: Scraper["status"]): string => {
    switch (status) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "running":
        return "bg-blue-500";
      case "idle":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 leading-tight">
            Scraper Status & Monitoring
          </h1>
          <div className="bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 rounded-full text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap self-start sm:self-auto">
            1 Scraper(s) Failing
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Source Name
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Last Run Result
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Frequency
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Next Scheduled Run
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {scrapers.map((scraper) => (
                  <tr key={scraper.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div
                          className={`w-3 h-3 rounded-full mr-3 ${getStatusColor(
                            scraper.status
                          )}`}
                        ></div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {scraper.name}
                          </div>
                          <div className="text-sm text-blue-600 hover:text-blue-800">
                            {scraper.url}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">
                        {scraper.lastRun}
                      </div>
                      <div className="text-sm text-gray-500">
                        Found: {scraper.found}
                      </div>
                      <div className="text-sm text-gray-500">
                        Duration: {scraper.duration}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">
                        {scraper.frequency}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">
                        {scraper.nextRun}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                          <Play className="w-4 h-4 mr-1" />
                          Run Now
                        </button>
                        <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                          <FileText className="w-4 h-4 mr-1" />
                          View Log
                        </button>
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

export default ScraperStatus;

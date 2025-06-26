"use client";

import { ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams } from "react-router-dom";
import { propertyDetailData } from "@/lib/data/propertyData";

// Mock data - in a real app, this would come from an API

// interface PropertyDetailProps {
//   propertyId: string;
// }

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = propertyDetailData[id ?? "1"] || propertyDetailData["1"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="font-semibold text-gray-900">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <Link to="/property">
            <Button variant="ghost" size="sm" className="p-1">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <h1 className="text-lg font-medium text-gray-900">
            {property.address}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Bids Management */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                BIDS MANAGEMENT
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">
                      Full Address
                    </label>
                    <div className="text-sm font-medium text-gray-900">
                      {property.address}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">City</label>
                    <div className="text-sm font-medium text-gray-900">
                      {property.city}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">Auction</label>
                    <div className="text-sm font-medium text-gray-900">
                      $0.00
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      Auction Date
                    </label>
                    <div className="text-sm font-medium text-gray-900">
                      {property.auctionDate}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">
                      Auction Date
                    </label>
                    <div className="text-sm font-medium text-gray-900">
                      19/10/21, 10:00 PM
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      Starting Bid
                    </label>
                    <div className="text-sm font-medium text-gray-900">
                      {property.startingBid}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Full Notes</label>
                  <div className="text-sm font-medium text-gray-900">
                    {property.fullNotes}
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Status</label>
                  <div className="mt-1">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      {property.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Estimates */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                FINANCIAL ESTIMATES (AI)
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">
                      Pre-repair Estimate
                    </label>
                    <div className="text-sm font-medium text-gray-900">
                      {property.preRepairEstimate}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">AI Estimate</label>
                    <div className="text-sm font-medium text-gray-900">
                      {property.aiEstimate}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">
                      As-is Estimate
                    </label>
                    <div className="text-sm font-medium text-gray-900">
                      {property.asIsEstimate}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      30-Day Resale
                    </label>
                    <div className="text-sm font-medium text-gray-900">
                      {property.thirtyDayResale}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Notes */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                PROPERTY NOTES
              </h2>
              <Textarea
                defaultValue={property.propertyNotes}
                className="min-h-[100px] resize-none border-gray-300"
                placeholder="Enter property notes..."
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Bids Management - Right Side */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                BIDS MANAGEMENT
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">
                    Approved Bids (1)
                  </label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          $265,000
                        </div>
                        <div className="text-xs text-gray-500">
                          Approved - 19 Feb, 9:00 AM
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">
                          Accepted
                        </Badge>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100 text-xs">
                          Rejected
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Approved Bids (1)
                  </label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          $285,000
                        </div>
                        <div className="text-xs text-gray-500">
                          Approved - 19 Feb, 9:00 AM
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">
                          Accepted
                        </Badge>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100 text-xs">
                          Rejected
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Approved Bids (1)
                  </label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          $265,000
                        </div>
                        <div className="text-xs text-gray-500">
                          Approved - 19 Feb, 9:00 AM
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">
                          Accepted
                        </Badge>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100 text-xs">
                          Rejected
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Communication & System Log */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                COMMUNICATION & SYSTEM LOG
              </h2>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                View Log (3)
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyDetails;

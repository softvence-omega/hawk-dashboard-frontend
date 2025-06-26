import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { propertyData } from "@/lib/data/propertyData";
import { Link } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import PropertyModal from "@/components/Property/PropertyModal";

const PropertyListing = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <header className="bg-white dark:bg-primary-dark border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 dark:text-white">
              Admin Dashboard
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Title and Add Button */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Property Listings
          </h1>
          {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Property
          </Button> */}
          <PropertyModal />
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search Properties..."
              className="pl-10 bg-white border-gray-300"
            />
          </div>
          <Select defaultValue="all-statuses">
            <SelectTrigger className="w-48 bg-white border-gray-300">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-statuses">All statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="reviewed">Reviewed</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-agents">
            <SelectTrigger className="w-48 bg-white border-gray-300">
              <SelectValue placeholder="Filter by Agent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-agents">All agents</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 dark:bg-[#0f1527] dark:text-white font-bold">
                <TableHead>ADDRESS</TableHead>
                <TableHead>DATE & TIME</TableHead>
                <TableHead>OPENING BID</TableHead>
                <TableHead>BIDS</TableHead>
                <TableHead>PROPERTY NOTE</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>LOG</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {propertyData.map((property) => (
                <TableRow
                  key={property.id}
                  className="border-b border-gray-100 dark:border-gray-800"
                >
                  <TableCell className="py-4">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {property.address}
                      </div>
                      <div className="text-sm text-gray-400">
                        {property.agent}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div>
                      <div className="text-gray-900 dark:text-white">
                        {property.date}
                      </div>
                      <div className="text-sm text-gray-500">
                        {property.time}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-blue-600 font-medium">
                      {property.openingBid}
                    </span>
                  </TableCell>
                  <TableCell className="py-4">
                    {property.buyPrice && (
                      <div className="flex flex-col gap-1 bg-[#F59E0B0F] border border-gray-200 rounded-xl p-3">
                        <span className="text-red-600 font-medium">
                          {property.buyPrice}
                        </span>
                        <div className="flex gap-1 ">
                          <Badge className="bg-green-300 text-green-800 hover:bg-green-200 text-xs px-2 py-1 cursor-pointer ">
                            Approve
                          </Badge>
                          <Badge className="bg-red-300 text-red-800 hover:bg-red-200 text-xs px-2 py-1 cursor-pointer">
                            Reject
                          </Badge>
                        </div>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="py-4 max-w-xs">
                    <Textarea className="text-gray-700 dark:text-gray-400 text-sm resize-none">
                      {property.propertyNote}
                    </Textarea>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge
                      variant={
                        property.status === "Active" ? "default" : "secondary"
                      }
                      className={
                        property.status === "Active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                      }
                    >
                      {property.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <Link to={`/property/${property.id}`}>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1"
                      >
                        View Log In
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default PropertyListing;

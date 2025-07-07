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
import { FaFilePdf } from "react-icons/fa6";

const PropertyListing = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <header className="bg-white dark:bg-primary-dark border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 dark:text-white">
              Admin Dashboard
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 sm:p-6">
        {/* Title and Add Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            Property Listings
          </h1>
          <PropertyModal />
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
          <div className="relative w-full sm:flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search Properties..."
              className="pl-10 bg-white border-gray-300 w-full"
            />
          </div>
          <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4 w-full sm:w-auto">
            <Select defaultValue="all-statuses">
              <SelectTrigger className="w-full sm:w-48 bg-white border-gray-300">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-statuses">All statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-agents">
              <SelectTrigger className="w-full sm:w-48 bg-white border-gray-300">
                <SelectValue placeholder="Filter by Agent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-agents">All agents</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="min-w-[1024px] lg:min-w-full">
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-[#0f1527] dark:text-white font-bold">
                  <TableHead className="whitespace-nowrap">ADDRESS</TableHead>
                  <TableHead className="whitespace-nowrap">City</TableHead>
                  <TableHead className="whitespace-nowrap">OP. BID</TableHead>
                  <TableHead className="whitespace-nowrap">ARV</TableHead>
                  <TableHead className="whitespace-nowrap">Equity</TableHead>
                  <TableHead className="whitespace-nowrap">Bids</TableHead>

                  {/* <TableHead className="whitespace-nowrap">BIDS</TableHead> */}
                  <TableHead className="whitespace-nowrap">
                    PROPERTY NOTE
                  </TableHead>
                  <TableHead className="whitespace-nowrap">
                    Countdowns
                  </TableHead>
                  <TableHead className="whitespace-nowrap">STATUS</TableHead>
                  <TableHead className="whitespace-nowrap">LOG</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {propertyData.map((property) => (
                  <TableRow
                    key={property.id}
                    className="border-b border-gray-100 dark:border-gray-800"
                  >
                    <TableCell className="py-4 whitespace-nowrap">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {property.address}
                        </div>
                        <div className="text-sm text-gray-400">
                          {property.agent}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 whitespace-nowrap">
                      {/* <div>
                        <div className="text-gray-900 dark:text-white">
                          {property.date}
                        </div>
                        <div className="text-sm text-gray-500">
                          {property.time}
                        </div>
                      </div> */}
                      {property.city}
                    </TableCell>
                    <TableCell className="py-4 whitespace-nowrap">
                      <p className="text-blue-600 font-medium">
                        {property.openingBid}
                      </p>
                      <div>
                        <p className="text-gray-500">AS - is: $350,000.00</p>
                        <p className="text-gray-500">ARV: $350,000.00</p>
                        <p className="text-gray-500">
                          Lien Position:{" "}
                          <span className="text-black font-bold">First</span>
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 whitespace-nowrap">
                      <span className=" font-medium">{property.ARV}</span>
                    </TableCell>
                    <TableCell className="py-4 whitespace-nowrap ">
                      <span className=" font-medium bg-[#25a587] rounded-xs text-white p-1">
                        {property.equity}
                      </span>
                    </TableCell>
                    <TableCell className="py-4 whitespace-nowrap">
                      {property.buyPrice && (
                        <div className="flex flex-col gap-1 bg-[#F59E0B0F] border border-gray-200 rounded-xl p-3">
                          <span className="text-red-600 font-medium">
                            {property.buyPrice}
                          </span>
                          <div className="flex gap-1">
                            <Badge className="bg-green-300 text-green-800 hover:bg-green-200 text-xs px-2 py-1 cursor-pointer">
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
                      <Textarea
                        className="text-gray-700 dark:text-gray-400 text-sm resize-none"
                        readOnly
                        value={property.propertyNote}
                      />
                      <p className="flex justify-end items-center mt-2 me-2">
                        Title Report:
                        <span className="ml-2 cursor-pointer">
                          <FaFilePdf className="text-red-500 text-lg" />
                        </span>
                      </p>
                    </TableCell>
                    <TableCell className="text-center whitespace-nowrap">
                      {property.CountDowns === "Ends In" ? (
                        <span className="bg-[#2233d3] text-white px-2 py-1 rounded-md font-medium">
                          {property.CountDowns}
                        </span>
                      ) : (
                        <span className="text-green-600 font-medium">
                          {property.CountDowns}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="py-4 whitespace-nowrap">
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
                    <TableCell className="py-4 whitespace-nowrap">
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
        </div>
      </main>
    </div>
  );
};

export default PropertyListing;

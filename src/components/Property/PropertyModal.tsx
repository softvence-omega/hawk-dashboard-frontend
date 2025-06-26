"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";
import type { PropertyFormData } from "@/types/propertyType";
import GradientButton from "../ui/GradientButton";

const PropertyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,

    formState: { errors, isSubmitting },
  } = useForm<PropertyFormData>({
    defaultValues: {
      status: "Active",
      auctionTime: "10:00 AM",
    },
  });

  const onSubmit = async (data: PropertyFormData) => {
    console.log("Form Data:", data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Close modal and reset form
    setIsOpen(false);
    toast("Property added successfully");
    reset();
  };

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <GradientButton className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Property
        </GradientButton>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Add New Property
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Property Address Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Property Address
            </h3>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-700"
                >
                  Street Address *
                </Label>
                <Input
                  id="address"
                  {...register("address", { required: "Address is required" })}
                  placeholder="e.g., 333 Willow Way"
                  className="mt-1 bg-white border-gray-300"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label
                  htmlFor="city"
                  className="text-sm font-medium text-gray-700"
                >
                  City *
                </Label>
                <Input
                  id="city"
                  {...register("city", { required: "City is required" })}
                  placeholder="e.g., Chandler"
                  className="mt-1 bg-white border-gray-300"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="state"
                  className="text-sm font-medium text-gray-700"
                >
                  State *
                </Label>
                <Input
                  id="state"
                  {...register("state", { required: "State is required" })}
                  placeholder="e.g., AZ"
                  className="mt-1 bg-white border-gray-300"
                />
                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.state.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="zipCode"
                  className="text-sm font-medium text-gray-700"
                >
                  Zip Code *
                </Label>
                <Input
                  id="zipCode"
                  {...register("zipCode", { required: "Zip code is required" })}
                  placeholder="e.g., 85224"
                  className="mt-1 bg-white border-gray-300"
                />
                {errors.zipCode && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Auction Details Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Auction Details
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="auctionDate"
                  className="text-sm font-medium text-gray-700"
                >
                  Auction Date *
                </Label>
                <Input
                  id="auctionDate"
                  type="date"
                  {...register("auctionDate", {
                    required: "Auction date is required",
                  })}
                  className="mt-1 bg-white border-gray-300"
                />
                {errors.auctionDate && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.auctionDate.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="auctionTime"
                  className="text-sm font-medium text-gray-700"
                >
                  Auction Time *
                </Label>
                <Select
                  onValueChange={(value) => setValue("auctionTime", value)}
                  defaultValue="10:00 AM"
                >
                  <SelectTrigger className="mt-1 bg-white border-gray-300">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                    <SelectItem value="9:30 AM">9:30 AM</SelectItem>
                    <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                    <SelectItem value="10:30 AM">10:30 AM</SelectItem>
                    <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                    <SelectItem value="11:30 AM">11:30 AM</SelectItem>
                    <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                    <SelectItem value="12:30 PM">12:30 PM</SelectItem>
                    <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                    <SelectItem value="1:30 PM">1:30 PM</SelectItem>
                    <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                    <SelectItem value="2:30 PM">2:30 PM</SelectItem>
                    <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                    <SelectItem value="3:30 PM">3:30 PM</SelectItem>
                    <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Financial Details Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Financial Details
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="openingBid"
                  className="text-sm font-medium text-gray-700"
                >
                  Opening Bid *
                </Label>
                <Input
                  id="openingBid"
                  {...register("openingBid", {
                    required: "Opening bid is required",
                  })}
                  placeholder="e.g., $265,000"
                  className="mt-1 bg-white border-gray-300"
                />
                {errors.openingBid && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.openingBid.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="buyPrice"
                  className="text-sm font-medium text-gray-700"
                >
                  Buy Price (Optional)
                </Label>
                <Input
                  id="buyPrice"
                  {...register("buyPrice")}
                  placeholder="e.g., $284,000"
                  className="mt-1 bg-white border-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Property Information Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Property Information
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="status"
                  className="text-sm font-medium text-gray-700"
                >
                  Status *
                </Label>
                <Select
                  onValueChange={(value) => setValue("status", value)}
                  defaultValue="Active"
                >
                  <SelectTrigger className="mt-1 bg-white border-gray-300">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Reviewed">Reviewed</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Sold">Sold</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="agent"
                  className="text-sm font-medium text-gray-700"
                >
                  Agent/Zip Reference *
                </Label>
                <Input
                  id="agent"
                  {...register("agent", {
                    required: "Agent reference is required",
                  })}
                  placeholder="e.g., Zip: 85224"
                  className="mt-1 bg-white border-gray-300"
                />
                {errors.agent && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.agent.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label
                htmlFor="propertyNote"
                className="text-sm font-medium text-gray-700"
              >
                Property Notes *
              </Label>
              <Textarea
                id="propertyNote"
                {...register("propertyNote", {
                  required: "Property notes are required",
                })}
                placeholder="e.g., Great potential needs kitchen remodel"
                className="mt-1 bg-white border-gray-300 min-h-[100px] resize-none"
              />
              {errors.propertyNote && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.propertyNote.message}
                </p>
              )}
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="px-6 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-6 bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isSubmitting ? "Adding Property..." : "Add Property"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyModal;

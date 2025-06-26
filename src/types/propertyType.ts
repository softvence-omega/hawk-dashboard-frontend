export interface PropertyDetail {
  address: string;
  city: string;
  auctionDate: string;
  startingBid: string;
  fullNotes: string;
  status: string;
  preRepairEstimate: string;
  aiEstimate: string;
  asIsEstimate: string;
  thirtyDayResale: string;
  propertyNotes: string;
  bids: { id: number; amount: string; status: string; type: string }[];
}

export interface PropertyFormData {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  auctionDate: string;
  auctionTime: string;
  openingBid: string;
  buyPrice?: string;
  propertyNote: string;
  status: string;
  agent: string;
}

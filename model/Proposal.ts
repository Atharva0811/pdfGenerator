import mongoose from "mongoose";

const ProposalSchema = new mongoose.Schema({
  proposalType: {
    type: String,
    required: true,
    enum: ["LeadGenX", "AdGenX", "PropGenX", "HealthGenX", "LeadTitanX"],
  },
  companyName: {
    type: String,
    required: true,
  },
  spocName: {
    type: String,
    required: true,
  },
  audiencePersona: {
    type: String,
    required: true,
    enum: ["Individuals", "Businesses", "Students"],
  },
  website: {
    type: String,
    required: true,
  },
  googleAdsStatus: {
    type: String,
    required: true,
    enum: [
      "Never tried Google Ads",
      "Currently doing Ads",
      "Tried but stopped due to poor results",
    ],
  },
  products: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  proposalDate: {
    type: Date,
    required: true,
  },
  validityDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.proposals ||
  mongoose.model("proposals", ProposalSchema);

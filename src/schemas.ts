import { z } from "zod";
export const schema = z.object({
  proposalType: z.string().min(1, "Proposal type is required"),
  companyName: z.string().min(1, "Company Name is required"),
  spocName: z.string().min(1, "SPOC Name is required"),
  audiencePersona: z.string().min(1, "Select an audience persona"),
  products: z.string().min(1, "Products field is required"),
  location: z.string().min(1, "Location is required"),
  website: z.string().url("Enter a valid URL"),
  googleAdsStatus: z.string().min(1, "Select Google Ads status"),
  proposalDate: z.string().min(1, "Proposal Date is required"),
  validityDate: z.string().min(1, "Date of Validity is required"),
});

// export type ProposalDataType = {
//   _id?: string;
//   proposalType: "leadgenx" | "leadtitanx" | "healthgenx" | "propgenx" | "adgenx" | string;
//   companyName: string;
//   spocName: string;
//   audiencePersona: "individuals" | "businesses" | "students" | string;
//   website: string;
//   googleAdsStatus:
//   | "Never tried Google Ads"
//   | "Currently doing Ads"
//   | "Tried but stopped due to poor results"
//   | string;
//   products: string;
//   location: string;
//   proposalDate: string | Date;
//   validityDate: string | Date;
// };

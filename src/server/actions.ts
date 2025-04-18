"use server";

import connectDB from "../../lib/mongoConnect";
import Proposal from "../../model/Proposal";

export async function getAllProposals() {
  await connectDB();
  const res = await Proposal.find();
  return JSON.stringify(res);
}

export async function deleteProposalById(id: string) {
  await fetch(`http://localhost:3000/api/proposals/${id}`, {
    method: "DELETE",
  });
  // revalidatePath("/")
}

export async function addProposal(data: any) {
  const resp = await fetch("http://localhost:3000/api/proposals", {
    method: "POST",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await resp.json();
}

export async function updateData(data: any) {
  await fetch(`http://localhost:3000/api/proposals/${data._id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
}

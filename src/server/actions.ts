"use server";

import { revalidatePath } from "next/cache";

export async function getAllProposals() {
  const resp = await fetch("http://localhost:3000/api/proposals");
  const data = (await resp.json()).reverse()
  return data
}

export async function deleteProposalById(id: string) {
  await fetch(`http://localhost:3000/api/proposals/${id}`, {
    method: "DELETE"
  })
  // revalidatePath("/")
}

export async function addProposal(data: any) {
  const resp = await fetch("http://localhost:3000/api/proposals", {
    method: "POST",
    body: JSON.stringify({
      ...data
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return await resp.json();
}

export async function updateData(data: any) {
  await fetch(
    `http://localhost:3000/api/proposals/${data._id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  );
}

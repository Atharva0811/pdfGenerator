import { NextRequest, NextResponse } from "next/server";
import Proposal from "../../../../../model/Proposal";
import connectDB from "../../../../../lib/mongoConnect";

interface Params {
  params: { id: string };
}

export async function GET(_req: NextRequest, { params }: Params) {
  await connectDB();
  const { id } = params;
  const data = await Proposal.findById(id);

  if (!data) {
    return NextResponse.json({ error: "Proposal not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const { id } = await params;
  const data = await Proposal.findByIdAndDelete(id);

  if (!data) {
    return NextResponse.json({ error: "Proposal not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Proposal deleted successfully" });
}
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();
    const updatedProposal = await Proposal.findByIdAndUpdate(id, body);

    return NextResponse.json({
      message: "Proposal updated successfully",
      proposal: updatedProposal,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating proposal", error },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../lib/mongoConnect";
import Proposal from "../../../../model/Proposal";

export async function GET() {
  try {
    await connectDB();
    const data = await Proposal.find();
   
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data", details: error.message },
      { status: 500 }
    );
  } 
}

export async function POST(req:NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const newProposal = new Proposal(body);
    console.log(body);
    await newProposal.save();
    return NextResponse.json(newProposal, { status: 201 });
  } catch (error: any) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "Failed to create proposal", details: error.message },
      { status: 500 }
    );
  }
}
"use client"
import AddForm from "../components/others/AddForm";
import ProposalList from "../components/others/ProposalList";
import { getAllProposals } from "../server/actions";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function page() {
  const [proposalsList, setProposalsList] = useState<any>(null);
  useEffect(() => {
    getAllProposals().then((res)=>{
      setProposalsList(JSON.parse(res))      
    })
  },[]);
  if(!proposalsList){
    return
  }  
  return (
    <div className="max-w-7xl mx-auto ">
      <AddForm />
      <ProposalList data={proposalsList} />
      <Toaster />
    </div>
  );
}

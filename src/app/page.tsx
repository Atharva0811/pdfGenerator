import AddForm from '../components/others/AddForm'
import ProposalList from '../components/others/ProposalList'
import { getAllProposals } from '../server/actions'
import React from 'react'
import { Toaster } from 'react-hot-toast'
async function page() {
  const proposalsList = await getAllProposals()
  return (
    <div className='max-w-7xl mx-auto '>
      <AddForm />
      <ProposalList data={proposalsList} />
      <Toaster />
    </div>
  )
}

export default page
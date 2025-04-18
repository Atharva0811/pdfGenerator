import React, { forwardRef } from 'react'
import { Logo } from '../components/pages/Logo';
type PdfPage7Props = {
    formInputs: {
        proposalType: string;
    };
};



const PdfPage7 = forwardRef<HTMLDivElement, PdfPage7Props>(({ formInputs }, ref) => {
    return (
        <div ref={ref} className="relative h-[1700px] text-xl text-neutral-900">
            <div className="absolute top-6 right-6">{(formInputs.proposalType === "PropGenX" || formInputs.proposalType === "HealthGenX") ? 6 : 7}</div>
            <div className="h-full ps-10 pe-48">
                <div className="h-full border-s ps-12">
                    <div className="pt-10">
                        <Logo />
                    </div>
                    <div className="relative mt-10 mb-24">
                        <div className="absolute top-2 -left-12 h-36 w-3 bg-gradient-to-br from-green-500 to-blue-400"></div>
                        <p className="text-3xl">{formInputs.proposalType === "LeadGenX" ? "Value Creation" : "Scope of Work"}</p>
                        <p className="text-7xl font-black">Deliverables</p>
                    </div>
                    <div className="grid gap-12">
                        <div className="flex gap-8">
                            <div className="-mt-3 text-5xl font-black text-blue-500">1</div>
                            <div>
                                <p className="mb-3 text-3xl font-bold">
                                    {formInputs.proposalType === "AdGenX"
                                        ? "Keywords & Ad-groups Data"
                                        : `FineTune ${formInputs.proposalType === "LeadGenX" ? "Google Search" : "Google's"} Setup`}
                                </p>

                                <p>
                                    {formInputs.proposalType === "AdGenX"
                                        ? "Real-time AI researched data of all keywords and ad groups where in you will get details of - Keywords, Search Volume, Competition, CPC, Low Top Of Page Bid, High Top Of Page Bid, Coverage, Reason, Is Keyword Good, Keyword Length."
                                        : "The Inaiways AI-Portal tool assists in creating an optimised and maintainable Google Ads setup. An Inaiways expert will review and help configure the customer’s Google Ads account."}
                                </p>
                            </div>

                        </div>
                        <div className="flex gap-6">
                            <div className="-mt-3 text-5xl font-black text-blue-500">2</div>
                            <div className="">
                                {
                                    formInputs.proposalType === "AdGenX" ? <p className="mb-3 text-3xl font-bold"> Ad Copies Content</p> : <p className="mb-3 text-3xl font-bold">
                                        {formInputs.proposalType === "LeadGenX" ? "BANT" : "Highly"} Qualified Lead Details
                                    </p>
                                }

                                <p>
                                    {formInputs.proposalType === "AdGenX" ? `AI researched Ad copies and Ad groups (as mentioned in Annexure) where in you will get details of - Ad groups, 15 Headlines & 4 Descriptions.` : ` For EVERY lead, get contact details, search intent, lead location (if shared by user with Google), answers to lead qualifying questions. (if submitted by the user) (see ‘Page-${formInputs.proposalType === "LeadTitanX" ? 13 : 12} of Edge Provided by AI-Portal)`}

                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="-mt-3 text-5xl font-black text-blue-500">3</div>
                            <div className="">
                                <p className="mb-3 text-3xl font-bold">
                                    {
                                        formInputs.proposalType === "AdGenX" ? "Google Ads Account Setup" : "Auto-Tune App improve targeting"
                                    }
                                </p>
                                <p>
                                    {
                                        formInputs.proposalType === "AdGenX" ? "Google ads account will be configured by expert and made sure that it is ready to be made live." : `Leads are received in real-time in the Auto-Tune App. When leads are marked good or bad in Auto-Tune, an auto-feedback goes to the Ad engine to improve targeting. (see ‘Page-${formInputs.proposalType === "LeadTitanX" ? 14 : 13} of Edge Provided by AI-Portal)`
                                    }

                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="-mt-3 text-5xl font-black text-blue-500">4</div>
                            <div className="">
                                <p className="mb-3 text-3xl font-bold">{formInputs.proposalType === "AdGenX" ? "Optimization of Google Ads Account" : "Dashboard"}</p>
                                <p>
                                    {
                                        formInputs.proposalType === "AdGenX" ? "As and when needed you can request for Optimization of Google Ads Account, this is chargeable, refer to commercials for more information." : `For tracking the real-time progress. Know which locations and keywords are performing best for you. Know the top performing search terms to understand market pulse. Get insights on demographics, psychographics, and technographics about the target audience. Important Note: Since you would know the quality of leads attracted by this setup, this data is most accurate representation of your online buyer and can help you design marketing strategies for other channels as well. (see ‘Page-${formInputs.proposalType === "LeadTitanX" ? 14 : 13} of Edge Provided by AI-Portal)`
                                    }

                                </p>
                            </div>
                        </div>
                        {
                            formInputs.proposalType !== "AdGenX" &&
                            <>
                                <div className="flex gap-6">
                                    <div className="-mt-3 text-5xl font-black text-blue-500">5</div>
                                    <div className="">
                                        <p className="mb-3 text-3xl font-bold">
                                            Omni-channel lead notification
                                        </p>
                                        <p>
                                            Real-time delivery of exclusive leads in Auto-Tune App,
                                            WhatsApp, and email give entire sales hierarchy the visibility
                                            on frequency and quality of leads generated with 100%
                                            transparency.
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    Note : Integration with CRM is not covered under the scope of this
                                    proposal
                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
)
export default PdfPage7
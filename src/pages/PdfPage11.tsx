import React from "react";
import { Logo } from "../components/pages/Logo";




const Bullet = () => {
    return <svg
        id="iesypu"
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="7"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <circle id="i2yxmf" cx="8" cy="8" r="8"></circle>
    </svg>
}

type PdfPage11Props = {
    formInputs: {
        proposalType: string;
    };
};

const PdfPage11 = React.forwardRef<HTMLDivElement, PdfPage11Props>(
    ({ formInputs }, ref) => {
        return <div ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
            <div className="absolute top-6 right-6">{(formInputs.proposalType === "AdGenX" || formInputs.proposalType === "PropGenX" || formInputs.proposalType === "HealthGenX") ? 10 : 11}</div>
            <div className="h-full px-10">
                <div className="h-full border-s ps-12">
                    <div className="pt-10">
                        <Logo/>
                    </div>
                    <div className="relative mt-10 mb-20">
                        <div className="absolute top-2 -left-12 h-36 w-3 bg-gradient-to-br from-green-500 to-blue-400"></div>
                        <p className="text-3xl">{formInputs.proposalType === "AdGenX" ? "Initiating growth journey" : "Timeline"}</p>
                        <p className="text-7xl font-black">Plan of Action</p>
                    </div>
                    {
                        formInputs.proposalType !== "AdGenX" ? <>
                            <div className="mb-20">
                                The project timeline hinges on a thorough understanding of the customer's domain, Google Ads account, and competitors, making the timely receipt of the AI Ads Setup crucial. If this info is not received on schedule, all subsequent steps will be delayed. Additionally, timely payment for Google Ads is essential; any delay in this payment will also push back the project timeline.
                            </div>
                            <div className="grid grid-cols-12 gap-5">
                                <div className="col-span-3 grid h-20 place-content-center bg-neutral-900 text-lg font-semibold text-white  ">
                                    <p>Phase</p>
                                </div>
                                <div className="col-span-3 grid h-20 place-content-center bg-neutral-900 text-lg font-semibold text-white  ">
                                    <p>Days</p>
                                </div>
                                <div className="col-span-6 grid h-20 place-content-center bg-neutral-900 text-lg font-semibold text-white  ">
                                    <p>Description</p>
                                </div>
                                <div className="col-span-3 grid place-content-center bg-cyan-50 p-6  ">
                                    <div>
                                        <p className="font-bold">Start</p>
                                    </div>
                                </div>
                                <div className="col-span-3 grid place-content-center bg-green-50 p-6">
                                    <div>
                                        <p className="font-bold  ">Pre</p>
                                    </div>
                                </div>
                                <div className="col-span-6 grid gap-5 p-6">
                                    <p>
                                        Date of receipt of 1st payment or Written Purchase Order from
                                        the client, whichever is applicable as per commercial section
                                    </p>
                                </div>
                                <div className="col-span-3 grid place-content-center bg-cyan-50 p-6  ">
                                    <div>
                                        <p className="text-center font-bold">On-boarding</p>
                                    </div>
                                </div>
                                <div className="col-span-3 grid place-content-center bg-green-50 p-6">
                                    <div>
                                        <p className="font-bold  ">Pre</p>
                                    </div>
                                </div>
                                <div className="col-span-6 grid gap-5 p-6">
                                    <p>
                                        Meeting of client’s team with the Inaiways delivery team to
                                        discuss detailed requirements needed to setup AI from the client
                                        and derive AI researched output.
                                    </p>
                                </div>
                                <div className="col-span-3 grid place-content-center bg-cyan-50 p-6  ">
                                    <div>
                                        <p className="text-center font-bold">
                                            Reviewing AI’s <br />
                                            Output by Client
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-3 grid place-content-center bg-green-50 p-6">
                                    <div>
                                        <p className="font-bold  ">S</p>
                                    </div>
                                </div>
                                <div className="col-span-6 grid gap-5 p-6">
                                    <p>
                                        Client should review and confirm the output shared by Inaiways
                                        team. Days will be calculated from this day. We call this day as
                                        “S”
                                    </p>
                                </div>
                                <div className="col-span-3 grid place-content-center bg-cyan-50 p-6  ">
                                    <div>
                                        <p className="font-bold">Launch</p>
                                    </div>
                                </div>
                                <div className="col-span-3 grid place-content-center bg-green-50 p-6">
                                    <div>
                                        <p className="font-bold  ">S+10</p>
                                    </div>
                                </div>
                                <div className="col-span-6 grid gap-5 p-6">
                                    <p>
                                        We will provide the client with a link to the landing pages for
                                        review. The client should check for any inaccuracies in the
                                        content but avoid suggesting aesthetic / UI changes.
                                    </p>
                                </div>
                                <div className="col-span-3 grid place-content-center bg-cyan-50 p-6  ">
                                    <div>
                                        <p className="text-center font-bold">
                                            AI - Market <br />
                                            Realignment
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-3 grid place-content-center bg-green-50 p-6">
                                    <div>
                                        <p className="font-bold  ">As per need</p>
                                    </div>
                                </div>
                                <div className="col-span-6 grid gap-5 p-6">
                                    <p>
                                        We will retune the Ads & targeting, whenever you feel the
                                        outcome is not as desired.
                                    </p>
                                </div>
                            </div>
                        </> : <>
                            <div className="grid gap-5 mb-20 mt-32">
                                <div className="grid gap-5 grid-cols-12">
                                    <div className="col-span-3  text-2xl font-bold"> <p className="bg-gray-50 h-24  mt-6   grid place-content-center w-full"><span className="-mt-6">1</span></p></div>
                                    <div className="col-span-9 p-6 bg-gray-50">
                                        <p className=" text-2xl mb-2 font-bold">
                                            Onboarding Meeting
                                        </p>
                                        <p>
                                            Inaiways invites the client for an onboarding meeting within 2 working days. Since the “Context” of AI will be done, it is important to have a marketing decision-maker in this meeting.</p>
                                    </div>
                                </div>
                                <div className="grid gap-5 grid-cols-12">
                                    <div className="col-span-3  text-2xl font-bold"> <p className="bg-blue-50 h-24  mt-6     grid place-content-center w-full"> <span className="-mt-6">2</span></p></div>
                                    <div className="col-span-9 p-6 bg-blue-50">
                                        <p className=" text-2xl mb-2 font-bold">
                                            Monitoring AI
                                        </p>
                                        <p>

                                            During the Onboarding meeting, “Context” to target the AI will be set up and the outcome will be reviewed by the customer & confirmed for the final go ahead.</p>
                                    </div>
                                </div>
                                <div className="grid gap-5 grid-cols-12">
                                    <div className="col-span-3  text-2xl font-bold"> <p className="bg-green-50   h-24  mt-6  grid place-content-center w-full"><span className="-mt-6">3</span></p></div>
                                    <div className="col-span-9 p-6 bg-green-50">
                                        <p className=" text-2xl mb-2 font-bold">
                                            Review Outcome in 2 Days
                                        </p>
                                        <p>

                                            The outcome will be shared for a deeper review from the client. The client should review and revert within 2 days.</p>
                                    </div>
                                </div>
                                <div className="grid gap-5 grid-cols-12">
                                    <div className="col-span-3  text-2xl font-bold">
                                        <p className="bg-gray-50 h-24  mt-6 grid place-content-center w-full">
                                            <span className="-mt-6">4</span>
                                        </p>
                                    </div>
                                    <div className="col-span-9 p-6 bg-gray-50">
                                        <p className=" text-2xl mb-2 font-bold">
                                            Delivery
                                        </p>
                                        <p>
                                            Once the client reverts with the reviewed content, Inaiways will generate the Ads copies and will share it with the client within 1 working day (Refer to T&C).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 grid gap-3 text-2xl font-semibold">
                                <div className="text-3xl mb-4 font-semibold">
                                    NOTE : Preparing for onboarding meeting
                                </div>
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-6 text-neutral-900">
                                        < Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        Availability for 1 hour
                                    </div>
                                </div>
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-6 text-neutral-900">
                                        < Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        List (websites) of 4 to 5 competitors
                                    </div>
                                </div>
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-6 text-neutral-900">
                                        < Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        4 to 5 good keywords
                                    </div>
                                </div>
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-6 text-neutral-900">
                                        < Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        4 to 5 bad keywords
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    })

export default PdfPage11;
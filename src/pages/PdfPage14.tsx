import React from "react";
import { Logo } from "../components/pages/Logo";

type PdfPage14Props = {
    formInputs: {
        proposalType: string;
    }
};

const PdfPage14 = React.forwardRef<HTMLDivElement, PdfPage14Props>(({ formInputs }, ref) => {
    return <div ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
        <div className="absolute top-6 right-6">{(formInputs?.proposalType === "PropGenX" || formInputs?.proposalType === "HealthGenX") ? 13 : 14}</div>
        <div className="h-full px-10">
            <div className="h-full border-s ps-12">
                <div className="pt-10">
                    <Logo />
                </div>
                <div className="relative mt-10 mb-16">
                    <div className="absolute top-2 -left-12 h-36 w-3 bg-gradient-to-br from-green-500 to-blue-400"></div>
                    <p className="text-3xl">Escalation</p>
                    <p className="text-7xl font-black">Escalation Matrix</p>
                </div>
                <div className="mb-4 grid grid-cols-12">
                    <div className="col-span-2 grid h-20 place-content-center bg-neutral-900 text-lg font-semibold text-white">
                        <p>LEVEL</p>
                    </div>
                    <div className="col-span-4 grid h-20 place-content-center border-x bg-neutral-900 text-lg font-semibold text-white">
                        <p>SPOC DETAILS</p>
                    </div>
                    <div className="col-span-6 grid h-20 place-content-center bg-neutral-900 text-lg font-semibold text-white">
                        <p>Procedure</p>
                    </div>
                    <div className="col-span-2 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-5 uppercase">
                        <div>
                            <p className="font-bold">Level 1</p>
                            <p>
                                Customer <br />
                                Success Team
                            </p>
                        </div>
                    </div>
                    <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-5">
                        <div>
                            <p className="font-bold uppercase">Mr. Manoj Jadhav</p>

                            <p>Customer Support Manager</p>
                            <p>manoj.jadhav@inaiways.com</p>
                            <p>+91-9272091303</p>
                        </div>
                    </div>
                    <div className="col-span-6 grid border-e border-b border-gray-400 p-5">
                        <p>
                            1. In case of any issues or concerns regarding the current
                            status, issue or concern the first point of contact is the
                            designated Proposal Manager.
                        </p>
                        <p>
                            2. The concerned party should reach out to the Customer Support
                            Manager via email or phone, detailing the nature of the issue
                            and any relevant information.
                        </p>
                        <p>
                            3. The Customer Support Manager will acknowledge receipt of the
                            concern within 24 hours and initiate necessary actions to
                            address the issue.
                        </p>
                    </div>
                    <div className="col-span-2 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-5 uppercase">
                        <div>
                            <p className="font-bold">Level 2</p>
                            <p>
                                Department <br />
                                Head
                            </p>
                        </div>
                    </div>
                    <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-5">
                        <div>
                            <p className="font-bold uppercase">Mr. Gopal Mahajan</p>

                            <p>Department Head</p>
                            <p>gopal.mahajan@inaiways.com</p>
                            <p>+91-9860282807</p>
                        </div>
                    </div>
                    <div className="col-span-6 grid border-e border-b border-gray-400 p-5">
                        <p>
                            1. If the issue remains unresolved or if there is
                            dissatisfaction with the response at Level 1, the escalation
                            should be directed to the Department Head.
                        </p>
                        <p>
                            2. The concerned party should escalate the matter by sending an
                            email or Phone to the Department Head, clearly stating the
                            unresolved issue and referencing any previous correspondence.
                        </p>
                        <p>
                            3. The Department Head will review the situation promptly and
                            work towards a satisfactory resolution within 48 hours.
                        </p>
                    </div>
                    <div className="col-span-2 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-5 uppercase">
                        <div>
                            <p className="font-bold">Level 3</p>
                            <p>
                                Executive <br />
                                Leadership
                            </p>
                        </div>
                    </div>
                    <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-5">
                        <div>
                            <p className="font-bold uppercase">Mr. Ajit Jagtap</p>

                            <p>Founder and CEO</p>
                            <p>ajit.jagtap@inaiways.com</p>
                            <p>+91-9579074365</p>
                        </div>
                    </div>
                    <div className="col-span-6 grid border-e border-b border-gray-400 p-5">
                        <p>
                            1. If the issue persists despite escalations at Levels 1 and 2,
                            or if there is dissatisfaction with the responses received, the
                            matter should be escalated to the Executive Leadership.
                        </p>
                        <p>
                            2. The concerned party should draft an email outlining the
                            issue, previous attempts at resolution, and reasons for
                            escalation, addressed to the Executive Leadership.
                        </p>
                        <p>
                            3. The Executive Leadership will prioritise the escalation,
                            conduct a thorough review, and provide a final resolution within
                            72 hours.
                        </p>
                    </div>
                </div>
                <div className="text-lg">
                    Please ensure that all escalations are made in a professional
                    manner, clearly stating the problem and desired outcome. This
                    escalation process aims to ensure timely and effective resolution of
                    any issues related to the proposal.
                </div>
            </div>
        </div>
    </div>
})

export default PdfPage14;
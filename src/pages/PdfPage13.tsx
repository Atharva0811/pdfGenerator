import React from "react";
import { Logo } from "../components/pages/Logo";

const Bullet: React.FC = () => {
    return (
        <span id="idghz9" className="mt-5 text-neutral-900">
            <svg
                id="iesypu"
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <circle id="i2yxmf" cx="8" cy="8" r="8" />
            </svg>
        </span>
    );
};



type PdfPage13Props = {
    formInputs: {
        proposalType: string;
    };
};
const PdfPage13 = React.forwardRef<HTMLDivElement, PdfPage13Props>(({ formInputs }, ref) => {
    return <div ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
        <div className="absolute top-6 right-6">
            {["AdGenX", "PropGenX", "HealthGenX"].includes(formInputs.proposalType) ? 12 : 13}
        </div>
        <div className="h-full px-10">
            <div className="h-full border-s px-10">
                <div className="pt-10">
                    <Logo />
                </div>
                <div className="relative mt-10 mb-16">
                    <div className="absolute top-0 -left-10 h-28 w-2 bg-gradient-to-br from-green-500 to-blue-400"></div>
                    <p className="text-7xl font-black">Terms & Conditions</p>
                </div>
                <p>
                    These terms apply to all the plans. By making the payment, you
                    accept the following terms and conditions.
                </p>
                <div className="mt-10 grid gap-1">
                    <p className="text-xl font-bold">Commercial Terms :</p>
                    <div className="flex gap-3">
                        <Bullet />
                        <div id="i8id6r" className="">
                            All applicable payments are to be paid 100% in advance as per
                            the plan availed.
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Bullet />
                        <div id="i8id6r" className="">
                            All charges are subject to additional GST or any other taxes
                            as applicable under the government norms.
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Bullet />
                        <div id="i8id6r" className="">
                            The client must make themselves available for the on-boarding
                            meeting within 15 days of the payment. In case the client does
                            not make themselves available within this timeframe, the
                            project will be considered as closed and the client will not
                            be eligible to claim any refund.
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Bullet />
                        <div id="i8id6r" className="">
                            The client must handover the requested critical information
                            (DNS update, Logo, verification documents for Google) within
                            15 days of the onboarding meeting. In case ALL of the critical
                            information is not handed over during this timeframe, the
                            project will be considered as closed and the client will not
                            be eligible to claim any refund.
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Bullet />
                        <div id="i8id6r" className="">
                            All payments made to Inaiways are non-refundable.
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Bullet />
                        <div id="i8id6r" className="">
                            Payment slabs and service terms and conditions are subject to
                            change at any time at the discretion of Inaiways.
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Bullet />
                        <div>
                            Validity of {formInputs.proposalType === "AdGenX" ? "AI Optimisation" : "AI - Market Realignment"} & expert support is for 90
                            consecutive days starting from date of payment for that support.
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid gap-1">
                    <p className="text-xl font-bold">Delivery Terms :</p>
                    {formInputs.proposalType === "LeadGenX" &&
                        [
                            "In case, the Ad campaign setup is not done properly and the customer wants to update the Ad campaign setup (before starting the Ads), only one (1) FREE change request will be considered.",
                            "Refer to https://www.inaiways.com/v/terms-conditions-leadgenx-with-lp for more details."
                        ].map((text, index) => (
                            <div key={index} className="flex gap-3">
                                <Bullet />
                                <div>{text}</div>
                            </div>
                        ))}

                    {formInputs.proposalType === "AdGenX" && (
                        <div className="flex gap-3">
                            <Bullet />
                            <div>
                                The quality and relevance of the generated ad copies are directly dependent on the keyword Input and persona choices given by customers. Inaiways is not responsible for the outcome of the campaigns or any discrepancies arising from inaccurate, incomplete, or insufficient input details required to set up the Ad campaign. For more details refer to https://www.inaiways.com/v/terms-and-conditions-leadgenx-without-landing-pages.
                            </div>
                        </div>
                    )}

                    {(formInputs.proposalType === "PropGenX" || formInputs.proposalType === "HealthGenX") &&
                        [
                            "The customer must share in the writing the details required for setting up the Ad campaign (keywords, good keywords, bad keywords, or any other required information).",
                            "For more details refer to https://www.inaiways.com/v/terms-conditions-direct-promoters."
                        ].map((text, index) => (
                            <div key={index} className="flex gap-3">
                                <Bullet />
                                <div>{text}</div>
                            </div>
                        ))}

                    {formInputs.proposalType === "LeadTitanX" &&
                        [
                            "The quality and relevance of the generated ad copies are directly dependent on the keyword Input and persona choices given by customers. Inaiways is not responsible for the outcome of the campaigns or any discrepancies arising from inaccurate, incomplete, or insufficient input details required to set up the Ad campaign.",
                            "Refer to https://www.inaiways.com/v/terms-conditions-enterprises for more details."
                        ].map((text, index) => (
                            <div key={index} className="flex gap-3">
                                <Bullet />
                                <div>{text}</div>
                            </div>
                        ))}
                </div>
                <div className="mt-10 grid gap-1">
                    <p className="text-xl font-bold">
                        Google Ads Policy Compliance and Responsibility :
                    </p>

                    <div className="flex gap-3">
                        <Bullet />
                        <div>
                            Inaiways is not liable for any disruptions or consequences arising from policy violations, and the client agrees to promptly resolve such matters with Google and bear any associated costs or damages.
                        </div>
                    </div>

                    {formInputs.proposalType === "LeadGenX" && (
                        <div className="flex gap-3">
                            <Bullet />
                            <div>
                                Refer to{" "}

                                https://www.inaiways.com/v/terms-conditions-leadgenx-with-lp
                                for more details.
                            </div>
                        </div>
                    )}

                    {formInputs.proposalType === "AdGenX" && (
                        <div className="flex gap-3">
                            <Bullet />
                            <div>
                                For more details refer to{" "}

                                https://www.inaiways.com/v/terms-and-conditions-leadgenx-without-landing-pages
                            </div>
                        </div>
                    )}

                    {formInputs.proposalType === "LeadTitanX" && (
                        <div className="flex gap-3">
                            <Bullet />
                            <div>
                                Refer to{" "}

                                https://www.inaiways.com/v/terms-conditions-enterprises
                                for more details.
                            </div>
                        </div>
                    )}

                    {(formInputs.proposalType === "PropGenX" || formInputs.proposalType === "HealthGenX") && (
                        <div className="flex gap-3">
                            <Bullet />
                            <div>
                                For more details refer to{" "}

                                https://www.inaiways.com/v/terms-conditions-direct-promoters
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-10 grid gap-1">
                    <p className="text-xl font-bold">Delivery & support limits :</p>

                    <div className="flex gap-3">
                        <Bullet />
                        <div>
                            Maximum keyword process of 5000 Keywords will be processed for research.
                        </div>
                    </div>

                    {formInputs.proposalType && (
                        <div className="flex gap-3">
                            <Bullet />
                            <div>
                                {{
                                    LeadGenX: (
                                        <span>
                                            Refer to{" "}

                                            https://www.inaiways.com/v/terms-conditions-leadgenx-with-lp

                                            for more details.
                                        </span>
                                    ),
                                    AdGenX: (
                                        <span>
                                            Refer to{" "}

                                            https://www.inaiways.com/v/terms-and-conditions-leadgenx-without-landing-pages
                                            for more details.
                                        </span>
                                    ),
                                    PropGenX: (
                                        <span>
                                            Refer to{" "}

                                            https://www.inaiways.com/v/terms-conditions-direct-promoters
                                            for more details.
                                        </span>
                                    ),
                                    HealthGenX: (
                                        <span>
                                            Refer to{" "}

                                            https://www.inaiways.com/v/terms-conditions-direct-promoters
                                            for more details.
                                        </span>
                                    ),
                                    LeadTitanX: (
                                        <span>
                                            Refer to{" "}

                                            https://www.inaiways.com/v/terms-conditions-enterprises
                                            for more details.
                                        </span>
                                    ),
                                }[formInputs.proposalType] || ""}
                            </div>
                        </div>
                    )}

                    {(formInputs.proposalType === "HealthGenX" || formInputs.proposalType === "PropGenX") && (
                        <>
                            <div className="flex gap-3">
                                <Bullet />
                                <div>
                                    Max 10 Centers or Courses are covered under - 24HP101 within a Year.
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Bullet />
                                <div>
                                    Centers or Courses from or as Channel Partners and Joint Ventures are covered under - 24HP101.
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="mt-10 grid gap-1">
                    <p className="text-xl font-bold">General Terms :</p>

                    <div className="flex gap-3">
                        <Bullet />
                        <div>
                            Government regulations, local authority regulations, and ad platform policies supersede any features in the AI-Portal product and service.
                        </div>
                    </div>

                    {formInputs.proposalType !== "LeadTitanX" && (
                        (() => {
                            const proposalLinks = {
                                LeadGenX: "https://www.inaiways.com/v/terms-conditions-leadgenx-with-lp",
                                AdGenX: "https://www.inaiways.com/v/terms-and-conditions-leadgenx-without-landing-pages",
                                PropGenX: "https://www.inaiways.com/v/terms-conditions-direct-promoters",
                                HealthGenX: "https://www.inaiways.com/v/terms-conditions-direct-promoters",
                            };

                            const url = proposalLinks[formInputs.proposalType];

                            return url ? (
                                <div className="flex gap-3">
                                    <Bullet />
                                    <div>
                                        For more details refer to {url}
                                    </div>
                                </div>
                            ) : null;
                        })()
                    )}
                </div>

            </div>
        </div>
    </div>
})

export default PdfPage13;
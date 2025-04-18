import React from "react";
import { Logo } from "../components/pages/Logo";
type PdfPage4Props = {
    formInputs: {
        proposalType: string;
    };
};

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
const PdfPage4 = React.forwardRef<HTMLDivElement, PdfPage4Props>(({ formInputs }, ref) => {
    return <div id="4" ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
        <div className="absolute top-6 right-6">4</div>
        <div className="h-full px-10">
            <div className="h-full border-s ps-12">
                <div className="pt-10">
                    <Logo />
                </div>
                <div className="relative mt-10 mb-20">
                    <div className="absolute top-2 -left-12 h-40 w-3 bg-gradient-to-br from-green-500 to-blue-400"></div>
                    <p className="text-3xl ">
                        AI-Powered Lead Generation Plans
                    </p>
                    <p className="text-7xl font-black">Investment</p>
                </div>


                {
                    (formInputs.proposalType === "LeadGenX" || formInputs.proposalType === "AdGenX") && <div className="mb-16 text-3xl font-medium text-blue-600">
                        Engagement Plans
                    </div>
                }


                {
                    (formInputs.proposalType === "LeadGenX" || formInputs.proposalType === "AdGenX") &&
                    <div className="grid grid-cols-12">
                        <div className="col-span-1 grid h-20 place-content-center border-y border-s border-gray-400 text-lg font-semibold">
                            <p>
                                SR. <br />
                                NO
                            </p>
                        </div>
                        <div className="col-span-3 grid h-20 place-content-center border-y border-s border-gray-400 text-lg font-semibold uppercase">
                            <p>Particulars</p>
                        </div>
                        <div className="col-span-4 grid h-20 place-content-center border-x border-y border-gray-400 text-lg font-semibold uppercase">
                            <p>
                                ESSENTIALS
                                <span className="font-normal  "> {
                                    formInputs.proposalType === "LeadGenX" && "(without taxes)"}</span>
                            </p>
                        </div>
                        <div className="col-span-4 grid h-20 place-content-center border-y border-e border-gray-400 text-lg font-semibold uppercase">
                            <p>
                                BUSINESS-PRO
                                <span className="font-normal  "> {
                                    formInputs.proposalType === "LeadGenX" && "(without taxes)"}</span>
                            </p>
                        </div>

                        <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                            <p className="font-bold">1</p>
                        </div>

                        <div className="col-span-3 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                            <div>
                                <p className="mb-1 text-xl font-bold">{formInputs.proposalType === "AdGenX" ? "One Time Setup Charges" : "Setup Charges"}</p>
                                {
                                    formInputs.proposalType === "LeadGenX" && <p className="italic">For one product per country</p>
                                }


                                <div className="mt-2 grid gap-2">
                                    {
                                        formInputs.proposalType === "LeadGenX" && <> <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />
                                            </span>
                                            <div id="i8id6r" className="">
                                                Keyword hunting & grouping
                                            </div>
                                        </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Ad copy writing
                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Landing page design
                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Campaign Setup
                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Ads Realignment
                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Dashboard + AutoTune
                                                </div>
                                            </div>
                                        </>
                                    }
                                    {
                                        formInputs.proposalType === "AdGenX" && <>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Keyword hunting & grouping
                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Ad Copy writing
                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Account Setup                              </div>
                                            </div>
                                        </>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                            <div className="">
                                <p className="text-center text-xl font-bold">
                                    {formInputs.proposalType === "LeadGenX" ? "INR 80K (One-time)" : "INR 39.5K"}
                                </p>
                                <div className="mt-5 grid gap-2">
                                    {
                                        formInputs.proposalType === "LeadGenX" ?
                                            <><div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Up to 100 good intent keywords
                                                </div>
                                            </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r" className="">
                                                        Landing pages with dynamic headings
                                                    </div>
                                                </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r" className="">
                                                        First Month’s AI - Market Realignment included
                                                    </div>
                                                </div>
                                                <div id="i8id6r" className="text-center">
                                                    [24DC109]
                                                </div></> : <>
                                                <p className="text-center">Upto 100 good  intent keywords </p>
                                                <p className="text-center">[24DC101]</p>
                                            </>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 grid items-center gap-5 border-e border-b border-gray-400 bg-green-50 p-4 pb-8">
                            <div className="">
                                <p className="text-center text-xl font-bold">
                                    {formInputs.proposalType === "LeadGenX" ? "INR 1.2L (One-time)" : "INR 69.5K"}
                                </p>
                                <div className="mt-5 grid gap-2">
                                    {
                                        formInputs.proposalType === "LeadGenX" ?
                                            <><div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Up to 500 good intent keywords
                                                </div>
                                            </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r" className="">
                                                        Landing pages with dynamic headings & images
                                                    </div>
                                                </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r" className="">
                                                        First Month’s AI - Market Realignment included
                                                    </div>
                                                </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r" className="">
                                                        First Month’s Expert Support included
                                                    </div>
                                                </div>
                                                <div id="i8id6r" className="text-center">
                                                    [24DC113]
                                                </div></> : <>
                                                <p className="text-center">Upto 500 good  intent keywords </p>
                                                <p className="text-center">[24DC105]</p>
                                            </>
                                    }

                                </div>
                            </div>
                        </div>
                        {
                            formInputs.proposalType === "LeadGenX" && <>
                                <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                    <p className="font-bold">2</p>
                                </div>

                                <div className="col-span-3 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                                    <div>
                                        <p className="mb-1 text-xl font-bold">
                                            Tech-Stack Operations charges
                                        </p>
                                        <p className="italic">Common for all products & countries</p>

                                        <div className="mt-2 grid gap-2">
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Email & WhatsApp notifications
                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    High Speed Servers for landing pages
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                    <div className="">
                                        <p className="text-center text-xl font-bold">
                                            INR 19.5K per annum
                                        </p>
                                        <div id="i8id6r" className="mt-5 text-center">
                                            [24DC110]
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-4 grid items-center gap-5 border-e border-b border-gray-400 bg-green-50 p-4 pb-8">
                                    <div className="">
                                        <p className="text-center text-xl font-bold">
                                            INR 34.5K per annum
                                        </p>
                                        <div id="i8id6r" className="mt-5 text-center">
                                            [24DC114]
                                        </div>
                                    </div>
                                </div></>
                        }

                    </div>
                }
                {
                    (formInputs.proposalType === "PropGenX" || formInputs.proposalType === "HealthGenX" || formInputs.proposalType === "LeadTitanX") &&
                    <div className="grid grid-cols-12">
                        <div className="col-span-1 grid h-20 place-content-center border-y border-s border-gray-400 text-lg font-semibold">
                            <p>
                                SR.
                                NO
                            </p>
                        </div>
                        <div className="col-span-6 grid h-20 place-content-center border-y border-s border-gray-400 text-lg font-semibold uppercase">
                            <p>Particulars</p>
                        </div>
                        <div className="col-span-5 grid h-20 place-content-center border-x border-y border-gray-400 text-lg font-semibold uppercase">
                            <p>
                                Amount <span className="font-normal lowercase "> (without taxes)</span>
                            </p>
                        </div>
                        <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                            <p className="font-bold">1</p>
                        </div>
                        <div className="col-span-6 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                            <div>
                                <p className="mb-1 text-xl font-bold">Setup Charges</p>
                                <p className="italic">{formInputs.proposalType === "PropGenX" && "For all centers or courses launched within 1 year of contract (up to max 10)"}{formInputs.proposalType === "HealthGenX" && "For all centers launched within 1 year of contract (up to max 10)"}{formInputs.proposalType === "LeadTitanX" && "For all products / offering of the company"}</p>

                                <div className="mt-2 grid gap-2">
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5">
                                            <Bullet />

                                        </span>
                                        <div id="i8id6r" className="">
                                            Keyword hunting & grouping
                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5">
                                            <Bullet />

                                        </span>
                                        <div id="i8id6r" className="">
                                            Ad copy writing
                                        </div>
                                    </div>
                                    {
                                        formInputs.proposalType !== "LeadTitanX" ? <>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Campaign Setup
                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Up to 100 good intent keywords
                                                </div>
                                            </div>
                                        </> : <>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Landing page design (for the first 3 product/offering)

                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Lead qualifying framework setup
                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Campaign Setup
                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">


                                                    Ads Realignment

                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Dashboard + AutoTune

                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Tech stack setup for lead delivery
                                                </div>
                                            </div>
                                        </>
                                    }


                                </div>
                            </div>
                        </div>
                        <div className="col-span-5 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                            <div>
                                <p className="mb-1 text-center text-xl font-bold">INR {formInputs.proposalType === "LeadTitanX" ? "6" : "4"}L (for 1 Year)</p>
                                {
                                    formInputs.proposalType === "LeadTitanX" && <div className="mt-2 grid gap-2">
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r" className="">
                                                Up to 500 good intent keywords per product
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r" className="">

                                                Landing pages with dynamic
                                                headings
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r" className="">

                                                First Month's Al- Market Realignment included
                                            </div>
                                        </div>
                                    </div>
                                }

                                <p className="text-center mt-3">{formInputs.proposalType === "LeadTitanX" ? "[24LE107]" : "[24HP101]"}</p>
                            </div>

                        </div>
                        <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                            <p className="font-bold">2</p>
                        </div>
                        <div className="col-span-6 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                            <div>
                                <p className="mb-1 text-xl font-bold">Landing Pages {formInputs.proposalType !== "LeadTitanX" ? "(add-on)" : "(4th product / offering onwards)"}</p>
                                <p className="italic">Contextual landing pages to improve conversation ratio and generate qualified leads</p>

                                <div className="mt-2 grid gap-2">
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5">
                                            <Bullet />

                                        </span>
                                        <div id="i8id6r" className="">
                                            Landing pages for each Ad group
                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5">
                                            <Bullet />

                                        </span>
                                        <div id="i8id6r" className="">
                                            Setup of lead qualifying questionnaries as per BANT framework
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                            <div>
                                <p className="mb-1 text-center text-xl font-bold">{formInputs.proposalType === "LeadTitanX" ? "INR 44K per product / offering" : "INR 44K per Center or Course"}</p>
                                <p className="text-center mt-3">{formInputs.proposalType === "LeadTitanX" ? "[24LE110]" : "[24HP103]"}</p>
                            </div>

                        </div>
                        {
                            formInputs.proposalType !== "LeadTitanX" && <>
                                <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                    <p className="font-bold">3</p>
                                </div>
                                <div className="col-span-6 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                                    <div>
                                        <p className="mb-1 text-xl font-bold">Ai Market Realignment (Optional)</p>


                                        <div className="mt-2 grid gap-2">
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Block non-performing Keywords
                                                </div>
                                            </div>
                                            <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />

                                                </span>
                                                <div id="i8id6r" className="">
                                                    Align search terms to company's keywords
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-5 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                    <div>
                                        <p className="mb-1 text-center text-xl font-bold">INR 43.5K per instance</p>
                                        <p className="text-center mt-3">[24HP102]</p>
                                    </div>

                                </div></>
                        }



                    </div>
                }



                {formInputs.proposalType === "LeadGenX" && (
                    <div className="mt-16">
                        <p className="text-xl font-semibold">Note</p>
                        <div className="mt-3 grid gap-2 ps-6">
                            <p>
                                1. Second years onwards, only Tech-Stack Operations charges will
                                be applicable to ensure continuity of your campaigns with same
                                landing pages
                            </p>
                            <p>
                                2. In case, data is pushed in your CRM via integration, INR 6K
                                PA will be charged for data handling and management
                            </p>
                            <p>3. Taxes are applicable as per government norms.</p>
                        </div>
                    </div>
                )}

                {["LeadTitanX", "PropGenX", "HealthGenX"].includes(formInputs.proposalType) && (
                    <div className="mt-16">
                        <p className="text-xl font-semibold">Note</p>
                        <p className="mt-3 ps-6">
                            In case the landing pages are needed beyond the tenure of this proposal (1 year from the date of payment), an additional charge of INR 19.5K PA will be applicable for tech-stack maintenance (servers for landing pages, email & WhatsApp notification for lead delivery, etc.)
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
})

export default PdfPage4;
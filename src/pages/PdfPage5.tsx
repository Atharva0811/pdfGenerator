import React from 'react'
import { Logo } from '../components/pages/Logo';
type PdfPage5Props = {
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

const PdfPage5 = React.forwardRef<HTMLDivElement, PdfPage5Props>(({ formInputs }, ref) => {
    return (
        <div id="5" ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
            <div className="absolute top-6 right-6">5</div>
            <div className="h-full px-10">
                <div className="h-full border-s ps-12">
                    <div className="pt-10">
                        <Logo />
                    </div>
                    <div className="relative mt-10 mb-20">
                        <div className="absolute top-2 -left-12 h-40 w-3 bg-gradient-to-br from-green-500 to-blue-400"></div>
                        <p className="text-3xl">
                            AI-Powered Lead Generation Plans
                        </p>
                        <p className="text-7xl font-black">Optional {formInputs.proposalType === "LeadTitanX" ? "Investment" : "Charges"}</p>
                    </div>
                    {
                        formInputs.proposalType !== "LeadTitanX" && <div className="mb-16 text-3xl font-medium text-blue-600">
                            Charges for availing additional services
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
                            <div className="col-span-5 grid h-20 place-content-center border-y border-s border-gray-400 text-lg font-semibold uppercase">
                                <p>Particulars</p>
                            </div>
                            <div className="col-span-3 grid h-20 place-content-center border-x border-y border-gray-400 text-center text-lg font-semibold uppercase">
                                <p>
                                    ESSENTIALS <br />
                                    <span className="font-normal capitalize">{
                                        formInputs.proposalType === "LeadGenX" && "(without taxes)"
                                    }</span>
                                </p>
                            </div>
                            <div className="col-span-3 grid h-20 place-content-center border-y border-e border-gray-400 text-center text-lg font-semibold uppercase">
                                <p>
                                    BUSINESS-PRO <br />
                                    <span className="font-normal capitalize">{
                                        formInputs.proposalType === "LeadGenX" && "(without taxes)"
                                    }</span>
                                </p>
                            </div>

                            <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                <p className="font-bold">1</p>
                            </div>

                            <div className="col-span-5 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8 ">
                                <div>
                                    <p className="text-xl font-bold">{formInputs.proposalType === "AdGenX" ? "AI Optimization" : "AI - Market Realignment"}</p>
                                    <div className="mt-2 grid gap-2">
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5 text-neutral-900">
                                                < Bullet />
                                            </span>
                                            <div id="i8id6r" className="">
                                                Block non-performing keywords
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5 text-neutral-900">
                                                < Bullet />

                                            </span>
                                            <div id="i8id6r" className="">
                                                Align search terms to company’s keywords
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div className="text-center">
                                    <p className="text-xl font-bold">INR 4.5K per month</p>
                                    <p className="mt-2 font-normal">
                                        (to be billed quarterly - 13.5K) <br />
                                        [24DC102]
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-3 grid items-center gap-5 border-e border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div className="text-center">
                                    <p className="text-xl font-bold">INR 7.5K per month</p>
                                    <p className="mt-2 font-normal">
                                        (to be billed quarterly - 22.5K) <br />
                                        [24DC106]
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                <p className="font-bold">2</p>
                            </div>

                            <div className="col-span-5 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8 ">
                                <div>
                                    <p className="text-xl font-bold">Expert Support</p>
                                    <div className="mt-2 grid gap-2">
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5 text-neutral-900">
                                                < Bullet />

                                            </span>
                                            <div id="i8id6r" className="">
                                                All features of {formInputs.proposalType === "LeadGenX" ? "AI - Market Realignment" : "AI Optimization"}
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5 text-neutral-900">
                                                < Bullet />

                                            </span>
                                            <div id="i8id6r" className="">
                                                Up to 30 mins per week to discuss & analyse campaign
                                                progress
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5 text-neutral-900">
                                                < Bullet />

                                            </span>
                                            <div id="i8id6r" className="">
                                                Improve Ad setup for different personas, bidding,
                                                targeting, and Ad scheduling
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div className="text-center">
                                    <p className="text-xl font-bold">INR 11.5K per month</p>
                                    <p className="mt-2 font-normal">
                                        (to be billed quarterly - 34.5K)
                                        <br />
                                        [24DC103]
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-3 grid items-center gap-5 border-e border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div className="text-center">
                                    <p className="text-xl font-bold">INR 14.5K per month</p>
                                    <p className="mt-2 font-normal">
                                        (to be billed quarterly - 43.5K) <br />
                                        [24DC107]
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        formInputs.proposalType === "LeadTitanX" && <div className="grid grid-cols-12">
                            <div className="col-span-2 grid h-20 place-content-center border-y border-s border-gray-400 text-lg font-semibold">
                                <p>
                                    SR.
                                    NO
                                </p>
                            </div>
                            <div className="col-span-6 grid h-20 place-content-center border-y border-s border-gray-400 text-lg font-semibold uppercase">
                                <p>Particulars</p>
                            </div>
                            <div className="col-span-4 grid h-20 place-content-center border-x border-y border-gray-400 text-center text-lg font-semibold uppercase">
                                <p>
                                    AMOUNT
                                    <span className="font-normal capitalize">(without taxes)</span>
                                </p>
                            </div>
                            <div className="col-span-2 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                <p className="font-bold">1</p>
                            </div>
                            <div className="col-span-6 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8 ">
                                <div>
                                    <p className="text-xl font-bold">AI Optimization</p>
                                    <div className="mt-2 grid gap-2">
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5 text-neutral-900">
                                                < Bullet />

                                            </span>
                                            <div id="i8id6r" className="">
                                                Block non-performing keywords
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5 text-neutral-900">
                                                < Bullet />

                                            </span>
                                            <div id="i8id6r" className="">
                                                Align search terms to company’s keywords
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div className="text-center">
                                    <p className="text-xl font-bold">INR 14.5K per instance</p>
                                    <p className="mt-2 font-normal">
                                        (to be billed quarterly - 43.5K) <br />
                                        [24LE108]
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                <p className="font-bold">2</p>
                            </div>
                            <div className="col-span-6 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                                <div>
                                    <p className="text-xl font-bold">Expert Support</p>
                                    <div className="mt-2 grid gap-2">
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5 text-neutral-900">
                                                < Bullet />

                                            </span>
                                            <div id="i8id6r" className="">
                                                All features of AI - Market Realignment
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5 text-neutral-900">
                                                < Bullet />

                                            </span>
                                            <div id="i8id6r" className="">
                                                Up to 30 mins per week to discuss & analyse campaign
                                                progress
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5 text-neutral-900">
                                                < Bullet />

                                            </span>
                                            <div id="i8id6r" className="">
                                                Improve Ad setup for different personas, bidding,
                                                targeting, and Ad scheduling
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div className="text-center">
                                    <p className="text-xl font-bold">INR 34.5K per month</p>
                                    <p className="mt-2 font-normal">
                                        (to be billed quarterly - 103.5K) <br />
                                        [24LE109]
                                    </p>
                                </div>
                            </div>


                        </div>
                    }

                </div>
            </div>
        </div>
    )
})

export default PdfPage5
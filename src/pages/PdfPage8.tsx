import React, { forwardRef } from 'react'
import { Logo } from '../components/pages/Logo';

type PdfPage8Props = {
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
const PdfPage8 = forwardRef<HTMLDivElement, PdfPage8Props>(({ formInputs }, ref) => {
    return (
        <div ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
            <div className="absolute top-6 right-6">
                {["PropGenX", "HealthGenX"].includes(formInputs.proposalType) ? 7 : 8}
            </div>
            <div className="h-full px-10">
                <div className="h-full border-s ps-12">
                    <div className="pt-10">
                        <Logo />
                    </div>
                    <div className="relative mt-10 mb-16">
                        <div className="absolute top-2 -left-12 h-52 w-3 bg-gradient-to-br from-green-500 to-blue-400"></div>
                        <p className="text-3xl ">{formInputs.proposalType === "LeadGenX" ? "Value Creation" : "Scope Of Work"}</p>
                        <p className="text-7xl font-black">
                            Analysing Performance of <br /> AI-Portal
                        </p>
                    </div>
                    <div className="mb-16 text-2xl">
                        The value you get when you use AI-powered Google Ads by AI-Portal as
                        a part of your go-to-market strategy.
                    </div>
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
                            <p>Before AI-Portal</p>
                        </div>
                        <div className="border-eborder-gray-400 col-span-4 grid h-20 place-content-center border-y border-e border-gray-400 text-lg font-semibold uppercase">
                            <p>After AI-Portal</p>
                        </div>
                        {formInputs.proposalType !== "AdGenX" && <>
                            <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                <p className="font-bold">1</p>
                            </div>

                            <div className="col-span-3 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                                <div>
                                    <p className="text-xl font-bold">Lead Quality</p>
                                </div>
                            </div>
                            <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div className="grid gap-2">
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5  text-neutral-900">
                                            <Bullet />
                                        </span>
                                        <div id="i8id6r" className="">
                                            Contact details
                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5  text-neutral-900">
                                            <Bullet />
                                        </span>
                                        <div id="i8id6r" className="">
                                            Data filled by user manually
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 grid gap-5 border-e border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div className="grid gap-2">
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5  text-neutral-900">
                                            <Bullet />
                                        </span>
                                        <div id="i8id6r" className="">
                                            Contact details
                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5  text-neutral-900">
                                            <Bullet />
                                        </span>
                                        <div id="i8id6r" className="">
                                            Search intent
                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5  text-neutral-900">
                                            <Bullet />
                                        </span>
                                        <div id="i8id6r" className="">
                                            Lead location
                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5  text-neutral-900">
                                            <Bullet />
                                        </span>
                                        <div id="i8id6r" className="">
                                            Answers to clickable lead qualifying questions
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                <p className="font-bold">2</p>
                            </div>

                            <div className="col-span-3 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                                <div>
                                    <p className="text-xl font-bold">
                                        Transparency on lead quality
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-5  text-neutral-900">
                                        <Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        Manual check of caller’s inputs by managers
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 grid gap-5 border-e border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-5  text-neutral-900">
                                        <Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        100% transparency as it is showcased by “search intent”
                                        visible across the sales hierarchy in real-time
                                    </div>
                                </div>
                            </div> </>}
                        <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                            <p className="font-bold">{formInputs.proposalType === "AdGenX" ? 1 : 3}</p>
                        </div>

                        <div className="col-span-3 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                            <div>
                                <p className="text-xl font-bold">
                                    Improvement in trackable metrics
                                </p>
                            </div>
                        </div>
                        <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                            <div className="grid gap-2">
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-5  text-neutral-900">
                                        <Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        Low Click-Through-Rate (CTR)
                                    </div>
                                </div>
                                {
                                    formInputs.proposalType !== "AdGenX" && <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5  text-neutral-900">
                                            <Bullet />
                                        </span>
                                        <div id="i8id6r" className="">
                                            Low landing page conversion ratio
                                        </div>
                                    </div>
                                }

                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-5  text-neutral-900">
                                        <Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        High Cost-Per-Click (CPC)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 grid gap-5 border-e border-b border-gray-400 bg-green-50 p-4 pb-8">
                            <div className="grid gap-2">
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-5  text-neutral-900">
                                        <Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        High Click-Through-Rate (CTR)
                                    </div>
                                </div>
                                {
                                    formInputs.proposalType !== "AdGenX" && <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5  text-neutral-900">
                                            <Bullet />
                                        </span>
                                        <div id="i8id6r" className="">
                                            High landing page conversion ratio
                                        </div>
                                    </div>
                                }

                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-5  text-neutral-900">
                                        <Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        Low Cost-Per-Click (CPC)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                            <p className="font-bold">{formInputs.proposalType === "AdGenX" ? 2 : 4}</p>
                        </div>
                        <div className="col-span-3 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                            <div>
                                <p className="text-xl font-bold">
                                    Improvement in overall execution process
                                </p>
                            </div>
                        </div>
                        <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                            <div className="grid gap-2">
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-5  text-neutral-900">
                                        <Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        Limited Ad groups
                                    </div>
                                </div>
                                {
                                    formInputs.proposalType !== "AdGenX" && <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5  text-neutral-900">
                                            <Bullet />
                                        </span>
                                        <div id="i8id6r" className="">
                                            Limited number of static landing pages
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                        <div className="col-span-4 grid gap-5 border-e border-b border-gray-400 bg-green-50 p-4 pb-8">
                            <div className="grid gap-2">
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-5  text-neutral-900">
                                        <Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        Assured improvement in number of Ad groups
                                    </div>
                                </div>
                                {
                                    formInputs.proposalType !== "AdGenX" && <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5  text-neutral-900">
                                            <Bullet />
                                        </span>
                                        <div id="i8id6r" className="">
                                            Contextual landing pages for each ad group
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                        <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                            <p className="font-bold">{formInputs.proposalType === "AdGenX" ? 3 : 5}</p>
                        </div>
                        <div className="col-span-3 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                            <div>
                                <p className="text-xl font-bold">
                                    Time taken to reach campaign optimised
                                </p>
                            </div>
                        </div>
                        <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                            <div className="grid gap-2">
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-5  text-neutral-900">
                                        <Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        Exact term campaigns - 3 to 4 months (considering 2-3
                                        iterations)
                                    </div>
                                </div>
                                <div id="i0mbks" className="flex gap-3">
                                    <span id="idghz9" className="mt-5  text-neutral-900">
                                        <Bullet />
                                    </span>
                                    <div id="i8id6r" className="">
                                        Broad term campaigns - 3 to 9 months (considering 2-3
                                        iterations)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 grid gap-5 border-e border-b border-gray-400 bg-green-50 p-4 pb-8">
                            <div id="i0mbks" className="flex gap-3">
                                <span id="idghz9" className="mt-5  text-neutral-900">
                                    <Bullet />
                                </span>
                                <div id="i8id6r" className="">
                                    Few hours, as the iterations happen on product instead saving
                                    your crucial Ad spends that would have wasted. in multiple
                                    iterations
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
)
export default PdfPage8
import React from "react";
import { Logo } from "../components/pages/Logo";
type PdfPage10Props = {
    formInputs: {
        proposalType: string;
    }
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
const PdfPage10 = React.forwardRef<HTMLDivElement, PdfPage10Props>(
    ({ formInputs }, ref) => {
        return <div ref={ref} className="relative h-[1700px] text-xl text-neutral-900">
            <div className="absolute top-6 right-6"> {(formInputs?.proposalType === "PropGenX" || formInputs?.proposalType === "HealthGenX") ? 9 : 10} </div>
            <div className="h-full ps-10 pe-48">
                <div className="h-full border-s ps-12">
                    <div className="pt-10">
                        <Logo />
                    </div>
                    <div className="relative mt-10 mb-20">
                        <div className="absolute top-2 -left-12 h-36 w-3 bg-gradient-to-br from-green-500 to-blue-400"></div>
                        <p className="text-3xl ">Plan of Action</p>
                        <p className="text-7xl font-black">Requirements from Client</p>
                    </div>
                    <div className="grid gap-10">
                        <div className="flex gap-6">
                            <div className="-mt-3 text-5xl font-black text-blue-500">1</div>
                            <div className="ms-2">
                                <p className="mb-2 text-3xl font-bold ">Setup to AI</p>
                                <p>
                                    Availability for 1 hour during the onboarding meeting to set
                                    up AI. To make this meeting productive, client can come
                                    prepared with the following :
                                </p>
                                <div className="mt-4 grid gap-2 ps-8 font-semibold">
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5 text-neutral-900">
                                            < Bullet />
                                        </span>
                                        <div id="i8id6r" className="">
                                            List (websites) of 4 to 5 competitors
                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5 text-neutral-900">
                                            < Bullet />

                                        </span>
                                        <div id="i8id6r" className="">
                                            4 to 5 good keywords
                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5 text-neutral-900">
                                            < Bullet />

                                        </span>
                                        <div id="i8id6r" className="">
                                            4 to 5 bad keywords
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="-mt-3 text-5xl font-black text-blue-500">2</div>
                            <div className="">
                                <p className="mb-2 text-3xl font-bold ">Providing Collaterals</p>
                                <p>
                                    Images/Media/Marketing Material required for each Ad group +
                                    High resolution logos files. The client must provide the
                                    necessary marketing collaterals (raw content, images, logo,
                                    etc.) required for the project.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="-mt-3 text-5xl font-black text-blue-500">3</div>
                            <div className="">
                                <p className="mb-2 text-3xl font-bold ">DNS Setup</p>
                                <p>
                                    DNS changes to create subdomain for hosting the landing pages.
                                </p>
                            </div>
                        </div>
                        {
                            formInputs?.proposalType === "LeadGenX" && <div className="flex gap-6">
                                <div className="-mt-3 text-5xl font-black text-blue-500">4</div>
                                <div className="">
                                    <p className="mb-2 text-3xl font-bold ">
                                        Google Ads Config / access
                                    </p>
                                    <p>
                                        For displaying information on dashboard and execution regular
                                        optimisation, provide access / user to Ad account.
                                    </p>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    })

export default PdfPage10;
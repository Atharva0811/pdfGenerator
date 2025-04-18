import React from "react";
import WhiteLogo from "../components/pages/WhiteLogo";
type PdfPage9Props = {
    formInputs: {
        proposalType: string;
    };
};

const PdfPage9 = React.forwardRef<HTMLDivElement, PdfPage9Props>(
    ({ formInputs }, ref) => {
        return <div ref={ref} className="h-[1700px] relative bg-[#272521] text-xl text-white">
            <div className="absolute top-6 right-6">
                {["PropGenX", "HealthGenX"].includes(formInputs.proposalType) ? 8 : 9}
            </div>

            <div className="h-full ps-10 pe-60">
                <div className="flex h-full flex-col justify-between border-s ps-12">
                    <div className="pt-10">
                        <div className="w-fit rounded-xl bg-white ">
                            <WhiteLogo />
                        </div>
                    </div>
                    <div className="-mt-48">
                        <div className="h-1 bg-gradient-to-br from-green-500 to-blue-400"></div>
                        <div className="  mb-14 mt-4 text-7xl font-black">
                            Execution Plan
                        </div>
                        <p className="text-3xl">
                            Comprehend the timeline and implementation
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    })

export default PdfPage9;
import React from "react";
import WhiteLogo from "../components/pages/WhiteLogo";
type PdfPage6Props = {
    formInputs: {
        proposalType: string;
    };
};



const PdfPage6 = React.forwardRef<HTMLDivElement, PdfPage6Props>(({ formInputs }, ref) => {
    return <div ref={ref} id="6" className="h-[1700px] relative bg-[#272521] text-xl text-white">
        <div className="absolute top-6 right-6">{(formInputs?.proposalType === "PropGenX" || formInputs?.proposalType === "HealthGenX") ? 5 : 6}</div>
        <div className="h-full ps-10 pe-60">
            <div className="flex h-full flex-col justify-between border-s ps-12">
                <div className="pt-10">
                    <div className="w-fit rounded-xl bg-white ">
                        <WhiteLogo />
                    </div>
                </div>
                <div className="-mt-48">
                    <div className="h-1 bg-gradient-to-br from-green-500 to-blue-400"></div>
                    <div className=" mb-14 mt-4 text-7xl font-black">Deliverables</div>
                    <p className="text-3xl">{formInputs?.proposalType === "LeadGenX" ? "Value generated for your investment" : "Value Offered"}</p>
                </div>
                <div></div>
            </div>
        </div>
    </div>
})

export default PdfPage6;
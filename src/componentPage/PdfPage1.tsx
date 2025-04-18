import React from "react";
import { Logo } from "../components/pages/Logo";

const PdfPage1 = React.forwardRef<any, { formInputs: any }>(({ formInputs }, ref) => {
  return (
    <div ref={ref} className="flex h-[1700px] text-xl flex-col text-neutral-900 justify-between">
      <div className="h-full px-10">
        <div className="flex h-full flex-col border-s ps-12">
          <div className="mt-10">
            <Logo />
          </div>
          <div className="relative mt-60 capitalize ps-2  text-9xl font-black">
            {formInputs?.proposalType}
            {
              formInputs?.proposalType !== "PropGenX" && formInputs?.proposalType !== "HealthGenX" ? (
                <p className="text-6xl font-bold mt-20">AI-Powered Google Ads</p>
              ) : null
            }
            <div className={`absolute -left-12 w-3 bg-gradient-to-br from-green-500 to-blue-400 ${formInputs?.proposalType !== "PropGenX" && formInputs?.proposalType !== "HealthGenX" ? ("h-80 top-10") : ("-top-10 h-96")}`}></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 gap-y-20 bg-slate-200 p-16 ps-24">
        <div className="col-span-12">
          <p className="text-2xl">Prepared for</p>
          <p className="text-5xl -mt-3 font-bold">{formInputs?.companyName}</p>
        </div>
        <div className="col-span-5">
          <p className="text-2xl">Presented by</p>
          <p className="text-3xl -mt-3 font-semibold">INAIWAYS TECHNOLOGY</p>
        </div>
        <div className="col-span-4">
          <p className="text-2xl">Date of proposal</p>
          <p className="text-3xl -mt-3 font-semibold">
            {new Date(formInputs?.proposalDate).toLocaleDateString('en-GB')}
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-2xl">Valid up to</p>
          <p className="text-3xl -mt-3 font-semibold">
            {new Date(formInputs?.validityDate).toLocaleDateString('en-GB')}
          </p>
        </div>
        <div className="col-span-12">
          <p className="text-2xl">sales@inaiways.com</p>
          <p className="text-3xl -mt-3 font-semibold">9272091304</p>
        </div>
      </div>
    </div>
  );
});

export default PdfPage1;

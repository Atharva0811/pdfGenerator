import React, { ForwardedRef } from "react";
import { Logo } from "../components/pages/Logo";

interface PdfPage15Props {
    formInputs: {
        proposalType: string
    }
}

const PdfPage15 = React.forwardRef<HTMLDivElement, PdfPage15Props>(
    ({ formInputs }, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <div
                ref={ref}
                className="flex h-[1700px] flex-col text-neutral-900 text-xl justify-between"
            >
                <div className="h-full px-10">
                    <div className="flex h-full flex-col justify-between border-s ps-10">
                        <div className="pt-10">
                            <Logo />
                        </div>
                        <div className="relative mt-auto text-9xl font-black pb-24">
                            THANKS
                            <div className="absolute top-0 -left-10 h-full w-3 bg-gradient-to-br from-green-500 to-blue-400"></div>
                        </div>
                    </div>
                </div>
                <div className="flex h-60 w-full flex-col justify-between bg-slate-200 p-10 ps-20">
                    <p className="text-xl font-semibold">WWW.INAIWAYS.COM</p>
                    <p className="text-end text-lg">Version v101912124</p>
                </div>
            </div>
        );
    }
);

export default PdfPage15;

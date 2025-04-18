"use client";

import { useStore } from "../../store/store";
import { useRef, useState } from "react";
import PdfPage1 from "../../componentPage/PdfPage1";
import PdfPage2 from "../../componentPage/PdfPage2";
import PdfPage15 from "../../componentPage/PdfPage15";
import { addProposal } from "../../server/actions";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PdfPage14 from "../../componentPage/PdfPage14";
import PdfPage13 from "../../componentPage/PdfPage13";
import PdfPage12 from "../../componentPage/PdfPage12";
import PdfPage11 from "../../componentPage/PdfPage11";
import PdfPage10 from "../../componentPage/Pdfpage10";
import PdfPage9 from "../../componentPage/PdfPage9";
import PdfPage8 from "../../componentPage/PdfPage8";
import PdfPage7 from "../../componentPage/PdfPage7";
import PdfPage6 from "../../componentPage/PdfPage6";
import PdfPage5 from "../../componentPage/PdfPage5";
import PdfPage4 from "../../componentPage/PdfPage4";
import PdfPage3 from "../../componentPage/PdfPage3";

const PreviewPDF = ({ reset }: { reset: () => void }) => {
    const { setPreviewModal, formInputs, setProposalsList, setIsFromTable, proposalsList, isFromTable } = useStore()
    const [isDownloading, setIsDownloading] = useState<boolean>(false);
    async function addOnlyHandler() {
        try {
            const newProposal = await addProposal(formInputs);
            setProposalsList([newProposal, ...proposalsList]);
            reset();
            setPreviewModal(false);
            toast.success("Proposal added successfully");
        } catch (error) {
            console.error("Failed to add proposal:", error);
            toast.error("Failed to add proposal. Please try again.");
        }
    }
    const pdfRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];
    async function downloadHandler() {
        setIsDownloading(true);

        const pdf = new jsPDF();
        for (let i = 0; i < pdfRefs.length; i++) {
            const element = pdfRefs[i].current;
            if (!element) continue;
            const canvas = await html2canvas(element, { scale: 1 });
            const imgData = canvas.toDataURL("image/png");
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            if (i !== 0) pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        }
        pdf.save(`${formInputs.companyName}.pdf`);
        setPreviewModal(false);

        if (isFromTable) {
            setIsFromTable(false);
        }
        if (!isFromTable) {
            const newProposal = await addProposal(formInputs);
            setProposalsList([newProposal, ...proposalsList]);
        }

        toast.success("PDF downloaded successfully");
        reset();

        setIsDownloading(false);
    }
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black/60">
                <div className="relative flex flex-col justify-between bg-white rounded-xl overflow-hidden w-[1200px] h-[640px]">
                    <div className="flex justify-between items-center p-4 bg-white">
                        <div className="text-xl font-semibold">Proposal Preview</div>
                        <div
                            onClick={() => { setPreviewModal(false); setIsFromTable(false) }}
                            className="p-1 opacity-75 hover:opacity-100 rounded-md cursor-pointer hover:bg-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="border h-full overflow-y-scroll">
                        <PdfPage1 formInputs={formInputs} ref={pdfRefs[0]} />
                        <PdfPage2 formInputs={formInputs} ref={pdfRefs[1]} />
                        <PdfPage3 formInputs={formInputs} ref={pdfRefs[2]} />
                        <PdfPage4 formInputs={formInputs} ref={pdfRefs[3]} />
                        {!["HealthGenX", "PropGenX"].includes(formInputs.proposalType) && (
                            <PdfPage5 formInputs={formInputs} ref={pdfRefs[4]} />
                        )
                        }
                        <PdfPage6 formInputs={formInputs} ref={pdfRefs[5]} />
                        <PdfPage7 formInputs={formInputs} ref={pdfRefs[6]} />
                        <PdfPage8 formInputs={formInputs} ref={pdfRefs[7]} />
                        <PdfPage9 formInputs={formInputs} ref={pdfRefs[8]} />
                        {
                            formInputs.proposalType !== "AdGenX" &&
                            <PdfPage10 formInputs={formInputs} ref={pdfRefs[9]} />
                        }
                        <PdfPage11 formInputs={formInputs} ref={pdfRefs[10]} />
                        <PdfPage12 formInputs={formInputs} ref={pdfRefs[11]} />
                        <PdfPage13 formInputs={formInputs} ref={pdfRefs[12]} />
                        {
                            formInputs.proposalType !== "AdGenX" &&
                            <PdfPage14 formInputs={formInputs} ref={pdfRefs[13]} />
                        }
                        <PdfPage15 formInputs={formInputs} ref={pdfRefs[14]} />
                    </div>

                    <div className="p-4 flex items-center gap-2.5 justify-between">
                        <div className="text-sm">
                            * Note: Spacing differs in preview, but the PDF is well-formatted.
                        </div>

                        <div className="flex gap-2.5">
                            {
                                !isFromTable && <button
                                    onClick={addOnlyHandler}
                                    className="p-2.5 cursor-pointer border border-gray-300 rounded-lg hover:bg-gray-100 px-6 text-sm col-span-2 shadow"
                                >
                                    Add Only
                                </button>
                            }


                            <button
                                disabled={isDownloading}
                                onClick={downloadHandler}
                                className="p-2.5 cursor-pointer px-6 text-sm col-span-2 text-white rounded-lg bg-primary  shadow hover:bg-primary/90"
                            >
                                {isDownloading ? "Downloading..." : "Download"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isDownloading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-50">

                    <div role="status">
                        <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin  fill-neutral-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>

                </div>
            )}
        </>
    );
};

export default PreviewPDF;

"use client";
import { useStore } from "../../store/store";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./../../schemas";
import { updateData } from "../../server/actions";
import toast from "react-hot-toast";
type FormValues = z.infer<typeof schema>;
const EditForm = () => {
    const { formInputs, setEditModal, editId, proposalsList, setProposalsList } = useStore();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            ...formInputs,
            proposalDate: formInputs?.proposalDate
                ? new Date(formInputs.proposalDate).toISOString().split("T")[0]
                : "",
            validityDate: formInputs?.validityDate
                ? new Date(formInputs.validityDate).toISOString().split("T")[0]
                : "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        try {
            const updatedProposal = { ...data, _id: editId };
            setProposalsList(proposalsList.map((proposal: any) => proposal._id === editId ? { ...updatedProposal } : proposal))
            setEditModal(false);
            toast.success("Proposal is updated");
            await updateData(updatedProposal);
        } catch (error) {
            toast.error("Failed to update proposal");
            console.error("Update Error:", error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
            <div className="relative p-10 bg-white rounded-xl overflow-hidden w-[720px]">
                <div
                    onClick={() => setEditModal(false)}
                    className="p-1 opacity-75 absolute top-6 right-6 hover:opacity-100 rounded-md cursor-pointer hover:bg-gray-100"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="text-2xl mb-6 font-semibold">Edit Details</div>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium text-sm mb-1">Proposal Type</label>
                        <select
                            className="w-full p-2 border rounded-lg"
                            {...register("proposalType")}
                            onChange={(e) => setValue("proposalType", e.target.value, { shouldValidate: true })}
                        >
                            <option value="">Select</option>
                            <option value="LeadGenX">LeadGenX</option>
                            <option value="AdGenX">AdGenX</option>
                            <option value="PropGenX">PropGenX</option>
                            <option value="HealthGenX">HealthGenX</option>
                            <option value="LeadTitanX">LeadTitanX</option>
                        </select>
                        {errors.proposalType && <p className="text-red-500 text-sm mt-1">{errors.proposalType.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium text-sm mb-1">Company Name</label>
                        <input className="w-full p-2 border rounded-lg" {...register("companyName")} />
                        {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium text-sm mb-1">SPOC Name</label>
                        <input className="w-full p-2 border rounded-lg" {...register("spocName")} />
                        {errors.spocName && <p className="text-red-500 text-sm mt-1">{errors.spocName.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium text-sm mb-1">Audience Persona</label>
                        <select
                            className="w-full p-2 border rounded-lg"
                            {...register("audiencePersona")}
                            onChange={(e) => setValue("audiencePersona", e.target.value, { shouldValidate: true })}
                        >
                            <option value="">Select</option>
                            <option value="Individuals">Individuals</option>
                            <option value="Businesses">Businesses</option>
                            <option value="Students">Students</option>
                        </select>
                        {errors.audiencePersona && <p className="text-red-500 text-sm mt-1">{errors.audiencePersona.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium text-sm mb-1">Website</label>
                        <input className="w-full p-2 border rounded-lg" {...register("website")} />
                        {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium text-sm mb-1">Google Ads Status</label>
                        <select
                            className="w-full p-2 border rounded-lg"
                            {...register("googleAdsStatus")}
                            onChange={(e) => setValue("googleAdsStatus", e.target.value, { shouldValidate: true })}
                        >
                            <option value="">Select</option>
                            <option value="Never tried Google Ads">Never tried Google Ads</option>
                            <option value="Currently doing Ads">Currently doing Ads</option>
                            <option value="Tried but stopped due to poor results">Tried but stopped due to poor results</option>
                        </select>
                        {errors.googleAdsStatus && <p className="text-red-500 text-sm mt-1">{errors.googleAdsStatus.message}</p>}
                    </div>


                    <div>
                        <label className="block font-medium text-sm mb-1">Products to be Marketed</label>
                        <input className="w-full p-2 border rounded-lg" {...register("products")} />
                        {errors.products && <p className="text-red-500 text-sm mt-1">{errors.products.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium text-sm mb-1">Location
                        </label>
                        <input className="w-full p-2 border rounded-lg" {...register("location")} />
                        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
                    </div>


                    <div>
                        <label className="block font-medium text-sm mb-1">Proposal Date</label>
                        <input type="date" className="w-full p-2 border rounded-lg" {...register("proposalDate")} />
                        {errors.proposalDate && <p className="text-red-500 text-sm mt-1">{errors.proposalDate.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium text-sm mb-1">Validity Date</label>
                        <input type="date" className="w-full p-2 border rounded-lg" {...register("validityDate")} />
                        {errors.validityDate && <p className="text-red-500 text-sm mt-1">{errors.validityDate.message}</p>}
                    </div>

                    <div>
                        <button type="submit" className="p-2.5 px-10  mt-3  rounded-lg bg-primary text-primary-foreground cursor-pointer shadow hover:bg-primary/90">
                            Update Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditForm;

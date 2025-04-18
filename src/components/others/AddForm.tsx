"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStore } from "../../store/store";
import { schema } from "../../schemas";
import PreviewPDF from "../others/PreviewPdf";
type FormValues = z.infer<typeof schema>;
const AddForm = () => {
    const { setPreviewModal, previewModal, setFormInputs } = useStore();
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });
    const onSubmit = async (data: FormValues) => {
        setPreviewModal(true)
        setFormInputs(data);

    };
    return (
        <>
            <p className="text-3xl font-black mt-8 mb-6">Proposal Form</p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-12 gap-4"
            >
                <div className="col-span-4">
                    <label className="block font-medium text-sm mb-1">
                        Proposal Type
                    </label>
                    <select
                        className="w-full p-2 border rounded-lg shadow-sm"
                        {...register("proposalType")}
                        onChange={(e) =>
                            setValue("proposalType", e.target.value, { shouldValidate: true })
                        }
                    >
                        <option value="">Select</option>
                        <option value="LeadGenX">LeadGenX</option>
                        <option value="AdGenX">AdGenX</option>
                        <option value="PropGenX">PropGenX</option>
                        <option value="HealthGenX">HealthGenX</option>
                        <option value="LeadTitanX">LeadTitanX</option>
                    </select>
                    {errors.proposalType && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.proposalType.message}
                        </p>
                    )}
                </div>

                <div className="col-span-4">
                    <label className="block font-medium text-sm mb-1">Company Name</label>
                    <input
                        className="w-full p-2 border rounded-lg shadow-sm"
                        {...register("companyName")}
                    />
                    {errors.companyName && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.companyName.message}
                        </p>
                    )}
                </div>

                <div className="col-span-4">
                    <label className="block font-medium text-sm mb-1">SPOC Name</label>
                    <input
                        className="w-full p-2 border rounded-lg shadow-sm"
                        {...register("spocName")}
                    />
                    {errors.spocName && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.spocName.message}
                        </p>
                    )}
                </div>

                <div className="col-span-4">
                    <label className="block font-medium text-sm mb-1">
                        Persona of Target Audience
                    </label>
                    <select
                        className="w-full p-2 border rounded-lg shadow-sm"
                        {...register("audiencePersona")}
                        onChange={(e) =>
                            setValue("audiencePersona", e.target.value, {
                                shouldValidate: true,
                            })
                        }
                    >
                        <option value="">Select</option>
                        <option value="Individuals">Individuals</option>
                        <option value="Businesses">Businesses</option>
                        <option value="Students">Students</option>
                    </select>
                    {errors.audiencePersona && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.audiencePersona.message}
                        </p>
                    )}
                </div>

                <div className="col-span-4">
                    <label className="block font-medium text-sm mb-1">Website</label>
                    <input
                        className="w-full p-2 border rounded-lg shadow-sm"
                        {...register("website")}
                    />
                    {errors.website && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.website.message}
                        </p>
                    )}
                </div>

                <div className="col-span-4">
                    <label className="block font-medium text-sm mb-1">
                        Status of Google Ads
                    </label>
                    <select
                        className="w-full p-2 border rounded-lg shadow-sm"
                        {...register("googleAdsStatus")}
                        onChange={(e) =>
                            setValue("googleAdsStatus", e.target.value, {
                                shouldValidate: true,
                            })
                        }
                    >
                        <option value="">Select</option>
                        <option value="Never tried Google Ads">
                            Never tried Google Ads
                        </option>
                        <option value="Currently doing Ads">Currently doing Ads</option>
                        <option value="Tried but stopped due to poor results">
                            Tried but stopped due to poor results
                        </option>
                    </select>
                    {errors.googleAdsStatus && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.googleAdsStatus.message}
                        </p>
                    )}
                </div>

                <div className="col-span-6">
                    <label className="block font-medium text-sm mb-1">
                        Products to be Marketed
                    </label>
                    <input
                        className="w-full p-2 border rounded-lg shadow-sm"
                        {...register("products")}
                    />
                    {errors.products && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.products.message}
                        </p>
                    )}
                </div>

                <div className="col-span-6">
                    <label className="block font-medium text-sm mb-1">Location</label>
                    <input
                        className="w-full p-2 border rounded-lg shadow-sm"
                        {...register("location")}
                    />
                    {errors.location && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.location.message}
                        </p>
                    )}
                </div>

                <div className="col-span-6">
                    <label className="block font-medium text-sm mb-1">
                        Proposal Date
                    </label>
                    <input
                        type="date"
                        className="w-full p-2 border rounded-lg shadow-sm"
                        {...register("proposalDate")}
                    />
                    {errors.proposalDate && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.proposalDate.message}
                        </p>
                    )}
                </div>

                <div className="col-span-6">
                    <label className="block font-medium text-sm mb-1">
                        Date of Validity
                    </label>
                    <input
                        type="date"
                        className="w-full p-2 border rounded-lg shadow-sm"
                        {...register("validityDate")}
                    />
                    {errors.validityDate && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.validityDate.message}
                        </p>
                    )}
                </div>
                <div className="col-span-3">
                    <button
                        type="submit"
                        className="p-2.5 cursor-pointer px-8 mt-3 rounded-lg bg-primary text-primary-foreground shadow hover:bg-primary/90"
                    >
                        Proceed to Review
                    </button>
                </div>
            </form>
            {
                previewModal && <PreviewPDF reset={reset} />
            }
        </>
    );
};

export default AddForm;

"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { useStore } from '../../store/store'
import { deleteProposalById } from '../../server/actions'
import toast from 'react-hot-toast'

const DeleteModal = () => {
    const { deleteProposal, setDeleteModal, deleteId } = useStore();
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    async function deleteHandler() {
        setIsDeleting(true);
        try {
            await deleteProposalById(deleteId);
            deleteProposal(deleteId);
            setDeleteModal(false);
            toast.success('Proposal has been deleted successfully');
        } catch (error) {
            console.log('Error deleting proposal:', error);
            toast.error('Failed to delete the proposal. Please try again.');
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <div className="grid place-content-center z-20 w-full h-full inset-0 fixed top-0 left-0 ">
            <div
                className="top-0 left-0 absolute inset-0 z-40 w-full h-full bg-black/60"
            ></div>
            <div className="p-5 z-50 bg-white sm:rounded-lg max-w-xl">
                <p className="text-lg text-gray-800 font-semibold">
                    Are you absolutely sure?
                </p>

                <p className="text-gray-600 mt-2">
                    Are you sure you want to delete this Proposal? This action is permanent
                    and cannot be undone.
                </p>

                <div className="sm:flex grid sm:gap-4 gap-3 mt-6 sm:mt-4 w-full sm:justify-end">
                    <Button onClick={deleteHandler}
                        disabled={isDeleting}
                        className=" sm:order-2 cursor-pointer w-full sm:w-fit"
                    >
                        {isDeleting ? "Deleting..." : "Delete"}
                    </Button>
                    <Button onClick={() => setDeleteModal(false)}
                        variant="outline"
                        className="w-full cursor-pointer sm:w-fit"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
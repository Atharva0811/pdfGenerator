"use client"
import { useStore } from '../../store/store';
import React, { useEffect, useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../ui/pagination"
import CustomDropdownMenu from '../others/DropdownMenu';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const ITEMS_PER_PAGE = 10;
const MAX_VISIBLE_PAGES = 3;
const ProposalList = ({ data }: any) => {
    const { proposalsList, setProposalsList, currentPage, searchQuery, setCurrentPage, setSearchQuery, deleteModal, editModal } = useStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProposalsList(data);
        setCurrentPage(1);
        setLoading(false);
    }, [data, searchQuery]);


    const filteredData = proposalsList.filter(
        (list: any) =>
            list.proposalType.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
            list.companyName.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
            list.spocName.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedPosts = filteredData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const getPageNumbers = (): (number | string)[] => {
        if (totalPages <= MAX_VISIBLE_PAGES)
            return [...Array(totalPages)].map((_, i) => i + 1);

        const half = Math.floor(MAX_VISIBLE_PAGES / 2);
        let start = Math.max(1, currentPage - half);
        let end = Math.min(totalPages, start + MAX_VISIBLE_PAGES - 1);

        if (end === totalPages) {
            start = Math.max(1, totalPages - MAX_VISIBLE_PAGES + 1);
        }

        const pages: (number | string)[] = [];

        if (start > 1) pages.push(1);
        if (start > 2) pages.push("...");

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPages - 1) pages.push("...");
        if (end < totalPages) pages.push(totalPages);

        return pages;
    };
    return (
        <div>
            <div className="flex items-center justify-between mt-12">
                <div className="text-3xl font-black">Proposal History</div>
                <input
                    type="text"
                    placeholder="Search here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border w-80 shadow-sm rounded-lg p-2 px-3.5"
                />
            </div>

            <div className="border mt-6 mb-10 rounded-xl overflow-hidden">
                <div className="grid-cols-12 p-4 bg-zinc-50 grid">
                    <div className="col-span-2 font-semibold text-gray-800">
                        Proposal Type
                    </div>
                    <div className="col-span-3 font-semibold text-gray-800">
                        Company Name
                    </div>
                    <div className="col-span-3 font-semibold text-gray-800">
                        SPOC Name
                    </div>
                    <div className="col-span-3 font-semibold text-gray-800">
                        Targeted To
                    </div>
                    <div className="col-span-1 font-semibold text-gray-800"></div>
                </div>
                {loading ? (
                    <div className="text-center py-8 text-gray-500 border-t">Loading...</div>
                ) : filteredData.length === 0 ? (
                    <div className="text-center py-8 text-gray-500 border-t">No results found</div>
                ) : (
                    displayedPosts.map((list: any) => (
                        <div
                            key={list._id}
                            className="grid-cols-12 items-center p-4 border-t grid"
                        >
                            <div className="col-span-2 capitalize">{list.proposalType}</div>
                            <div className="col-span-3">{list.companyName}</div>
                            <div className="col-span-3">{list.spocName}</div>
                            <div className="col-span-3 capitalize">
                                {list.audiencePersona}
                            </div>
                            <div className="col-span-1 ">
                                <CustomDropdownMenu list={list} />
                            </div>
                        </div>
                    ))
                )}

            </div>
            {filteredData.length > 0 && (
                <div className="flex justify-end w-full mb-14">
                    <Pagination>
                        <PaginationContent className="flex items-center space-x-2">
                            <PaginationItem>
                                <PaginationPrevious size="default"
                                    className="cursor-pointer border"
                                    onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                                />
                            </PaginationItem>

                            {getPageNumbers().map((page, index) => (
                                <PaginationItem key={index} className="cursor-pointer">
                                    {typeof page === "number" ? (
                                        <PaginationLink size="default"
                                            className={
                                                currentPage === page ? "bg-stone-100 border" : ""
                                            }
                                            onClick={() => setCurrentPage(page)}
                                        >
                                            {page}
                                        </PaginationLink>
                                    ) : (
                                        <PaginationEllipsis />
                                    )}
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext size="default"
                                    className="cursor-pointer border"
                                    onClick={() =>
                                        setCurrentPage(Math.min(currentPage + 1, totalPages))
                                    }
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
            {
                deleteModal && <DeleteModal />
            }
            {
                editModal && <EditModal />
            }
        </div>
    );
};

export default ProposalList;

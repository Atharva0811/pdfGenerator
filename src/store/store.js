import { create } from 'zustand';


export const useStore = create((set) => ({
    proposalsList: [],
    formInputs: {
        proposalType:"",
        companyName:"",
        spocName:"",
        audiencePersona:"",
        website:"",
        googleAdsStatus:"",
        products:"",
        location:"",
        proposalDate:"",
        validityDate:""
    },
    setFormInputs: (data) => set(() => ({
        formInputs: data
    })),
    isFromTable: false,
    setIsFromTable: (val) => set(() => ({
        isFromTable: val
    })),
    currentPage: 1,
    searchQuery: "",
    deleteModal: false,
    editModal: false,
    previewModal: false,
    deleteId: "",
    editId: "",
    setEditId: (id) => set(() => ({
        editId: id
    })),
    setDeleteId: (id) => set(() => ({
        deleteId: id
    })),
    setDeleteModal: (val) => set(() => {
        if (val) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
        return {
            deleteModal: val
        };
    }),
    setEditModal: (val) => set(() => {
        if (val) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
        return {
            editModal: val
        };
    }),
    setPreviewModal: (val) => set(() => {
        if (val) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
        return {
            previewModal: val
        };
    }),
    setProposalsList: (data) => set(() => ({
        proposalsList: data,
    })),
    setCurrentPage: (page) => set(() => ({
        currentPage: page,
    })),
    setSearchQuery: (query) => set(() => ({
        searchQuery: query,
    })),
    deleteProposal: (id) =>
        set((state) => ({
            proposalsList: state.proposalsList.filter((proposal) => proposal._id !== id),
        })),
}));

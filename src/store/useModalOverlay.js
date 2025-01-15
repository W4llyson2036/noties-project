import { create } from "zustand";

export const useModalOverlay = create((set) => ({
    isModalOverlay: false,
    setIsModalOverlay: (value) => set({ isModalOverlay: value}),
    // reset: () => set({})

}))
//rzz
// export const useFilteredCardState = create((set) => ({
//     filteredCard: 'All Cards',
//     setFilteredCard: (name) => set({ filteredCard: name }),
//     reset: () => set({ filteredCard: '' })
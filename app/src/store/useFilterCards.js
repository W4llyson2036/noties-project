import { create } from "zustand";

export const useFilteredCardState = create((set) => ({
    filteredCard: 'all-cards',
    setFilteredCard: (name) => set({ filteredCard: name }),
    reset: () => set({ filteredCard: '' })
}))
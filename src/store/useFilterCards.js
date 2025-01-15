import { create } from "zustand";

export const useFilteredCardState = create((set) => ({
    filteredCard: 'All Cards',
    setFilteredCard: (name) => set({ filteredCard: name }),
    reset: () => set({ filteredCard: 'All Cards' })
}))
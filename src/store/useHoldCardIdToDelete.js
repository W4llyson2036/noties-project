import { create } from "zustand";

export const useHoldCardIdToDelete = create((set) => ({
    cardIdToDelete: null,
    setCardIdToDelete: (value) => set({ cardIdToDelete: value}),
}))
import { create} from 'zustand';

export const useCardSearch = create((set) =>({
    searchQuery: '',
    setSearchQuery: (newValue) => set({ searchQuery: newValue }),
    cardSearchResetState: () => set({ searchQuery: ''})
}))
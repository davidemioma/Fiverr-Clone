import { create } from "zustand";

interface filterModalProps {
  isOpen: boolean;
  toggle: () => void;
  onClose: () => void;
}

const useFilterModal = create<filterModalProps>((set) => ({
  isOpen: false,
  toggle: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  onClose: () => set({ isOpen: false }),
}));

export default useFilterModal;

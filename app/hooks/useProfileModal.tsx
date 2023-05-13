import { create } from "zustand";

interface ProfileModalProps {
  isOpen: boolean;
  toggle: () => void;
  onClose: () => void;
}

const useProfileModal = create<ProfileModalProps>((set) => ({
  isOpen: false,
  toggle: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  onClose: () => set({ isOpen: false }),
}));

export default useProfileModal;

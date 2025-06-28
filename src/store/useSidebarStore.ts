import { create } from "zustand";

type SidebarState = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
  setOpen: (open: boolean) => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
  setOpen: (open: boolean) => set({ isOpen: open }),
}));

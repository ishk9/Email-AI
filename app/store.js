import { create } from 'zustand'
const useStore = create((set) => ({
  show: true,
  setShow: () => set((state) => ({ show: !state.show}))
}));

export default useStore;
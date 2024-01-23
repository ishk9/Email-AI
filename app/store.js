import { create } from 'zustand'
const useStore = create((set) => ({
  show: false,
  data: "Hello",
  setData: (data) => set({ data }),
  setShow: () => set((state) => ({ show: !state.show}))
}));

export default useStore;
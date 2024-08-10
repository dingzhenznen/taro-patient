import { create } from 'zustand'

const usePatientStore = create((set) => ({
  patient: {},
  updatePatent: (newBears) => set({ patient: newBears }),
  followList:[],
  setFollowList:(followList) =>set((state)=>({

  followList:followList
  
  })),
  showPopup:false,
  setShowPopup: ()=>set((state) => ({ showPopup: !state.showPopup })),
  currentChartData:{},
  setCurrentChartData: (data)=>set(() => ({ currentChartData: data })),
}))

export default usePatientStore;
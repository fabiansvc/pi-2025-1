import { create } from "zustand";

const useStudentStore = create((set) => ({
  currentAnimation: "Happy",

  setCurrentAnimation: (animation) => 
    set(() => ({
      currentAnimation: animation,
    })),
}));

export default useStudentStore;



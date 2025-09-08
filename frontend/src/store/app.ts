import { create } from 'zustand'

type AppState = {
  theme: 'dark' | 'light'
  setTheme: (t: 'dark' | 'light') => void
}

export const useApp = create<AppState>((set) => ({
  theme: 'dark',
  setTheme: (t) => set({ theme: t }),
}))
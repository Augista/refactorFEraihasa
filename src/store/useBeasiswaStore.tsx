import { create } from 'zustand';

import { HasilRekomendasi } from '@/pages/rekomendasi-beasiswa/types/recommendation-scholarship';

interface BeasiswaState {
  selected: HasilRekomendasi | null;
  setSelected: (data: HasilRekomendasi) => void;
  clearSelected: () => void;
}

export const useBeasiswaStore = create<BeasiswaState>((set) => ({
  selected: null,
  setSelected: (data) => set({ selected: data }),
  clearSelected: () => set({ selected: null }),
}));

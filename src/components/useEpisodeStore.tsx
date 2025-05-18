import { create } from 'zustand';

interface EpisodeStoreState {
  selectedEpisode: File | null;
  setSelectedEpisode: (episode: File | null) => void;
  favorites: number[];
  addToFavorites: (episodeId: number) => void;
  removeFromFavorites: (episodeId: number) => void;
  toggleFavorite: (episodeId: number) => void;
}

const getInitialFavorites = () => {
  const storedFavorites = localStorage.getItem('favoritePodcasts');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const useEpisodeStore = create<EpisodeStoreState>((set) => ({
  selectedEpisode: null,
  favorites: getInitialFavorites(),

  setSelectedEpisode: (episode) => set({ selectedEpisode: episode }),

  addToFavorites: (episodeId) => set((state) => {
    if (state.favorites.includes(episodeId)) return state;

    const newFavorites = [...state.favorites, episodeId];
    localStorage.setItem('favoritePodcasts', JSON.stringify(newFavorites));
    return { favorites: newFavorites };
  }),

  removeFromFavorites: (episodeId) => set((state) => {
    const newFavorites = state.favorites.filter(id => id !== episodeId);
    localStorage.setItem('favoritePodcasts', JSON.stringify(newFavorites));
    return { favorites: newFavorites };
  }),

  toggleFavorite: (episodeId) => set((state) => {
    const newFavorites = state.favorites.includes(episodeId)
      ? state.favorites.filter(id => id !== episodeId)
      : [...state.favorites, episodeId];

    localStorage.setItem('favoritePodcasts', JSON.stringify(newFavorites));
    return { favorites: newFavorites };
  }),
}));

export default useEpisodeStore;
export type { EpisodeStoreState };

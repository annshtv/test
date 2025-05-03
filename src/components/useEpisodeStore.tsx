import { create } from 'zustand';
const useEpisodeStore = create((set) => ({
  selectedEpisode: {
    img: 'coverr1.png',
    alt: 'Are you a Perplexed Mind Person?',
    ep: 'Eps. 1',
    title: 'Are you a Perplexed Mind Person?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    tags: ['mind behaviour', 'health'],
    categories: ['Health', 'Productivity'],
    host: 'Jane Doe',
    date: 'Sep 22, 2021'
  },

  setSelectedEpisode: (episode: unknown) => set({ selectedEpisode: episode }),
}));

export default useEpisodeStore;
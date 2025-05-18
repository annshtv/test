import { useState, useEffect } from "react";
import '../App.css';
import NavbarAcc from "../components/Navbar/NavbarAcc";
import { Trash2, Heart } from 'lucide-react';

function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [favoriteEpisodes, setFavoriteEpisodes] = useState<number[]>([]);
  type Episode = {
    id: number;
    img: string;
    alt: string;
    ep: string;
    title: string;
    desc: string;
    tags: string[];
    categories: string[];
    host: string;
    date: string;
    duration: string;
  };

  const [allEpisodes, setAllEpisodes] = useState<Episode[]>([]);
  
  const [userData, setUserData] = useState({
    username: 'PodcastLover',
    email: 'podcast@example.com',
    joinDate: new Date().toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    subscribedPodcasts: 24,
    listenedEpisodes: 178,
    favoriteCategories: ['Psichology', 'Science', 'History', 'Philosophy'],
  });
  
  // Данные о всех эпизодах для сопоставления с избранными
  useEffect(() => {
    const episodes = [
      {
        id: 1,
        img: 'cover.png',
        alt: 'Pandemic Becoming Endemic',
        ep: 'Eps. 6',
        title: 'Pandemic Becoming Endemic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
        tags: ['covid-19', 'health'],
        categories: ['Health', 'News'],
        host: 'Jane Doe',
        date: 'Oct 15, 2021',
        duration: '54 мин'
      },
      {
        id: 2,
        img: 'coverr5.png',
        alt: 'Tesla Autopilot Controversy',
        ep: 'Eps. 5',
        title: 'Tesla Autopilot Controversy',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
        tags: ['automation', 'tech'],
        categories: ['Tech', 'News'],
        host: 'John Smith',
        date: 'Oct 8, 2021',
        duration: '48 мин'
      },
      {
        id: 3,
        img: 'coverr4.png',
        alt: "Women's Rights? Is it alright?",
        ep: 'Eps. 4',
        title: "Women's Rights? Is it alright?",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
        tags: ["women's rights"],
        categories: ['Social Issues', 'News'],
        host: 'Sarah Johnson',
        date: 'Oct 1, 2021',
        duration: '62 мин'
      },
      {
        id: 4,
        img: 'coverr3.png',
        alt: 'How to Deal with Self-Confidence',
        ep: 'Eps. 3',
        title: 'How to Deal with Self-Confidence',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
        tags: ['self-esteem', 'health'],
        categories: ['Health', 'Tips & Trick'],
        host: 'Alex Williams',
        date: 'Sep 24, 2021',
        duration: '58 мин'
      },
      {
        id: 5,
        img: 'coverr2.png',
        alt: 'Type of Social Classes of People',
        ep: 'Eps. 2',
        title: 'Type of Social Classes of People',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['social class', 'wealth'],
        categories: ['Social Issues', 'Business'],
        host: 'Michael Brown',
        date: 'Sep 17, 2021',
        duration: '45 мин'
      },
      {
        id: 6,
        img: 'coverr1.png',
        alt: 'Are you a Perplexed Mind Person?',
        ep: 'Eps. 1',
        title: 'Are you a Perplexed Mind Person?',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
        tags: ['mind behaviour', 'health'],
        categories: ['Health', 'Productivity'],
        host: 'Jane Doe',
        date: 'Sep 22, 2021',
        duration: '42 мин'
      },
    ];
    setAllEpisodes(episodes);
  }, []);

  // Загрузка избранных подкастов из localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoritePodcasts');
    if (storedFavorites) {
      setFavoriteEpisodes(JSON.parse(storedFavorites));
    }
  }, []);

  // Обновление данных пользователя при изменении избранных подкастов
  useEffect(() => {
    setUserData(prevData => ({
      ...prevData,
      subscribedPodcasts: favoriteEpisodes.length + 24 // Добавляем базовое значение 24
    }));
  }, [favoriteEpisodes]);

  const recentPodcasts = [
    { id: 1, title: 'Self-confidence', episode: 'Как обрести уверенность', date: '25 апреля 2025', duration: '58 мин' },
    { id: 2, title: 'Perplexed mind', episode: 'Загадки сознания', date: '20 апреля 2025', duration: '42 мин' },
    { id: 3, title: 'Home peace', episode: 'Гармония в семье', date: '15 апреля 2025', duration: '65 мин' },
  ];

  // Функция для получения избранных подкастов
  const getFavoritePodcasts = () => {
    return allEpisodes.filter(episode => favoriteEpisodes.includes(episode.id));
  };

  // Функция для удаления подкаста из избранного
  const removeFromFavorites = (episodeId: number) => {
    const updatedFavorites = favoriteEpisodes.filter(id => id !== episodeId);
    setFavoriteEpisodes(updatedFavorites);
    localStorage.setItem('favoritePodcasts', JSON.stringify(updatedFavorites));
  };
  
  const lastWordStyling = (text: string) => {
    const words = text.split(" ");
    const lastWord = words.pop();
    return {
      __html: `${words.join(
        " "
      )}<br /><span class="last-word">${lastWord}</span>`,
    };
  };

  return (
    <>
       <div className="bg-[#f7ede8] min-h-screen text-black font-sans">
      <NavbarAcc />

      <div className="text-center py-16 px-4">
        <h1
          className="text-[72px] md:text-[96px] font-bold leading-none tracking-tight font-[Montserrat Alternates]"
          dangerouslySetInnerHTML={lastWordStyling("Your Account")}
        ></h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Manage your profile, check your activity, and customize your podcast experience.
        </p>
      </div>

      <div className="bg-[#f7ede8] rounded-lg px-6 md:px-12 py-8 mb-10 relative">
        <div className="absolute top-4 right-6">
    
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl">
            👤
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold">{userData.username}</h2>
            <p className="text-gray-600">{userData.email}</p>
            <p className="text-sm text-gray-500 mt-1">With us {userData.joinDate}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="border border-gray-200 rounded-lg p-4 text-center bg-white">
                <span className="text-red-500 text-2xl font-bold block">
                  {userData.subscribedPodcasts}
                </span>
                <span className="text-sm text-gray-600">Subscribes</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center bg-white">
                <span className="text-red-500 text-2xl font-bold block">
                  {userData.listenedEpisodes}
                </span>
                <span className="text-sm text-gray-600">Listened</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-white">
                <span className="text-sm text-gray-600 block mb-2">Favourite category:</span>
                <div className="flex flex-wrap gap-2">
                  {userData.favoriteCategories.map((category, index) => (
                    <span
                      key={index}
                      className="text-xs bg-amber-100 px-2 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 border-b border-gray-200 px-6 md:px-12">
        <div className="flex space-x-6 text-lg">
          {["profile", "recent", "favorites", "settings"].map((tab) => (
            <button
              key={tab}
              className={`pb-3 px-1 transition ${
                activeTab === tab
                  ? "font-bold border-b-2 border-red-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {{
                profile: "Profile",
                recent: "History",
                favorites: "Favourite",
                settings: "Settings",
              }[tab]}
            </button>
          ))}
        </div>
      </div>
      <div className="px-6 md:px-12 pb-12">
        {activeTab === "profile" && <div></div>}
        
        {activeTab === "recent" && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Recently Listened</h3>
            {recentPodcasts.map((podcast) => (
              <div key={podcast.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                    🎧
                  </div>
                  <div>
                    <h4 className="font-bold">{podcast.title}</h4>
                    <p className="text-sm text-gray-600">{podcast.episode}</p>
                    <div className="text-xs text-gray-500 flex gap-3 mt-1">
                      <span>{podcast.date}</span>
                      <span>•</span>
                      <span>{podcast.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Heart size={18} color="#CD4631" fill="#CD4631" fillOpacity={activeTab === "recent" ? 1 : 0} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === "favorites" && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Your Favorite Podcasts</h3>
            {getFavoritePodcasts().length > 0 ? (
              getFavoritePodcasts().map((podcast) => (
                <div key={podcast.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden mr-4">
                      <img 
                        src={`pictures/${podcast.img}`} 
                        alt={podcast.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{podcast.title}</h4>
                      <p className="text-sm text-gray-600">{podcast.ep}</p>
                      <div className="text-xs text-gray-500 flex gap-3 mt-1">
                        <span>{podcast.date}</span>
                        <span>•</span>
                        <span>{podcast.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      className="p-2 hover:bg-gray-100 rounded-full"
                      onClick={() => removeFromFavorites(podcast.id)}
                      title="Remove from favorites"
                    >
                      <Trash2 size={18} color="#CD4631" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>У вас пока нет избранных подкастов</p>
                <p className="mt-2 text-sm">Добавьте подкасты в избранное, нажав на сердечко на карточке подкаста</p>
              </div>
            )}
          </div>
        )}
        
        {activeTab === "settings" && <div></div>}
      </div>

      <footer className="px-6 md:px-12 py-8 text-center text-sm text-gray-500 bg-[#f7ede8]">
        <h3 className="text-2xl font-bold mb-3">
          Talk. Listen. Get inspired
          <br />by every minute of it.
        </h3>
        <div className="mt-8">© 2025 Pod of Cast.</div>
      </footer>
    </div>
    </>
  );
}

export default AccountPage;
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import ButtonSubscribe from "../UI/Buttons/ButtonSubscribe";
import '../App.css';

const HeaderWrapper = styled.div`

  .header {
    background-color: #f7ede8;
    padding: 0px;
    min-height: 1448px;
    max-width: 100%;
    background-image: url("pictures/Header.png");
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    align-items: center;
    background-size: cover;
  }

  .navigation p {

    font-family: Montserrat Alternates;
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    color: #000;
  }

  .menus {
    display: flex;
    gap: 60px;
    max-width: 1160px;
    align-items: baseline;
  }
  .b1 {
    font-family: Montserrat Alternates;
    border: 2px solid #000;
    font-weight: bold;
    border-radius: 8px;
    width: 188px;
    height: 41px;
    background-color: #f7ede8;
  }
  .buttons {
    gap: 20px;
    display: flex;
  }
  .accountPage h1 {
    font-family: Montserrat Alternates, sans-serif;
    font-weight: 700;
    font-size: 96px;
    line-height: 100%;
    letter-spacing: -0.04em;
    text-align: center;
    color: #000;
  }
  .last-word {
    color: #cd4631;
  }
  .accountPage p {
    font-family: Montserrat Alternates;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #4d4d4d;
  }
`;
function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  
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
    favoriteCategories: ['Психология', 'Наука', 'Истории']
  });
  

  const recentPodcasts = [
    { id: 1, title: 'Self-confidence', episode: 'Как обрести уверенность', date: '25 апреля 2025', duration: '58 мин' },
    { id: 2, title: 'Perplexed mind', episode: 'Загадки сознания', date: '20 апреля 2025', duration: '42 мин' },
    { id: 3, title: 'Home peace', episode: 'Гармония в семье', date: '15 апреля 2025', duration: '65 мин' },
  ];

  const favoritePodcasts = [
    { id: 4, title: 'Социальные связи', episode: 'Как строить отношения', date: '10 апреля 2025', duration: '72 мин' },
    { id: 5, title: 'Психология повседневности', episode: 'Эмоциональный интеллект', date: '5 апреля 2025', duration: '46 мин' },
    { id: 2, title: 'Perplexed mind', episode: 'Загадки сознания', date: '20 апреля 2025', duration: '42 мин' },
  ];
  

  const handleLogout = () => {
    alert('Выход из аккаунта...');

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
      <Navbar />

      <div className="text-center py-16 px-4">
        <h1
          className="text-[72px] md:text-[96px] font-bold leading-none tracking-tight font-[Montserrat Alternates]"
          dangerouslySetInnerHTML={lastWordStyling("Your Account")}
        ></h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Manage your profile, check your activity, and customize your podcast experience.
        </p>
      </div>

      <div className="bg-[#f7ede8] rounded-lg px-6 md:px-12 py-8 mb-10 relative fon">
        <div className="absolute top-4 right-6">
          <ButtonSubscribe onClick={handleLogout} children={'LOGOUT'}></ButtonSubscribe>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl">
            👤
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold">{userData.username}</h2>
            <p className="text-gray-600">{userData.email}</p>
            <p className="text-sm text-gray-500 mt-1">На сайте с {userData.joinDate}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="border border-gray-200 rounded-lg p-4 text-center bg-[white]">
                <span className="text-red-500 text-2xl font-bold block">
                  {userData.subscribedPodcasts}
                </span>
                <span className="text-sm text-gray-600">Подписок</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center bg-[white]">
                <span className="text-red-500 text-2xl font-bold block">
                  {userData.listenedEpisodes}
                </span>
                <span className="text-sm text-gray-600">Прослушано</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-[white]">
                <span className="text-sm text-gray-600 block mb-2">Любимые категории:</span>
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
                profile: "Профиль",
                recent: "История",
                favorites: "Избранное",
                settings: "Настройки",
              }[tab]}
            </button>
          ))}
        </div>
      </div>
      <div className="px-6 md:px-12 pb-12">
        {activeTab === "profile" && <div></div>}
        {activeTab === "recent" && <div></div>}
        {activeTab === "favorites" && <div></div>}
        {activeTab === "settings" && <div></div>}
      </div>

      <footer className="px-6 md:px-12 py-8 text-center text-sm text-gray-500 bg-[#f7ede8]">
        <h3 className="text-2xl font-bold mb-3">
          Talk. Listen. Get inspired
          <br />by every minute of it.
        </h3>
        <div className="mt-8">© 2025 Pod of Cast. Все права защищены.</div>
      </footer>
    </div>
    </>
  );
}

export default AccountPage;

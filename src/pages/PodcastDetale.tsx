import { useEffect, useState } from "react";
import DownLoad from "../components/DownLoad";
import "../index.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import PodcastCarts from "../components/PodcastCarts";
import ButtonSubscribe from "../UI/Buttons/ButtonSubscribe";
import useEpisodeStore from "../components/useEpisodeStore";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

function PodcastDetale() {
  const selectedEpisode = useEpisodeStore((state) => state.selectedEpisode);
  const [podcasts, setPodcasts] = useState([]);
  const [audioUrl, setAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetch("https://radio-t.com/site-api/last/5?categories=podcast")
      .then((response) => response.json())
      .then((data) => {
        console.log("Последние 5 подкастов:", data);
        setPodcasts(data);
      })
      .catch((error) => {
        console.error("Ошибка при получении подкастов:", error);
      });
  }, []);

  const playRandomPodcast = () => {
    if (podcasts.length === 0) {
      console.error("Список подкастов пуст");
      return;
    }
    const randomIndex = Math.floor(Math.random() * podcasts.length);
    const randomPodcast = podcasts[randomIndex];

    if (randomPodcast && randomPodcast.audio_url) {
      const podcastUrl = randomPodcast.audio_url;
      console.log("Воспроизведение подкаста:", randomPodcast.title);
      if (isPlaying) {
        const audioElement = document.getElementById("podcast-audio") as HTMLAudioElement | null;
        if (audioElement) {
          audioElement.pause();
        }
      }
      setAudioUrl(podcastUrl);
      setIsPlaying(true);

      setTimeout(() => {
        const audioElement = document.getElementById("podcast-audio") as HTMLAudioElement | null;
        if (audioElement) {
          audioElement.play().catch((err: unknown) => {
            console.error("Ошибка воспроизведения:", err);
          });
        }
      }, 100);
    } else {
      console.error("У выбранного подкаста нет URL аудио");
    }
  };

  if (!selectedEpisode) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-20 text-gray-500 text-xl">
          Эпизод не выбран
        </div>
        <Footer />
      </>
    );
  }
  const subscribe = () => {
    alert('We sent you an email with the subscription link!');
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center gap-[118px] bg-[#f7ede8;] pt-[100px] pb-[40px] bg-[url('pictures/Episode.png')] bg-cover bg-center">
        <div className="">
          <img src={`pictures/${selectedEpisode.img}`} alt={selectedEpisode.alt} />
          <div className="flex justify-around items-center flex-row mt-[80px]">
            <p className="font-bold text-[14px] leading-[160%] text-[#4d4d4d]">
              Tags:
            </p>
            <div className="flex gap-[10px]">
              {selectedEpisode.tags.map(
                (
                  tag:
                    | string
                    | number
                    | boolean
                    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined,
                  index: Key | null | undefined
                ) => (
                  <p
                    key={index}
                    className="border border-[#4d4d4d] rounded-[4px] py-[6px] p-[5px] h-[34px] font-medium text-[14px] leading-[160%] text-[#4d4d4d]"
                  >
                    {tag}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[25px]">
          <div className="flex justify-between">
            <p className="font-bold text-[16px] leading-[160%] text-[#cd4631]">
              {selectedEpisode.ep}
            </p>
            {selectedEpisode.ep === "Eps. 1" && (
              <p className="font-bold text-[12px] leading-[160%] text-[#cd4631] border border-[#cd4631] rounded-[4px] px-[6px] py-[3px] w-[150px] h-[25px]">
                FEATURED EPISODE
              </p>
            )}
          </div>
          <h2 className="font-bold text-[36px] leading-[100%] tracking-[-0.02em] text-black">
            {selectedEpisode.title}
          </h2>
          <p className="font-medium text-[16px] leading-[160%] text-[#4d4d4d]">
            {selectedEpisode.desc}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[10px]">
              <img src="pictures/avatarka.png" alt="" />
              <p>Hosted by: {selectedEpisode.host}</p>
            </div>
            <div>{selectedEpisode.date}</div>
          </div>
          <div className="flex gap-[20px] ">
            <ButtonSubscribe onClick={subscribe}
              children={"SUBSCRIBE"}
              style={{ width: "160px", height: "62px" }}
            />
            <button
              className="flex justify-center items-baseline border-2 border-black rounded-lg py-5 w-[268px] h-[64px] shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] bg-[rgba(255,255,255,0.01)]"
              onClick={playRandomPodcast}
            >
              <svg
                width="11"
                height="15"
                viewBox="0 0 11 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 7.48867C11 5.59603 1.85356 -0.458727 0.816006 0.629958C-0.221548 1.71864 -0.321313 13.1561 0.816006 14.3474C1.95333 15.5428 11 9.38131 11 7.48867Z"
                  fill="black"
                />
              </svg>
              LISTEN NOW
            </button>
          </div>
          {audioUrl && (
            <audio
              id="podcast-audio"
              src={audioUrl}
              controls={isPlaying}
              className={isPlaying ? "mt-4 w-full color-#81ADC8" : "hidden"}
              onEnded={() => setIsPlaying(false)}
            />
          )}
        </div>
      </div>
      <div className="pb-[140px] max-w-[1200px] mx-auto">
        <h2 className="font-bold text-[59px] leading-[120%] tracking-[-0.02em] text-center text-black mt-[140px] mb-[140px]">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
          Latest Episode
        </h2>

        <PodcastCarts />
      </div>
      <DownLoad />
      <Footer />
    </>
  );
}

export default PodcastDetale;

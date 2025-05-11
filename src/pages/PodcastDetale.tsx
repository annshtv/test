import { useEffect, useState } from "react";
import DownLoad from "../components/DownLoad";
import '../index.css'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import PodcastCarts from "../components/PodcastCarts";
import ButtonSubscribe from "../UI/Buttons/ButtonSubscribe";
import useEpisodeStore from '../components/useEpisodeStore';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

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
    
    if (randomPodcast && randomPodcast.audio_url && randomPodcast.audio_url) {
      const podcastUrl = randomPodcast.audio_url;
      console.log("Воспроизведение подкаста:", randomPodcast.title);
      if (isPlaying) {
        const audioElement = document.getElementById("podcast-audio");
        if (audioElement) {
          audioElement.pause();
        }
      }
      setAudioUrl(podcastUrl);
      setIsPlaying(true);

      setTimeout(() => {
        const audioElement = document.getElementById("podcast-audio");
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
              {selectedEpisode.tags.map((tag: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
                <p key={index} className="border border-[#4d4d4d] rounded-[4px] py-[6px] p-[5px] h-[34px] font-medium text-[14px] leading-[160%] text-[#4d4d4d]">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[25px]">
          <div className="flex justify-between">
            <p className="font-bold text-[16px] leading-[160%] text-[#cd4631]">
              {selectedEpisode.ep}
            </p>
            {selectedEpisode.ep === 'Eps. 1' && (
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
            <ButtonSubscribe
              children={"SUBSCRIBE"}
              style={{ width: "160px", height: "62px" }}
            ></ButtonSubscribe>
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
              LISTEN NOW (46 min)
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
            <path
              d="M61.7292 59.1452C61.4792 58.1452 61.3334 57.3327 61.0626 56.541C58.3542 48.541 54.0001 41.416 49.0417 34.6452C48.4584 33.8535 47.7292 33.1035 46.9167 32.6035C46.4792 32.3327 45.6042 32.3744 45.1042 32.6452C44.7292 32.8535 44.4584 33.666 44.5417 34.1244C44.6876 34.9994 45.0001 35.8952 45.4376 36.6869C48.3126 41.916 51.2084 47.1244 54.1459 52.3119C55.2501 54.2494 56.4167 56.166 57.5626 58.0827C57.9376 58.7285 58.3542 59.3535 58.7917 59.9369C59.2709 60.6035 60.0001 60.9994 60.7292 60.5619C61.2084 60.2702 61.7292 60.0619 61.7292 59.1452Z"
              fill="#CD4631"
            />
            <path
              d="M32.2291 90.1667C33.2291 90 34.3958 89.875 35.5208 89.625C39.9583 88.625 44.3958 87.625 48.8125 86.5833C49.7708 86.3542 50.7083 85.9583 51.5625 85.5C52.7083 84.8958 53.1041 84.0417 52.9166 83.1042C52.7291 82.1667 51.9792 81.5833 50.6667 81.5625C49.7708 81.5417 48.8125 81.5625 47.9583 81.7708C42.3541 83.1875 36.75 84.6458 31.1667 86.125C30.5417 86.2917 29.8958 86.5833 29.4167 87C28.2083 88.0208 28.5833 89.625 30.125 90.0208C30.7292 90.1667 31.4166 90.1042 32.2291 90.1667Z"
              fill="#CD4631"
            />
            <path
              d="M90.7708 34.3121C90.6875 33.333 90.4791 32.3538 90.2291 31.3955C90 30.5413 89.4166 29.9371 88.4791 29.8538C87.6875 29.7913 86.8333 30.583 86.7083 31.6246C86.5416 33.0205 86.3958 34.4371 86.4583 35.833C86.6458 40.0413 86.9166 44.2705 87.2083 48.4788C87.3125 49.8746 87.5 51.2705 87.7291 52.6663C87.8125 53.1455 87.9791 53.6455 88.25 54.0205C88.9791 55.083 90.3125 54.9996 90.8333 53.8538C91.125 53.208 91.25 52.4163 91.25 51.708C91.3541 49.3746 91.0416 37.7705 90.7708 34.3121Z"
              fill="#CD4631"
            />
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
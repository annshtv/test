import { useState, useEffect, useRef } from "react";

function PodcastPlayer({ audioUrl, title, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.error("Ошибка автоматического воспроизведения:", err);
      });
    }
  }, [audioUrl]);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg w-full mt-4">
      <div className="flex justify-between items-center mb-2">
        <div className="font-medium text-lg truncate">{title || "Случайный подкаст"}</div>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={togglePlayPause}
          className="w-10 h-10 flex items-center justify-center bg-[#cd4631] rounded-full text-white"
        >
          {isPlaying ? (
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="3" height="14" rx="1" fill="white"/>
              <rect x="8" y="1" width="3" height="14" rx="1" fill="white"/>
            </svg>
          ) : (
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 7.5L1.5 14V1L11 7.5Z" fill="white" stroke="white"/>
            </svg>
          )}
        </button>
        
        <div className="flex-grow flex items-center gap-2">
          <span className="text-sm text-gray-600 w-10">{formatTime(currentTime)}</span>
          <input 
            type="range" 
            min="0" 
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-600 w-10">{formatTime(duration)}</span>
        </div>
      </div>
      
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
    </div>
  );
}

export default PodcastPlayer;
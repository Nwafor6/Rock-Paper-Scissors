import React, { useEffect, useState } from 'react';

const BgMusic = () => {
  const [backgroundMusic] = useState(new Audio('/music/Ancientword.mp3')); // Adjust the file path if needed
  const [musicStarted, setMusicStarted] = useState(false);
  useEffect(() => {
    backgroundMusic.loop = true; // Make the music loop continuously
    backgroundMusic.volume = 1.0; // Set the volume (0.0 to 1.0)

    return () => {
      backgroundMusic.pause();
    };
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts
  const startMusic = () => {
    backgroundMusic.play().then(() => {
      setMusicStarted(true);
      document.querySelector("#playSound").style.display="none"
      document.querySelector("#stopSound").style.display="block"
    }).catch((error) => {
      console.error('Failed to start background music:', error);
    });
  };
  const stopMusic = () => {
    backgroundMusic.pause()
      setMusicStarted(false);
      document.querySelector("#playSound").style.display="block"
      document.querySelector("#stopSound").style.display="none"
  };
  return (
    <div className="rules">
        <div className="text-white playSound">
            <h3>
            <button onClick={startMusic} id='playSound'>
                Sound
            </button>
            <button onClick={stopMusic} id='stopSound'>
                Pause
            </button>
            </h3>
        </div>
    </div>
  );
};

export default BgMusic;

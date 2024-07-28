import React, { useRef, useState } from "react";
import "./Video.css";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      ></video>
      {/* VideoFooter */}
      {/* VideoSidebar */}
    </div>
  );
}

export default Video;

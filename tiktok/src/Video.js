import React from 'react';
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video 
      className='video__player'
      loop
      src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
      {/* VideoFooter */}
      {/* VideoSidebar */}
    </div>
  );
}

export default Video;

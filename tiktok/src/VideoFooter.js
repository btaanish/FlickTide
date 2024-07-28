import React from "react";
import "./VideoFooter.css";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@john_doe</h3>
        <p>This is some description</p>
        <div className="videoFooter__ticker">
          <AudiotrackIcon className="videoFooter__icon" />
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;

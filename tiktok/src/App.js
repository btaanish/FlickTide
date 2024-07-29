import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://www.w3schools.com/html/mov_bbb.mp4"
          channel={"John Doe"}
          description={"The Sound of Music"}
          song={"Doh a dear a female dear"}
          likes={354}
          shares={371}
          messages={1111111}
        />
        <Video
          url="https://www.w3schools.com/html/mov_bbb.mp4"
          channel={"John Doe"}
          description={"The Sound of Music"}
          song={"Doh a dear a female dear"}
          likes={354}
          shares={371}
          messages={1111111}
        />
      </div>

      {/* app container */}
      {/* videos */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}
    </div>
  );
}

export default App;

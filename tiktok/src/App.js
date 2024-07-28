import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>Let's build a Fullstack MERN TikTok</h1>
      <div className="app__videos">
        <Video />
        <Video />
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

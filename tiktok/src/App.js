import axios from "./axios";
import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
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

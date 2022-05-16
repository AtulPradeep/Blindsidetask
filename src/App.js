import React,{useState,useEffect} from "react";
import "./App.css";
import youtube from "./apis/youtubeapi";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import Search from "./components/Search"


const App = ({currentUser}) => {
  
  const [videos,setVideos] = useState([]);
  const [selectedVideos,setSelectedVideos] = useState("");

  //Selected video
  const onSelectVideo = (video) => {
    setSelectedVideos(video);
  };
  
  // Use effect - Renders once with empty [] with initialpage looking for React advance on search bar
  useEffect(() => {
    onTermSubmit("React advance");
  }, [])

  const onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    
    setVideos(res.data.items);
      setSelectedVideos(res.data.items[0]);
      
    
  };
  
    return (
      <>
     
        <div className="container">
          <div className="row yt">
            <h1 className="text-center col-md-12">
              &nbsp; Blindside video task
            </h1>
          </div>
          <div className="row my-2">
            <div className="col-md-8">
              <Search onFormSubmit={onTermSubmit} />
              <VideoDetails currentUser={currentUser} video={selectedVideos}/>
            </div>
            <div className="col-md-4">
              <VideoList
                videos={videos}
                onSelectVideo={onSelectVideo}
              />
            </div>
          </div>
        </div>
      </>
    );
  
}

export default App;

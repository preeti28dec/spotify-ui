
import './App.css';
import Home from './components/Home';

import React, {  useState } from "react";

import { MusicContext } from "./components/right-sidebar";

function App() {
  const [state, setState] = useState({
   tracks : [
      {Sno:1, id: require("./assets/sample1.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'world1', name: "singer Name1", dateAdded: "2 hour ago", content: 'Welcome to learning React!', time: "4:02" },
      {Sno:2, id: require("./assets/sample2.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World2', name: "singer Name2", dateAdded: "2 hour ago", content: 'You React from npm.', time: "4:02" },
      {Sno:3, id: require("./assets/sample3.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World3', name: "singer Name3", dateAdded: "2 hour ago", content: 'You can install npm.', time: "4:02" },
      {Sno:4, id: require("./assets/sample4.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World4', name: "singer Name4", dateAdded: "2 hour ago", content: 'You can install React from.', time: "4:02" },
      {Sno:5, id: require("./assets/sample5.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World5', name: "singer Name5", dateAdded: "2 hour ago", content: ' install React from npm.', time: "4:02" },
      {Sno:6, id: require("./assets/sample6.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World6', name: "singer Name6", dateAdded: "2 hour ago", content: ' React from npm.', time: "4:02" },
      {Sno:7, id: require("./assets/sample8.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World7', name: "singer Name7", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
      {Sno:8, id: require("./assets/sample1.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World8', name: "singer Name8", dateAdded: "2 hour ago", content: 'You can install React from.', time: "4:02" },
      {Sno:9, id: require("./assets/sample2.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World9', name: "singer Name9", dateAdded: "2 hour ago", content: ' install React from npm.', time: "4:02" },
      {Sno:10,id: require("./assets/sample3.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World10', name: "singer Name10", dateAdded: "2 hour ago", content: ' React from npm.', time: "4:02" },
      {Sno:11,id: require("./assets/sample4.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World11', name: "singer Name11", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
      {Sno:12,id: require("./assets/sample5.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World12', name: "singer Name12", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
      {Sno:13,id: require("./assets/sample6.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World13', name: "singer Name13", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
      {Sno:14,id: require("./assets/sample8.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World14', name: "singer Name14", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
      {Sno:15,id: require("./assets/sample1.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World15', name: "singer Name15", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
      {Sno:16,id: require("./assets/sample2.mp3"), src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World16', name: "singer Name16", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
  ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  
  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className='App w-screen h-screen overflow-hidden flex flex-col'>
      <Home/>
      </div>
    </MusicContext.Provider>
  );
}

export default App;
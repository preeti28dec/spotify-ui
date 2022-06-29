import { useContext } from "react";
import { MusicContext } from '../components/right-sidebar';

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicContext);

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      setState({ ...state, currentTrackIndex: index, isPlaying: true });
    }
  }
  function togglePlay() {
    setState(s=>({ ...s, isPlaying: !s.isPlaying }));
    
  }
  function playPreviousTrack() {
    let newIndex = null;
    state.currentTrackIndex === 0
      ? (newIndex = state.tracks.length - 1)
      : (newIndex = state.currentTrackIndex - 1);
    playTrack(newIndex);
  }

  function playNextTrack() {
    let newIndex = null;
    state.currentTrackIndex === state.tracks.length - 1
      ? (newIndex = 0)
      : (newIndex = state.currentTrackIndex + 1);
    playTrack(newIndex);
  }
  return {
    playTrack,
    togglePlay,
    currentTrackSno:state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].Sno,
    currentTrackIndex:state.currentTrackIndex,
    currentTrackId:state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].id,
    currentTrackImg:state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].src,
    currentTrackName:state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
    currentTrackTitle:state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].title,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;

import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST } from '../constants';

export const startPlaying = function () {
  return {
    type: START_PLAYING
  };
};

export const stopPlaying = function () {
  return {
    type: STOP_PLAYING,
    isPlaying: false
  };
};

export const setCurrentSong = function (currentSong) {
  return {
    type: SET_CURRENT_SONG,
    currentSong

  };
};

export const setList = function (currentSongList) {
  return {
    type: SET_LIST,
    currentSongList
  };
};



  // play () {
  //   AUDIO.play();
  //   this.setState({ isPlaying: true });
  // }

  // pause () {
  //   AUDIO.pause();
  //   this.setState({ isPlaying: false });
  // }

  // load (currentSong, currentSongList) {
  //   AUDIO.src = currentSong.audioUrl;
  //   AUDIO.load();
  //   this.setState({ currentSong, currentSongList });
  // }
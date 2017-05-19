// import {SET_LYRICS} from '../constants';

//DOES NOT WORK 
import SET_LYRICS from '../constants';

console.log(SET_LYRICS);
export const setLyrics = function (text) {
  return {
    type: SET_LYRICS,
    lyric: text
  };
};
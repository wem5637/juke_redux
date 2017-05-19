import React from 'react';
import store from '../store';
// console.log('should be store:', store);
import Lyrics from '../components/Lyrics';
import { setLyrics, fetchLyrics } from '../action-creators/lyrics'
// console.log("setLyrics", setLyrics)
import axios from 'axios'

export default class LyricsContainer extends React.Component {

    constructor() {
        super();
        this.state = Object.assign({
            artistQuery: '',
            songQuery: ''

        }, store.getState());

        this.handleArtistInput = this.handleArtistInput.bind(this);
        this.handleSongInput = this.handleSongInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            const newState = store.getState();
            this.setState(newState);
        })

    }

    componentWillUnmount() {
        this.unsubscribe();

    }


    handleArtistInput(artist) {

        this.setState({ artistQuery: artist });

    }


    handleSongInput(song) {

        this.setState({ songQuery: song });
    }

    handleSubmit(event) {
        if (this.state.artistQuery && this.state.songQuery) {
            store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery))
        // axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
        // .then(res => {
        //     // store.dispatch(setLyrics(res.data.lyric)))
        //     const lyrics = setLyrics(res.data.lyric)
        //     store.dispatch(lyrics)
        // })
        }
    }

    render() {
        return (
            <Lyrics
                text = { this.state.lyrics.text }
                setArtist = { this.handleArtistInput }
                setSong = { this.handleSongInput }
                artistQuery = { this.state.artistQuery }
                songQuery = { this.state.songQuery }
                handleSubmit = { this.handleSubmit }
            />
        )
    }
}

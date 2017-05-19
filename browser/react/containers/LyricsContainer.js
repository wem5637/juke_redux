import React from 'react';
import store from '../store';
console.log('should be store:', store);
import Lyrics from '../components/Lyrics';


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
        this.unsubscribe = store.subscribe(function() {
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
        console.log("this.state text:", this.state);
    }

    render() {
        return ( < Lyrics text = { this.state.text }
            setArtist = { this.handleArtistInput }
            setSong = { this.handleSongInput }
            artistQuery = { this.state.artistQuery }
            songQuery = { this.state.songQuery }
            handleSubmit = { this.handleSubmit }
            />


        )
    }

}

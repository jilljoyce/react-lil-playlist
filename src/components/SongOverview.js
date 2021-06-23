import React, { Component } from 'react'
import SongForm from './SongForm'
import SongList from './SongList'
import SongHeader from './SongHeader'


class SongOverview extends Component {
  constructor() {
    super()
    this.state = {
      songs: [
        { id: 1, song: "Toxic", artist: "Britney Spears", genre: "Pop", rating: 5, displayFilter: true },
        { id: 2, song: "Stole the show", artist: "Kygo", genre: "Tropical house", rating: 5, displayFilter: true },
        { id: 3, song: "Only girl", artist: "Rihanna", genre: "Dance", rating: 4, displayFilter: true }
      ]
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.sorting = this.sorting.bind(this)
    this.onClickDeleteAll = this.onClickDeleteAll.bind(this)
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState(prevState => {
      const newId = prevState.songs.length + 1
      const newSong = { id: newId, song: event.target.song.value, artist: event.target.artist.value, genre: event.target.genre.value, rating: parseInt(event.target.rating.value), displayFilter: true }
      const updatedSongs = JSON.parse(JSON.stringify(prevState.songs))
      updatedSongs.push(newSong)
      const newState = { songs: updatedSongs }
      return newState
    })
  }

  sorting = (item) => {
    this.setState(prevState => {
      const sortingSongs = prevState.songs.map(song => {
        if (song.rating === item || song.genre === item || item === 0) {
          return {
            ...song,
            displayFilter: true
          }
        } else {
          return {
            ...song,
            displayFilter: false
          }
        }
      })
      return {
        songs: sortingSongs
      }
    })
  }

  onClickDeleteAll = () => {
    this.setState({ songs: [] })
  }

  render() {
    return (
      <div>
        <SongForm
          songs={this.state.songs}
          onSubmit={this.onSubmit}
          onClickDeleteAll={this.onClickDeleteAll}
        />
        <br></br>
        <table style={{ width: "100%" }}>
          <SongHeader sorting={this.sorting} songs={this.state.songs} />
          <SongList songs={this.state.songs} />
        </table>
      </div>
    );
  }
}

export default SongOverview

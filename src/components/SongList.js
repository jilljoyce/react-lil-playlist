import React, { Component } from 'react'
import Song from './Song'

class SongList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const songItems = this.props.songs.map(songItem => <Song key={songItem.id} songItem={songItem} />)
        return (
            <tbody>
                {songItems}
            </tbody>
        )
    }
}

export default SongList

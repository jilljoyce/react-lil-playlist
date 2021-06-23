import React from 'react'
import SortGenre from './SortGenre'
import SortRating from './SortRating'

function SongHeader(props) {
    return (
        <thead>
            <tr className="song-header">
                <th className="song-row__item">Song</th>
                <th className="song-row__item">Artist</th>
                <th className="song-row__item">Genre
                    <SortGenre sorting={props.sorting} songs={props.songs} /> 
                </th>
                <th className="song-row__item">Rating
                    <SortRating sorting={props.sorting} songs={props.songs}/>
                </th>
            </tr>
        </thead>
    )
}

export default SongHeader
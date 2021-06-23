import React from 'react'
import NewGenre from './NewGenre'

function SortGenre(props) {
    const songItemGenre = props.songs.map(songItem => <NewGenre key={songItem.id} songItem={songItem} sorting={props.sorting}/>)
    return (
        <div className="dropdown">
            <button className="dropdown-button">Sort</button>
            <div className="dropdown-content">
            <a style={{display: props.songs.genre && "none"}} onClick={() => props.sorting(0)}>None</a>
                {songItemGenre}
            </div>
        </div>
    )
}

export default SortGenre
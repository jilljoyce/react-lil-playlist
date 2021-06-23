import React from 'react'

function NewGenre(props) {
    return(
        <a onClick={() => props.sorting(props.songItem.genre)}>{props.songItem.genre}</a>
    )
}

export default NewGenre
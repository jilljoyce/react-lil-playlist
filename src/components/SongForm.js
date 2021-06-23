import React from 'react'

function SongForm(props){
    return(
        <form id="form" onSubmit={props.onSubmit}>
            <input name="song" type="text" placeholder="song" value={props.songs.song} />
            <input name="artist" type="text" placeholder="artist" value={props.songs.artist} />
            <input name="genre" type="text" placeholder="genre" value={props.songs.genre}/>
            <input name="rating" type="text" placeholder="rating" value={props.songs.rating}/>
            <button>Add</button>
            <button type="reset">Reset</button>
            <button onClick={props.onClickDeleteAll} id="delete-button">Delete All</button>
        </form>
    )
}

export default SongForm
import React from 'react'

function Song(props){
    
    return(
            <tr style={{display: !props.songItem.displayFilter && "none"}}>
                <td>{props.songItem.song}</td>
                <td>{props.songItem.artist}</td>
                <td>{props.songItem.genre}</td>
                <td>{props.songItem.rating}</td>
            </tr>
    )
}

export default Song
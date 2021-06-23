import React from 'react'

function SortRating(props) {
    return (
        <div className="dropdown">
            <button className="dropdown-button">Sort</button>
            <div className="dropdown-content">
                <a style={{display: props.songs.displayFilter && "none"}} onClick={() => props.sorting(0)}>None</a>
                <a onClick={() => props.sorting(1)}>1</a>
                <a onClick={() => props.sorting(2)}>2</a>
                <a onClick={() => props.sorting(3)}>3</a>
                <a onClick={() => props.sorting(4)}>4</a>
                <a onClick={() => props.sorting(5)}>5</a>
            </div>
        </div>
    )
}

export default SortRating
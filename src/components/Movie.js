import React from 'react'

const Movie = (props) => {
    return(
    <div id = 'movie'>
        <h1 id = 'title'>{props.title}</h1>
        <p id = 'runtime'>Runtime: {props.hours}:{props.minutes} </p>
        <img id  = 'image' src = {props.poster} alt = 'img'></img>
    </div>
    )
};

export default Movie;
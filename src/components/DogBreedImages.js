import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages(props) {
    const dogImages = props.images !== null ? props.images.map(url => {
        return <img key={url} src={url} alt="dogy"/>
    }) : "Loading......"
    return (
        <div className="dog-breed-images">
            <h1>Dogs Breed Images</h1>
            This page will show images of the {props.breed} breed.
            This page will show images of a specific dog breed.

      <Link to="/">Go back to the index</Link>
            {dogImages}


        </div>

    )
}
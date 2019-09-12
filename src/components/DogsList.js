import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogsList extends Component {
  
     render() {

        const avoidnull = this.props.dogBreeds !== null ? this.props.dogBreeds.map(breed =>
            <li key={breed}>
            <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
            </li>
        ) : "Loading..."
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {avoidnull}
            </div>
        )
    }
}

// {/* {this.state.dogBreeds === null && "Loaing"} */}
//                 {/* <ul>{
//                     this.state.dogBreeds.map(breed => {
//                         <li key={breed}>breed  </li>
//                     })
//                 } </ul> */}

// renderContent () {
    //    if (this.state.dogBreeds !== null) {
    //        return this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>)
    //    } else {
    //        return 'Loading...'
    //    }

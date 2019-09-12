import React, { Component } from 'react';
import * as request from "superagent"
import Dogslist from './DogsList'

export default class DogsListContainer extends Component {
    state = { dogBreeds: null }


    componentDidMount() {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            // .then(response => console.log(Object.keys(response.body.message))) this was our initial line which we change below
            .then(response => this.updateBreeds(Object.keys(response.body.message)))
            .catch(console.error)
    }

    updateBreeds(breeds) {
        this.setState(
            {
                dogBreeds: breeds
            }
        )
    }

    render() {
        return <Dogslist dogBreeds={this.state.dogBreeds} />
    }
}
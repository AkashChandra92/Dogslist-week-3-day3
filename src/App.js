import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogsListContainer from "./components/DogsListContainer"
import { Route } from "react-router-dom"
import DogBreedImagesContainer from './components/DogBreedImagesContainer';


class App extends Component {
  render() {
    return (  
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route exact path="/" component={DogsListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import MainComponent from './MainComponent' 

import './App.css';


class App extends Component {

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          {console.log(this.props)}
            <MainComponent />
        </header>
      </div>
    );
  }
}

export default (App);

import React, { Component } from 'react';
import ShowArticle from './components/ShowArticle'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <ShowArticle/>
      </div>
    );
  }
}

export default App;

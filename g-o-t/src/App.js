import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './index'
import {Route, NavLink} from 'react'
import Axios from 'axios';


function App extends React.Component {
  constructor(){
    super()

    this.state={
      gotCharacter:[]
    }
  }
// api call

fetchGOTCharacters= async()=> {
  const resp = await Axios.get('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')
  const data = resp.data
  this.setState({gotCharacter})
}

async componentDidMount(){
  await this.fetchGOTCharacters()
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

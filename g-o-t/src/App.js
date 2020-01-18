import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './index'
import {Route, NavLink} from 'react'
import Axios from 'axios';
import Character from './Character'


class App extends React.Component {
  constructor(){
    super()
    this.state={
      gotCharacters: []
    }
    // this.handleClick = this.handleClick.bind(this);
    this.gotCharacters=this.gotCharacters.bind(this);
  }
// api call

fetchGOTCharacters= async()=> {
  const resp = await Axios.get('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')
  const data = resp.data
  this.setState({
    gotCharacters: data
  })
}

async componentDidMount(){
  await this.fetchGOTCharacters()
}

render(){
  console.log(this.state)
  return (
    <div className="App">
       {this.state.gotCharacters.map((gotCharacter, index)=> { 
         return(
            <Character key={index} got={gotCharacter} />
         )})
        }
    </div>
  );
  }

}

export default App;

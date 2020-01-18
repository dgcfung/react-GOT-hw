import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import './index'
import Axios from 'axios';
import Character from './Character'
import CharDetail from './CharDetail'


class App extends React.Component {
  constructor(){
    super()
    this.state={
      gotCharacters: []
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.gotCharacters=this.gotCharacters.bind(this);
  }
// api call

fetchGOTCharacters= async()=> {
  const resp = await Axios.get('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')
  const data = resp.data
  this.setState({
    gotCharacters: data
  })
}

componentDidMount(){
  this.fetchGOTCharacters()
}

render(){
  return (
    <div className="App">
       {this.state.gotCharacters.map((gotCharacter, index)=> { 
         return(
            <Character key={index} got={gotCharacter} index={index} />
         )})
        }

        {/* call character component function and set equal to chracter from index # from API */}
        <Switch>
          <Route exact path="/char/:index" component={match => <CharDetail match={match} got={this.state.gotCharacters}/>} /> 
          <Route exact path="/" component={()=>(<h1>hello</h1>)} />
        </Switch>
        {/* create a bunch of urls to render new page on same page */}

    </div>
  );
  }

}

export default App;

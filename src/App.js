import React, { Component } from 'react';
import Home from "./components/Home";
import './App.css';
import { Route, Switch} from 'react-router-dom';
import ListBeers from "./components/ListBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import SingleBeer from './components/SingleBeer';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={ListBeers}/>
          <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/new-beer" component={NewBeer}/>
          <Route path="/beers/:beerId" component={SingleBeer}/>
        </Switch>
      </div>
    )
  }
}

export default App
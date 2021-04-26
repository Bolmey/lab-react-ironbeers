import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import { Link, Route, Switch } from 'react-router-dom';
import Beers from "./Components/Beers";
import Randombeer from './Components/Randombeer';
import Newbeer from "./Components/Newbeer";
import Beerdetail from "./Components/Beerdetail";
import axios from 'axios';

function App() {


  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={Beerdetail} />
        <Route exact path='/new-beer' component={Newbeer} />
        <Route exact path='/beers/:beerId' component={Beerdetail} />
      </Switch>
    </div>
  );
}

export default App;

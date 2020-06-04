import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import HomePage from './screen/home'
import Carta from './screen/carta'
import Carta1 from './screen/bar1'
import Carta2 from './screen/bar2'

function App() {
  return (
    <div>
          <Route exact={true}  path="/" component={HomePage}  />

          <Route path="/bar" component={Carta} />
          <Route path="/bar1" component={Carta1} />
          <Route path="/bar2" component={Carta2} />
    </div>
  );
}

export default App;


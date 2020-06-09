import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

<<<<<<< HEAD
import Nav from './module/nav';
import List from './module/list';
import Edit from './module/edit';
import Add from './module/add';
import Home from './module/home';
import Profile from './module/profile';
=======
/*
import Nav from './modules/nav';

import List from './modules/list';
import Edit from './modules/edit';
import Add from './modules/add';
import Home from './modules/home';*/
import Profile from './modules/profile copy';
>>>>>>> profesionales


function App() {
  return (
    <Router>
    <div className="App">
      {/*
      <Nav/>
      
      <Route path="/" exact component={Home}></Route>
      <Route path="/list" exact component={List}></Route>
      <Route path="/edit/:id" component={Edit}></Route>
      <Route path="/add" component={Add}></Route>
<<<<<<< HEAD
      <Route path="/profile" component={Profile}></Route>
=======
      */}
      <Route path="/" component={Profile}></Route>

>>>>>>> profesionales
    </div>
    </Router>
  );
}

export default App;

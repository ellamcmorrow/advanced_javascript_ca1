import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import About from "./components/About";
import Repos from "./components/Repos";
import RepoGrid from "./components/RepoGrid";
import Error from "./components/Error";
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import Project from './components/Projects';
import ProjectOne from './components/ProjectOne';
import ProjectTwo from './components/ProjectTwo';
import ProjectThree from './components/ProjectThree';
import Nav from './components/Nav';



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
        <Nav/>
          <Switch>
           <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/repogrid" component={RepoGrid} />
            <Route path="/projects" component={Project} />
            <Route path="/projectOne" component={ProjectOne} />
            <Route path="/projectTwo" component={ProjectTwo} />
            <Route path="/projectThree" component={ProjectThree} />



            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;

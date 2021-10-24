import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from './components/dashboard.js';
import Campaign from './components/campaign.js';
import Article from './components/articles.js';
import './App.css'

class App extends Component{
render(){
    return(
          <Router>
            <Route path="/" exact component={Dashboard} />
            <Route path="/campaign" exact component={Campaign} />
            <Route path="/article" exact component={Article} />
            
            <Route path="/dashboard" exact component={Dashboard} />
          </Router>
      ); 
  }

}
export default App;
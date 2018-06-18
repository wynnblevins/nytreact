import React, { Component } from 'react'; 
import { Navbar, NavItem } from 'react-materialize';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScraperView from './components/ScraperView';
import SavedView from './components/SavedView';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar brand='New York Times' right>
            <NavItem href='/scraper'>Scraper</NavItem>
            <NavItem href='/saved'>Saved</NavItem>
          </Navbar>
          <Route exact path="/" component={ScraperView} />
          <Route path="/scraper" component={ScraperView} />
          <Route path="/saved" component={SavedView} />
        </div>
      </Router>
    );
  }
}

export default App;
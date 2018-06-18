import React, { Component } from 'react';
import { Button } from 'react-materialize';

class ScraperView extends Component { 
  constructor() {
    super(); 
  }
  
  scrapeButtonClick() {
    console.log('inside scraper on click');  
    // fetch('/api/articles')
    //   .then(result=>result.json())
    //   .then(items=>this.setState({items}));
  }

  render() {
    return (
      <div>
        <Button onClick={this.scrapeButtonClick} 
          waves='light'>Scrape Articles</Button>
        <div id="articlesWrapper"></div>
      </div>
    );
  }
}

export default ScraperView;
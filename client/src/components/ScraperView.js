import React, { Component } from 'react';
import { Button } from 'react-materialize';
import Article from './Article';
class ScraperView extends Component { 
  constructor() {
    super(); 
    this.state = {
      articles: []
    }
  }
  
  scrapeButtonClick = () => {
    console.log('inside scraper on click');  
    fetch('/api/scraper')
      .then(result=>result.json())
      .then(articles=>this.setState({articles}));
  }

  render() {
    return (
      <div>
        <Button onClick={this.scrapeButtonClick} 
          waves='light'>Scrape Articles</Button>
        <div id="articlesWrapper">
          {this.state.articles.map((article, i) => (
            <Article key={i} name={article.title}></Article> 
          ))}
        </div>
      </div>
    );
  }
}

export default ScraperView;
import React, { Component } from "react";
import { Button } from 'react-materialize';

class Article extends Component {
  onSaveArticleClick() {
    console.log('inside onSaveArticleClick!');
  }
  
  render() {
    return (
      <div className="scrapedHeadline">
        <h2>{this.props.name}</h2>
        <Button onClick={this.onSaveArticleClick} 
          waves='light'>Save Article</Button>
      </div>
    );
  }
}

export default Article;
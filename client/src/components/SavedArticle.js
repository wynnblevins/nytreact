import React, { Component } from "react";

class SavedArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render = () => {
    return (
      <div className="scrapedHeadline">
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default SavedArticle;
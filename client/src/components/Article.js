import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <div className="scrapedHeadline">
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Article;
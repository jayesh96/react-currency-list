import React, { Component } from 'react';
import RenderTweets from './containers/searchTweet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RenderTweets/>
      </div>
    );
  }
}

export default App;

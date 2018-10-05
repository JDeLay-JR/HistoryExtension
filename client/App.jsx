/* global chrome */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Helllllllo',
      storage: 'empty',
    };
  }

  componentDidMount() {
    chrome.storage.sync.get((stored) => {
      this.setState({ storage: stored.selectedText });
    });
  }

  render() {
    const { text, storage } = this.state;
    return (
      <div id="test">
        <h1>History Component</h1>
        <p>Test</p>
        <p>{text}</p>
        <p>{storage}</p>
      </div>
    );
  }
}

export default App;

/* global chrome */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wikiReponse: "",
      err: false
    }
  }
  componentDidMount() {
    
    chrome.storage.sync.get(async storage => {
      const url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${encodeURI(storage.selectedText)}`
      fetch(url)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => {
        this.setState({err: true})
      })
    })
  }

  render() {
    return (
      <div id="test">
        <p>Test</p>
      </div>
    )
  }
}


export default App;

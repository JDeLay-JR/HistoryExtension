/* global chrome */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wikiResponse: [[], [], [], []],
      err: false
    }
  }

  chooseCategory(category) {
    const url = `https://en.wikipedia.org/w/api.php?
    format=json&
    action=query&
    prop=extracts&exintro&explaintext&redirects=1&
    titles=${category}`
  }

  componentDidMount() {
    chrome.storage.sync.get(async storage => {
      const url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${encodeURI(storage.selectedText)}`
      fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({wikiResponse: json})
      })
      .catch(err => {
        this.setState({err: true})
      })
    })
  }

  render() {
    const { wikiResponse } = this.state
    const titles = wikiResponse[1]
    return (
      <div>
        {
          titles.map(category => {
            return (
              <p>{category}</p>
            )
          })
        }
      </div>
    )
  }
}


export default App;

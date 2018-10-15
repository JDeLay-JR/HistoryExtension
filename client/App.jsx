/* global chrome */

import React, { Component } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { url } from '../secrets_file';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      response: [],
    };
  }

  componentDidMount() {
    chrome.storage.sync.get((stored) => {
      const historyData = stored.selectedText.split(' ').join('_');

      axios.post(`${url}${historyData}`)
        .then((response) => {
          this.setState({ response: response.data });
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }

  render() {
    const { response } = this.state;
    return (
      <div id="test">
        <h1>History Component</h1>
        <p>Test</p>
        {response.map((data) => {
          return (
            <div key={data.id}>
              <ReactPlayer url={data.link} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

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
      youtubeResponse: [],
    };
  }

  componentDidMount() {
    chrome.storage.sync.get(async (youtubeResponse) => {
      console.log(`YouTube FE Response: ${youtubeResponse}`);
      this.setState({ youtubeResponse });
    });
  }

  render() {
    const { youtubeResponse } = this.state;
    return (
      <div id="test">
        <h1>History Component</h1>
        <p>Test</p>
        {youtubeResponse.map((video) => {
          return (
            <div>
              <ol>
                <li>{video.link}</li>
              </ol>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Nav from '../nav/nav';
import './hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Nav />
        <div className="content">
          <h1 className="title--large">Evan Cooper</h1>
          <div className="line"></div>
          <div className="subtitles">
            <h2 className="title--small">Developer - </h2>
            <h2 className="title--small">&nbsp;Veteran</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
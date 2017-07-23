import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './nav.css';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
    cursor: 'pointer'
  },
  bmBurgerBars: {
    background: 'white'
  },
  bmCrossButton: {
    height: '36px',
    width: '36px',
    position: 'fixed',
    right: '40px',
    top: '30px'
  },
  bmCross: {
    background: 'white',
    height: '30px',
    width: '6px'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    overflow: 'hidden',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: 'white',
    padding: '0.8em',
    marginTop: '1em'
  },
  bmOverlay: {
    background: 'rgba(255, 255, 255, 0.8)'
  }
}

class Nav extends Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    return (
      <Menu right styles={ styles } >
        <a id="home" className="menuItem" href="/"><i className="fa fa-home" aria-hidden="true"></i>&nbsp;Home</a>
        <br />
        <hr className="menuItem--line"/>
        <br />
        <a id="work" className="menuItem" href="/work"><i className="fa fa-briefcase" aria-hidden="true"></i>&nbsp;Work</a>
        <br />
        <hr className="menuItem--line"/>
        <br />
        <a id="props" className="menuItem" href="/props"><i className="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;Props</a>
        <br />
        <hr className="menuItem--line"/>
        <br />
        <a id="contact" className="menuItem" href="/contact"><i className="fa fa-commenting" aria-hidden="true"></i>&nbsp;Contact</a>
        <br />
        <hr className="menuItem--line"/>
        <br />
        <a id="github" className="menuItem" href="https://github.com/Cooperbuilt"><i className="fa fa-github" aria-hidden="true"></i>&nbsp;Github</a>
        <br />
        <hr className="menuItem--line"/>
        <br />
        <a id="resume" className="menuItem" href="/contact"><i className="fa fa-download" aria-hidden="true"></i>&nbsp;Resume</a>
      </Menu>
    );
  }
}


export default Nav;
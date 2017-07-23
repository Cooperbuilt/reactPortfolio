import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  './title.css';

class Title extends Component {
    render() {
        return (
            <div>
                <h2 className={`title ${this.props.size} ${this.props.color}`}> {this.props.text}</h2>
                <div className="line"></div>
            </div>
        );
    }
}

export default Title;

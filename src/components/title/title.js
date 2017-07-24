import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  './title.css';

class Title extends Component {
    render() {
        return (
            <div className="title--flex">
                <h2 className={`title ${this.props.size} ${this.props.color}`}> {this.props.text}</h2>
                <div className="title--line"></div>
            </div>
        );
    }
}

Title.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.string
};

export default Title;

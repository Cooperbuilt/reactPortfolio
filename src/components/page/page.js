import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './page.css';

class Page extends Component {
    render() {
        return (
            <div className="flex">
                { this.props.children }
            </div>
        );
    }
}

Page.protoTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
  ]).isRequired,
};

export default Page;
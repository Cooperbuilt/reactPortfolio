import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './page.css';

class Page extends Component {
    render() {
        return (
            <div className={ `flex ${this.props.background}` }>
                { this.props.children }
            </div>
        );
    }
}

Page.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
  ]).isRequired,
};

export default Page;
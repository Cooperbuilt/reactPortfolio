import React, { Component } from 'react';
import './workcard.css'

class WorkCard extends Component {
    render() {
        return (
            <div className={ `card ${this.props.width}` }>
                <div className="image">
                    <a href="#" className="card--circle">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="action">
                    <a className="card--link" href='#'>Visit Site</a>
                </div>
            </div> 
        );
    }
}

export default WorkCard;
import React, { Component } from 'react';
import Page from '../page/page';
import Title from '../title/title';
import Nav from '../nav/nav';
import WorkCard from '../workcard/workcard'
import './work.css';

class Work extends Component {
    render() {
        return (
            <Page background={"blue"}>
                <Nav />
                <Title text={"My Work"} size={"large"} color={"light"} />
                <div className="content--work">
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                </div>
            </Page>
        );
    }
}

export default Work;
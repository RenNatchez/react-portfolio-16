import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import AboutMe from '../components/section/AboutMe';

function Home(props) {
    return (
        <Fragment>
            <Header/>
            <AboutMe/>
        </Fragment>
    );
}

export default Home;
import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import AboutMe from '../components/section/AboutMe';

function Home(props) {
    return (
        <Fragment>
            <Header/>
            <AboutMe/>
            <Footer/>
        </Fragment>
    );
}

export default Home;
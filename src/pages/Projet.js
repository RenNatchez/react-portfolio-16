import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import ProjetCard from '../components/ProjetCard';

function Projet(props) {
    return (
        <Fragment> 
            <Header/>
            <ProjetCard/>
        </Fragment>
    );
}

export default Projet;
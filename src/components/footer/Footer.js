import React from 'react';
import BasFooter from './BasFooter';
import Partenaire from './Partenaire';

function Footer(props) {
    return (
        <footer>
            <Partenaire/>
            <BasFooter/>
        </footer>
    );
}

export default Footer;
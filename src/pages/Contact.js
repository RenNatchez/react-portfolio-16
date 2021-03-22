import React, { Fragment } from 'react';
import ContactText from '../components/Contact';
import HeaderNoTitle from '../components/header/HeaderNoTitle';

function Contact(props) {
    return (
        <Fragment>
            <HeaderNoTitle/>
            <ContactText/>
        </Fragment>
    );
}

export default Contact;
import React from 'react';
import { NavLink } from 'react-router-dom';
import Title from './Title';

function Header(props) {
    return (
        <header>
            <div className="barre-gauche">
                <div className="logo">
                <h6>Natchez</h6>
                <h6 className="return">REnders</h6>
                </div>
                <div className="nav-link">
                    <ul>
                        <li>< NavLink to='./' exact activeClassName="nav-active">Home</NavLink></li>
                        <li>< NavLink to='./projet' exact activeClassName="nav-active">projet</NavLink></li>
                        <li>< NavLink to='./contact' exact activeClassName="nav-active">contact</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="barre-droite">
            <ul>
                <li><a href="https://www.instagram.com/?hl=fr" target='blank'>Instagram</a></li>
                <li><a href="https://www.facebook.com/" target='blank'>Facebook</a></li>
                <li><a href="https://www.behance.net/" target='blank'>Behance</a></li>
                <li><a href="https://github.com/" target='blank'>Github</a></li>
            </ul>
            </div>
            <Title/>
        </header>
    );
}

export default Header ;
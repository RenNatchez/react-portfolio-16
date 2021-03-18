import React from 'react';
import { NavLink } from 'react-router-dom';

function BasFooter(props) {
    return (
        <div className='footer-bas'>
            <div className='footer-part-1'>
                <div className='flex-footer'>
                    <i class="fas fa-mobile-alt"></i>
                    <div className='text-foot'>
                    <h4>Téléphone</h4>
                    <p>0476 89 68 78</p>
                    </div>
                </div>
                <hr/>
                <div className='flex-footer'>
                <i class="fas fa-paper-plane"></i>                    <div className='text-foot'>
                    <h4>E-mail</h4>
                    <p>natchezzz@hotmail.com</p>
                    </div>
                </div>
            </div>
            <div className='footer-part-2'>
                <div className='flex-footer'>
                <div className='div-1'>
                <h3>Natchez</h3>
                <h3 className='return'>Renders</h3>
                </div>
                <div className='div-2'>
                    <div className="nav-link">
                        <ul>
                            <li>< NavLink to='./' exact activeClassName="nav-active">Home</NavLink></li>
                            <li>< NavLink to='./projet' exact activeClassName="nav-active">projet</NavLink></li>
                            <li>< NavLink to='./contact' exact activeClassName="nav-active">contact</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='div-3'>
                        <ul>
                            <li><a href="https://www.instagram.com/?hl=fr" target='blank'>Instagram</a></li>
                            <li><a href="https://www.facebook.com/" target='blank'>Facebook</a></li>
                            <li><a href="https://www.behance.net/" target='blank'>Behance</a></li>
                            <li><a href="https://github.com/" target='blank'>Github</a></li>
                        </ul>
                </div>
                </div>
            </div>
            <div className='footer-part-3'>
                <p>Site By Natchez Renders</p>
            </div>
        </div>
    );
}

export default BasFooter;
import React, { useState } from 'react';

function Partenaire(props) {
    const [link, setLink] = useState([
        {link:'./img/link/logo-1.png'},
        // ------------
        {link:'./img/link/logo-2.png'},
        // ------------
        {link:'./img/link/logo-10.png'},
        // ------------
        {link:'./img/link/logo_vbx.png'},
        // ------------
        {link:'./img/link/logo-airbnb.png'},
        // ------------
        {link:'./img/link/logo-star.png'},


        ])

    return (
        <div  className="partenaire">
            <div className='titre-partenaire'>
                <h2>Ils nous ont fait confiance</h2>
            </div>
            <div className='logo-partenaire'>
                <div>
                {link.map((el,i) =>{
                return(
                    <div>
                        <img src={link[i].link}></img> 
                    </div>
                    )
                })
            }                </div>
            </div>
        </div>
    );
}

export default Partenaire;
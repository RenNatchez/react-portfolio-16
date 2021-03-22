import React, { useState } from 'react';
import Card from './Card';

function ProjetCard(props) {
    const [site, setLink] = useState([
        {site: "Caminar", key : 1},
        {site: "Emporium", key : 2},
        {site: "site du chef", key : 3},
        {site: "Spatial", key : 4},
        ])

    return (
        <section className="projet">
            {site.map((el,i) =>{
                return(
                        <Card id={site[i]}/>
                    )
                })
            }
        </section>
    );
}

export default ProjetCard;
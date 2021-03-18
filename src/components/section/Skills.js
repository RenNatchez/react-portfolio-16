import React, { useState } from 'react';
import Typewriter from "typewriter-effect";


function Skills(props) {
        const [logiciel, setLogiciel] = useState([
                {nom:'HTML & CSS',
                talent:'sérieux',
                job:'identité visuelle',},
                // ------------
                {nom:'SASS',
                talent:'adaptation',
                job:'print',},
                // ------------
                {nom:'JAVASCRIPT',
                talent:'créativité',
                job:'Site vitrine',},
                // ------------
                {nom:'GITHUB',
                talent:'professionnalisme',
                job:'e-Commerce',},
                // ------------
                {nom:'REACT',
                talent:'curiosité',
                job:'suivi',},
                // ------------
                {nom:'BOOTSTRAP',
                job:'mobile',},
                // ------------
                {nom:'photoshop',},
                // ------------
                {nom:'illustrator',},
                // ------------
                {nom:'indesign'},
                // ------------
                ])
        return (
        <div className="skills">
                <div className="trav-logi">
                <h2>Je travaille avec
                <Typewriter
                        options={{
                                strings: [logiciel[0].nom,logiciel[1].nom,logiciel[2].nom,logiciel[3].nom,logiciel[4].nom,logiciel[5].nom,logiciel[6].nom,logiciel[7].nom,logiciel[8].nom],
                                autoStart: true,
                                loop: true,
                                cursor:' ',
                                delay: 100,
                                pauseFor: 3000}
                        }
                />
                 </h2>
                </div>
                <hr/>
                <div className="trav-logi">
                <h2>Avec des qualitées telles que
                <Typewriter
                        options={{
                                strings: [logiciel[0].talent,logiciel[1].talent,logiciel[2].talent,logiciel[3].talent,logiciel[4].talent],
                                autoStart: true,
                                loop: true,
                                cursor:' ',
                                delay: 100,
                                pauseFor: 3000}
                        }
                />
                 </h2>
                </div>
                <hr/>
                <div className="trav-logi">
                <h2>Pour des projets telles que 
                <Typewriter
                        options={{
                                strings: [logiciel[0].job,logiciel[1].job,logiciel[2].job,logiciel[3].job,logiciel[4].job,logiciel[5].job],
                                autoStart: true,
                                loop: true,
                                cursor:' ',
                                delay: 100,
                                pauseFor: 4000}
                        }
                />
                 </h2>
                </div>
        </div>
);
}

export default Skills;
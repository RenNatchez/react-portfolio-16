import React from 'react';

function AboutMe(props) {
    return (
        <section className="about-me">
            <div className="presentation">
                <div className='about-img'>

                <img  src='./img/natchez.png'></img>
                </div>
                <div className='about-text'>
                    <h2 className="press-h2-1">Hey!</h2>
                    <h2 className="press-h2-2">Natchez Renders</h2>
                    <h2 className="press-h2-3">Belgique</h2>
                    <h2 className="press-h2-4">Graphiste</h2>
                    <h2 className="press-h2-5">full stack developer</h2>
                    <h2 className="press-h2-6">Disponible pour vous</h2>
                    <h2 className="press-h2-7">dés maintenant </h2>
                </div> 
            </div>
        </section>
    );
}

export default AboutMe;
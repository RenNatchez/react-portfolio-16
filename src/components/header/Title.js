import React from 'react';
import Bounce from 'react-reveal/Bounce';

function Title(props) {
    return (
        <div className="header-title">
            <h1>Natchez</h1>
            <Bounce right cascade>
            <hr/>
            </Bounce>
                <h1 className="return">Renders</h1>
        </div>
    );
}

export default Title;
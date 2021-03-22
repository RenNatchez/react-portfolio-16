import React from 'react';

function ContainCard(props) {
    return (
        <div>
            <h2>{props.nom}</h2>
            <button>VIEW THE SITE</button>
        </div>
    );
}

export default ContainCard;
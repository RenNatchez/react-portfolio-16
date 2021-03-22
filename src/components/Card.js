import React, { Fragment } from 'react';
import ContainCard from './ContainCard';

function Card(props) {
    console.log(props.id.site)
    return (
        <Fragment>
            {props.id.key ==1 && (
                <div className='card bg-1'>
                    <ContainCard nom={props.id.site}/>
                </div>
                )}
            {props.id.key ==2 && (
                <div className='card bg-2'>
                    <ContainCard nom={props.id.site}/>
                </div>
                )}
            {props.id.key ==3 && (
                <div className='card bg-3'>
                    <ContainCard nom={props.id.site}/>
                </div>
                )}
            {props.id.key ==4 && (
                <div className='card bg-4'>
                    <ContainCard nom={props.id.site}/>
                </div>
                )}
        </Fragment>
    );
}

export default Card;
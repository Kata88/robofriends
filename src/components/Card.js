import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='tc bg dib br2 pa2 ma2 grow bw1 shadow-5'>
            
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
            
        </div>
    );
}

export default Card;
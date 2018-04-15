import React from 'react';
import './Card.css';

const Card = (props) => {
    const {id, name, email} = props;
    return (
        <div className="card">
            <img src={`https://robohash.org/${id}`} alt={name} className="image"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
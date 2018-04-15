import React, {Component} from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={`https://robohash.org/${props.id}`} alt={props.name} className="image"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}}</p>
            </div>
        </div>
    )
}

export default Card;
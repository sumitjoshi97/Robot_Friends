import React, {Component} from 'react';
import Card from './Card';
import {robots} from './robots';

import './Board.css';

class Board extends Component {
    state = {}

    render() {
        let cardList = robots.map((robot) => {
            return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
        })
        return (
            <div className="Board">
                <div className="Header">
                    <h1>Robot Friends</h1>
                </div>
                <hr/>
                <div className="CardList">
                    {cardList}
                </div>
            </div>

        )
    }
}
export default Board;
import React, {Component} from 'react';
import Card from './Card';
import Searchbox from './Searchbox';
import { robots } from './robots';

import './Board.css';

class Board extends Component {
    state = {
        robots: robots,
        searchField: '', 
    }

    onSearchChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            searchField: event.target.value
        })
       
        
    }

    render() {
        let filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        let cardList = filteredRobots.map((robot) => {
            return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
        })
        return (
            <div className="Board">
                <div className="Header">
                    <h1>Robot Friends</h1>
                </div>
                <Searchbox onSearchChange={this.onSearchChange} searchValue={this.state.searchField}/>
                <hr/>
                <div className="CardList">
                    {cardList}
                </div>
            </div>

        )
    }
}
export default Board;
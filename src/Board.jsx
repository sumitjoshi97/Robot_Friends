import React, {Component} from 'react';
import Card from './Card';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import './Board.css';

class Board extends Component {
    state = {
        robots: [],
        searchField: ''
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        let filteredRobots = this.state.robots.filter(robots => {
                return robots
                    .name
                    .toLowerCase()
                    .includes(this.state.searchField.toLowerCase())
            })
        let cardList = filteredRobots.map((robot) => {
            return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
        })
        return (
            <div className="Board">
                <div className="Header">
                    <h1>Robot Friends</h1>
                </div>

                <Searchbox
                    onSearchChange={this.onSearchChange}
                    searchValue={this.state.searchField}/>
                
                <Scroll>
                <div className="CardList">
                    {cardList}
                </div>
                </Scroll>
            </div>

        )
    }
}

export default Board;
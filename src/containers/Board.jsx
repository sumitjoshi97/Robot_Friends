import React, {Component} from 'react';
import Card from '../components/Card';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
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
        const {robots, searchField} = this.state;

        const filteredRobots = robots.filter(robots => {
                return robots
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
        });

        const cardList = filteredRobots.map((robot) => {
            return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
        });

        return (
            <div className="Board">
                <div className="Header">
                    <h1>Robot Friends</h1>
                </div>

                <Searchbox
                    onSearchChange={this.onSearchChange}
                    searchValue={searchField}/>
                
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
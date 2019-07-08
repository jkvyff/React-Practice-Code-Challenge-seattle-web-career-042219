import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  constructor() {
  	super()

  	this.state = {
		sushis: [],
    firstSushi: 0,
    eatenIds: [],
    budget: 100
  	}
  }

  componentDidMount = () => {
  	fetch(API)
  	.then(resp => resp.json())
    .then(sushis => {
      sushis.map(sushi => sushi.eaten = false)
  	  this.setState({sushis: sushis})
    })
  }

  handleEat = sushi => {
    if (sushi.eaten === false && this.state.budget >= sushi.price) {
      this.setState(prevState => {
        const sushis = prevState.sushis.slice();
        const eatenIds = prevState.eatenIds.slice();

        sushis.forEach(sus => {
          if(sushi.id === sus.id) {sus.eaten = true}
        })

        eatenIds.push(sushi.id)

        return {
          sushis: sushis,
          eatenIds: eatenIds,
          budget: prevState.budget - sushi.price
        };
      });
    }
  }

  handleClick = ev => {
    this.setState(prevState => {
      const beltPos = (prevState.firstSushi + 4) % prevState.sushis.length
      return {firstSushi: beltPos }
    })
  }


  render() {
    const itemNum = this.state.firstSushi
    const filteredList = this.state.sushis.slice(itemNum, itemNum + 4 )
    return (
      <div className="app">
        <SushiContainer sushis={filteredList} handleEat={this.handleEat} handleClick={this.handleClick}/>
        <Table sushiIds={this.state.eatenIds} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
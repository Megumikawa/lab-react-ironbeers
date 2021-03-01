import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img src="assets/beers.png" alt="beers" />
          <Link to="/beers">All Beers</Link>
        </div>
        <div>
          <img src="assets/random-beer.png" alt="beers" />
          <Link to="/random-beer">Random Beer</Link>
        </div>
        <div>
          <img src="assets/new-beer.png" alt="beers" />
          <Link to="/new-beer">New Beer</Link>
        </div>
      </div>
    )
  }
}

export default Home
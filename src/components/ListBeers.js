import axios from 'axios'
import React, { Component } from 'react'
import { Link, Route } from "react-router-dom"
import SingleBeer from "./SingleBeer"


class Beers extends Component {

  state = {
    beers: []
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beers: response.data,
          image_url: response.data, 
          name: response.data,
          tagline: response.data,
          contributed_by: response.data
        })
      })
      .catch(() => {
        console.log('Error fetch failed')
      })
  }

  render() {
    const {beers, image_url, name, tagline, contributed_by} = this.state
    return (
      <div>
        <header><Link to="/">Home</Link></header>
        {
          beers.map((beer, index) => {
            return <div key={index}>
              <Link key={beer._id} to={`/beers/${beer._id}`}>
                <div>
                  <img width="60" src={beer.image_url}/>
                  <h4>{beer.name}</h4>
                  <h5>{beer.tagline}</h5>
                  <h6>{beer.contributed_by}</h6>
                  
                </div>
              </Link>
            </div>
          })
        }
      </div>
    )
  }
}
export default Beers
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"


class SingleBeer extends Component {

  state = {
    beer:{}
  }

  getBeer = () => {
    let _id = this.props.match.params.beerId
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
    .then((response) => {
      let beer = {
        _id: response.data,
        image_url: response.data.image_url,
        name: response.data.name,
        tagline: response.data.tagline, 
        attenuation_level: response.data.attenuation_level,
        description: response.data.description,
        contributed_by: response.data.contributed_by,
        first_brewed: response.data.first_brewed
      }
      this.setState({
        beer: beer
      })
    })
  }

  componentDidMount() {
    this.getBeer()
  }

  componentDidUpdate() {
    let _id = this.props.match.params.beerId
    if(this.state.beer._id !== _id) {
      this.getBeer()
    }
  }

  render() {
    const {beer: {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by}} = this.state
    return (
      <div>
        <header><Link to="/">Home</Link></header>
        <div>
        <img src={image_url} alt="img"/>
          <h1>{name}</h1>
          <h2>{tagline}</h2>
          <h3>{first_brewed}</h3>
          <h4>{attenuation_level}</h4>
          <h5>{description}</h5>
          <h6>{contributed_by}</h6>
        </div>
      </div>
    )
  }
}

export default SingleBeer
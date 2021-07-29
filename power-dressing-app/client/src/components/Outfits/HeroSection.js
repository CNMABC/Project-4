import React from 'react'
import { Jumbotron } from 'reactstrap'

const HeroSection = () => {

  return (
    <div className="hero-index-page">
      <Jumbotron className="jumbotron" >
        <h1 className="display-3">Who will inspire you?</h1>
        <p className="lead"></p>
        {/* <hr className="my-2" /> */}
        {/* <h5 className="hero-under-title-text">It can be tricky to find the right outfit to make you feel confident, powerful and comfortable</h5> */}
        <hr className="my-2" />
        <h5 className="hero-under-title-text">Browse our collection of women smashing boundaries and buy the amazing clothes they are doing it in </h5>
        <p className="lead">
        </p>
      </Jumbotron>
    </div>
  )
}

export default HeroSection
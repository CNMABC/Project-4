import React from 'react'
import { Jumbotron } from 'reactstrap'

const HeroSection = () => {

  return (
    <div className="hero-index-page">
      <Jumbotron >
        <h1 className="display-3">What should you wear?</h1>
        <p className="lead"></p>
        <hr className="my-2" />
        <h5>It can be tricky to find the right outfit to make you feel <span className="confident-show">confident,</span> <span className="powerful-show">powerful</span> and <span className="comfortable-show">comfortable</span></h5>
        <p className="lead">
        </p>
      </Jumbotron>
    </div>
  )
}

export default HeroSection
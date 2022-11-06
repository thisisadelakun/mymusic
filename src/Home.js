import React from 'react'
import Article from './Article'
import hero from './ASSETS/illustration-hero.svg'
import Main from './Main'

const Home = () => {
  return (
    <div className='home-container' style={{}}>

      <img className='hero' src={hero} alt="" />
      <div className='column'>
        <Main />
        <Article />
      </div>



    </div>
  )
}

export default Home
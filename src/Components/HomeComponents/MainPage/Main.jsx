import React from 'react';
import './Main.css'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import SearchBar from '../Searchbar/SearchBar';

const Main = () => {
  return (
    <>
      <div className="main">

        {/* <Fade right> */}
          <div className="intro align-items-center">
            <h1>Discover Pakistan</h1>
            <p className='text-center'>Discover, Explore, Experience -  Your Gateway to Unforgettable Journeys!</p>
            <Fade bottom>
              <div >
                <SearchBar />
              </div>
            </Fade>
          </div>
        {/* </Fade> */}

      </div>
    </>
  )
}

export default Main;
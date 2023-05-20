import React from 'react'
import "./Competions.css"
import Slide from 'react-reveal/Slide';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbTemperatureCelsius } from "react-icons/tb";
import { BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { RiCommunityLine } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";
import WeatherModal from './WeatherModal';
import HotelModal from './HotelModal';
import NewsModal from './NewsModal';
import sunny from '../../../sunny.png'
import cold from '../../../cold.png'
import locbg from '../../../locbg.png'
import hotelbg from '../../../hotelbg.png'
import newsbg from '../../../newsbg.png'
import Rating from '@mui/material/Rating';

const Competions = () => {

  const temp = 23;

  return (
    <>
      <div className='container comp_main'>
        <Slide left>
          <main>
            <div className="main_card" style={{backgroundImage:`url(${locbg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
              <p>Location</p>
              <h2>Karachi</h2>
            </div>
            {/* Weather */}
            <div class="card" style={{backgroundImage:`url(${temp>25?sunny:cold})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
              <div className="icon">
                <TiWeatherPartlySunny style={{ fontSize: '5rem' }} />
              </div>
              <div class="card-content">
                <h2>
                  Weather
                </h2>
                <p>
                  Details for weather of Karachi:
                </p>

                <p className='inner-content-weather'>
                  <span className='span1'>
                    Temp :
                  </span>
                  <span className='span2'>
                  {temp}
                  </span>
                  <TbTemperatureCelsius style={{ fontSize: '2rem', color: "#ffffff" }} />
                </p>
                <p className='inner-content-weather'>
                  <span className='span1'>
                    feel like :
                  </span>
                  <span className='span2'>
                    35
                  </span>
                  <TbTemperatureCelsius style={{ fontSize: '2rem', color: "#ffffff" }} />
                </p>
                <p className='inner-content-weather'>
                  <span className='span1'>
                    Wind Speed :
                  </span>
                  <span className='span2'>
                    2.03
                  </span>
                  <BsWind style={{ fontSize: '2rem', color: "#ffffff" }} />
                </p>
                <p className='inner-content-weather'>
                  <span className='span1'>
                    Humidity :
                  </span>
                  <span className='span2'>
                    14
                  </span>
                  <WiHumidity style={{ fontSize: '2rem', color: "#ffffff" }} />
                </p>
              </div>
            </div>
            {/* Hotels */}
            <div class="card" data-bs-toggle="modal" data-bs-target="#hotelModal" style={{backgroundImage:`url(${hotelbg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
              <div className="icon">
                <RiCommunityLine style={{ fontSize: '5rem' }} />
              </div>

              <div class="card-content">
                <h3>
                 Hotels
                </h3>
                <p>
                  Available Hotels in Karachi
                </p>
                <p className='inner-content-hotel'>
                  <p className='p1'>
                    Pearl Continental Hotel
                  </p>
                  <Rating name="read-only" value={5} readOnly />
                  {/* <p className='p2'>
                    located in karachi
                  </p> */}
                </p>
                <p className='inner-content-hotel'>
                  <p className='p1'>
                    Mehran Hotel
                  </p>
                  <Rating name="read-only" value={4.5} readOnly />
                  {/* <p className='p2'>
                    located in karachi
                  </p> */}
                </p>
              </div>
            </div>
            {/* News */}
            <div class="card" data-bs-toggle="modal" data-bs-target="#newsModal" style={{backgroundImage:`url(${newsbg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
              <div className="icon">
                <IoNewspaperOutline style={{ fontSize: '5rem' }} />
              </div>

              <div class="card-content">
                <h2>
                  News
                </h2>
                <p>
                  Important news in Karachi
                </p>
                <p className='inner-content-hotel'>
                  <p className='p1'>
                    Heavy Rainfall...
                  </p>
                  <div className='inner-content-news-div'>
                    <p className='fs-5 m-0 p-0'>
                      Dawn news - 12 may 2023
                    </p>
                  </div>
                  
                </p>
                <p className='inner-content-hotel'>
                  <p className='p1'>
                    Road Blocked Due...
                  </p>
                  <div className='inner-content-news-div'>
                    <p className='fs-5 m-0 p-0'>
                      DailyTimes - 15 feb 2023
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </main>
        </Slide>

      </div>
      <WeatherModal />
      <HotelModal />
      <NewsModal />
    </>
  )
}

export default Competions
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

const Competions = () => {

  return (
    <>
      <div className='comp_main'>
        <Slide left>
          <main>
            <div className="main_card">
              <p>Location</p>
              <h2>Karachi</h2>
            </div>
            {/* Weather */}
            <div class="card" data-bs-toggle="modal" data-bs-target="#weatherModal" >
              <div className="icon">
                <TiWeatherPartlySunny style={{ fontSize: '5rem' }} />
              </div>
              <div class="card-content" style={{background:'url() '}}>
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
                    37
                  </span>
                  <TbTemperatureCelsius style={{ fontSize: '2rem', color: "#888" }} />
                </p>
                <p className='inner-content-weather'>
                  <span className='span1'>
                    feel like :
                  </span>
                  <span className='span2'>
                    35
                  </span>
                  <TbTemperatureCelsius style={{ fontSize: '2rem', color: "#888" }} />
                </p>
                <p className='inner-content-weather'>
                  <span className='span1'>
                    Wind Speed :
                  </span>
                  <span className='span2'>
                    2.03
                  </span>
                  <BsWind style={{ fontSize: '2rem', color: "#888" }} />
                </p>
                <p className='inner-content-weather'>
                  <span className='span1'>
                    Humidity :
                  </span>
                  <span className='span2'>
                    14
                  </span>
                  <WiHumidity style={{ fontSize: '2rem', color: "#888" }} />
                </p>
              </div>
            </div>
            {/* Hotels */}
            <div class="card" data-bs-toggle="modal" data-bs-target="#hotelModal">
              <div className="icon">
                <RiCommunityLine style={{ fontSize: '5rem' }} />
              </div>

              <div class="card-content">
                <h2>
                  Hotels
                </h2>
                <p>
                  Available Hotels in Karachi
                </p>
                <p className='inner-content-hotel'>
                  <p className='p1'>
                    Pappu Hotel Ltd
                  </p>
                  <p className='p2'>
                    located in karachi
                  </p>
                </p>
                <p className='inner-content-hotel'>
                  <p className='p1'>
                    Pappu Hotel Ltd
                  </p>
                  <p className='p2'>
                    located in karachi
                  </p>
                </p>
              </div>
            </div>
            {/* News */}
            <div class="card" data-bs-toggle="modal" data-bs-target="#newsModal">
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
                <p className='inner-content-news'>
                  <p className='p1'>
                    Pakistan ny India ko 10 wicket sy haraya
                  </p>
                  <div className='inner-content-news-div'>
                    <p className='p2'>
                      DailyTimes
                    </p>
                    <p className='p2'>
                      - 12 june 2023
                    </p>
                  </div>
                </p>
                <p className='inner-content-news'>
                  <p className='p1'>
                    Pakistan ny India ko 10 wicket sy haraya
                  </p>
                  <div className='inner-content-news-div'>
                    <p className='p2'>
                      DailyTimes
                    </p>
                    <p className='p2'>
                      - 12 june 2023
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
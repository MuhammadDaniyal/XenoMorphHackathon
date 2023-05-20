import React from 'react'
import "./Competions.css"
// import ComputerIcon from '@mui/icons-material/Computer';
// import { purple } from '@mui/material/colors';
// import { MdComputer } from "react-icons/md";
import Slide from 'react-reveal/Slide';

const Competions = () => {

  const data = [
    {
      id: 1,
      heading: 'Speed Programming',
      description: 'In this competition, participants are given a programming task that they must complete as quickly as possible. The faster they can write the code and get it to run successfully, the higher their score.',
      // img: <ComputerIcon sx={{ fontSize: 50, color: purple[500] }} />
      // img:<MdComputer />
    },
    {
      id: 1,
      heading: 'Speed Debugging',
      description: 'In this competition, participants are given a piece of code that contains errors, and they have to find and fix them as quickly as possible. The faster they can identify and correct the errors, the higher their score.',
      // img: <ComputerIcon sx={{ fontSize: 50, color: purple[500] }} />
      // img:<MdComputer />
    },
    {
      id: 1,
      heading: 'UI/UX Design ',
      description: 'In this competition, participants have to create a user interface that is both visually appealing and easy to use. This competition is perfect for those who have an eye for design.',
      // img: <ComputerIcon sx={{ fontSize: 50, color: purple[500] }} />
      // img:<MdComputer />
    },
  ]

  return (
    <>
      <div className='comp_main'>



        <Slide left>
          <main>
            <div className="main_card">
              <h2>Koderz Competitons</h2>
              <p>Here are some of our Competitions Disciplines</p>
            </div>

            {
              data.map((h => {
                return (

                  <div class="card">
                    <div className="icon">
                      {h.img}
                    </div>

                    <div class="card-content">
                      <h2>
                        {h.heading}
                      </h2>
                      <p>
                        {h.description}
                      </p>
                    </div>

                  </div>
                )
              }))
            }
          </main>
        </Slide>

      </div>
    </>
  )
}

export default Competions
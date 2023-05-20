import {React,useEffect} from 'react'
import './Contact.css'
import Slide from 'react-reveal'

const Contact = ({heading='true'}) => {
    
    
    return (
        <>
            <section className="contactus-section">
                <div className="container">
                {
                    heading === 'true' &&  <h2 className='mainheading'>Provide Feedback</h2>
                }
                    <div className="row mx-auto">
                        <div className="col-12 col-lg-12 mx-auto">
                            <div className="row mx-auto" style={{ justifyContent: "space-evenly" }}>
                                <Slide left >
                                    <div className="col-12 col-lg-4 contact-leftside">
                                        <h3 className="main-heading fw-bold" >
                                            Give Feedback To Our <br />  Team.
                                        </h3>
                                        <p className="main-work-para">
                                            We provide complete support to your Feedbacks.
                                        </p>
                                        <figure >
                                            <img
                                                src="./images/contact.png"
                                                alt="contatUsImg"
                                                className="img-fluid"
                                            />
                                        </figure>
                                    </div>
                                </Slide>
                                <Slide right>
                                    <div className="col-12 col-lg-6 contact-rightside">
                                        <form action='https://formspree.io/f/mdovpvnj' method='POST'>
                                            <div className="row">
                                                <div className="col-12 col-lg-12">
                                                    <textarea type="text"
                                                        name="message"
                                                        id=""
                                                        placeholder='Enter your Feedback'
                                                        className='my_input'
                                                        rows="10"
                                                        style={{border:"1px solid black",padding:"10px"}}
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                            </div>
                                            <div class="form-check form-checkbox-style" style={{ textAlign: "left" }}>
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox" />
                                                <label class="form-check-label" className='main-work-para'>
                                                    I agree that the Discover Pakistan  may contact me at the
                                                    email address or phone number above
                                                </label>
                                            </div>
                                            <button
                                                type="submit"
                                                className="mybtn-contact">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
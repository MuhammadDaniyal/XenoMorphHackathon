import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'

const Index = () => {
    return (
        <>
            <div className="container-fluid footer">
                <div className="row  justify-content-evenly text-white pt-4 pb-5">
                    <div className="col-lg-3 col-mg-3 col-10 pt-4 mt-3">
                        {/* <!-- <h1 className="justify-content-center align-items-center d-flex">STF</h1> --> */}
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="mb-5 mt-2" src={require('../../pakroute_logo.png')} alt="" width="100rem"/>
                        </div>
                        <h3 className="footer-h3 justify-content-center align-items-center d-flex  pb-3"> Our Mission</h3>
                        <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>We are a Community of Coding Enthusiasts hoping to make every individual better</p>
                        <p className="pera-top"
                            style={{ fontSize: "1.4rem", fontWeight: "300", textAlign: "justify" }}>A community of like-minded individuals who share a passion for coding. We believe that learning is a lifelong process, and that's why we encourage our members to explore new ideas and technologies.
                        </p>
                        <div className="justify-content-center align-items-center d-flex">
                            <button type="button" className=" my-btn-F btn  px-4"
                                style={{ borderRadius: "30px" }}>Register</button>
                        </div>
                    </div>
                    <div className=" secondCol col-lg-3 col-mg-3 col-10 pt-4 mt-3">
                        <h3 className="footer-h3 justify-content-center align-items-center d-flex py-3">Important Links</h3>
                        <div className="link-div" style={{ fontWeight: "300" }}>
                            <div className='link-inner-div'>

                                <div><NavLink className="link-light text-decoration-none" to="/">Home</NavLink></div>
                                <div><NavLink className="link-light text-decoration-none" to="/about">About Us</NavLink></div>
                                <div><NavLink className="link-light text-decoration-none" to="/blogs">Blogs</NavLink></div>
                                <div><NavLink className="link-light text-decoration-none" to="/events">Events</NavLink></div>
                                <div><NavLink className="link-light text-decoration-none" to="/team">Team</NavLink></div>
                                <div><NavLink className="link-light text-decoration-none" to="/contact-us">Contact Us</NavLink></div>
                            </div>
                        </div>
                        <h3 className="footer-h3 justify-content-center align-items-center d-flex py-3 pt-5">Support On</h3>
                        <div className="justify-content-center align-items-center d-flex"
                            style={{ fontSize: "2rem", gap: "1rem" }}>
                            <NavLink to="https://www.facebook.com/profile.php?id=100087510656043&mibextid=ZbWKwL" target='_blank'>
                                <i className="footer-icon bi bi-facebook mx-2 pb-4 pt-2"></i>
                            </NavLink>
                            <NavLink to="https://www.instagram.com/koderzclub/?igshid=YmMyMTA2M2Y%3D" target='_blank'>
                                <i className="footer-icon bi bi-instagram mx-2 pb-4 pt-2"></i>
                            </NavLink>
                            <NavLink to="https://www.linkedin.com/company/koderz-club/" target='_blank'>
                                <i className="footer-icon bi bi-linkedin mx-2 pb-4 pt-2"></i>
                            </NavLink>
                            <NavLink to="mailto:koder_club@gmail.com">
                                <i className="footer-icon bi bi-envelope mx-2 pb-4 pt-2"></i>
                            </NavLink>
                        </div>
                        <NavLink to='/member-registration'>
                            <div className="justify-content-center align-items-center d-flex">
                                <button
                                    type="button"
                                    className="my-btn-F btn px-4"
                                    style={{ borderRadius: "30px" }}
                                >Join US
                                </button>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-mg-3 col-10 pt-4 mt-3">
                        <h3 className="footer-h3 justify-content-center align-items-center d-flex py-3">Contact Us</h3>
                        <div className='thirdCol-inner-div'>
                            <i className="bi bi-telephone pe-2"></i> 0315-8951125<br />
                            <i className="bi bi-envelope pe-2"></i> koder_club@gmail.com<br />
                            <i className="bi bi-globe pe-2"></i> STForce.surge.sh<br />
                            <i className="bi bi-geo-alt pe-2"></i>CSIT Department,Main University Rd, NED University Of Engineering & Technology, Karachi,
                            Karachi City, Sindh 75270
                            <iframe className="d-flex my-4 mx-auto"
                                title='Address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0343930461104!2d67.11112897486885!3d24.93089824243632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338bf66073b67%3A0x2a472ce9ccfc811a!2sCSIT%20Department!5e0!3m2!1sen!2sus!4v1681510766636!5m2!1sen!2sus" width="90%" height="230" style={{ borderRadius: "16px", border: "0" }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
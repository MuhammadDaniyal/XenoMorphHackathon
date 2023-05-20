import React from 'react'

import { IoClose } from "react-icons/io5";

const SignUpModal = () => {
    return (
        <>

            <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="signUpModal" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" style={{ width: "50rem" }}>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title m-auto">Sign Up</h2>
                            <IoClose className="modal-btn-close" data-bs-dismiss="modal" />
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="row mx-auto">
                                    <div className="col-12 col-lg-12 contact-rightside mx-auto">
                                        <form method='POST'>
                                            <div className="row">
                                                <div className="col-12 col-lg-11 mx-auto">
                                                    <input type="text"
                                                        name="username"
                                                        id=""
                                                        placeholder='User Name'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='my_input'
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 col-lg-11 mx-auto">
                                                    <input type="email"
                                                        name="email"
                                                        id=""
                                                        placeholder='Email'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='my_input'
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-11 mx-auto">
                                                    <input type="password"
                                                        name="password"
                                                        id=""
                                                        placeholder='Password'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='my_input'
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                            </div>
                                            <div class="form-check form-checkbox-style">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox" />
                                                <label class="form-check-label" style={{ width: '90%' }} className='main-work-para'>
                                                    I agree that the Discover Pakistan may contact me at the
                                                    email address or phone number above
                                                </label>
                                            </div>
                                            <div className='container d-flex justify-content-center align-items-center'>
                                                <button
                                                    type="submit"
                                                    className="mybtn-contact w-50">
                                                    Signup
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpModal
import React from 'react'
import { IoClose } from "react-icons/io5";
const LoginModal = () => {
    return (

        <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="loginModal" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" style={{ width: "50rem" }}>
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title">Login</h2>
                        <IoClose className="modal-btn-close" data-bs-dismiss="modal" />
                    </div>
                    <div class="modal-body">
                    <div className="container">
                                <div className="row mx-auto">
                                    <div className="col-12 col-lg-12 contact-rightside mx-auto">
                                        <form method='POST'>

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
                                            <button
                                                type="submit"
                                                className="mybtn-contact">
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
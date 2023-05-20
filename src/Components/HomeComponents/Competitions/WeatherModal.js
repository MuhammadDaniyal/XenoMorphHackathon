import React from 'react'
import './WeatherModal.css'
import { IoClose } from "react-icons/io5";

const WeatherModal = () => {
    return (
        <>
            <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="weatherModal" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title">Weather Information</h2>
                            <IoClose className="modal-btn-close" data-bs-dismiss="modal" />
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-11 col-md-11 mx-auto">

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

export default WeatherModal
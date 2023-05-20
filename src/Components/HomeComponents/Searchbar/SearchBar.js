import React from 'react'
import './Searchbar.css'
import { GiPathDistance } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { IoAirplaneOutline } from "react-icons/io5";
import { useState } from 'react';
import { useRef } from 'react';

const SearchBar = () => {

    const [trip, settrip] = useState({ origin: "", destination: "" })
    let origin = trip.origin
    let destination =    trip.destination
    const [loc, setloc] = useState([])

    const stopinputref = useRef(0);

    const addstops = () => {
        const temp = stopinputref.current.value;
        setloc([...loc, temp])
        stopinputref.current.value = ''
    }
    return (
        <>
            <div className='container'>
                <div className='search-bar d-flex justify-content-center align-items-center flex-column'>
                    <div className='search-bar-heading-div'>
                        <h4 className='fw-bold'>Search for your trip</h4>
                    </div>
                    <div className='inner-search-bar'>
                        <div className="container d-flex justify-content-around">
                            <div className="row my-4" style={{ width: '90%' }}>

                                <div className="col-12 col-lg-10">
                                    <div className="row">
                                        <div className="col-12 col-lg-5 ">
                                            <div className="row">
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="origin"
                                                        id=""
                                                        placeholder='Origin'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='my_input-searchbar'
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="date"
                                                        name="date"
                                                        id=""
                                                        placeholder='Date'
                                                        className='my_input-searchbar'
                                                    />
                                                    <span class="separator-searchbar"> </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-2 d-flex  justify-content-center align-items-center ">
                                            <GiPathDistance className='path-icon' />
                                        </div>
                                        <div className="col-12 col-lg-5 ">
                                            <div className="row">
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="destination"
                                                        id=""
                                                        placeholder='Destination'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='my_input-searchbar'
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="date"
                                                        name="date"
                                                        id=""
                                                        placeholder='Date'
                                                        className='my_input-searchbar'
                                                    />
                                                    <span class="separator-searchbar"> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-2 ">
                                    <button className='my-btn-search'>Discover</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* add stop feature */}
            <div className='container'>
                <div className='search-bar2 d-flex justify-content-center align-items-center flex-column'>
                    <div className='inner-search-bar'>
                        <div className="container d-flex justify-content-around">
                            <div className="row my-4" style={{ width: '90%' }}>

                                <div className="col-12 col-lg-12">
                                    <div className="row">
                                        <div className="col-12 col-lg-4">
                                            <div className="row">
                                                <div className="col-12 col-lg-8 ">
                                                    <input type="text"
                                                        name="stop"
                                                        id=""
                                                        placeholder='Add Stop'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='my_input-searchbar'
                                                        ref={stopinputref}
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                                <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                                                    <button className='my-btn-search2' onClick={addstops}><AiOutlinePlus /></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-8 d-flex justify-content-start align-items-center flex-row" style={{ border: "1px solid black", gap: "6px" }}>
                                            {(origin !== "" && destination !== "") &&
                                            <>
                                            <div className='tag-search' >{origin}</div>
                                            {
                                                loc.map((item) => {
                                                    return <>
                                                        <IoAirplaneOutline style={{ color: "black", fontSize: "2.5rem" }} />
                                                        <div className='tag-search' >{item}</div>
                                                    </>
                                                })
                                            }
                                            <IoAirplaneOutline style={{ color: "black", fontSize: "2.5rem" }} />
                                            <div className='tag-search' >{destination}</div>
                                            </>}
                                        </div>
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

export default SearchBar
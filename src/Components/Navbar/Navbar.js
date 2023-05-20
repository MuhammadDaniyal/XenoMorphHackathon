import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiAlignRight, FiX } from "react-icons/fi";
import './Navbar.css'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState()
    return (
        <>
            <nav>
                <div className={activeMenu ? "navbar active" : "navbar"}>
                    <ul className="navbar-lists">
                        <li>
                            <NavLink to='/' className='navbar-link home-link'
                                onClick={() => { setActiveMenu(false) }}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className='navbar-link1'
                                onClick={() => { setActiveMenu(false) }} data-bs-toggle="modal" data-bs-target="#loginModal">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className='navbar-link1'
                                onClick={() => { setActiveMenu(false) }} data-bs-toggle="modal" data-bs-target="#signUpModal">Signup</NavLink>
                        </li>
                    </ul>

                    <div className="mobile-nav--btn">
                        <FiAlignRight
                            name='mobile-outline'
                            className='mobile-nav--icon'
                            onClick={() => { setActiveMenu(true) }}
                        />
                        <FiX
                            name='close-outline'
                            className='mobile-nav--icon close-outline'
                            onClick={() => { setActiveMenu(false) }}
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
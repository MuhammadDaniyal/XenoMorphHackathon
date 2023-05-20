import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar.js'
import './Navbar.css'

const Header = () => {

    const [isVisible, setVisible] = useState(false);

    const listenToScroll = () => {
        let heightScroll = 250; // apko kb ussy display krana woh value
        const windowScroll =
            (document.body.scrollTop || document.documentElement.scrollTop); // ap kitna scroll krchuky woh btaega
        if (windowScroll > heightScroll) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    // yeh bar bar check krrha hy ap web py kitna scroll kya ho 
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll) // yh listen krega 
        return () => window.removeEventListener('scroll', listenToScroll) // yhn py forn apki app sy scroll data dlt krdega issy load nh brhga apki app py warna bar bar scroll ky data load pr ky hang hoskta
    }, [])

    return (
        <header className={`${isVisible ? 'header  scroll-header' : 'header '}`} >
            <NavLink to={'/'}>
                <img className='logo rotateY-logo' src="/images/koders-club-logo.png" alt="" />
            </NavLink>
            <Navbar />
        </header>
    )
}

export default Header
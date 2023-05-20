import React from 'react'
import Header from '../Components/Navbar/Header'
import Footer from '../Components/Footer/Index'
import BottomToTop from '../Components/BottomToTop/BottomToTop'
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'

const index = ({ children }) => {
    return (
        <>
            <Header />
            <ScrollToTop />
            {children}
            <BottomToTop />
            <Footer />
        </>
    )
}

export default index
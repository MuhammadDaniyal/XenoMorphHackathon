import React from 'react'
import Layout from '../../Layout'
import Main from './MainPage/Main'
import '../HomeComponents/homecomponent.css'
import Competions from './Competitions/Competions'
import Contact from './ContactComponent/Contact'
import { ToastContainer } from 'react-toastify';

const index = () => {
    return (
        <>
            <Layout>
                <ToastContainer position="bottom-right" bodyClassName={"toastBody"}/>
                <Main />
                <Competions />
                <Contact />

            </Layout>
        </>
    )
}

export default index;
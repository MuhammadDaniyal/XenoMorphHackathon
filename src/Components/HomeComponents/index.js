import React from 'react'
import Layout from '../../Layout'
import Main from './MainPage/Main'
import Competions from './Competitions/Competions'
import Contact from './ContactComponent/Contact'
const index = () => {
    return (
        <>
            <Layout>
                <Main />
                <Competions />
                <Contact />

            </Layout>
        </>
    )
}

export default index;
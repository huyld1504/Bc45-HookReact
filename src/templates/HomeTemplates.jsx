import React from 'react'
import Header from '../components/Header'
import {Outlet} from 'react-router-dom'
const HomeTemplates = () => {
  return (
    <div>

        <Header/>

        <div className='content' style={{minHeight:500}}>
            <Outlet></Outlet>
        </div>

        <footer className='fs-3 text-center text-white p-3 bg-dark'>
            FOOTER
        </footer>

    </div>
  )
}

export default HomeTemplates
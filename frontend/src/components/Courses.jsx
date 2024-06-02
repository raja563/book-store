import React from 'react'
import Navbar from './Navbar'
import Course from './Course'
import Footer from './Footer'

const Courses = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Navbar/>
      <div className='min-h-screen'>

        <Course/>
      </div>
      <Footer/>  
    </div>
  )
}

export default Courses
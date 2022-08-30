import React from 'react'
import Header from './Header'
import SideNav from './SideNav'
const container = (props) => {
  return (
    <>
        <SideNav/>
        <div className='dashboardBodyContainer'>
            <Header/>
            {props.children}

        </div>
    </>
  )
}

export default container

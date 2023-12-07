import React from 'react'
import SideBarComp from './side-bar-comp'

const SideBar = () => {
  return (
    <div  className='side-bar'>
      <SideBarComp title="Categories"/>
      <SideBarComp title="Brands"/>
      <SideBarComp title="Price"/>
     
     
      
    </div>
  )
}

export default SideBar
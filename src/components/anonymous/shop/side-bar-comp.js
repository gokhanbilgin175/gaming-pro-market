import React from 'react'
import "./side-bar-comp.scss"
import { BsFillSquareFill } from 'react-icons/bs';

const SideBarComp = ({title}) => {
  return (
    <div className='side-bar-comp'>
          <h2>{title}</h2>
        <ul>
            <li ><a href=""><BsFillSquareFill className="icon"/> Lorem.</a></li>
            <li><a href=""><BsFillSquareFill className="icon"/> Similique?</a></li>
            <li><a href=""><BsFillSquareFill className="icon"/></a> Harum.</li>
            <li><a href=""><BsFillSquareFill className="icon"/></a> At!</li>
            <li><a href=""><BsFillSquareFill className="icon"/></a> Aperiam.</li>
            <li><a href=""><BsFillSquareFill className="icon"/></a> Dolores!</li>
            <li><a href=""><BsFillSquareFill className="icon"/></a> Nemo!</li>
            <li><a href=""><BsFillSquareFill className="icon"/></a> Rem.</li>
            <li><a href=""><BsFillSquareFill className="icon"/></a> Neque.</li>
        </ul>
    </div>
  )
}

export default SideBarComp
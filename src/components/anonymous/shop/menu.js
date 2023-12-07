import React from 'react'
import { Col, Row } from 'react-bootstrap'
import RightMenu from './right-menu'
import SideBar from './side-bar'
import "./menu.scss"

const Menu = () => {
  return (
    <div className='menu'>
        <Row>
            <Col md={3} >
                <SideBar/>
            </Col>
            <Col md={9}>
                <RightMenu/>
            </Col>
        </Row>
    </div>
  )
}

export default Menu
import React from 'react'
import Page1 from './CarouselPages/Page1'
import {RiArrowDownSLine} from 'react-icons/ri'
const Navbar = () => {
    return (
        <>
        <div className="navvbar">
            <div className="logo-div">
             <img src="https://celebaltech.com/assets/img/celebal.webp" className="celebal-logo"></img>
            </div>
            <div className="list-container">
                <ul className="nav-list">
                    <li className="navbar-list">Products<RiArrowDownSLine/></li>
                    <li className="navbar-list">Azure<RiArrowDownSLine/></li>
                    <li className="navbar-list">Data Science<RiArrowDownSLine/></li>
                    <li className="navbar-list">Power Platform<RiArrowDownSLine/></li>
                    <li className="navbar-list">Big Data<RiArrowDownSLine/></li>
                    <li className="navbar-list">SAP Surround<RiArrowDownSLine/></li>
                    <li>MS Teams</li>
                </ul>
            </div>
            <div className="nav-button-div">
                <button className="navbar-button">Get in Touch</button>
            </div>
        </div>
        <Page1/>
        </>
    )
}

export default Navbar

import { Icon } from '@iconify/react';

import React from 'react'
import "../header/header.css"

const Header = () => {
  return (

    <>
      <div className="hero-img">

        <nav className=" pt-5 navbar navbar-expand-lg">
          <div className="container ">
            <h1 className="navbar-brand text-white fw-bold" href="#">MNTN</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto ">
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#equipment">Equipment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#about">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#blog">Blog</a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white fw-bold" href="#account"><Icon className='me-3 fs-3' icon="codicon:account" />Account</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="d-flex flex-column justify-content-center align-items-center  mt-5 pt-5 text-white">

          <h1 className="display-4 mb-4"><h6 className=' text-warning'><Icon className='me-2 fs-3' icon="pepicons-pencil:line-x" />A Hiking guide</h6>Be prepared for the <br />
            Mountains and beyond!  <p className="text-start fs-5 mt-2">Scroll down <Icon className=' fs-3 me-2' icon="solar:arrow-down-outline" /></p></h1>

        </div>
      </div>
    </>

  )
}

export default Header;
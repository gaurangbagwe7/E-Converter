import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border-bottom`}>
    <div className="container-fluid">
      
      {/* Brand Logo and Title */}
      <a className="navbar-brand" href="/">
        <img src="./logo192.png" alt="Brand Logo" width="30" height="30" className="d-inline-block align-text-top me-2"/>
        {props.title}
      </a>

      {/* Button to close Navbar After Collapse */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav Menu */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">

          {/*dark Mode*/}
          <li className="nav-item">
          <div className={`form-check form-switch my-2 text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" defaultChecked={window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false} onClick={props.toggleMode} id="flexSwitchCheckDefault" type="checkbox" role="switch" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
          </li>

          <li className="nav-item">
            <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/">{props.nav1}</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/">{props.nav2}</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/">{props.nav3}</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">{props.nav4}</Link>
          </li>
          
          <li className="nav-item mb-2">
            <a className="btn btn-outline-primary me-2" href="/">Login</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-primary text-white" href="/">Signup</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}

//Props Types 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    nav1:PropTypes.string.isRequired,
    nav2:PropTypes.string.isRequired,
    nav3:PropTypes.string.isRequired
}

//Default Props
Navbar.defaultProps = {
    title:'E-Converter',
    nav1:'Home',
    nav2:'Pricing',
    nav3:'FAQs',
    nav4:'About',
}


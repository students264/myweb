import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Header = () => {
  return (
        
            <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(to right, #7F00FF, #ff9066)'}}>
                <div className="container-fluid">
                    <a className="navbar-brand fs-3 fw-bold" style={{ color: '#ded4d4' }} href="#">welcom to Skillwise</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-3">
                                <a className="nav-link fs-4" href="#" style={{ color: '#ded4d4' }}>About</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link fs-4" href="#" style={{ color: '#ded4d4' }}>Courses</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link fs-4" href="#" style={{ color: '#ded4d4' }}>Contact</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link fs-4" href="#" style={{ color: '#ded4d4' }}>what we do</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
  )
}

export default Header
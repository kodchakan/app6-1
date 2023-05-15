import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Product from './product'
import Home from './home'
import About from './about'

export default function NavlinkRoute() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm bg-dack navbar-dack">
                    <div className="container-fluid">
                        <ul className="navbar-nav nav-pills">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/product" className="nav-link" >Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/*" className="nav-link" >Link</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" >Aboute</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

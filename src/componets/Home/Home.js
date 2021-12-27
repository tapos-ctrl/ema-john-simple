import React from 'react';
import logo from '../../images/logo.png';
import './Home.css';
const Home = () => {
  



    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row justify-content-center">

                    <div className="logo">
                        <img className="img-fluid" src={logo} alt="" />

                    </div>

                </div>
            </div>
            <div className="navBar ">
                <div className="container-fluid d-flex">
                    <nav className="navbar navbar-expand-lg customNavBar navbar-light ">
                        <ul className="navbar-nav custom-ul">
                            <li className="nav-item custom-nav-item">
                                <a className="nav-link active text-white mx-2" aria-current="page" href="/shop">Shop</a>
                            </li>
                            <li className="nav-item custom-nav-item">
                                <a className="nav-link text-white mx-2" href="/order">Order Review</a>
                            </li>
                            <li className="nav-item custom-nav-item">
                                <a className="nav-link text-white mx-2" href="/mange">Manage Inventory here</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="search-box">
                <input type="text" placeholder="type hear to seach" />
            </div>
        </div>
    );
};

export default Home;
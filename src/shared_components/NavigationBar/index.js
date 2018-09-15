import React, { Component } from 'react';
import {Link as RouteLink} from "react-router-dom";
import './index.css'
import { Link, DirectLink, } from 'react-scroll'

const navigationBar = (props) => {
    return (
        <div className="nav-wrapper">
            <ul className="tabs">
                <li><Link to="services" spy={true} smooth={true} duration={500} title="Demo">Main features</Link></li>
                <li><Link to="projects" spy={true} smooth={true} duration={500} title="Projects">Projects</Link></li>
                <li><Link to="prices" spy={true} smooth={true} duration={500} title="Prices">Цены</Link></li>
                {/*<li><Link to="contact" spy={true} smooth={true} duration={600} title="Contacts">Contact Us</Link></li>*/}
                {/*<li><NavLink to="/signUp" title="Sign Up">Sign Up</NavLink></li>*/}
                <li><RouteLink to={{ pathname: "/signIn", state: { modal: true } }} title="Sign In"
                               style={{outline: 'none', textDecoration: 'none'}}>
                    Sign In
                </RouteLink></li>
                {/*<li><RouteLink to={{ pathname: "/signIn", state: { modal: true } }} title="Sign In">Sign In</RouteLink></li>*/}
            </ul>
        </div>
    )
}

export default navigationBar;
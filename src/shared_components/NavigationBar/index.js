import React, { Component } from 'react';
import {Link as RouteLink} from "react-router-dom";
import './index.css'
import { Link, DirectLink, } from 'react-scroll'

const navigationBar = (props) => {
    return (
        <div className="nav-wrapper">
            <ul className="tabs">
                <li><Link to="services" spy={true} smooth={true} duration={500} title="Demo">Возможности</Link></li>
                <li><Link to="projects" spy={true} smooth={true} duration={500} title="Projects">Демо</Link></li>
                <li><Link to="prices" spy={true} smooth={true} duration={500} title="Prices">Цены</Link></li>
                {/*<li><Link to="contact" spy={true} smooth={true} duration={600} title="Contacts">Contact Us</Link></li>*/}
                {/*<li><NavLink to="/signUp" title="Sign Up">Sign Up</NavLink></li>*/}
                {/*<li><RouteLink to={{ pathname: "/signIn", state: { modal: true } }} title="Sign Up"*/}
                               {/*style={{outline: 'none', textDecoration: 'none'}}>*/}
                    {/*Регистрация*/}
                {/*</RouteLink></li>*/}
                <li><a href="https://www.gymcms.ru/registration">Регистрация</a></li>
                {/*<li><RouteLink to={{ pathname: "/signIn", state: { modal: true } }} title="Sign In">Sign In</RouteLink></li>*/}
            </ul>
        </div>
    )
}

export default navigationBar;
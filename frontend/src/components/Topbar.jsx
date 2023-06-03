import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import UserContext from "../context/UserContext";
import User from "./User";
import Theme from "./Theme";
import LinkedIn from "../assets/Icon/icons8-linkedin-94.png"
import GitHub from "../assets/Icon/icons8-github-94.png"
import WhiteArrow from "../assets/Icon/icons8-right-arrow-96-white.png"
import BlackArrow from "../assets/Icon/icons8-right-arrow-96.png"

const Topbar = () => {
    const { user, theme } = useContext(UserContext);
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };
    useEffect(() => {
        scrollToTop();
    }, []);
    return (
        <div className='Topbar_container'>
            <div className='Topbar_container_left'>
                {/* <button onClick={() => {
                    console.log(presentationON)
                }}>INFOS</button> */}
                <User />
            </div>
            <div className='Topbar_container_middle'>
                {user ?
                    <div>
                        <NavLink to='/dev' onClick={scrollToTop}>Developpement</NavLink>
                        <NavLink to='/bdd' onClick={scrollToTop}>Database</NavLink>
                        <NavLink to='/Sign' onClick={scrollToTop}>Sign IN</NavLink>
                    </div>
                    :
                    <div>
                    </div>}
            </div>
            <div className='Topbar_container_right'>
                <Theme />
                <a href="https://www.linkedin.com/in/vincent-rouget-22996118a/" target="_blank" className="Linkedin">
                    <img src={LinkedIn} alt=" " className="Linkedin"></img></a>
                <a href="https://github.com/vincentRouget" target="_blank" className="Github">
                    <img src={GitHub} alt=" " className="Github"></img></a>
                {user ?
                    <NavLink to='/quit' onClick={scrollToTop}>Out</NavLink>
                    :
                    <NavLink to='/login' onClick={scrollToTop}>In</NavLink>}
                <a href={`mailto:vincent.rouget86@gmail.com`}>Contact me</a>
            </div>
        </div>
    );
};

export default Topbar;
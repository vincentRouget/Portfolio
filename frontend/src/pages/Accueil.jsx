import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import UserContext from "../context/UserContext";
import Logo from "../assets/Icon/Logo3.png"
import Theme from "@components/Theme";
import LinkedIn from "../assets/Icon/icons8-linkedin-94.png"
import GitHub from "../assets/Icon/icons8-github-94.png"
import WhiteArrow from "../assets/Icon/icons8-right-arrow-96-white.png"
import BlackArrow from "../assets/Icon/icons8-right-arrow-96.png"

const Accueil = () => {
    const { user, theme } = useContext(UserContext);
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    useEffect(() => {
    }, []);

    return (
        <div className={theme == 'light' ? "Accueil" : "Accueil_dark"}>
            <div className="Accueil_topbar">
                <div className="Accueil_topbar_left">
                    <img src={Logo} alt=" " className="Logo"></img>
                    <h1>Vincent Rouget</h1>
                </div>
                <div className="Accueil_topbar_middle">
                </div>
                <div className="Accueil_topbar_right">
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
            <div className='Accueil_page'>  
                <h1>WEB & MOBILE DEVELOPER</h1>
                <p>Front-end & Back-end</p>
                <NavLink to='/Portfolio' onClick={scrollToTop} className="Link">
                    {theme == 'light' ?
                        <img src={BlackArrow} alt=" " className="Arrow"></img>
                        :
                        <img src={WhiteArrow} alt=" " className="Arrow"></img>}
                    See my projects
                </NavLink>
            </div>
        </div>
    );
};

export default Accueil;
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import UserContext from "../context/UserContext";
import Logo from "../assets/Icon/Logo3.png"
import Theme from "@components/Theme";
import Texte from "@components/Texte";
import LinkedIn from "../assets/Icon/icons8-linkedin-94.png"
import GitHub from "../assets/Icon/icons8-github-94.png"
import WhiteArrow from "../assets/Icon/icons8-right-arrow-96-white.png"
import BlackArrow from "../assets/Icon/icons8-right-arrow-96.png"
// import LegendaryCursor from "legendary-cursor";

const Accueil = () => {
    const { user, theme } = useContext(UserContext);
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };
    // Trainée de souris :
    // window.addEventListener("load", () => {
    //     LegendaryCursor.init({
    //         lineSize: 0.1, // Taille de la trainée
    //         opacityDecrement: 0.9, // Vitesse de disparition
    //         speedExpFactor: 0.9, // ?
    //         lineExpFactor: 0.9, // ?
    //         sparklesCount: 200, // Nombre de particules libres
    //         maxOpacity: 1.99,  // Opacité de la trainée / particules : should be a number between [0 ... 1]

    //         // Can change images:
    //         texture1: "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",      // texture displayed on mouse hover
    //         texture2: "https://cdn.pixabay.com/photo/2022/06/08/05/47/stars-7249785_1280.jpg",      // texture displayed on mouse click
    //         // texture3:         "https://cdn.pixabay.com/photo/2017/12/10/13/37/christmas-3009949_1280.jpg",      // texture displayed on sparkles
    //     });
    // });

    useEffect(() => {
    }, []);

    return (
        <div className={theme == 'light' ? "Accueil" : "Accueil_dark"}>
            <div className="Accueil_topbar">
                <div className="Accueil_topbar_left">
                    <a href="https://www.linkedin.com/in/vincent-rouget-22996118a/" target="_blank">
                        <img src={Logo} alt=" " className="Logo"></img>
                    </a>
                    <div className='Texte_first'>
                        <div className='Texte_two'>
                            <span className='Texte_two_span Texte_police'>&nbsp;Vincent Rouget</span>
                        </div>
                    </div>
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
                <Texte />
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
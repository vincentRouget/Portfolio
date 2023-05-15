import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Theme from './Theme';
import User from './User';

const Navbar = () => {

    const { user, setUser, theme, setTheme, dataImage } = useContext(UserContext);
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        if (user) {
            console.log(user);
        }
    }, [user]);

    return (
        <div className='Navbar dark-sheme'>
            <User />
            <div className='Navbar_middle'>
                <NavLink to='/' onClick={scrollToTop}>Accueil</NavLink>
                <NavLink to='/formule' onClick={scrollToTop}>Formules</NavLink>
                {/* <NavLink to='/mail' onClick={scrollToTop}>Mail</NavLink> */}
                <NavLink to='/contact' onClick={scrollToTop}>Contact</NavLink>
                <a href='https://www.booking.com/hotel/fr/la-maison-du-lac-flavignac.html' target='_blank'>Réserver</a>
                {(user && user.admin === 1) &&
                    <div className='Navbar_middle_admin'>
                        <NavLink to='/dev' onClick={scrollToTop}>Developpement</NavLink>
                        <NavLink to='/bdd' onClick={scrollToTop}>Database</NavLink>
                        {/* <NavLink to='/style' onClick={scrollToTop}>Styles</NavLink> */}
                    </div>}
            </div>
            <div className='Navbar_right'>
                {user ?
                    <div className='Navbar_right_navlink'>
                        <NavLink to='/quit' onClick={scrollToTop}>Se déconnecter</NavLink>
                        {/* ***VERSION BACKEND*** */}
                        {/* {user.admin === 1 &&
                            <NavLink NavLink to='/sign'>Inscription</NavLink>
                        } */}
                        {/* *** */}
                        <Theme />
                    </div>
                    :
                    <div className='Navbar_right_navlink'>
                        {/* ***VERSION BACKEND*** */}
                        {/* <NavLink to='/login' onClick={scrollToTop}>Connection</NavLink> */}
                        {/* *** */}
                        <Theme />
                    </div>}
            </div>
        </div >
    );
};

export default Navbar;
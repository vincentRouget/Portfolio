import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";
import Theme from "./Theme";

const Topbar = () => {
    const { user } = useContext(UserContext);
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
                <p>Dernière mise à jour le 29 mai 2023</p>
            </div>
            {user ?
                <div className='Topbar_container_middle'>
                    <NavLink to='/dev' onClick={scrollToTop}>Developpement</NavLink>
                    <NavLink to='/bdd' onClick={scrollToTop}>Database</NavLink>
                    <NavLink to='/Sign' onClick={scrollToTop}>Sign IN</NavLink>
                </div>
                :
                <div className='Topbar_container_middle'>
                </div>}
            <div className='Topbar_container_right'>
                {user ?
                    <NavLink to='/quit' onClick={scrollToTop}>OUT</NavLink>
                    :
                    <NavLink to='/login' onClick={scrollToTop}>IN</NavLink>}
                <Theme />
            </div>
        </div>
    );
};

export default Topbar;
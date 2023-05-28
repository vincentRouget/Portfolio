import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

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
            {user ?
                <div className='Topbar_container_middle'>
                    <NavLink to='/dev' onClick={scrollToTop}>Developpement</NavLink>
                    <NavLink to='/bdd' onClick={scrollToTop}>Database</NavLink>
                    <NavLink to='/Sign' onClick={scrollToTop}>Inscription</NavLink>
                </div>
                :
                <div className='Topbar_container_middle'>
                </div>}
            <div className='Topbar_container_update'>
                {user ?
                    <NavLink to='/quit' onClick={scrollToTop}>Se déconnecter</NavLink>
                    :
                    <NavLink to='/login' onClick={scrollToTop}>Connection</NavLink>}
                <p>Dernière mise à jour le 28 mai 2023</p>
            </div>
        </div>
    );
};

export default Topbar;
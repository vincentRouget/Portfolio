import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';

const Accueil = () => {

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
        <div className='Accueil'>
            <div className='Accueil_page'>
                <h1>HEY I AM VINCENT ROUGET</h1>
                <p>I am a web developer</p>
                <p>Front-end & Back-end</p>
                <NavLink to='/Portfolio' onClick={scrollToTop}>See my projects</NavLink>
            </div>
        </div>
    );
};

export default Accueil;
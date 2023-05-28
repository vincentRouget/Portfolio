import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Theme from './Theme';
import User from './User';

const Sidebar = ({
    presentationON,
    setPresentationON,
    applicationON,
    setApplicationMobileON
}) => {

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
        <div className='Sidebar_container'>
            <User />
            <Theme />
            <div className='Sidebar_container_top'>
                <NavLink to='/' onClick={scrollToTop}>Accueil</NavLink>
                <button onClick={() => {
                    setPresentationON(true)
                    setApplicationMobileON(false)
                }}>Biographie</button>
                <button onClick={() => {
                    setPresentationON(false)
                    setApplicationMobileON(true)
                }}>Application</button>

            </div>
            <div className='Sidebar_container_bottom'>
            </div>
        </div >
    );
};

export default Sidebar;
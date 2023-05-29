import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import UserContext from "../context/UserContext";
// import Sun from '../assets/Icon/icons8-summer-48.png';
// import Moon from '../assets/Icon/icons8-crescent-moon-32.png';
import Dark from "../assets/Icon/icons8-dark-96ter.png"

const Theme = () => {
    const { user, theme, setTheme, dataImage, setDataImage } = useContext(UserContext);
    const navigate = useNavigate();

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    };

    useEffect(() => {
    }, [user]);

    return (
        <div className='Theme'>
            <button onClick={toggleTheme}><img src={Dark} alt='Dark'></img></button>
        </div>
    );
};

export default Theme;
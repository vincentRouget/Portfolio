import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import UserContext from "../context/UserContext";
import Dark from "../assets/Icon/icons8-dark-96ter.png"

const Theme = () => {
    const { theme, setTheme } = useContext(UserContext);
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
    }, []);

    return (
        <div className='Theme'>
            <button onClick={toggleTheme}><img src={Dark} alt='Dark'></img></button>
        </div>
    );
};

export default Theme;
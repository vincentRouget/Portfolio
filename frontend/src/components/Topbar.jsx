import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

const Topbar = () => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

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
            <h1>TOPBAR</h1>
        </div>
    );
};

export default Topbar;
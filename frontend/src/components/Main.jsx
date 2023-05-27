import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

const Main = () => {

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
        <div className='Main_container'>
            <h1>MAIN</h1>
        </div>
    );
};

export default Main;
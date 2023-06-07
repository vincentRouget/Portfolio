import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import UserContext from "../context/UserContext";

const Dating = () => {
    const { theme } = useContext(UserContext);
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
        <div className='Dating'>
            <h1>Application Mobile</h1>
            <p>En cours de construction</p>
        </div>
    );
};

export default Dating;
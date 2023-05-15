import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Quit = () => {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const deconnect = (e) => {
        e.preventDefault();
        const token = "token";
        localStorage.removeItem("token", `Bearer ${token}`);
        setUser(null);
        navigate("/", {
            state: {
                token,
            },
        });
    };
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
        <div className='Quit'>
            <Navbar />
            <div className='Quit_form'>
                <div className='Quit_form_content'>
                    <h1>Voulez-vous vous déconnecter?</h1>
                    <div className='Quit_form_content_button'>
                        <NavLink to='/'>
                            <button className="SecondaryButton"><p>Annuler</p></button>
                        </NavLink>
                        <button className="PrimaryButton" onClick={deconnect}>Se déconnecter</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Quit;
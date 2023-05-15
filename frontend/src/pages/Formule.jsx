import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Navbar from '../components/Navbar';
import CarteRoom from '../components/CarteRoom';
import Footer from '../components/Footer';


const Formule = () => {

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
        <div className='Formule'>
            <Navbar />
            <div className='Formule_container'>
                <CarteRoom />
            </div>
            <Footer />
        </div>
    );
};

export default Formule;
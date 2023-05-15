import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Navbar from '../components/Navbar';
import CarteRoom from '../components/CarteRoom';
import Banniere from '../components/Banniere';
import Slider from '../components/Slider';
import Carrousel from '../components/Carrousel';
import Window from '../components/Window';
import Footer from '../components/Footer';
import Carte from '../components/Carte';
import LinkSidebar from '../components/LinkSidebar';

const Dev = () => {

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
        <div className='Build'>
            <Navbar />
            <div className='Build_container'>
                {/* <Banniere /> */}
                {/* <Carte /> */}
                {/* <CarteRoom /> */}
                {/* <Slider /> */}
                {/* <Carrousel /> */}
                {/* <Window name_component='contenant1' /> */}
                {/* <LinkSidebar/> */}
                <h1>DEVELOPPEMENT END</h1>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Dev;
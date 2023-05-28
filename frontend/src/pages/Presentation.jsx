import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";
import Sidebar from "@components/Sidebar";
import Topbar from "@components/Topbar";
import MainPage from "@components/MainPage";

// ***VERSION FRONTEND***
import Window from '../components/Window';
import Commune2 from '../assets/Image/Commune2.jpg';
import Hiver3 from '../assets/Image/hiver3.jpg';
import Facade from '../assets/Image/facade.jpg';
import Suiteparentale2 from '../assets/Image/suite_parentale2.jpg';
import Salle2 from '../assets/Image/salle2.jpg';
import Commune5 from '../assets/Image/commune5.jpg';
import Commune6 from '../assets/Image/commune6.jpg';
import Chambre21 from '../assets/Image/chambre2-1.jpg';
import Suiteparentale1 from '../assets/Image/suite_parentale1.jpg';
import Suiteparentale5 from '../assets/Image/suite_parentale5.jpg';
import Suiteparentale9 from '../assets/Image/suite_parentale9.jpg';
import Commune1 from '../assets/Image/commune1.jpg';
import Suiteparentale7 from '../assets/Image/suite_parentale7.jpg';
import Salle1 from '../assets/Image/salle1.jpg';
import Commune4 from '../assets/Image/commune4.jpg';
import Ete1 from '../assets/Image/ete1.jpg';
import Hiver4 from '../assets/Image/hiver4.jpg';
import Hiver1 from '../assets/Image/hiver1.jpg';
import Hiver2 from '../assets/Image/hiver2.jpg';
// ***


const Presentation = () => {

    const { user, theme, dataImage } = useContext(UserContext);
    const navigate = useNavigate();
    // ***VERSION FRONTEND***
    const interieur = [
        { name: Commune2 },
        { name: Commune6 },
        { name: Commune5 },
        { name: Chambre21 },
        { name: Suiteparentale1 },
        { name: Suiteparentale5 },
        { name: Suiteparentale9 },
        { name: Commune1 },
        { name: Suiteparentale7 },
        { name: Salle1 },
        { name: Commune4 },
    ];
    const exterieur = [
        { name: Facade },
        { name: Ete1 },
        { name: Hiver3 },
        { name: Hiver4 },
        { name: Hiver1 },
        { name: Hiver2 },
    ];
    // ***

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
        <div className='ApplicationMobile'>
            <h1>Présentation</h1>

        </div>
    );
};

export default Presentation;
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Fleche from '../../src/assets/icon/icons8-chevron-left-64.png';

const Carrousel = () => {

    const { user, dataImage, setDataImage } = useContext(UserContext);
    const [carrousel, setCarrousel] = useState('');
    const [nombre, setNombre] = useState(1);
    const [position, setPosition] = useState(0);

    const handleLeft = () => {
        console.log('testLeft');
    };
    const handleRight = () => {
        console.log('TestRight');
    };

    useEffect(() => {
    }, [dataImage]);

    return (
        <div className='Carrousel'>
            <div className='Carrousel_container'>
                <button type='submit' onClick={handleLeft}>
                    <img src={Fleche} alt='Click left' id='left'></img>
                </button>
                <button type='submit' onClick={handleRight}>
                    <img src={Fleche} alt='Click right' id='right'></img>
                </button>
            </div>
        </div >
    );
};

export default Carrousel;
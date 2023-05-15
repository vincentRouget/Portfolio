import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import Iframe from 'react-iframe'
import axios from 'axios';
import UserContext from "../context/UserContext";

const Carte = () => {

    const largeur = 1000;

    useEffect(() => {
    }, []);

    return (
        <div className='Carte'>
            <div className='Carte_container'>
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.471150942063!2d1.0964806157589981!3d45.70158412559285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fed08e60b63c6f%3A0x9b42ec80dba026d3!2s12%20Rte%20de%20Rilhac%2C%2087230%20Flavignac!5e0!3m2!1sfr!2sfr!4v1677175554500!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style="border:0;"
                    allowfullscreen="true"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    loading="eager"
                    referrerpolicy="no-referrer-when-downgrade"
                    className='iframe'>
                </Iframe>
            </div>
        </div>
    );
};

export default Carte;
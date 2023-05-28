import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

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
            <div className='Build_container'>           
                <h1>DEVELOPPEMENT END</h1>         
                {/* <Slider /> */}
                {/* <Carrousel /> */}
                {/* <Window name_component='contenant1' /> */}
                {/* <LinkSidebar/> */}      
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Dev;
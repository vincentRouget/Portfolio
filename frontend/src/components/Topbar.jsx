import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import UserContext from "../context/UserContext";
import Infos from "./Infos";
import User from "./User";
import Theme from "./Theme";
import LinkedIn from "../assets/Icon/icons8-linkedin-94.png"
import GitHub from "../assets/Icon/icons8-github-94.png"

const Topbar = () => {
    const { user, theme, minimize } = useContext(UserContext);
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
        <div className={!minimize ? 'Topbar' : 'Topbar_mini'}>
            <div className={theme == 'light' ? "Topbar_container" : "Topbar_container_dark"}>
                <div className='Topbar_container_left'>
                    {minimize && <Theme />}
                    <User />
                </div>
                <div className='Topbar_container_middle'>
                    <div className='Topbar_container_left_link'>
                        <NavLink to='/dev' onClick={scrollToTop}>Developpement</NavLink>
                        <NavLink to='/bdd' onClick={scrollToTop}>Database</NavLink>
                        <NavLink to='/Sign' onClick={scrollToTop}>Sign IN</NavLink>
                    </div>
                </div>
                <div className='Topbar_container_right'>
                    {/* <Infos /> */}
                    <NavLink to='/quit' onClick={scrollToTop}>Out</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Theme from './Theme';
import User from './User';

const Sidebar = () => {

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
        <div className='Sidebar_container'>
            <User />
            <Theme />
            <div className='Sidebar_container_top'>
                <NavLink to='/' onClick={scrollToTop}>Biographie</NavLink>
                <NavLink to='/formule' onClick={scrollToTop}>Web</NavLink>
                <NavLink to='/contact' onClick={scrollToTop}>Projets</NavLink>
                {user &&
                    <div className='Sidebar_container_middle'>
                        <NavLink to='/dev' onClick={scrollToTop}>Developpement</NavLink>
                        <NavLink to='/bdd' onClick={scrollToTop}>Database</NavLink>
                        <NavLink to='/style' onClick={scrollToTop}>Styles</NavLink>
                    </div>}
            </div>
            <div className='Sidebar_container_bottom'>
                {user ?
                    <div className='Sidebar_bottom_navlink'>
                        <NavLink to='/quit' onClick={scrollToTop}>Se déconnecter</NavLink>                                         </div>
                    :
                    <div className='Sidebar_bottom_navlink'>
                        <NavLink to='/login' onClick={scrollToTop}>Connection</NavLink>
                    </div>}
            </div>
        </div>
    );
};

export default Sidebar;
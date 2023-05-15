import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import imageDefault from '../../src/assets/Image/avatar-default.jpg';

const User = () => {

    const { user, setUser, theme, setTheme, dataImage } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div className='Navbar_left'>
            {user ?
                <div className='Navbar_left_info'>
                    <div className='Navbar_left_info_image'>
                        <img src={`${import.meta.env.VITE_BACKEND_URL}/${user.image_user}`} alt={user.firstname}></img>
                    </div>
                    <h2>{user.firstname}</h2>
                </div>
                :

                ////////////////////////////////    L'image par défaut    ///////////////////////////////////
                // <div className='Navbar_left_info_image'>
                //     <img src={imageDefault} alt='User'></img>
                // </div>

                //////////////////////////////////////    Le logo    ////////////////////////////////////////
                // <div className='Navbar_left_info'>
                //     {dataImage
                //         .filter((element) => element.component_name == 'logo')
                //         .map((element, index) => {
                //             return (
                //                 <div key={index} className='Navbar_left_info_image'>                                                                       <img
                //                     src={`${import.meta.env.VITE_BACKEND_URL}/${element.image_name}`}
                //                     alt="Image not found" />
                //                 </div>
                //             )
                //         })}
                // </div>

                /////////////////////////////////////////    Rien    ////////////////////////////////////////
                null
            }
        </div>
    );
};

export default User;
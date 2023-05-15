import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";
import ImageBanniere from '../assets/Image/banniere.jpg';

import Image from '../assets/Image/banniere.jpg';

const Banniere = () => {

    const { user, dataImage } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div className='Banniere'>
            <div className='Banniere_container'>
                {/* ***VERSION BACKEND*** */}
                {/* {dataImage
                    .filter((element) => element.component_name == 'banniere')
                    .map((element, index) => {
                        return (
                            <div key={index} className='Banniere_container_image'>
                                <a href={`${import.meta.env.VITE_BACKEND_URL}/${element.image_name}`}
                                    target="_blank">
                                    <img
                                        src={`${import.meta.env.VITE_BACKEND_URL}/${element.image_name}`}
                                        alt="Image not found" />
                                </a>
                            </div>
                        )
                    })} */}
                {/* *** */}
                {/* ***VERSION FRONTEND*** */}
                <div className='Banniere_container_image'>
                    <a href={ImageBanniere} target="_blank">
                        <img src={ImageBanniere} alt='Image not found'></img>
                    </a>
                </div>
                {/* *** */}
            </div>
        </div>
    );
};

export default Banniere;
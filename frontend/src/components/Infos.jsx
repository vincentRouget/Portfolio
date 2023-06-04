import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

const Infos = () => {
    const { user, setUser, theme, setTheme, dataImage, setDataImage, refresh, setRefresh, minimize, setMinimize } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div className='Info'>
            <button
                className="Info_button"
                onClick={() => {
                    console.log(user);
                    console.log("Aspect minimisé ? : " + minimize);
                    console.log("Thème actuel : " + theme);
                }}>CONSOLE LOG</button>
        </div>
    );
};

export default Infos;
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import UserContext from "../context/UserContext";

const Infos = () => {
    const { theme, setTheme, refresh, setRefresh, minimize, setMinimize } = useContext(UserContext);
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
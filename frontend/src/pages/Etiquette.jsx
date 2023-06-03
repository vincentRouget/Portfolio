import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

const Etiquette = ({ component, setComponent, dataComponent, setDataComponent }) => {
    const { user, dataImage, setDataImage } = useContext(UserContext);

    useEffect(() => {
    }, []);

    return (
        <div className='Etiquette'>
            <h1>ETIQUETTE</h1>
        </div>
    );
};

export default Etiquette;
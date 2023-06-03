import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

const Etiquette = ({ component, setComponent, dataComponent, setDataComponent }) => {
    const { user, dataImage, setDataImage } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    return (
        <div className='Etiquette'>
            <button
                className="Back"
                onClick={() => {
                    scrollToTop();
                    setRefresh(true);
                    navigate("/")
                }}>
                <span>Back</span>
            </button>
        </div>
    );
};

export default Etiquette;
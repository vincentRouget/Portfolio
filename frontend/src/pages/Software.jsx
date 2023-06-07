import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Software = () => {
    const { theme } = useContext(UserContext);
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="Software">
            <h1>Programmation Logicielle</h1>
            <p>En cours de construction</p>
        </div>
    );
};

export default Software;
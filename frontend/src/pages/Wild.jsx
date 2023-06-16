import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Wild = () => {
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
        <div className="Wild">
            <div className="Wild_entete">
                <h1>Wild Movies</h1>
            </div>
            <div className="Wild_description">
                <p>En cours de construction</p>
            </div>
            <div className="Wild_screenshot">

            </div>
        </div>
    );
};

export default Wild;
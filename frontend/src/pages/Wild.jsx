import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Wild = () => {
    const { user, theme, dataImage } = useContext(UserContext);
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
            <h1>Wild Movies</h1>
        </div>
    );
};

export default Wild;
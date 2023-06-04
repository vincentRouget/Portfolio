import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Topbar from "@components/Topbar";

const About = () => {
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
        <div className="About">
            {/* <Topbar /> */}
            <h1>Présentation</h1>
        </div>
    );
};

export default About;
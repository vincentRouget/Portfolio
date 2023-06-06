import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Topbar from "@components/Topbar";
import Space from "@components/Space";

const Maison = () => {
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
        <div className="Maison">
            {user &&
                <>
                    <Topbar />
                    <Space />
                </>}
            <h1>Maison du Lac</h1>
            <p>En cours de construction</p>
        </div>
    );
};

export default Maison;
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/UserContext";
import User from "./User";

const Sidebar = ({
    presentationON,
    setPresentationON,
    setWildON,
    setEnecomON,
    setAppON,
    setMaisonON,
    setEnigmaON,
    setLogicielON,
}) => {

    const { user } = useContext(UserContext);
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
        <div className="Sidebar_container">
            <User />
            <div className="Sidebar_container_top">
                <NavLink to="/" onClick={scrollToTop}>Accueil</NavLink>
            </div>
            <div className="Sidebar_container_middle">
                <button onClick={() => {
                    setPresentationON(true)
                    setAppON(false)
                    setWildON(false)
                    setEnecomON(false)
                    setMaisonON(false)
                    setEnigmaON(false)
                    setLogicielON(false)
                }}>Présentation</button>
                <button onClick={() => {
                    setPresentationON(false)
                    setAppON(false)
                    setWildON(true)
                    setEnecomON(false)
                    setMaisonON(false)
                    setEnigmaON(false)
                    setLogicielON(false)
                }}>Wild Movies</button>
                <button onClick={() => {
                    setPresentationON(false)
                    setAppON(false)
                    setWildON(false)
                    setEnecomON(true)
                    setMaisonON(false)
                    setEnigmaON(false)
                    setLogicielON(false)
                }}>Enecom</button>
                <button onClick={() => {
                    setPresentationON(false)
                    setAppON(true)
                    setWildON(false)
                    setEnecomON(false)
                    setMaisonON(false)
                    setEnigmaON(false)
                    setLogicielON(false)
                }}>Application Mobile</button>
                <button onClick={() => {
                    setPresentationON(false)
                    setAppON(false)
                    setWildON(false)
                    setEnecomON(false)
                    setMaisonON(true)
                    setEnigmaON(false)
                    setLogicielON(false)
                }}>Maison du Lac</button>
                {/* <button onClick={() => {
                    setPresentationON(false)
                    setAppON(false)
                    setWildON(false)
                    setEnecomON(false)
                    setMaisonON(false)
                    setEnigmaON(true)
                    setLogicielON(false)
                }}>Enigma</button> */}
            </div>
            <div className="Sidebar_container_bottom">
                <button onClick={() => {
                    setPresentationON(false)
                    setAppON(false)
                    setWildON(false)
                    setEnecomON(false)
                    setMaisonON(false)
                    setEnigmaON(false)
                    setLogicielON(true)
                }}>Programmation logicielle</button>
                <button onClick={() => {
                    console.log(presentationON)
                }}>INFOS</button>
            </div>
        </div >
    );
};

export default Sidebar;
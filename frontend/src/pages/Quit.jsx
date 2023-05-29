import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import UserContext from "../context/UserContext";

const Quit = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const deconnect = (e) => {
        e.preventDefault();
        const token = "token";
        localStorage.removeItem("token", `Bearer ${token}`);
        setUser(null);
        history.push("/portfolio", {
            state: {
                token,
            },
        });
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className='Quit'>
            <div className='Quit_form'>
                <div className='Quit_form_content'>
                    <h1>Voulez-vous vous déconnecter?</h1>
                    <div className='Quit_form_content_button'>
                        <NavLink to='/'>
                            <button className="SecondaryButton"><p>Annuler</p></button>
                        </NavLink>
                        <button className="PrimaryButton" onClick={deconnect}>Se déconnecter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quit;
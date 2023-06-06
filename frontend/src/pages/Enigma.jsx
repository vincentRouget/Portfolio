import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Topbar from "@components/Topbar";
import Space from "@components/Space";

const Enigma = () => {
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
        <div className="Enigma">
            {user &&
                <>
                    <Topbar />
                    <Space />
                </>}
            <div className="un">
                <p className="style_p">1</p>
                <div className="deux">
                    <p className="style_p">2</p>
                    <h1 className="style_h1">LOREM IPSUM H1</h1>
                    <p className="style_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <br></br>
                    <input
                        className="style_input"
                        placeholder='Input'>
                    </input>
                    <br></br>
                    <br></br>
                    <button className="style_button">Bouton</button>
                    <br></br>
                    <br></br>
                    <a href='' className="style_a">Lorem Ipsum</a>
                </div>
            </div>
            <div className="trois">
                <p className="style_p">3</p>
                <h4 className="style_h4">LOREM IPSUM H4</h4>
                <p className="style_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="quatre">
                <p className="style_p">4</p>
                <h6 className="style_h6">Lorem Ipsum H6</h6>
                <p className="style_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="cinq">
                <p className="style_p">5</p>
                <p className="style_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="six">
                <p className="style_p">6</p>
                <p className="style_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
        </div>
    );
};

export default Enigma;
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Main from "../assets/Icon/Sidebar/icons8-home-page-90.png"
import Wild from "../assets/Icon/Sidebar/icons8-movie-90.png"
import Enecom from "../assets/Icon/Sidebar/icons8-battery-90.png"
import App from "../assets/Icon/Sidebar/icons8-smartphone-100.png"
import Maison from "../assets/Icon/Sidebar/icons8-web-64.png"
import Enigma from "../assets/Icon/Sidebar/icons8-lock-90.png"
import Logiciel from "../assets/Icon/Sidebar/icons8-python-100.png"
import Developer from "../assets/Icon/Sidebar/icons8-developer-64.png"
import Back from "../assets/Icon/Sidebar/icons8-left-64.png"
import MainW from "../assets/Icon/Sidebar/icons8-home-page-90W.png"
import WildW from "../assets/Icon/Sidebar/icons8-movie-90W.png"
import EnecomW from "../assets/Icon/Sidebar/icons8-battery-90W.png"
import AppW from "../assets/Icon/Sidebar/icons8-smartphone-100W.png"
import MaisonW from "../assets/Icon/Sidebar/icons8-web-64W.png"
import EnigmaW from "../assets/Icon/Sidebar/icons8-lock-90W.png"
import LogicielW from "../assets/Icon/Sidebar/icons8-python-100W.png"
import DeveloperW from "../assets/Icon/Sidebar/icons8-developer-64W.png"
import BackW from "../assets/Icon/Sidebar/icons8-left-64W.png"

const Sidebar = ({
    etiquetteON,
    setEtiquetteON,
    presentationON,
    setPresentationON,
    wildON,
    setWildON,
    enecomON,
    setEnecomON,
    appON,
    setAppON,
    maisonON,
    setMaisonON,
    enigmaON,
    setEnigmaON,
    logicielON,
    setLogicielON,
}) => {
    const { user, theme, refresh, setRefresh } = useContext(UserContext);
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
        <div className={theme == 'light' ? "Sidebar_container" : "Sidebar_container_dark"}>
            <div className="Sidebar_container_top">
            </div>
            <div className="Sidebar_container_middle">
                <div className={theme == 'light' ? "Sidebar_container_middle_back" : "Sidebar_container_middle_back_dark"}>
                    <button
                        className="Back"
                        onClick={() => {
                            scrollToTop();
                            setRefresh(true);
                            navigate("/")
                        }}>
                        {theme == 'light' ?
                            <img src={Back} alt='' className="icon_back"></img>
                            :
                            <img src={BackW} alt='' className="icon_back"></img>}
                        <span>Back</span>
                    </button>
                </div>
                <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                    <button
                        className={(etiquetteON) ? "button_selected" : "button"}
                        onClick={() => {
                            setEtiquetteON(true)
                            setWildON(false)
                            setEnecomON(false)
                            setAppON(false)
                            setMaisonON(false)
                            setLogicielON(false)
                            setEnigmaON(false)
                            setPresentationON(false)
                        }}>
                        {theme == 'light' ?
                            <img src={Main} alt='' className="icon"></img>
                            :
                            <img src={MainW} alt='' className="icon"></img>}
                        <span>Main</span>
                    </button>
                </div>
                <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                    <button
                        className={(wildON) ? "button_selected" : "button"}
                        onClick={() => {
                            setEtiquetteON(false)
                            setWildON(true)
                            setEnecomON(false)
                            setAppON(false)
                            setMaisonON(false)
                            setLogicielON(false)
                            setEnigmaON(false)
                            setPresentationON(false)
                        }}>
                        {theme == 'light' ?
                            <img src={Wild} alt='' className="icon"></img>
                            :
                            <img src={WildW} alt='' className="icon"></img>}
                        <span>Wild Movies</span>
                    </button>
                </div>
                <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                    <button
                        className={(enecomON) ? "button_selected" : "button"}
                        onClick={() => {
                            setEtiquetteON(false)
                            setWildON(false)
                            setEnecomON(true)
                            setAppON(false)
                            setMaisonON(false)
                            setLogicielON(false)
                            setEnigmaON(false)
                            setPresentationON(false)
                        }}>
                        {theme == 'light' ?
                            <img src={Enecom} alt='' className="icon"></img>
                            :
                            <img src={EnecomW} alt='' className="icon"></img>}
                        <span>Enecom</span>
                    </button>
                </div>
                <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                    <button
                        className={(appON) ? "button_selected" : "button"}
                        onClick={() => {
                            setEtiquetteON(false)
                            setWildON(false)
                            setEnecomON(false)
                            setAppON(true)
                            setMaisonON(false)
                            setLogicielON(false)
                            setEnigmaON(false)
                            setPresentationON(false)
                        }}>
                        {theme == 'light' ?
                            <img src={App} alt='' className="icon"></img>
                            :
                            <img src={AppW} alt='' className="icon"></img>}
                        <span>Dating App</span>
                    </button>
                </div>
                <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                    <button
                        className={(maisonON) ? "button_selected" : "button"}
                        onClick={() => {
                            setEtiquetteON(false)
                            setWildON(false)
                            setEnecomON(false)
                            setAppON(false)
                            setMaisonON(true)
                            setLogicielON(false)
                            setEnigmaON(false)
                            setPresentationON(false)
                        }}>
                        {theme == 'light' ?
                            <img src={Maison} alt='' className="icon"></img>
                            :
                            <img src={MaisonW} alt='' className="icon"></img>}
                        <span>La Maison du Lac</span>
                    </button>
                </div>
                <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                    <button
                        className={(logicielON) ? "button_selected" : "button"}
                        onClick={() => {
                            setEtiquetteON(false)
                            setWildON(false)
                            setEnecomON(false)
                            setAppON(false)
                            setMaisonON(false)
                            setLogicielON(true)
                            setEnigmaON(false)
                            setPresentationON(false)
                        }}>
                        {theme == 'light' ?
                            <img src={Logiciel} alt='' className="icon"></img>
                            :
                            <img src={LogicielW} alt='' className="icon"></img>}
                        <span>Software</span>
                    </button>
                </div>
                <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                    <button
                        className={(enigmaON) ? "button_selected" : "button"}
                        onClick={() => {
                            setEtiquetteON(false)
                            setWildON(false)
                            setEnecomON(false)
                            setAppON(false)
                            setMaisonON(false)
                            setLogicielON(false)
                            setEnigmaON(true)
                            setPresentationON(false)
                        }}>
                        {theme == 'light' ?
                            <img src={Enigma} alt='' className="icon"></img>
                            :
                            <img src={EnigmaW} alt='' className="icon"></img>}
                        <span>Enigma</span>
                    </button>
                </div>
                <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                    <button
                        className={(presentationON) ? "button_selected" : "button"}
                        onClick={() => {
                            setEtiquetteON(false)
                            setWildON(false)
                            setEnecomON(false)
                            setAppON(false)
                            setMaisonON(false)
                            setLogicielON(false)
                            setEnigmaON(false)
                            setPresentationON(true)
                        }}>
                        {theme == 'light' ?
                            <img src={Developer} alt='' className="icon"></img>
                            :
                            <img src={DeveloperW} alt='' className="icon"></img>}
                        <span>About me</span>
                    </button>
                </div>
                <div className={theme == 'light' ? "Sidebar_container_middle_download" : "Sidebar_container_middle_download_dark"}>
                    <button
                        className="Download"
                        onClick={() => {
                            console.log("Download")
                        }}>
                        {theme == 'light' ?
                            <img src={Back} alt='' className="icon_down"></img>
                            :
                            <img src={BackW} alt='' className="icon_down"></img>}
                        <span>Download CV</span>
                    </button>
                </div>
            </div>
            <div className="Sidebar_container_bottom">
            </div>
        </div >
    );
};

export default Sidebar;
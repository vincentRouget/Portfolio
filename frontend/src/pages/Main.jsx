import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";
import Topbar from "@components/Topbar";
import HTML from "../assets/Icon/html.png";
import CSS from "../assets/Icon/css.png";
import SCSS from "../assets/Icon/scss.png";
import JS from "../assets/Icon/js.png";
import REACTJS from "../assets/Icon/react.png";
import NODE from "../assets/Icon/node.png";
import EXPRESS from "../assets/Icon/express.png";
import MYSQL from "../assets/Icon/mysql.png";
import API from "../assets/Icon/api.png";
import NATIVE from "../assets/Icon/native.png";
import EXPO from "../assets/Icon/expo.png";
import ANDROID from "../assets/Icon/android.png";
import PYTHON from "../assets/Icon/python.png";
import CPP from "../assets/Icon/cpp.png";
import Wild1 from "../assets/Image/Wild/wild1.png";
import Enecom1 from "../assets/Image/Enecom/enecom1.png";
import App1 from "../assets/Image/App/app1.png";
import Maison1 from "../assets/Image/Maison/maison1.png";
import Soft1 from "../assets/Image/Soft/soft1.png";
import Enigma1 from "../assets/Image/Enigma/enigma1.png";

const Main = ({
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
    setLogicielON
}) => {
    const { user, theme, dataImage, setDataImage } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    return (
        <div className='Main'>
            {/* <Topbar /> */}
            <div className="Main_container">
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card dark"}
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
                    <div className='Card_image'>
                        <img src={Wild1} alt="Wild Movies"></img>
                    </div>
                    <h1>WILD MOVIES</h1>
                    <div className="Card_techno">
                        <div className="Card_techno_icone">
                            <img src={REACTJS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={NODE} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={API} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={EXPRESS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={MYSQL} alt='React.js' className="icone"></img>
                        </div>
                    </div>
                    <div className="Card_techno_text">
                        <p>Création d'un site pour la recherche de films et de séries à l'aide d'une API publique</p>
                    </div>
                </button>
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card dark"}
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
                    <div className='Card_image'>
                        <img src={Enecom1} alt="Wild Movies"></img>
                    </div>
                    <h1>ENECOM</h1>
                    <div className="Card_techno">
                        <div className="Card_techno_icone">
                            <img src={REACTJS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={SCSS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={NODE} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={EXPRESS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={MYSQL} alt='React.js' className="icone"></img>
                        </div>
                    </div>
                    <div className="Card_techno_text">
                        <p>Interface web pour le partage de plans de communication en interne</p>
                    </div>
                </button>
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card dark"}
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
                    <div className='Card_image'>
                        <img src={App1} alt="Wild Movies"></img>
                    </div>
                    <h1>DATING APP</h1>
                    <div className="Card_techno">
                        <div className="Card_techno_icone">
                            <img src={NATIVE} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={EXPO} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={ANDROID} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={EXPRESS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={MYSQL} alt='React.js' className="icone"></img>
                        </div>
                    </div>
                    <div className="Card_techno_text">
                        <p>Création d'une application mobile de rencontre grâce à des centres d'intérêts</p>
                    </div>
                </button>
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card dark"}
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
                    <div className='Card_image'>
                        <img src={Maison1} alt="Wild Movies"></img>
                    </div>
                    <h1>LA MAISON DU LAC</h1>
                    <div className="Card_techno">
                        <div className="Card_techno_icone">
                            <img src={REACTJS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={SCSS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={NODE} alt='React.js' className="icone"></img>
                        </div>
                    </div>
                    <div className="Card_techno_text">
                        <p>Création d'un site catalogue pour des chambres d'hôtes</p>
                    </div>
                </button>
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card dark"}
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
                    <div className='Card_image'>
                        <img src={Soft1} alt="Wild Movies"></img>
                    </div>
                    <h1>SOFTWARES</h1>
                    <div className="Card_techno">
                        <div className="Card_techno_icone">
                            <img src={PYTHON} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={CPP} alt='React.js' className="icone"></img>
                        </div>
                    </div>
                    <div className="Card_techno_text">
                        <p>Conception, maintenance et optimisation d'algorithme logicielle</p>
                    </div>
                </button>
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card dark"}
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
                    <div className='Card_image'>
                        <img src={Enigma1} alt="Wild Movies"></img>
                    </div>
                    <h1>ENIGMA</h1>
                    <div className="Card_techno">
                        <div className="Card_techno_icone">
                            <img src={HTML} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={CSS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Card_techno_icone">
                            <img src={JS} alt='React.js' className="icone"></img>
                        </div>
                    </div>
                    <div className="Card_techno_text">
                        <p>Création d'une interface fonctionnelle pour le cryptage de texte</p>
                    </div>
                </button>

            </div>
        </div>
    );
};

export default Main;
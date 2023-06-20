import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
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
            <div className="Wild_icones">
                <div className="Wild_icones_icone">
                    <img src={REACTJS} alt='React.js' className="icone"></img>
                </div>
                <div className="Wild_icones_icone">
                    <img src={NODE} alt='React.js' className="icone"></img>
                </div>
                <div className="Wild_icones_icone">
                    <img src={API} alt='React.js' className="icone"></img>
                </div>
                <div className="Wild_icones_icone">
                    <img src={EXPRESS} alt='React.js' className="icone"></img>
                </div>
                <div className="Wild_icones_icone">
                    <img src={MYSQL} alt='React.js' className="icone"></img>
                </div>
            </div>
            <div className="Wild_description">
                <div className="Wild_description_left">
                    <div className="Categorie">
                        <h4>Catégorie</h4>
                    </div>
                    <div className="Annee">
                        <h4>Année</h4>
                    </div>
                    <div className="Client">
                        <h4>Client</h4>
                    </div>
                    <div className="Front">
                        <h4>Front end</h4>
                    </div>
                    <div className="Back">
                        <h4>Back end</h4>
                    </div>
                    <div className="Sgbd">
                        <h4>SGBD</h4>
                    </div>
                </div>
                <div className="Wild_description_middle">
                    <div className="Categorie">
                        <p>Développement Web</p>
                    </div>
                    <div className="Annee">
                        <p>2022</p>
                    </div>
                    <div className="Client">
                        <p>Wild Code School</p>
                    </div>
                    <div className="Front">
                        <p>React.js / Node.js</p>
                    </div>
                    <div className="Back">
                        <p>API Rest / Express.js</p>
                    </div>
                    <div className="Sgbd">
                        <p>MySql</p>
                    </div>
                </div>
                <div className="Wild_description_right">
                    <h4>Description :</h4>
                    <p>Le projet Wild Movies est un site internet qui présente une bibliothèque de tous les films et séries présentes dans l’api publique très connue TMDB :</p>
                    <a href="https://wild-movies.netlify.app/" target="_blank">https://wild-movies.netlify.app/</a>
                    <p>Ce service API public est destiné à ceux qui souhaitent utiliser leurs images et leurs données dans une application. Cette API recoupe dynamiquement, toutes les données relatives aux films, aux séries, mais aussi celles qui concernent le casting.</p>
                    <p>Elle nous permet de pouvoir mettre à jour en temps réel toutes les informations pertinentes que l’on peut retransmettre à travers notre site.</p>
                </div>
            </div>
            <div className="Wild_screenshot">
                <h2>Captures d'écran</h2>
                <div className="Wild_screenshot_image">
                    <img src="https://images3.alphacoders.com/237/23765.jpg" alt="Screen"></img>
                </div>
                <div className="Wild_screenshot_image">
                    <img src="https://images3.alphacoders.com/237/23765.jpg" alt="Screen"></img>
                </div>
                <div className="Wild_screenshot_image">
                    <img src="https://images3.alphacoders.com/237/23765.jpg" alt="Screen"></img>
                </div>
            </div>
        </div>
    );
};

export default Wild;
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import Back from "../assets/Icon/icons8-arrow-100.png";
import ScrollDown from "../components/ScrollDown";
import ImageLogoMaison from '../assets/Icon/LogoMaison.jpg';
import House2 from "../assets/Image/House/house2.png";
import House4 from "../assets/Image/House/house4.png";
import House5 from "../assets/Image/House/house5.png";
import House6 from "../assets/Image/House/house6.png";
import House7 from "../assets/Image/House/house7.png";
import House8 from "../assets/Image/House/house8.png";
import House9 from "../assets/Image/House/house9.png";
import SCSS from "../assets/Icon/scss.png";
import REACTJS from "../assets/Icon/react.png";
import NODE from "../assets/Icon/node.png";
import FILEZILLA from "../assets/Icon/filezilla.png";

const Maison = ({
    setEtiquetteON,
    setPresentationON,
    setFeederON,
    setWildON,
    setEnecomON,
    setAppON,
    setMaisonON,
    setEnigmaON,
    setLogicielON
}) => {

    const { french } = useContext(UserContext);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    useEffect(() => {
        scrollToTop();
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="House">
            <div className="back">
                <button
                    className="button_back"
                    onClick={() => {
                        setEtiquetteON(true)
                        setFeederON(false)
                        setWildON(false)
                        setEnecomON(false)
                        setAppON(false)
                        setMaisonON(false)
                        setLogicielON(false)
                        setEnigmaON(false)
                        setPresentationON(false)
                    }}>
                    <img src={Back} className="Retour"></img>
                </button>
            </div>
            <div className="House_entete">
                <h1>La Maison du Lac</h1>
            </div>
            <div className="House_icones" >
                <div className="House_icones_icone">
                    <img src={REACTJS} alt='React.js' className="icone"></img>
                </div>
                <div className="House_icones_icone">
                    <img src={NODE} alt='Node.js' className="icone"></img>
                </div>
                <div className="House_icones_icone">
                    <img src={SCSS} alt='SCSS' className="icone"></img>
                </div>
                <div className="House_icones_icone">
                    <img src={FILEZILLA} alt='Filezilla' className="icone"></img>
                </div>
            </div>
            <div className="scrollContainer">
                <ScrollDown />
            </div>
            <div className="House_title">
                <div className="HouseLogo">
                    <img src={ImageLogoMaison} className="Logo1" alt="Logo House"></img>
                </div>
                <p className="P_title">La Maison du Lac</p>
            </div>
            <div className="House_description">
                <div className="House_description_left">
                    <div className="Categorie">
                        {french ?
                            <h4 className="House_h4 resolution">Catégorie :</h4>
                            :
                            <h4 className="House_h4 resolution">Category :</h4>}
                    </div>
                    <div className="Annee">
                        {french ?
                            <h4 className="House_h4 resolution">Année :</h4>
                            :
                            <h4 className="House_h4 resolution">Year :</h4>}
                    </div>
                    <div className="Client">
                        <h4 className="House_h4 resolution">Client :</h4>
                    </div>
                    <div className="Front">
                        <h4 className="House_h4 resolution">Langage :</h4>
                    </div>
                    <div className="Categorie">
                        {french ?
                            <h4 className="House_h4 resolution">Déploiement :</h4>
                            :
                            <h4 className="House_h4 resolution">Deployment :</h4>}
                    </div>
                </div>
                <div className="House_description_middle">
                    <div className="Categorie">
                        {french ?
                            <p className="TextPi">Site web</p>
                            :
                            <p className="TextPi">Website</p>}
                    </div>
                    <div className="Annee">
                        <p className="TextPi">2023</p>
                    </div>
                    <div className="Client">
                        {french ?
                            <p className="TextPi">Propriétaire</p>
                            :
                            <p className="TextPi">Owner</p>}
                    </div>
                    <div className="Front">
                        <p className="TextPi">React.js / Node.js / Scss</p>
                    </div>
                    <div className="Front">
                        <p className="TextPi">FileZilla</p>
                    </div>
                </div>
                <div className="House_description_right">
                    <div className="House_description_right_description">
                        <h4 className="House_h4 Saut resolution">Description :</h4>
                        {french ?
                            <div>
                                <p className="TextPiMaison">Ce site créé à React.js a pour but de présenter l’établissement de chambres d’hôtes "La Maison du Lac", situé près de Limoges dans le département de Haute-Vienne (87), en France.</p>
                                <p className="TextPiMaison">Sur la page d’accueil, il présente une description de l’établissement et des différents hébergements proposés, avec quelques images pour illustrer les lieux.</p>
                                <p className="TextPiMaison">Il propose également les différentes formules disponibles avec une description de chacune d’entre elles, ainsi que les tarifs et les services optionnels.</p>
                                <p className="TextPiMaison">Une page « Contact » avec une carte Google Maps permet de localiser l’emplacement précis, de trouver le meilleur itinéraire, ou même d’envoyer un courriel au propriétaire de l’établissement.</p>
                                <p className="TextPiMaison">Au bas de la page se trouve les différents liens vers toutes les pages Web externes, comme Facebook, Booking.com ou même AirBnB.com.</p>
                            </div>
                            :
                            <div>
                                <p className="TextPiMaison">This site created in React.js aims to present the establishment of guest houses "La Maison du Lac", located near Limoges in the department of Haute-Vienne (87), in France.</p>
                                <p className="TextPiMaison">On the homepage, it presents a description of the establishment and the different accommodation offered, with some images to illustrate the places.</p>
                                <p className="TextPiMaison">It also offers the various formulas available with a description of each of them, as well as rates and optional services.</p>
                                <p className="TextPiMaison">A “Contact” page with a Google Maps map allows you to locate the exact location, find the best route, or even send an email to the property owner.</p>
                                <p className="TextPiMaison">At the bottom of the page are the various links to all external web pages, such as Facebook, Booking.com or even AirBnB.com.</p>
                            </div>}
                    </div>
                    {french ?
                        <p className="TextP">Lien vers le site : <a href="https://www.lamaisondulac87.fr/" target="_blank">https://www.lamaisondulac87.fr</a></p>
                        :
                        <p className="TextP">Link to website : <a href="https://www.lamaisondulac87.fr/" target="_blank">https://www.lamaisondulac87.fr</a></p>}
                </div>
            </div>
            <h4 className="House_h4 House_padding resolution picture">Illustrations</h4>
            <div className="House_screenshot">
                <div className="House_screenshot_image">
                    <a href={House2} target="_blank">
                        <img src={House2} className="House_screenshot_image"></img>
                    </a>
                </div>
                <div className="House_screenshot_image">
                    <a href={House4} target="_blank">
                        <img src={House4} className="House_screenshot_image"></img>
                    </a>
                </div>
                <div className="House_screenshot_image">
                    <a href={House5} target="_blank">
                        <img src={House5} className="House_screenshot_image"></img>
                    </a>
                </div>
                <div className="House_screenshot_image">
                    <a href={House6} target="_blank">
                        <img src={House6} className="House_screenshot_image"></img>
                    </a>
                </div>
                <div className="House_screenshot_image">
                    <a href={House7} target="_blank">
                        <img src={House7} className="House_screenshot_image"></img>
                    </a>
                </div>
                <div className="House_screenshot_image">
                    <a href={House8} target="_blank">
                        <img src={House8} className="House_screenshot_image"></img>
                    </a>
                </div>
                <div className="House_screenshot_image">
                    <a href={House9} target="_blank">
                        <img src={House9} className="House_screenshot_image"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Maison;
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import ScrollDown from "../components/ScrollDown";
import ImageLogoMaison from '../assets/Icon/LogoMaison.jpg';
import House2 from "../assets/Image/House/house2.png";
import House3 from "../assets/Image/House/house3.png";
import House4 from "../assets/Image/House/house4.png";
import House5 from "../assets/Image/House/house5.png";
import House6 from "../assets/Image/House/house6.png";
import House7 from "../assets/Image/House/house7.png";
import House8 from "../assets/Image/House/house8.png";
import House9 from "../assets/Image/House/house9.png";
import SCSS from "../assets/Icon/scss.png";
import REACTJS from "../assets/Icon/react.png";
import NODE from "../assets/Icon/node.png";

const Maison = () => {
    const { theme } = useContext(UserContext);
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
            </div>
            <ScrollDown />
            <div className="House_title">
                <div className="HouseLogo">
                    <img src={ImageLogoMaison} className="Logo1" alt="Logo House"></img>
                </div>
                <p className="P_title">La Maison du Lac</p>
            </div>
            <div className="House_description">
                <div className="House_description_left">
                    <div className="Categorie">
                        <h4 className="House_h4 resolution">Catégorie</h4>
                    </div>
                    <div className="Annee">
                        <h4 className="House_h4 resolution">Année</h4>
                    </div>
                    <div className="Client">
                        <h4 className="House_h4 resolution">Client</h4>
                    </div>
                    <div className="Front">
                        <h4 className="House_h4 resolution">Front end</h4>
                    </div>
                </div>
                <div className="House_description_middle">
                    <div className="Categorie">
                        <p className="TextP">Website development</p>
                    </div>
                    <div className="Annee">
                        <p className="TextP">2023</p>
                    </div>
                    <div className="Client">
                        <p className="TextP">Establishment owner</p>
                    </div>
                    <div className="Front">
                        <p className="TextP">React.js / Node.js / Scss</p>
                    </div>
                </div>
                <div className="House_description_right">
                    <div className="House_description_right_description">
                        <h4 className="House_h4 Saut resolution">Description :</h4>
                        <p className="TextPi">This site created in React.js aims to present the services and rental rates for accommodation in the establishment "La Maison du Lac", located near Limoges in the department of Haute-Vienne (87), France.</p>
                        <p className="TextPi">On the home page, it presents a description of the establishment and the different accommodations, with some images to illustrate the places.</p>
                        <p className="TextPi">It also offers the different possible formulas with a description of each of them, as well as the rates and optional services.</p>
                        <p className="TextPi">A Contact page with a Google Maps allows you to locate the precise location, find the best route, or even send an email to the owner of the establishment.</p>
                        <p className="TextPi">At the bottom of the page, we find the various links to all external web pages, such as Facebook, Booking.com or even AirBnB.com.</p>
                    </div>
                    <p className="TextP">Link to website : <a href="https://lamaisondulac87.fr/" target="_blank">https://lamaisondulac87.fr/</a></p>
                </div>
            </div>
            <h4 className="House_h4 House_padding resolution picture">Screenshots</h4>
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
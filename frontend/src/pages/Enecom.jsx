import React, { useContext, useEffect, useState, useRef } from "react";
import UserContext from "../context/UserContext";
import ScrollDown from "../components/ScrollDown";
import EnecomLogo from "../assets/Icon/enecom.svg";
import Enecom1 from "../assets/Image/Enecom/enecom1.png";
import Enecom2 from "../assets/Image/Enecom/enecom2.png";
import Enecom3 from "../assets/Image/Enecom/enecom3.png";
import Enecom4 from "../assets/Image/Enecom/enecom4.png";
import Enecom5 from "../assets/Image/Enecom/enecom5.png";
import Enecom6 from "../assets/Image/Enecom/enecom6.png";
import SCSS from "../assets/Icon/scss.png";
import REACTJS from "../assets/Icon/react.png";
import NODE from "../assets/Icon/node.png";
import EXPRESS from "../assets/Icon/express.png";
import MYSQL from "../assets/Icon/mysql.png";

const Enecom = () => {
    const { theme } = useContext(UserContext);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY); // => scroll position
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
        <div className="Enecom">
            <div className="Enecom_entete">
                <h1>ENECOM</h1>
            </div>
            <div className="Enecom_icones" >
                <div className="Enecom_icones_icone">
                    <img src={REACTJS} alt='React.js' className="icone"></img>
                </div>
                <div className="Enecom_icones_icone">
                    <img src={NODE} alt='Node.js' className="icone"></img>
                </div>
                <div className="Enecom_icones_icone">
                    <img src={SCSS} alt='SCSS' className="icone"></img>
                </div>
                <div className="Enecom_icones_icone">
                    <img src={EXPRESS} alt='Express.js' className="icone"></img>
                </div>
                <div className="Enecom_icones_icone">
                    <img src={MYSQL} alt='MySql' className="icone"></img>
                </div>
            </div>
            <ScrollDown />
            <div className="Page_title">
                <div className="Logo1">
                    <img src={EnecomLogo} id="LogoEnecom" alt="Logo Enecom"></img>
                </div>
            </div>
            <div className="Enecom_description">
                <div className="Enecom_description_left">
                    <div className="Categorie">
                        <h4 className="Enecom_h4">Catégorie</h4>
                    </div>
                    <div className="Annee">
                        <h4 className="Enecom_h4">Année</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Enecom_h4">Client</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Enecom_h4">Front end</h4>
                    </div>
                    <div className="Back">
                        <h4 className="Enecom_h4">Back end</h4>
                    </div>
                    <div className="Sgbd">
                        <h4 className="Enecom_h4">SGBD</h4>
                    </div>
                </div>
                <div className="Enecom_description_middle">
                    <div className="Categorie">
                        <p className="TextP">Intranet development</p>
                    </div>
                    <div className="Annee">
                        <p className="TextP">2023</p>
                    </div>
                    <div className="Client">
                        <p className="TextP">Enedis</p>
                    </div>
                    <div className="Front">
                        <p className="TextP">React.js / Node.js / Scss</p>
                    </div>
                    <div className="Back">
                        <p className="TextP">Express.js</p>
                    </div>
                    <div className="Sgbd">
                        <p className="TextP">MySql</p>
                    </div>
                </div>
                <div className="Enecom_description_right">
                    <div className="Enecom_description_right_description">
                        <h4 className="Enecom_h4 Saut">Description :</h4>
                        <p className="TextPi">The Enecom project aims to integrate an internal platform for sharing ideas for employees of the Enedis company.</p>
                        <p className="TextPi">This web interface therefore allows employees to create their own communication plans and to be able to manage them on a relational database. These communication plans can be very detailed thanks to several types of categories, and illustrated with images or additional files.</p>
                        <p className="TextPi">The employee can also consult the communication plans of other users in order to be able to discuss everyone's ideas.</p>
                        <p className="TextPi">Finally, an administrator status gives access to more possibilities, such as archiving a communication plan, deleting it, or even creating a new user.</p>
                    </div>
                    <p className="TextP">Link to website : <a href="http://vps-d5babf40.vps.ovh.net:5007/" target="_blank">http://vps-d5babf40.vps.ovh.net:5007/</a></p>
                </div>
            </div>
            <h4 className="Enecom_h4">Screenshots</h4>
            <div className="Enecom_screenshot">
                <div className="Enecom_screenshot_image">
                    <a href={Enecom1} target="_blank">
                        <img src={Enecom1} className="Enecom_screenshot_image"></img>
                    </a>
                </div>
                <div className="Enecom_screenshot_image">
                    <a href={Enecom2} target="_blank">
                        <img src={Enecom2} className="Enecom_screenshot_image"></img>
                    </a>
                </div>
                <div className="Enecom_screenshot_image">
                    <a href={Enecom3} target="_blank">
                        <img src={Enecom3} className="Enecom_screenshot_image"></img>
                    </a>
                </div>
                <div className="Enecom_screenshot_image">
                    <a href={Enecom4} target="_blank">
                        <img src={Enecom4} className="Enecom_screenshot_image"></img>
                    </a>
                </div>
                <div className="Enecom_screenshot_image">
                    <a href={Enecom5} target="_blank">
                        <img src={Enecom5} className="Enecom_screenshot_image"></img>
                    </a>
                </div>
                <div className="Enecom_screenshot_image">
                    <a href={Enecom6} target="_blank">
                        <img src={Enecom6} className="Enecom_screenshot_image"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Enecom;
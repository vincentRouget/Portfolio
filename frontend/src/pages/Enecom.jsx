import React, { useContext, useEffect, useState } from "react";
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
    const { theme, french } = useContext(UserContext);
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
                        {french ?
                            <h4 className="Enecom_h4 resolution">Catégorie</h4>
                            :
                            <h4 className="Enecom_h4 resolution">Category</h4>}
                    </div>
                    <div className="Annee">
                        {french ?
                            <h4 className="Enecom_h4 resolution">Année</h4>
                            :
                            <h4 className="Enecom_h4 resolution">Year</h4>}
                    </div>
                    <div className="Client">
                        <h4 className="Enecom_h4 resolution">Client</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Enecom_h4 resolution">Front end</h4>
                    </div>
                    <div className="Back">
                        <h4 className="Enecom_h4 resolution">Back end</h4>
                    </div>
                    <div className="Sgbd">
                        <h4 className="Enecom_h4 resolution">SGBD</h4>
                    </div>
                </div>
                <div className="Enecom_description_middle">
                    <div className="Categorie">
                        <p className="TextPi">Intranet</p>
                    </div>
                    <div className="Annee">
                        <p className="TextPi">2023</p>
                    </div>
                    <div className="Client">
                        <p className="TextPi">Enedis</p>
                    </div>
                    <div className="Front">
                        <p className="TextPi">React.js / Node.js</p>
                    </div>
                    <div className="Back">
                        <p className="TextPi">Express.js</p>
                    </div>
                    <div className="Sgbd">
                        <p className="TextPi">MySql</p>
                    </div>
                </div>
                <div className="Enecom_description_right">
                    <div className="Enecom_description_right_description">
                        <h4 className="Enecom_h4 Saut resolution">Description :</h4>
                        {french ?
                            <div>
                                <p className="TextPi">Le projet Enecom vise à intégrer une plateforme interne de partage d’idées pour les employés de la société Enedis.</p>
                                <p className="TextPi">Cette interface web permet aux collaborateurs de créer leurs propres plans de communication et de les gérer sur une base de données relationnelle. Ces plans de communication peuvent être très détaillés grâce à plusieurs types de catégories, et illustrés avec des images ou des fichiers complémentaires.</p>
                                <p className="TextPi">L’utilisateur peut également consulter les plans de communication des autres collaborateurs afin de pouvoir échanger sur les sujets évoqués.</p>
                                <p className="TextPi">Un statut administrateur donne accès à plus de possibilités, comme l’archivage d’un plan de communication, sa suppression ou même la création d’un nouvel utilisateur.</p>
                            </div>
                            :
                            <div>
                                <p className="TextPi">The Enecom project aims to integrate an internal platform for sharing ideas for Enedis employees.</p>
                                <p className="TextPi">This web interface allows employees to create their own communication plans and manage them on a relational database. These communication plans can be very detailed thanks to several types of categories, and illustrated with complementary images or files.</p>
                                <p className="TextPi">The user can also consult the communication plans of other employees in order to discuss the topics discussed.</p>
                                <p className="TextPi">An administrator status gives access to more possibilities, such as archiving a communication plan, deleting it or even creating a new user.</p>
                            </div>}
                    </div>
                    {french ?
                        <p className="TextP">Lien vers le site : <a href="http://vps-d5babf40.vps.ovh.net:5007/" target="_blank" className="moreSmall">http://vps-d5babf40.vps.ovh.net:5007/</a></p>
                        :
                        <p className="TextP">Link to website : <a href="http://vps-d5babf40.vps.ovh.net:5007/" target="_blank" className="moreSmall">http://vps-d5babf40.vps.ovh.net:5007/</a></p>}
                </div>
            </div>
            <h4 className="Enecom_h4 resolution picture">Illustrations</h4>
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
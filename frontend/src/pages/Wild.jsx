import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import Logo1 from "../assets/Icon/logo_wildmovies.svg";
import Logo2 from "../assets/Icon/logo2_wildmovies.svg";
import ScrollDown from "../components/ScrollDown";
import Wild2 from "../assets/Image/Wild/wild2.png";
import Wild3 from "../assets/Image/Wild/wild3.png";
import Wild4 from "../assets/Image/Wild/wild4.png";
import Wild5 from "../assets/Image/Wild/wild5.png";
import Wild6 from "../assets/Image/Wild/wild6.png";
import Wild7 from "../assets/Image/Wild/wild7.png";
import Wild8 from "../assets/Image/Wild/wild8.png";
import Wild9 from "../assets/Image/Wild/wild9.png";
import Wild10 from "../assets/Image/Wild/wild10.png";
import REACTJS from "../assets/Icon/react.png";
import NODE from "../assets/Icon/node.png";
import EXPRESS from "../assets/Icon/express.png";
import MYSQL from "../assets/Icon/mysql.png";
import API from "../assets/Icon/api.png";

const Wild = () => {
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
        <div className="Wild">
            <div className="Wild_entete">
                <h1>WILD MOVIES</h1>
            </div>
            <div className="Wild_icones" >
                <div className="Wild_icones_icone">
                    <img src={REACTJS} alt='React.js' className="icone"></img>
                </div>
                <div className="Wild_icones_icone">
                    <img src={NODE} alt='Node.js' className="icone"></img>
                </div>
                <div className="Wild_icones_icone">
                    <img src={API} alt='API Rest' className="icone"></img>
                </div>
                <div className="Wild_icones_icone">
                    <img src={EXPRESS} alt='Express.js' className="icone"></img>
                </div>
                <div className="Wild_icones_icone">
                    <img src={MYSQL} alt='MySql' className="icone"></img>
                </div>
            </div>
            <ScrollDown />
            <div className="Page_title">
                <div className="Logo1">
                    <img src={Logo1} id="Logo1" alt="Logo Wild Movies"></img>
                </div>
                <div className="Logo2">
                    <img src={Logo2} id="Logo2" alt="Logo Wild Movies"></img>
                </div>
            </div>
            <div className="Wild_description">
                <div className="Wild_description_left">
                    <div className="Categorie">
                        {french ?
                            <h4 className="Wild_h4 resolution">Catégorie</h4>
                            :
                            <h4 className="Wild_h4 resolution">Category</h4>}
                    </div>
                    <div className="Annee">
                        {french ?
                            <h4 className="Wild_h4 resolution">Année</h4>
                            :
                            <h4 className="Wild_h4 resolution">Year</h4>}
                    </div>
                    <div className="Client">
                        <h4 className="Wild_h4 resolution">Client</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Wild_h4 resolution">Front end</h4>
                    </div>
                    <div className="Back">
                        <h4 className="Wild_h4 resolution">Back end</h4>
                    </div>
                    <div className="Sgbd">
                        <h4 className="Wild_h4 resolution">SGBD</h4>
                    </div>
                </div>
                <div className="Wild_description_middle">
                    <div className="Categorie">
                        {french ?
                            <p className="TextPi">Site web</p>
                            :
                            <p className="TextPi">Website</p>}
                    </div>
                    <div className="Annee">
                        <p className="TextPi">2022</p>
                    </div>
                    <div className="Client">
                        <p className="TextPi">Wild Code School</p>
                    </div>
                    <div className="Front">
                        <p className="TextPi">React.js / Node.js</p>
                    </div>
                    <div className="Back">
                        <p className="TextPi">API Rest / Express.js</p>
                    </div>
                    <div className="Sgbd">
                        <p className="TextPi">MySql</p>
                    </div>
                </div>
                <div className="Wild_description_right">
                    <div className="Wild_description_right_description">
                        <h4 className="Wild_h4 Saut resolution">Description :</h4>
                        {french ?
                            <div>
                                <p className="TextPi">Le projet Wild Movies est un site internet qui propose une bibliothèque de tous les films et séries présents dans l’API publique très populaire TMDB. </p>
                                <p className="TextPi">Ce service API REST est destiné à ceux qui souhaitent utiliser leur base de données très complète pour la retranscrire dans une application web.</p>
                                <p className="TextPi">Il permet de récupérer dynamiquement toutes les données relatives aux films, aux séries, aux bandes-annonces, mais également celles au casting.</p>
                                <p className="TextPi">Il fournit également des informations sur les plateformes de diffusion de vidéo en continu disponibles.</p>
                            </div>
                            :
                            <div>
                                <p className="TextPi">The Wild Movies project is a website that offers a library of all the movies and series present in the very popular TMDB public API. </p>
                                <p className="TextPi">This REST API service is intended for those who want to use their very complete database to transcribe it into a web application.</p>
                                <p className="TextPi">It makes it possible to dynamically recover all data related to films, series, trailers, but also those related to the casting.</p>
                                <p className="TextPi">It also provides information on available video streaming platforms.</p>
                            </div>}
                        {french ?
                            <p className="TextP">Lien vers le site : <a href="https://wild-movies.netlify.app/" target="_blank">https://wild-movies.netlify.app/</a></p>
                            :
                            <p className="TextP">Link to website : <a href="https://wild-movies.netlify.app/" target="_blank">https://wild-movies.netlify.app/</a></p>}
                    </div>
                </div>
            </div>
            <h4 className="Wild_h4 resolution picture">Illustrations</h4>
            <div className="Wild_screenshot">
                <div className="Wild_screenshot_image">
                    <a href={Wild2} target="_blank">
                        <img src={Wild2} className="Wild_screenshot_image"></img>
                    </a>
                </div>
                <div className="Wild_screenshot_image">
                    <a href={Wild3} target="_blank">
                        <img src={Wild3} className="Wild_screenshot_image"></img>
                    </a>
                </div>
                <div className="Wild_screenshot_image">
                    <a href={Wild4} target="_blank">
                        <img src={Wild4} className="Wild_screenshot_image"></img>
                    </a>
                </div>
                <div className="Wild_screenshot_image">
                    <a href={Wild5} target="_blank">
                        <img src={Wild5} className="Wild_screenshot_image"></img>
                    </a>
                </div>
                <div className="Wild_screenshot_image">
                    <a href={Wild8} target="_blank">
                        <img src={Wild8} className="Wild_screenshot_image"></img>
                    </a>
                </div>
                <div className="Wild_screenshot_image">
                    <a href={Wild6} target="_blank">
                        <img src={Wild6} className="Wild_screenshot_image"></img>
                    </a>
                </div>
                <div className="Wild_screenshot_image">
                    <a href={Wild7} target="_blank">
                        <img src={Wild7} className="Wild_screenshot_image"></img>
                    </a>
                </div>
                <div className="Wild_screenshot_image">
                    <a href={Wild10} target="_blank">
                        <img src={Wild10} className="Wild_screenshot_image lessBorder"></img>
                    </a>
                </div>
                <div className="Wild_screenshot_image">
                    <a href={Wild9} target="_blank">
                        <img src={Wild9} class="Wild_screenshot_image lessBorder"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Wild;
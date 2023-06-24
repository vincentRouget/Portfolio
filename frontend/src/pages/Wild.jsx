import React, { useContext, useEffect, useState, useRef } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Logo1 from "../assets/Icon/logo_wildmovies.svg";
import Logo2 from "../assets/Icon/logo2_wildmovies.svg";
import ScrollDown from "../components/ScrollDown";
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
        <div className="Wild">
            <div className="Wild_entete">
                <h1>Wild Movies</h1>
            </div>
            <div className="Wild_icones" >
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
                        <p className="TextP">Web development</p>
                    </div>
                    <div className="Annee">
                        <p className="TextP">2022</p>
                    </div>
                    <div className="Client">
                        <p className="TextP">Wild Code School</p>
                    </div>
                    <div className="Front">
                        <p className="TextP">React.js / Node.js</p>
                    </div>
                    <div className="Back">
                        <p className="TextP">API Rest / Express.js</p>
                    </div>
                    <div className="Sgbd">
                        <p className="TextP">MySql</p>
                    </div>
                </div>
                <div className="Wild_description_right">
                    <div className="Wild_description_right_description">
                        <h4 className="Saut">Description :</h4>
                        <p className="TextP">The Wild Movies project is a website that offers a library of all the movies and series present in the very popular public api TMDB.</p>
                        <p className="TextP">This API is intended for those who wish to use their very complete database in a web application.</p>
                        <p className="TextP">It allows you to dynamically retrieve all the data relating to films, series, but also those relating to casting.</p>
                        <p className="TextP">In addition, it also provides information on which streaming platform(s) the viewing is available.</p>
                    </div>
                    <p className="TextP">Lien vers le site : <a href="https://wild-movies.netlify.app/" target="_blank">https://wild-movies.netlify.app/</a></p>
                </div>
            </div>
            <div className="Wild_screenshot">
                <h4>Screenshots</h4>
                <div className="Wild_screenshot_image">
                    {(scrollPosition >= 1200 && scrollPosition <= 2600) ?
                        <a href="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp" target="_blank" className="Wild_screenshot_image">
                            <img src="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp"></img>
                        </a>
                        :
                        <a href="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp" target="_blank" className="Wild_screenshot_image totalHide">
                            <img src="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp"></img>
                        </a>}
                </div>

                <div className="Wild_screenshot_image">
                    {(scrollPosition >= 2100 && scrollPosition <= 3500) ?
                        <a href="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp" target="_blank" className="Wild_screenshot_image">
                            <img src="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp"></img>
                        </a>
                        :
                        <a href="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp" target="_blank" className="Wild_screenshot_image totalHide">
                            <img src="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp"></img>
                        </a>}
                </div>
                <div className="Wild_screenshot_image">
                    {(scrollPosition >= 3000 && scrollPosition <= 4400) ?
                        <a href="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp" target="_blank" className="Wild_screenshot_image">
                            <img src="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp"></img>
                        </a>
                        :
                        <a href="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp" target="_blank" className="Wild_screenshot_image totalHide">
                            <img src="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp"></img>
                        </a>}
                </div>
                <div className="Wild_screenshot_image">
                    {(scrollPosition >= 3900 && scrollPosition <= 5300) ?
                        <a href="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp" target="_blank" className="Wild_screenshot_image">
                            <img src="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp"></img>
                        </a>
                        :
                        <a href="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp" target="_blank" className="Wild_screenshot_image totalHide">
                            <img src="https://ericheymans.com/wp-content/uploads/2012/08/dawn-field-grass-164025.webp"></img>
                        </a>}
                </div>
            </div>
        </div>
    );
};

export default Wild;
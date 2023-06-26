import React, { useContext, useEffect, useState, useRef } from "react";
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
                        <h4 className="Wild_h4">Catégorie</h4>
                    </div>
                    <div className="Annee">
                        <h4 className="Wild_h4">Année</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Wild_h4">Client</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Wild_h4">Front end</h4>
                    </div>
                    <div className="Back">
                        <h4 className="Wild_h4">Back end</h4>
                    </div>
                    <div className="Sgbd">
                        <h4 className="Wild_h4">SGBD</h4>
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
                        <h4 className="Wild_h4 Saut">Description :</h4>
                        <p className="TextP">The Wild Movies project is a website that offers a library of all the movies and series present in the very popular public api TMDB.</p>
                        <p className="TextP">This API is intended for those who wish to use their very complete database in a web application.</p>
                        <p className="TextP">It allows you to dynamically retrieve all the data relating to films, series, but also those relating to casting.</p>
                        <p className="TextP">In addition, it also provides information on which streaming platform(s) the viewing is available.</p>
                    </div>
                    <p className="TextP">Lien vers le site : <a href="https://wild-movies.netlify.app/" target="_blank">https://wild-movies.netlify.app/</a></p>
                </div>
            </div>
            <h4 className="Wild_h4">Screenshots</h4>
            <div className="Wild_screenshot">
                <div className="Wild_screenshot_image">
                    {/* {(scrollPosition >= 1200 && scrollPosition <= 2400) ? */}
                    <a href={Wild2} target="_blank">
                        <img src={Wild2} className="Wild_screenshot_image"></img>
                    </a>
                    {/* :
                        <a href={Wild2} target="_blank">
                            <img src={Wild2} className="Wild_screenshot_image totalHide"></img>
                        </a>} */}
                </div>
                <div className="Wild_screenshot_image">
                    {/* {(scrollPosition >= 2100 && scrollPosition <= 3200) ? */}
                    <a href={Wild3} target="_blank">
                        <img src={Wild3} className="Wild_screenshot_image"></img>
                    </a>
                    {/* :
                        <a href={Wild3} target="_blank">
                            <img src={Wild3} className="Wild_screenshot_image totalHide"></img>
                        </a>} */}
                </div>
                <div className="Wild_screenshot_image">
                    {/* {(scrollPosition >= 2900 && scrollPosition <= 4100) ? */}
                    <a href={Wild4} target="_blank">
                        <img src={Wild4} className="Wild_screenshot_image"></img>
                    </a>
                    {/* :
                        <a href={Wild4} target="_blank">
                            <img src={Wild4} className="Wild_screenshot_image totalHide"></img>
                        </a>} */}
                </div>
                <div className="Wild_screenshot_image">
                    {/* {(scrollPosition >= 3800 && scrollPosition <= 5000) ? */}
                    <a href={Wild5} target="_blank">
                        <img src={Wild5} className="Wild_screenshot_image"></img>
                    </a>
                    {/* :
                        <a href={Wild5} target="_blank">
                            <img src={Wild5} className="Wild_screenshot_image totalHide"></img>
                        </a>} */}
                </div>
                <div className="Wild_screenshot_image">
                    {/* {(scrollPosition >= 4700 && scrollPosition <= 5800) ? */}
                    <a href={Wild8} target="_blank">
                        <img src={Wild8} className="Wild_screenshot_image"></img>
                    </a>
                    {/* :
                        <a href={Wild8} target="_blank">
                            <img src={Wild8} className="Wild_screenshot_image totalHide"></img>
                        </a>} */}
                </div>
                <div className="Wild_screenshot_image">
                    {/* {(scrollPosition >= 5500 && scrollPosition <= 6600) ? */}
                    <a href={Wild6} target="_blank">
                        <img src={Wild6} className="Wild_screenshot_image"></img>
                    </a>
                    {/* :
                        <a href={Wild6} target="_blank">
                            <img src={Wild6} className="Wild_screenshot_image totalHide"></img>
                        </a>} */}
                </div>
                <div className="Wild_screenshot_image">
                    {/* {(scrollPosition >= 6300 && scrollPosition <= 7500) ? */}
                    <a href={Wild7} target="_blank">
                        <img src={Wild7} className="Wild_screenshot_image"></img>
                    </a>
                    {/* :
                        <a href={Wild7} target="_blank">
                            <img src={Wild7} className="Wild_screenshot_image totalHide"></img>
                        </a>} */}
                </div>
                <div className="Wild_screenshot_image">
                    {/* {(scrollPosition >= 7200 && scrollPosition <= 8500) ? */}
                    <a href={Wild10} target="_blank">
                        <img src={Wild10} className="Wild_screenshot_image lessBorder"></img>
                    </a>
                    {/* :
                        <a href={Wild10} target="_blank">
                            <img src={Wild10} class="Wild_screenshot_image totalHide lessBorder"></img>
                        </a>} */}
                </div>
                <div className="Wild_screenshot_image">
                    {/* {(scrollPosition >= 8200 && scrollPosition <= 9900) ? */}
                    <a href={Wild9} target="_blank">
                        <img src={Wild9} class="Wild_screenshot_image lessBorder"></img>
                    </a>
                    {/* :
                        <a href={Wild9} target="_blank">
                            <img src={Wild9} class="Wild_screenshot_image totalHide lessBorder"></img>
                        </a>} */}
                </div>
            </div>
        </div>
    );
};

export default Wild;
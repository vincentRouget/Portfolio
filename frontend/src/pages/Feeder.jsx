import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import ScrollDown from "../components/ScrollDown";
import Blog from "../assets/Icon/Blog.png";
import BlogW from "../assets/Icon/BlogW.png";
import Home from "../assets/Image/Feeder/Home.jpg";
import Connection from "../assets/Image/Feeder/Connection.jpg";
import Category from "../assets/Image/Feeder/Category.jpg";
import Edit from "../assets/Image/Feeder/Edit.jpg";
import List from "../assets/Image/Feeder/Blog.jpg";
import JAVA from "../assets/Icon/java.png";
import TYPESCRIPT from "../assets/Icon/typescript.png";
import ANGULAR from "../assets/Icon/angular.png";
import SPRING from "../assets/Icon/spring.png";
import MYSQL from "../assets/Icon/mysql.png";

const Feeder = () => {

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
        <div className="Feeder">
            <div className="Feeder_entete">
                <h1>BLOG FEEDER</h1>
            </div>
            <div className="Feeder_icones" >
                <div className="Feeder_icones_icone">
                    <img src={TYPESCRIPT} alt='React.js' className="icone"></img>
                </div>
                <div className="Feeder_icones_icone">
                    <img src={ANGULAR} alt='Node.js' className="icone"></img>
                </div>
                <div className="Feeder_icones_icone">
                    <img src={JAVA} alt='API Rest' className="icone"></img>
                </div>
                <div className="Feeder_icones_icone">
                    <img src={SPRING} alt='Express.js' className="icone"></img>
                </div>
                <div className="Feeder_icones_icone">
                    <img src={MYSQL} alt='MySql' className="icone"></img>
                </div>
            </div>
            <ScrollDown />
            <div className="Page_title">
                <div className="Logo1">
                    {theme == 'light' ?
                        <img src={Blog} className="LogoBlog" alt="Logo Feeder"></img>
                        :
                        <img src={BlogW} className="LogoBlog" alt="Logo Feeder"></img>}
                </div>
                <p className="TitleFeeder">Blog Feeder</p>
            </div>
            <div className="Feeder_description">
                <div className="Feeder_description_left">
                    <div className="Categorie">
                        {french ?
                            <h4 className="Feeder_h4 resolution">Catégorie :</h4>
                            :
                            <h4 className="Feeder_h4 resolution">Category :</h4>}
                    </div>
                    <div className="Annee">
                        {french ?
                            <h4 className="Feeder_h4 resolution">Année :</h4>
                            :
                            <h4 className="Feeder_h4 resolution">Year :</h4>}
                    </div>
                    <div className="Client">
                        <h4 className="Feeder_h4 resolution">Client :</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Feeder_h4 resolution">Front end :</h4>
                    </div>
                    <div className="Back">
                        <h4 className="Feeder_h4 resolution">Back end :</h4>
                    </div>
                    <div className="Sgbd">
                        <h4 className="Feeder_h4 resolution">SGBD :</h4>
                    </div>
                </div>
                <div className="Feeder_description_middle">
                    <div className="Categorie">
                        {french ?
                            <p className="TextPi">Site web</p>
                            :
                            <p className="TextPi">Website</p>}
                    </div>
                    <div className="Annee">
                        <p className="TextPi">2024</p>
                    </div>
                    <div className="Client">
                        <p className="TextPi">POEIC Java</p>
                    </div>
                    <div className="Front">
                        <p className="TextPi">TypeScript / Angular</p>
                    </div>
                    <div className="Back">
                        <p className="TextPi">Java / Spring Boot</p>
                    </div>
                    <div className="Sgbd">
                        <p className="TextPi">MySql</p>
                    </div>
                </div>
                <div className="Feeder_description_right">
                    <div className="Feeder_description_right_description">
                        <h4 className="Feeder_h4 Saut resolution">Description :</h4>
                        {french ?
                            <div>
                                <p className="TextPi">Le projet Blog Feeder est un site internet qui propose une bibliothèque de blogs créés par les utilisateurs.</p>
                                <p className="TextPi">Chaque visiteur peut consulter tous les blogs existants, et s'inscrire dans la base de donnée afin de devenir utilisateur.</p>
                                <p className="TextPi">En tant qu'utilisateur, il peut créer ses propres blogs. Il peut également modifier ou supprimer les blogs dont il est l'auteur.</p>
                                <p className="TextPi">Chaque blog est unique, et est caractérisé par un titre, un contenu, une date, un auteur et une ou plusieurs catégories existantes dans la base de données.</p>
                            </div>
                            :
                            <div>
                                <p className="TextPi">The Blog Feeder project is a website that offers a library of user-created blogs.</p>
                                <p className="TextPi">Each visitor can consult all existing blogs and register in the database to become a user.</p>
                                <p className="TextPi">As a user he can create his own blogs. He can also modify or delete the blogs of which he is the author.</p>
                                <p className="TextPi">Each blog is unique, and is characterized by a title, content, date, author and one or more existing categories in the database.</p>
                            </div>}
                    </div>
                </div>
            </div>
            <h4 className="Feeder_h4 resolution picture">Illustrations</h4>
            <div className="Feeder_screenshot">
                <div className="Feeder_screenshot_image">
                    <a href={Home} target="_blank">
                        <img src={Home} className="Feeder_screenshot_image"></img>
                    </a>
                </div>
                <div className="Feeder_screenshot_image">
                    <a href={Connection} target="_blank">
                        <img src={Connection} className="Feeder_screenshot_image"></img>
                    </a>
                </div>
                <div className="Feeder_screenshot_image">
                    <a href={Category} target="_blank">
                        <img src={Category} className="Feeder_screenshot_image"></img>
                    </a>
                </div>
                <div className="Feeder_screenshot_image">
                    <a href={Edit} target="_blank">
                        <img src={Edit} className="Feeder_screenshot_image"></img>
                    </a>
                </div>
                <div className="Feeder_screenshot_image">
                    <a href={List} target="_blank">
                        <img src={List} className="Feeder_screenshot_image"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Feeder;
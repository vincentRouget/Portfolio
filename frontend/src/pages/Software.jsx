import React, { useContext, useEffect, useState, useRef } from "react";
import UserContext from "../context/UserContext";
import ScrollDown from "../components/ScrollDown";
import PREACT from "../assets/Icon/preact.png";
import PYTHON from "../assets/Icon/python.png";
import PASCAL from "../assets/Icon/pascal.png";
import CPP from "../assets/Icon/cpp.png";
import VSC from "../assets/Icon/vsc.png";
import VS from "../assets/Icon/vs.png";
import IO from "../assets/Icon/io.png";

const Software = () => {
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
        <div className="Software">
            <div className="Software_entete">
                <h1>SOFTWARE</h1>
            </div>
            <div className="Software_icones" >
                <div className="Software_icones_icone">
                    <img src={PYTHON} alt='Python' className="icone"></img>
                </div>
                <div className="Software_icones_icone">
                    <img src={CPP} alt='CPP' className="icone"></img>
                </div>
                <div className="Software_icones_icone">
                    <img src={PREACT} alt='Preact' className="icone"></img>
                </div>
                <div className="Software_icones_icone">
                    <img src={PASCAL} alt='Pascal' className="icone"></img>
                </div>
            </div>
            <ScrollDown />
            <div className="Software_title pythonBorder">
                <p className="TitleSoftware python">Seva</p>
                <div className="Software_icones_icone">
                    <img src={PYTHON} alt='Python' className="icone"></img>
                </div>
                <div className="Software_icones_icone">
                    <img src={VSC} alt='Visual Studio Code' className="icone"></img>
                </div>
            </div>
            <div className="Software_description pythonBorder">
                <div className="Software_description_left">
                    <div className="Annee">
                        <h4 className="Software_h4 python">Année</h4>
                    </div>
                    <div className="Categorie">
                        <h4 className="Software_h4 python">Non-disclosure clause</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 python">I.D.E.</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 python">Technologies</h4>
                    </div>
                </div>
                <div className="Software_description_middle">
                    <div className="Categorie">
                        <p className="TextP">2023</p>
                    </div>
                    <div className="Annee">
                        <p className="TextP">Yes</p>
                    </div>
                    <div className="Client">
                        <p className="TextP">Visual Studio Code</p>
                    </div>
                    <div className="Front">
                        <p className="TextP">Python</p>
                    </div>
                </div>
                <div className="Software_description_right">
                    <div className="Software_description_right_description pythonDescription">
                        <h4 className="Software_h4 Saut python">Description :</h4>
                        <p className="TextPi">Development of a pilot and test program for an automated tamping machine.</p>
                        <p className="TextPi">The program makes it possible, according to several input parameters, to generate machine cycles in a loop, to analyze and optimize machine performance.</p>
                        <p className="TextPi">It also offers the different possible formulas with a description of each of them, as well as the rates and optional services.</p>
                        <p className="TextPi">It also allows you to manage step-by-step progress for each separate step within a single cycle, identify all possible causes of machine error, and generate a CSV file with the history of all parameters concerned.</p>
                        <p className="TextPi">The program thus helps to mechanically design future optimization hardware developments.</p>
                    </div>
                </div>
            </div>
            <div className="Software_title cppBorder">
                <p className="TitleSoftware cpp">Ditalos</p>
                <div className="Software_icones_icone">
                    <img src={CPP} alt='CPP' className="icone"></img>
                </div>
                <div className="Software_icones_icone">
                    <img src={VS} alt='Visual Studio Community' className="icone"></img>
                </div>
            </div>
            <div className="Software_description cppBorder">
                <div className="Software_description_left">
                    <div className="Annee">
                        <h4 className="Software_h4 cpp">Année</h4>
                    </div>
                    <div className="Categorie">
                        <h4 className="Software_h4 cpp">Non-disclosure clause</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 cpp">I.D.E.</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 cpp">Technologies</h4>
                    </div>
                </div>
                <div className="Software_description_middle">
                    <div className="Categorie">
                        <p className="TextP">2023</p>
                    </div>
                    <div className="Annee">
                        <p className="TextP">Yes</p>
                    </div>
                    <div className="Client">
                        <p className="TextP">Visual Studio Community</p>
                    </div>
                    <div className="Front">
                        <p className="TextP">C++</p>
                    </div>
                </div>
                <div className="Software_description_right">
                    <div className="Software_description_right_description cppDescription">
                        <h4 className="Software_h4 Saut cpp">Description :</h4>
                        <p className="TextPi">This site created in React.js aims to present the services and rental rates for accommodation in the establishment "La Maison du Lac", located near Limoges in the department of Haute-Vienne (87), France.</p>
                        <p className="TextPi">On the home page, it presents a description of the establishment and the different accommodations, with some images to illustrate the places.</p>
                        <p className="TextPi">It also offers the different possible formulas with a description of each of them, as well as the rates and optional services.</p>
                        <p className="TextPi">A Contact page with a Google Maps allows you to locate the precise location, find the best route, or even send an email to the owner of the establishment.</p>
                        <p className="TextPi">At the bottom of the page, we find the various links to all external web pages, such as Facebook, Booking.com or even AirBnB.com.</p>
                    </div>
                </div>
            </div>
            <div className="Software_title preactBorder">
                <p className="TitleSoftware preact">Bharat</p>
                <div className="Software_icones_icone">
                    <img src={PREACT} alt='Preact' className="icone"></img>
                </div>
                <div className="Software_icones_icone">
                    <img src={VSC} alt='Visual Studio Code' className="icone"></img>
                </div>
            </div>
            <div className="Software_description preactBorder">
                <div className="Software_description_left">
                    <div className="Annee">
                        <h4 className="Software_h4 preact">Année</h4>
                    </div>
                    <div className="Categorie">
                        <h4 className="Software_h4 preact">Non-disclosure clause</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 preact">I.D.E.</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 preact">Technologies</h4>
                    </div>
                </div>
                <div className="Software_description_middle">
                    <div className="Categorie">
                        <p className="TextP">2023</p>
                    </div>
                    <div className="Annee">
                        <p className="TextP">Yes</p>
                    </div>
                    <div className="Client">
                        <p className="TextP">Visual Studio Code</p>
                    </div>
                    <div className="Front">
                        <p className="TextP">Preact</p>
                    </div>
                </div>
                <div className="Software_description_right">
                    <div className="Software_description_right_description preactDescription">
                        <h4 className="Software_h4 Saut">Description :</h4>
                        <p className="TextPi">This site created in React.js aims to present the services and rental rates for accommodation in the establishment "La Maison du Lac", located near Limoges in the department of Haute-Vienne (87), France.</p>
                        <p className="TextPi">On the home page, it presents a description of the establishment and the different accommodations, with some images to illustrate the places.</p>
                        <p className="TextPi">It also offers the different possible formulas with a description of each of them, as well as the rates and optional services.</p>
                        <p className="TextPi">A Contact page with a Google Maps allows you to locate the precise location, find the best route, or even send an email to the owner of the establishment.</p>
                        <p className="TextPi">At the bottom of the page, we find the various links to all external web pages, such as Facebook, Booking.com or even AirBnB.com.</p>
                    </div>
                </div>
            </div>
            <div className="Software_title pascalBorder">
                <p className="TitleSoftware pascal">Flexis</p>
                <div className="Software_icones_icone">
                    <img src={PASCAL} alt='Pascal' className="icone"></img>
                </div>
                <div className="Software_icones_icone">
                    <img src={IO} alt='Visual I/O' className="icone"></img>
                </div>
            </div>
            <div className="Software_description pascalBorder">
                <div className="Software_description_left">
                    <div className="Annee">
                        <h4 className="Software_h4 pascal">Année</h4>
                    </div>
                    <div className="Categorie">
                        <h4 className="Software_h4 pascal">Non-disclosure clause</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 pascal">I.D.E.</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 pascal">Technologies</h4>
                    </div>
                </div>
                <div className="Software_description_middle">
                    <div className="Categorie">
                        <p className="TextP">2023</p>
                    </div>
                    <div className="Annee">
                        <p className="TextP">Yes</p>
                    </div>
                    <div className="Client">
                        <p className="TextP">Visual I/O</p>
                    </div>
                    <div className="Front">
                        <p className="TextP">Pascal</p>
                    </div>
                </div>
                <div className="Software_description_right">
                    <div className="Software_description_right_description pascalDescription">
                        <h4 className="Software_h4 Saut">Description :</h4>
                        <p className="TextPi">This site created in React.js aims to present the services and rental rates for accommodation in the establishment "La Maison du Lac", located near Limoges in the department of Haute-Vienne (87), France.</p>
                        <p className="TextPi">On the home page, it presents a description of the establishment and the different accommodations, with some images to illustrate the places.</p>
                        <p className="TextPi">It also offers the different possible formulas with a description of each of them, as well as the rates and optional services.</p>
                        <p className="TextPi">A Contact page with a Google Maps allows you to locate the precise location, find the best route, or even send an email to the owner of the establishment.</p>
                        <p className="TextPi">At the bottom of the page, we find the various links to all external web pages, such as Facebook, Booking.com or even AirBnB.com.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Software;
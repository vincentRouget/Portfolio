import React, { useContext, useEffect, useState } from "react";
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
            <div className="Software_description pythonContour">
                <div className="Software_description_left">
                    <div className="Annee">
                        <h4 className="Software_h4 python resolution">Année</h4>
                    </div>
                    <div className="Categorie">
                        <h4 className="Software_h4 python resolution">Non-disclosure clause</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 python resolution">I.D.E.</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 python resolution">Langage</h4>
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
                <div className="Software_description_right pythonDescription">
                    <div className="Software_description_right_description">
                        <h4 className="Software_h4 Saut python resolution">Description :</h4>
                        <p className="TextP">Development of a pilot and test program for an automated tamping machine.</p>
                        <p className="TextP">The program makes it possible, depending on several input parameters, to generate machine cycles in a loop, to advance step by step, to optimize performance, and to identify all possible causes of error.</p>
                        <p className="TextP">The program thus helps to mechanically design future optimization hardware developments.</p>
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
            <div className="Software_description cppContour">
                <div className="Software_description_left">
                    <div className="Annee">
                        <h4 className="Software_h4 cpp resolution">Année</h4>
                    </div>
                    <div className="Categorie">
                        <h4 className="Software_h4 cpp resolution">Non-disclosure clause</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 cpp resolution">I.D.E.</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 cpp resolution">Langage</h4>
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
                        <p className="TextP">VS Community 2022</p>
                    </div>
                    <div className="Front">
                        <p className="TextP">C++</p>
                    </div>
                </div>
                <div className="Software_description_right cppDescription">
                    <div className="Software_description_right_description">
                        <h4 className="Software_h4 Saut cpp resolution">Description :</h4>
                        <p className="TextP">Adaptability of video surveillance management software by means of a network of cameras, to modern operating systems.</p>
                        <p className="TextP">Addition of functionalities and availability of new foreign languages in the software through dll files.</p>
                        <p className="TextP">Increased security protocols and implementation of a USB Dongle.</p>
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
            <div className="Software_description preactContour">
                <div className="Software_description_left">
                    <div className="Annee">
                        <h4 className="Software_h4 preact resolution">Année</h4>
                    </div>
                    <div className="Categorie">
                        <h4 className="Software_h4 preact resolution">Non-disclosure clause</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 preact resolution">I.D.E.</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 preact resolution">Langage</h4>
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
                <div className="Software_description_right preactDescription">
                    <div className="Software_description_right_description">
                        <h4 className="Software_h4 Saut preact resolution">Description :</h4>
                        <p className="TextP">Complete overhaul of a program used to control the lights on board SNCF network trains.</p>
                        <p className="TextP">This project aimed to fully migrate all old features to a new modern interface.</p>
                        <p className="TextP">The program being embedded on various computer media, the development was done in the Preact language, for low resource consumption needs.</p>
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
            <div className="Software_description pascalContour">
                <div className="Software_description_left">
                    <div className="Annee">
                        <h4 className="Software_h4 pascal resolution">Année</h4>
                    </div>
                    <div className="Categorie">
                        <h4 className="Software_h4 pascal resolution">Non-disclosure clause</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 pascal resolution">I.D.E.</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 pascal resolution">Langage</h4>
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
                <div className="Software_description_right pascalDescription">
                    <div className="Software_description_right_description">
                        <h4 className="Software_h4 Saut pascal resolution">Description :</h4>
                        <p className="TextP">Maintenance and optimization of a control program for an electromagnetic system for the creep of polymeric materials.</p>
                        <p className="TextP">Programming under Visual I/O, in expert mode to modify and add functionalities to the mimic diagrams of the software's graphic interface.</p>
                        <p className="TextP">Programming under Visual I/O, in Pascal language to develop all the additions, corrections and changes with regard to the logic of the software.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Software;
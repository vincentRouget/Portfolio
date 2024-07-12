import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import Back from "../assets/Icon/icons8-arrow-100.png";
import ScrollDown from "../components/ScrollDown";
import PREACT from "../assets/Icon/preact.png";
import PYTHON from "../assets/Icon/python.png";
import PASCAL from "../assets/Icon/pascal.png";
import CPP from "../assets/Icon/cpp.png";
import VSC from "../assets/Icon/vsc.png";
import VS from "../assets/Icon/vs.png";
import IO from "../assets/Icon/io.png";

const Software = ({
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
        <div className="Software">
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
            <div className="scrollContainer">
                <ScrollDown />
            </div>
            <div className="Software_title">
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
                        {french ?
                            <h4 className="Software_h4 python resolution">Année :</h4>
                            :
                            <h4 className="Software_h4 python resolution">Year :</h4>}
                    </div>
                    <div className="Categorie">
                        {french ?
                            <h4 className="Software_h4 python resolution">Clause de non-divulgation :</h4>
                            :
                            <h4 className="Software_h4 python resolution">Non-disclosure clause :</h4>}
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 python resolution">IDE :</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 python resolution">Langage :</h4>
                    </div>
                </div>
                <div className="Software_description_middle">
                    <div className="Categorie">
                        <p className="TextPi">2023</p>
                    </div>
                    <div className="Annee">
                        {french ?
                            <p className="TextPi">Oui</p>
                            :
                            <p className="TextPi">Yes</p>}
                    </div>
                    <div className="Client">
                        <p className="TextPi">Visual Studio Code</p>
                    </div>
                    <div className="Front">
                        <p className="TextPi">Python</p>
                    </div>
                </div>
                <div className="Software_description_right pythonDescription">
                    <div className="Software_description_right_description">
                        <h4 className="Software_h4 Saut python resolution">Description :</h4>
                        {french ?
                            <div>
                                <p className="TextPi">Développement d’un programme pour piloter et effectuer des essais pour une machine de tassage automatisée.</p>
                                <p className="TextPi">Le programme permet, en fonction de plusieurs paramètres d’entrée, de générer des cycles machine en boucle, d’avancer pas à pas, d’optimiser les performances et d’identifier toutes les causes possibles d’erreur.</p>
                                <p className="TextPi">Le programme aide ainsi à concevoir mécaniquement les futurs développements matériels d’optimisation.</p>
                            </div>
                            :
                            <div>
                                <p className="TextPi">Development of a program to pilot and test an automated packing machine.</p>
                                <p className="TextPi">The program allows, depending on several input parameters, to generate loop machine cycles, to advance step by step, to optimize performance and to identify all possible causes of error.</p>
                                <p className="TextPi">The program thus helps to mechanically design future hardware optimization developments.</p>
                            </div>}
                    </div>
                </div>
            </div>
            <div className="Software_title">
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
                        {french ?
                            <h4 className="Software_h4 cpp resolution">Année :</h4>
                            :
                            <h4 className="Software_h4 cpp resolution">Year :</h4>}
                    </div>
                    <div className="Categorie">
                        {french ?
                            <h4 className="Software_h4 cpp resolution">Clause de non-divulgation :</h4>
                            :
                            <h4 className="Software_h4 cpp resolution">Non-disclosure clause :</h4>}
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 cpp resolution">IDE :</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 cpp resolution">Langage :</h4>
                    </div>
                </div>
                <div className="Software_description_middle">
                    <div className="Categorie">
                        <p className="TextPi">2023</p>
                    </div>
                    <div className="Annee">
                        {french ?
                            <p className="TextPi">Oui</p>
                            :
                            <p className="TextPi">Yes</p>}
                    </div>
                    <div className="Client">
                        <p className="TextPi">VS Community 2022</p>
                    </div>
                    <div className="Front">
                        <p className="TextPi">C++</p>
                    </div>
                </div>
                <div className="Software_description_right cppDescription">
                    <div className="Software_description_right_description">
                        <h4 className="Software_h4 Saut cpp resolution">Description :</h4>
                        {french ?
                            <div>
                                <p className="TextPi">Adaptabilité aux systèmes d’exploitation modernes d’un logiciel de gestion pour la vidéosurveillance au moyen d’un réseau de caméras.</p>
                                <p className="TextPi">Ajout de fonctionnalités et mise en place de nouvelles langues étrangères d’interface dans le logiciel par l’intermédiaire de fichiers dll.</p>
                                <p className="TextPi">Intégration de protocoles de sécurité supplémentaires et mise en œuvre d’un Dongle USB.</p>
                            </div>
                            :
                            <div>
                                <p className="TextPi">Adaptability to modern operating systems of management software for video surveillance through a network of cameras.</p>
                                <p className="TextPi">Added features and implemented new foreign interface langages in the software via dll files.</p>
                                <p className="TextPi">Integration of additional security protocols and implementation of a USB dongle.</p>
                            </div>}
                    </div>
                </div>
            </div>
            <div className="Software_title">
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
                        {french ?
                            <h4 className="Software_h4 preact resolution">Année :</h4>
                            :
                            <h4 className="Software_h4 preact resolution">Year :</h4>}
                    </div>
                    <div className="Categorie">
                        {french ?
                            <h4 className="Software_h4 preact resolution">Clause de non-divulgation :</h4>
                            :
                            <h4 className="Software_h4 preact resolution">Non-disclosure clause :</h4>}
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 preact resolution">IDE :</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 preact resolution">Langage :</h4>
                    </div>
                </div>
                <div className="Software_description_middle">
                    <div className="Categorie">
                        <p className="TextPi">2023</p>
                    </div>
                    <div className="Annee">
                        {french ?
                            <p className="TextPi">Oui</p>
                            :
                            <p className="TextPi">Yes</p>}
                    </div>
                    <div className="Client">
                        <p className="TextPi">Visual Studio Code</p>
                    </div>
                    <div className="Front">
                        <p className="TextPi">Preact</p>
                    </div>
                </div>
                <div className="Software_description_right preactDescription">
                    <div className="Software_description_right_description">
                        <h4 className="Software_h4 Saut preact resolution">Description :</h4>
                        {french ?
                            <div>
                                <p className="TextPi">Révision complète d’un programme de contrôle des luminaires à bord des trains et navettes du réseau SNCF.</p>
                                <p className="TextPi">Ce projet visait à migrer toutes les anciennes fonctionnalités vers une nouvelle interface intranet moderne.</p>
                                <p className="TextPi">Le programme étant intégré sur de multiples supports informatiques variés, le développement a été fait dans le langage Preact, pour des besoins de faible consommation en ressources.</p>
                            </div>
                            :
                            <div>
                                <p className="TextPi">Complete revision of a control program for luminaires on board SNCF trains and shuttles.</p>
                                <p className="TextPi">This project aimed to migrate all old features to a new modern intranet interface.</p>
                                <p className="TextPi">As the program is integrated on multiple computer media, the development was done in the Preact langage, for low resource consumption needs.</p>
                            </div>}
                    </div>
                </div>
            </div>
            <div className="Software_title">
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
                        {french ?
                            <h4 className="Software_h4 pascal resolution">Année :</h4>
                            :
                            <h4 className="Software_h4 pascal resolution">Year :</h4>}
                    </div>
                    <div className="Categorie">
                        {french ?
                            <h4 className="Software_h4 pascal resolution">Clause de non-divulgation :</h4>
                            :
                            <h4 className="Software_h4 pascal resolution">Non-disclosure clause :</h4>}
                    </div>
                    <div className="Client">
                        <h4 className="Software_h4 pascal resolution">IDE :</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Software_h4 pascal resolution">Langage :</h4>
                    </div>
                </div>
                <div className="Software_description_middle">
                    <div className="Categorie">
                        <p className="TextPi">2023</p>
                    </div>
                    <div className="Annee">
                        {french ?
                            <p className="TextPi">Oui</p>
                            :
                            <p className="TextPi">Yes</p>}
                    </div>
                    <div className="Client">
                        <p className="TextPi">Visual I/O</p>
                    </div>
                    <div className="Front">
                        <p className="TextPi">Pascal</p>
                    </div>
                </div>
                <div className="Software_description_right pascalDescription">
                    <div className="Software_description_right_description">
                        <h4 className="Software_h4 Saut pascal resolution">Description :</h4>
                        {french ?
                            <div>
                                <p className="TextPi">Maintenance et optimisation d’un programme de contrôle d’un système électromagnétique pour une machine de fluage de matériaux polymères.</p>
                                <p className="TextPi">Programmation sous Visual I/O, en mode expert, pour modifier et ajouter des fonctionnalités aux synoptiques de l’interface graphique du logiciel.</p>
                                <p className="TextPi">Programmation sous Visual I/O, en langage Pascal, pour développer tous les ajouts, corrections et changements concernant la logique du logiciel.</p>
                            </div>
                            :
                            <div>
                                <p className="TextPi">Maintenance and optimization of an electromagnetic control program for a polymer creeping machine.</p>
                                <p className="TextPi">Programming under Visual I/O, in expert mode, to modify and add features to the software’s graphical interface synoptics.</p>
                                <p className="TextPi">Programming under Visual I/O, in Pascal langage, to develop all additions, corrections and changes concerning the logic of the software.</p>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Software;
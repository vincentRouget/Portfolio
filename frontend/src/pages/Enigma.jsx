import React, { useContext, useEffect, useState, useRef } from "react";
import UserContext from "../context/UserContext";
import ScrollDown from "../components/ScrollDown";
import LogoEnigma from '../assets/Image/Enigma/LogoEnigma.png';
import Enigma1 from "../assets/Image/Enigma/enigma1.png";
import Enigma2 from "../assets/Image/Enigma/enigma2.png";
import Enigma3 from "../assets/Image/Enigma/enigma3.png";
import HTML from "../assets/Icon/html.png";
import CSS from "../assets/Icon/css.png";
import JS from "../assets/Icon/js.png";

const Enigma = () => {
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
        <div className="Enigma">
            <div className="Enigma_entete">
                <h1>ENIGMA</h1>
            </div>
            <div className="Enigma_icones" >
                <div className="Enigma_icones_icone">
                    <img src={HTML} alt='Html' className="icone"></img>
                </div>
                <div className="Enigma_icones_icone">
                    <img src={CSS} alt='CSS' className="icone"></img>
                </div>
                <div className="Enigma_icones_icone">
                    <img src={JS} alt='Javascript' className="icone"></img>
                </div>
            </div>
            <ScrollDown />
            <div className="Enigma_title">
                <div className="EnigmaLogo">
                    <img src={LogoEnigma} id="LogoEnigma" alt="Logo Enigma"></img>
                </div>
                <p className="TitleEnigma">Enigma</p>
            </div>
            <div className="Enigma_description">
                <div className="Enigma_description_left">
                    <div className="Categorie">
                        <h4 className="Enigma_h4">Catégorie</h4>
                    </div>
                    <div className="Annee">
                        <h4 className="Enigma_h4">Année</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Enigma_h4">Client</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Enigma_h4">Front end</h4>
                    </div>
                </div>
                <div className="Enigma_description_middle">
                    <div className="Categorie">
                        <p className="TextP">Algorithm</p>
                    </div>
                    <div className="Annee">
                        <p className="TextP">2021</p>
                    </div>
                    <div className="Client">
                        <p className="TextP">Self-taught</p>
                    </div>
                    <div className="Front">
                        <p className="TextP">HTML / CSS / Javascript</p>
                    </div>
                </div>
                <div className="Enigma_description_right">
                    <div className="Enigma_description_right_description">
                        <h4 className="Enigma_h4 Saut">Description :</h4>
                        <p className="TextPi">This algorithmic project is an html interface that allows a lot of interactions around text encryption.</p>
                        <p className="TextPi">Simply choose a key, which is a string of characters that will act as the password necessary for encryption and decryption, then enter the text to be encrypted.</p>
                        <p className="TextPi">It is then possible to encrypt the message, copy it to the clipboard, or send it by email, with or without comments, in order to give the recipient a clue about the key used to decrypt the message.</p>
                        <p className="TextPi">There is of course a button that allows you to decrypt an incoming message provided you use the right key.</p>
                    </div>
                </div>
            </div>
            <div className="Enigma_screenshot Enigma_padding">
                <div className="Enigma_screenshot_image">
                    <h4 className="Enigma_h4">Interface</h4>
                    <a href={Enigma1} target="_blank">
                        <img src={Enigma1} className="Enigma_screenshot_image"></img>
                    </a>
                </div>
                <div className="Enigma_screenshot_image">
                    <h4 className="Enigma_h4">Encryption</h4>
                    <a href={Enigma2} target="_blank">
                        <img src={Enigma2} className="Enigma_screenshot_image"></img>
                    </a>
                </div>
                <div className="Enigma_screenshot_image">
                    <h4 className="Enigma_h4">Decryption</h4>
                    <a href={Enigma3} target="_blank">
                        <img src={Enigma3} className="Enigma_screenshot_image"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Enigma;
import React, { useContext, useEffect, useState } from "react";
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
                    <img src={LogoEnigma} className="LogoEnigma" alt="Logo Enigma"></img>
                </div>
                <p className="P_title">Enigma</p>
            </div>
            <div className="Enigma_description">
                <div className="Enigma_description_left">
                    <div className="Categorie">
                        {french ?
                            <h4 className="Enigma_h4 resolution">Catégorie :</h4>
                            :
                            <h4 className="Enigma_h4 resolution">Category :</h4>}
                    </div>
                    <div className="Annee">
                        {french ?
                            <h4 className="Enigma_h4 resolution">Année :</h4>
                            :
                            <h4 className="Enigma_h4 resolution">Year :</h4>}
                    </div>
                    <div className="Client">
                        <h4 className="Enigma_h4 resolution">Client : </h4>
                    </div>
                    <div className="Front">
                        <h4 className="Enigma_h4 resolution">Langage :</h4>
                    </div>
                </div>
                <div className="Enigma_description_middle">
                    <div className="Categorie">
                        {french ?
                            <p className="TextPi">Algorithme</p>
                            :
                            <p className="TextPi">Algorithm</p>}
                    </div>
                    <div className="Annee">
                        <p className="TextPi">2021</p>
                    </div>
                    <div className="Client">
                        {french ?
                            <p className="TextPi">Autodidacte</p>
                            :
                            <p className="TextPi">Self-taught</p>}
                    </div>
                    <div className="Front">
                        <p className="TextPi">HTML / CSS / Javascript</p>
                    </div>
                </div>
                <div className="Enigma_description_right">
                    <div className="Enigma_description_right_description">
                        <h4 className="Enigma_h4 Saut resolution">Description :</h4>
                        {french ?
                            <div>
                                <p className="TextPi">Ce projet algorithmique est une interface html qui permet beaucoup d’interactions autour du chiffrement de texte.</p>
                                <p className="TextPi">Choisissez simplement une clé sous forme d’une chaîne de caractères, qui agira comme un mot de passe nécessaire pour le chiffrement et le déchiffrement d’un texte.</p>
                                <p className="TextPi">Il est alors possible de crypter le message, de le copier dans le presse-papiers, ou de l’envoyer par courriel, avec ou sans commentaires, afin de donner au destinataire un indice sur la clé utilisée pour déchiffrer le message.</p>
                                <p className="TextPi">Il y a bien sûr un bouton qui vous permet de déchiffrer un message entrant si vous utilisez la bonne clé.</p>
                            </div>
                            :
                            <div>
                                <p className="TextPi">This algorithmic project is an html interface that allows many interactions around text encryption.</p>
                                <p className="TextPi">Simply choose a key as a string, which will act as a necessary password for encryption and decryption of a text.</p>
                                <p className="TextPi">It is then possible to encrypt the message, copy it to the clipboard, or send it by email, with or without comments, in order to give the recipient a clue about the key used to decrypt the message.</p>
                                <p className="TextPi">There is of course a button that allows you to decipher an incoming message if you use the right key.</p>
                            </div>}
                    </div>
                </div>
            </div>
            <div className="Enigma_screenshot Enigma_padding">
                <div className="Enigma_screenshot_image">
                    <h4 className="Enigma_h4 resolution picture">Illustration</h4>
                    <a href={Enigma1} target="_blank">
                        <img src={Enigma1} className="Enigma_screenshot_image"></img>
                    </a>
                </div>
                <div className="Enigma_screenshot_image">
                    {french ?
                        <h4 className="Enigma_h4 resolution picture">Cryptage</h4>
                        :
                        <h4 className="Enigma_h4 resolution picture">Encryption</h4>}
                    <a href={Enigma2} target="_blank">
                        <img src={Enigma2} className="Enigma_screenshot_image"></img>
                    </a>
                </div>
                <div className="Enigma_screenshot_image">
                    {french ?
                        <h4 className="Enigma_h4 resolution picture">Décryptage</h4>
                        :
                        <h4 className="Enigma_h4 resolution picture">Decryption</h4>}
                    <a href={Enigma3} target="_blank">
                        <img src={Enigma3} className="Enigma_screenshot_image"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Enigma;
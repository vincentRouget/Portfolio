import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import ScrollDown from "../components/ScrollDown";
import HobbiLogo from "../assets/Icon/ic_launcher.png";
import Hobbi2 from "../assets/Image/Hobbi/Hobbi2.png";
import Hobbi3 from "../assets/Image/Hobbi/Hobbi3.png";
import Hobbi4 from "../assets/Image/Hobbi/Hobbi4.png";
import Hobbi5 from "../assets/Image/Hobbi/Hobbi5.png";
import Hobbi6 from "../assets/Image/Hobbi/Hobbi6.png";
import Hobbi7 from "../assets/Image/Hobbi/Hobbi7.png";
import Hobbi8 from "../assets/Image/Hobbi/Hobbi8.png";
import Hobbi9 from "../assets/Image/Hobbi/Hobbi9.png";
import EXPRESS from "../assets/Icon/express.png";
import MYSQL from "../assets/Icon/mysql.png";
import NATIVE from "../assets/Icon/native.png";
import EXPO from "../assets/Icon/expo.png";
import ANDROID from "../assets/Icon/android.png";

const Dating = () => {
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
        <div className="Hobbi">
            <div className="Hobbi_entete">
                <h1>HOBBI</h1>
            </div>
            <div className="Hobbi_icones" >
                <div className="Hobbi_icones_icone">
                    <img src={NATIVE} alt='React Native' className="icone"></img>
                </div>
                <div className="Hobbi_icones_icone">
                    <img src={EXPO} alt='Expo Go' className="icone"></img>
                </div>
                <div className="Hobbi_icones_icone">
                    <img src={ANDROID} alt='Android Studio' className="icone"></img>
                </div>
                <div className="Hobbi_icones_icone">
                    <img src={EXPRESS} alt='Express.js' className="icone"></img>
                </div>
                <div className="Hobbi_icones_icone">
                    <img src={MYSQL} alt='MySql' className="icone"></img>
                </div>
            </div>
            <ScrollDown />
            <div className="Hobbi_title">
                <div className="Hobbi_title_icone">
                    <img src={HobbiLogo} alt='Hobbi' className="iconeHobbi"></img>
                </div>
                <p className="TitleHobbi">Hobbi</p>
            </div>
            <div className="Hobbi_description">
                <div className="Hobbi_description_left">
                    <div className="Categorie">
                        {french ?
                            <h4 className="Hobbi_h4 resolution">Catégorie</h4>
                            :
                            <h4 className="Hobbi_h4 resolution">Category</h4>}
                    </div>
                    <div className="Annee">
                        {french ?
                            <h4 className="Hobbi_h4 resolution">Année</h4>
                            :
                            <h4 className="Hobbi_h4 resolution">Year</h4>}
                    </div>
                    <div className="Client">
                        <h4 className="Hobbi_h4 resolution">Client</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Hobbi_h4 resolution">Front end</h4>
                    </div>
                    <div className="Back">
                        <h4 className="Hobbi_h4 resolution">Back end</h4>
                    </div>
                    <div className="Sgbd">
                        <h4 className="Hobbi_h4 resolution">SGBD</h4>
                    </div>
                </div>
                <div className="Hobbi_description_middle">
                    <div className="Categorie">
                        {french ?
                            <p className="TextPi">Application mobile</p>
                            :
                            <p className="TextPi">Mobile app</p>}
                    </div>
                    <div className="Annee">
                        <p className="TextPi">2023</p>
                    </div>
                    <div className="Client">
                        <p className="TextPi">Start-up DotPoint</p>
                    </div>
                    <div className="Front">
                        <p className="TextPi">React Native / Android Studio</p>
                    </div>
                    <div className="Back">
                        <p className="TextPi">Express.js</p>
                    </div>
                    <div className="Sgbd">
                        <p className="TextPi">MySql</p>
                    </div>
                </div>
                <div className="Hobbi_description_right">
                    <div className="Hobbi_description_right_description">
                        <h4 className="Hobbi_h4 Saut resolution">Description :</h4>
                        {french ?
                            <div>
                                <p className="TextPi">Le projet Hobbi est une application mobile de rencontre à travers deux axes de sélection.</p>
                                <p className="TextPi">Le premier axe filtre les utilisateurs selon un critère spécifique, en accord de non-divulgation. Il est exécuté en back-end et permet de filtrer un très grand nombre d’utilisateurs du côté serveur.</p>
                                <p className="TextPi">Le deuxième axe regroupe, cette fois-ci en front-end, les utilisateurs ayant les mêmes hobbies ou intérêts.</p>
                                <p className="TextPi">Cette application permet donc de réaliser une sélection précise, qui offre à l’utilisateur un panel de personnes correspondant aux critères souhaités, de gérer ses contacts, et d’interagir avec eux par messagerie instantanée.</p>
                            </div>
                            :
                            <div>
                                <p className="TextPi">The Hobbi project is a mobile meeting application through two selection axes.</p>
                                <p className="TextPi">The first axis filters users according to a specific criterion, in non-disclosure agreement. It is run as a back-end and allows filtering a very large number of users on the server side.</p>
                                <p className="TextPi">The second axis brings together, this time in front-end, users with the same hobbies or interests.</p>
                                <p className="TextPi">This application allows to make a precise selection, which offers the user a panel of people corresponding to the desired criteria, to manage his contacts, and to interact with them by instant messaging.</p>
                            </div>}
                    </div>
                </div>
            </div>
            <h4 className="Hobbi_h4 resolution picture">Illustrations</h4>
            <div className="Hobbi_screenshot">
                <div className="Hobbi_screenshot_image">
                    <a href={Hobbi7} target="_blank">
                        <img src={Hobbi7} className="Hobbi_screenshot_image"></img>
                    </a>
                </div>
                <div className="Hobbi_screenshot_image">
                    <a href={Hobbi8} target="_blank">
                        <img src={Hobbi8} className="Hobbi_screenshot_image"></img>
                    </a>
                </div>
                <div className="Hobbi_screenshot_image">
                    <a href={Hobbi3} target="_blank">
                        <img src={Hobbi3} className="Hobbi_screenshot_image"></img>
                    </a>
                </div>
                <div className="Hobbi_screenshot_image">
                    <a href={Hobbi9} target="_blank">
                        <img src={Hobbi9} className="Hobbi_screenshot_image"></img>
                    </a>
                </div>
                <div className="Hobbi_screenshot_image">
                    <a href={Hobbi2} target="_blank">
                        <img src={Hobbi2} className="Hobbi_screenshot_image"></img>
                    </a>
                </div>
                <div className="Hobbi_screenshot_image">
                    <a href={Hobbi4} target="_blank">
                        <img src={Hobbi4} className="Hobbi_screenshot_image"></img>
                    </a>
                </div>
                <div className="Hobbi_screenshot_image">
                    <a href={Hobbi5} target="_blank">
                        <img src={Hobbi5} className="Hobbi_screenshot_image"></img>
                    </a>
                </div>
                <div className="Hobbi_screenshot_image">
                    <a href={Hobbi6} target="_blank">
                        <img src={Hobbi6} className="Hobbi_screenshot_image"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Dating;
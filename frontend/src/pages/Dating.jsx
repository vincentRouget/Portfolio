import React, { useContext, useEffect, useState, useRef } from "react";
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
import Pascal from "../assets/Icon/pascal.png";
import CPP from "../assets/Icon/cpp.png";

const Dating = () => {
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
                <div className="HobbiLogo">
                    <img src={HobbiLogo} id="LogoHobbi" alt="Logo Hobbi"></img>
                </div>
                <p className="TitleHobbi">Hobbi</p>
            </div>
            <div className="Hobbi_description">
                <div className="Hobbi_description_left">
                    <div className="Categorie">
                        <h4 className="Hobbi_h4">Catégorie</h4>
                    </div>
                    <div className="Annee">
                        <h4 className="Hobbi_h4">Année</h4>
                    </div>
                    <div className="Client">
                        <h4 className="Hobbi_h4">Client</h4>
                    </div>
                    <div className="Front">
                        <h4 className="Hobbi_h4">Front end</h4>
                    </div>
                    <div className="Back">
                        <h4 className="Hobbi_h4">Back end</h4>
                    </div>
                    <div className="Sgbd">
                        <h4 className="Hobbi_h4">SGBD</h4>
                    </div>
                </div>
                <div className="Hobbi_description_middle">
                    <div className="Categorie">
                        <p className="TextP">Dating App</p>
                    </div>
                    <div className="Annee">
                        <p className="TextP">2023</p>
                    </div>
                    <div className="Client">
                        <p className="TextP">Start-up DotPoint</p>
                    </div>
                    <div className="Front">
                        <p className="TextP">React Native / Android Studio</p>
                    </div>
                    <div className="Back">
                        <p className="TextP">Express.js</p>
                    </div>
                    <div className="Sgbd">
                        <p className="TextP">MySql</p>
                    </div>
                </div>
                <div className="Hobbi_description_right">
                    <div className="Hobbi_description_right_description">
                        <h4 className="Hobbi_h4 Saut">Description :</h4>
                        <p className="TextPi">The Hobbi project is a mobile dating application for users through two axes of selection.</p>
                        <p className="TextPi">The first axis filters users according to a criterion under non-disclosure agreement. It executed in the back end allows filtering a very large number of users on the server side.</p>
                        <p className="TextPi">The second axis groups together, at the front end this time, users with the same hobbies or interests.</p>
                        <p className="TextPi">This application therefore makes it possible to carry out global matchmaking which offers the user a panel of people corresponding to the desired criteria, to manage his contacts, and to interact via instant messaging.</p>
                    </div>
                </div>
            </div>
            <h4 className="Hobbi_h4">Screenshots</h4>
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
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import UserContext from "../context/UserContext";
import CVpdf from "../assets/data/CV.pdf";
import Logo from "../assets/Icon/Logo-V1.png";
import Theme from "@components/Theme";
import Lang from "@components/Lang";
import Texte from "@components/Texte";
import LinkedIn from "../assets/Icon/icons8-linkedin-94.png";
import GitHub from "../assets/Icon/icons8-github-94.png";
import WhiteArrow from "../assets/Icon/icons8-right-arrow-96-white.png";
import BlackArrow from "../assets/Icon/icons8-right-arrow-96.png";

const Accueil = () => {

    const { theme, french } = useContext(UserContext);
    const [handleAbout, setHandleAbout] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    useEffect(() => {
    }, []);

    return (
        <div className={theme == 'light' ? "Accueil" : "Accueil theme_dark"}>
            <div className="Accueil_topbar">
                <div className="Accueil_topbar_left">
                    <div className="Accueil_topbar_left_logo">
                        <img src={Logo} alt=" " className="Logo"></img>
                    </div>
                    <div className='Texte_first'>
                        <div className='Texte_two'>
                            {french ?
                                <span className='Texte_two_span Texte1'>BIENVENUE</span>
                                :
                                <span className='Texte_two_span Texte1'>WELCOME</span>}
                        </div>
                    </div>
                </div>
                <nav className="navbar">
                    <div className="navbar-brand">
                        <div className="navbar-burger burger" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={isActive ? "navbar-menu is-active" : "navbar-menu"} onClick={toggleMenu}>
                        <div className="navbar-end">
                            {!handleAbout ?
                                <p className="itemBurger" onClick={() => { setHandleAbout(!handleAbout); }}>
                                    {french ? <>A propos</> : <>About</>}
                                </p> :
                                <p className="itemBurger" onClick={() => { setHandleAbout(!handleAbout); }}>
                                    {french ? <>Accueil</> : <>Home</>}
                                </p>}
                            <p className="itemBurger"><a className="itemBurger" href={`mailto:vincent.rouget86@gmail.com`}>Contact</a></p>
                            <p className="itemBurger"><a className="itemBurger" href={CVpdf} target='_blank'>CV</a></p>
                            <p className="itemBurger"><a className="itemBurger" href="https://www.linkedin.com/in/vincent-rouget-22996118a/" target="_blank">LinkedIn</a></p>
                            <p className="itemBurger"><a className="itemBurger" href="https://github.com/vincentRouget" target="_blank">GitHub</a></p>
                            <div className="iconeBurger">
                                <Theme />
                            </div>
                            <div className="iconeBurger">
                                <Lang />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="Accueil_topbar_right">
                    <div className="Accueil_topbar_right_about">
                        <div className="Accueil_topbar_right_about_button">
                            {!handleAbout ?
                                <div className="Accueil_topbar_right_about_button_space">
                                    <button
                                        className='ButtonAbout'
                                        onClick={() => {
                                            setHandleAbout(!handleAbout);
                                        }}>
                                        {french ? <>A propos</> : <>About</>}</button>
                                </div>
                                :
                                <div className="Accueil_topbar_right_about_button_space">
                                    <button
                                        className='ButtonAbout'
                                        onClick={() => {
                                            setHandleAbout(!handleAbout);
                                        }}>
                                        {french ? <>Accueil</> : <>Home</>}</button>
                                </div>}
                        </div>
                    </div>
                    <div className="Accueil_topbar_right_contact">
                        <a href={`mailto:vincent.rouget86@gmail.com`}>Contact</a>
                    </div>
                    <div className="Accueil_topbar_right_CV">
                        <a href={CVpdf} target='_blank'>CV</a>
                    </div>
                    <a href="https://www.linkedin.com/in/vincent-rouget-22996118a/" target="_blank" className="Linkedin">
                        <img src={LinkedIn} alt=" " className="Linkedin"></img></a>
                    <a href="https://github.com/vincentRouget" target="_blank" className="Github">
                        <img src={GitHub} alt=" " className="Github"></img></a>
                    <div className='Accueil_theme'>
                        <Theme />
                    </div>
                    <div className='Accueil_theme'>
                        <Lang />
                    </div>
                </div>
            </div>
            <div className={`${!handleAbout ? "Accueil_page" : "Accueil_page aboutTITLE"} ${isActive ? "pushTitle" : ""}`}>
                {french ?
                    <h1>DEVELOPPEUR FULL STACK</h1>
                    :
                    <h1>FULL STACK DEVELOPER</h1>}
                <div className="Animation">
                    <Texte />
                </div>
                <NavLink to='/Portfolio' onClick={scrollToTop} className="Div_fleche">
                    <div className="Fleche">
                        {theme == 'light' ?
                            <div className="Fleche_img">
                                <img src={BlackArrow} alt="" className="Arrow"></img>
                            </div>
                            :
                            <div className="Fleche_img">
                                <img src={WhiteArrow} alt="" className="Arrow"></img>
                            </div>}
                        {french ?
                            <p className="Project">Voir mes projets</p>
                            :
                            <p className="Project">See my projects</p>}
                    </div>
                </NavLink>
            </div>
            <div className={`Page ${handleAbout ? "aboutTEXT" : ""} ${isActive ? "pushToMenu" : ""}`}>
                <div className="TitleAbout_container">
                    {french ?
                        <>
                            <h4 className="Paragraphe space">
                                <span className="accent">Développeur Full Stack passionné.</span>
                            </h4>
                        </>
                        :
                        <>
                            <h4 className="Paragraphe space">
                                <span className="accent">Passionate Full Stack developer.</span>
                            </h4>
                        </>}
                    {french ?
                        <h4 className="Paragraphe">
                            Ayant démarré en autodidacte, j'ai progressivement consolidé mes compétences en <span className="accent">développement web et mobile</span> grâce à une formation intensive à l'école "Wild Code School" de Nantes.
                        </h4>
                        :
                        <h4 className="Paragraphe">
                            Having started as a self-taught person, I gradually consolidated my skills in <span className="accent">web and mobile development</span> thanks to intensive training at the “Wild Code School” in Nantes.
                        </h4>}
                    {french ?
                        <h4 className="Paragraphe">
                            A la suite de cette formation, axée sur la pratique, j'ai eu l'opportunité d'élargir mes connaissances lors d'un <span className="accent">stage professionnel</span> au sein d'une société de développement logiciel à Poitiers.
                        </h4>
                        :
                        <h4 className="Paragraphe">
                            Following this training, focused on practice, I had the opportunity to broaden my knowledge during a <span className="accent">professional internship</span> within a software development company in Poitiers.
                        </h4>}
                    {french ?
                        <h4 className="Paragraphe">
                            Par la suite, j'ai choisi d'intégrer une deuxième formation en me spécialisant dans d'autres langages et technologies, ce qui m’a permis d'acquérir une expertise plus large dans le domaine.
                        </h4>
                        :
                        <h4 className="Paragraphe">
                            Subsequently, I chose to join a second training course specializing in other languages and technologies, which allowed me to acquire broader expertise in the field.
                        </h4>}
                    {french ?
                        <h4 className="Paragraphe">
                            Bien que mon intérêt principal réside dans le développement web et mobile, j'ai également eu l'opportunité de collaborer sur divers projets dans les <span className="accent">secteurs de l'industrie, de la recherche et de la défense.</span>
                        </h4>
                        :
                        <h4 className="Paragraphe">
                            Although my main interest lies in web and mobile development, I have also had the opportunity to collaborate on various projects <span className="accent">in the industrial, research and defense sectors.</span>
                        </h4>}
                </div>
            </div>
        </div >
    );
};

export default Accueil;
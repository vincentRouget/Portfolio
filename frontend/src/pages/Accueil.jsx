import React, { useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import UserContext from "../context/UserContext";
// import CVpng from "../assets/Image/CV.png";
import CVpdf from "../assets/data/CV.pdf";
import Logo from "../assets/Icon/Logo-V1.png";
import Theme from "@components/Theme";
import Texte from "@components/Texte";
import LinkedIn from "../assets/Icon/icons8-linkedin-94.png";
import GitHub from "../assets/Icon/icons8-github-94.png";
import WhiteArrow from "../assets/Icon/icons8-right-arrow-96-white.png";
import BlackArrow from "../assets/Icon/icons8-right-arrow-96.png";

const Accueil = () => {
    const { theme } = useContext(UserContext);
    const [handleAbout, setHandleAbout] = useState(false);

    // const handleDownload = () => {
    //     console.log('handle');
    //     const fileUrl = "http://localhost:3000/src/assets/Image/CV.png";
    //     window.open(fileUrl, '_blank');
    // };
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
                            <span className='Texte_two_span Texte1'>WELCOME</span>
                            <br></br>
                            <span className='Texte_two_span Texte2'>I'm Vincent Rouget</span>
                        </div>
                    </div>
                </div>
                <div className="Accueil_topbar_middle">
                </div>
                <div className="Accueil_topbar_right">
                    <a href="https://www.linkedin.com/in/vincent-rouget-22996118a/" target="_blank" className="Linkedin">
                        <img src={LinkedIn} alt=" " className="Linkedin"></img></a>
                    <a href="https://github.com/vincentRouget" target="_blank" className="Github">
                        <img src={GitHub} alt=" " className="Github"></img></a>
                    {!handleAbout ?
                        <button
                            className='Accueil_topbar_right_link ButtonAbout'
                            onClick={() => {
                                setHandleAbout(!handleAbout);
                            }}>About</button>
                        :
                        <button
                            className='Accueil_topbar_right_link ButtonAbout'
                            onClick={() => {
                                setHandleAbout(!handleAbout);
                            }}>Home</button>}
                    <a href={`mailto:vincent.rouget86@gmail.com`} className='Accueil_topbar_right_link contact'>Contact</a>
                    <a href={CVpdf} target='_blank' className='Accueil_topbar_right_link cv'>CV</a>
                    <div className='theme'>
                        <Theme />
                    </div>
                </div>
            </div>
            <div className={!handleAbout ? 'Accueil_page' : 'Accueil_page aboutTITLE'}>
                <h1>WEB & MOBILE DEVELOPER</h1>
                <div className="Animation">
                    <Texte />
                </div>
                <NavLink to='/Portfolio' onClick={scrollToTop} className="Link">
                    {theme == 'light' ?
                        <img src={BlackArrow} alt=" " className="Arrow"></img>
                        :
                        <img src={WhiteArrow} alt=" " className="Arrow"></img>}
                    See my projects
                </NavLink>
            </div>
            <div className={!handleAbout ? "Page" : "Page aboutTEXT"}>
                <div className="TitleAbout_container">
                    <h4 className="Paragraphe">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="TitleAbout">Hi !</span>&nbsp;&nbsp;</h4>
                    <h4 className="Paragraphe">
                        I am a passionate <span className="accent">Full Stack developer.</span>
                    </h4>
                </div>
                <div className="Section">
                    <h4 className="Paragraphe">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I started like many as an autodidact, then I
                        quickly increase my skills thanks to training in<span className="accent"> web and mobile development</span> at the “Wild Code
                        School” in Nantes (44).
                    </h4>
                    <h4 className="Paragraphe">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following this intensive
                        training based on practice, I did an internship in
                        a software development company in Poitiers
                        (86) where I was able to consolidate and extend
                        my knowledge in IT development.
                    </h4>
                    <h4 className="Paragraphe">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I particularly like the web and mobile, but I have
                        also carried out a some projects <span className="accent">in the industrial
                            sector, in research and defence.</span>
                    </h4>
                </div>
            </div>
        </div >
    );
};

export default Accueil;
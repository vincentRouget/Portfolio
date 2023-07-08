import React, { useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import UserContext from "../context/UserContext";
// import CVpng from "../assets/Image/CV.png";
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
                            {french ?
                                <span className='Texte_two_span Texte1'>BIENVENUE</span>
                                :
                                <span className='Texte_two_span Texte1'>WELCOME</span>}
                            {/* <br></br>
                            {french ?
                                <span className='Texte_two_span Texte2'>Mon nom est Vincent Rouget</span>
                                :
                                <span className='Texte_two_span Texte2'>My name is Vincent Rouget</span>} */}
                        </div>
                    </div>
                </div>
                <div className="Accueil_topbar_middle">
                </div>
                <div className="Accueil_topbar_right">
                    {!handleAbout ?
                        <div className="Div_about">
                            <button
                                className='Accueil_topbar_right_link ButtonAbout'
                                onClick={() => {
                                    setHandleAbout(!handleAbout);
                                }}>
                                {french ? <>A propos</> : <>About</>}</button>
                        </div>
                        :
                        <div className="Div_about">
                            <button
                                className='Accueil_topbar_right_link ButtonAbout'
                                onClick={() => {
                                    setHandleAbout(!handleAbout);
                                }}>
                                {french ? <>Accueil</> : <>Home</>}</button>
                        </div>}
                    <div className="Div_about">
                        <a href={`mailto:vincent.rouget86@gmail.com`} className='Accueil_topbar_right_link contact'>Contact</a>
                    </div>
                    <div className="Div_cv">
                        <a href={CVpdf} target='_blank' className='Accueil_topbar_right_link cv'>CV</a>
                    </div>
                    <a href="https://www.linkedin.com/in/vincent-rouget-22996118a/" target="_blank" className="Linkedin">
                        <img src={LinkedIn} alt=" " className="Linkedin"></img></a>
                    <a href="https://github.com/vincentRouget" target="_blank" className="Github">
                        <img src={GitHub} alt=" " className="Github"></img></a>
                    <div className='theme'>
                        <Theme />
                    </div>
                    <div className='theme'>
                        <Lang />
                    </div>
                </div>
            </div>
            <div className={!handleAbout ? 'Accueil_page' : 'Accueil_page aboutTITLE'}>
                {french ?
                    <h1>DEVELOPPEUR WEB & MOBILE</h1>
                    :
                    <h1>WEB & MOBILE DEVELOPER</h1>}
                <div className="Animation">
                    <Texte />
                </div>
                <NavLink to='/Portfolio' onClick={scrollToTop} className="Link">
                    {theme == 'light' ?
                        <img src={BlackArrow} alt=" " className="Arrow"></img>
                        :
                        <img src={WhiteArrow} alt=" " className="Arrow"></img>}
                    {french ?
                        <p>Voir mes projets</p>
                        :
                        <p>See my projects</p>}
                </NavLink>
            </div>
            <div className={!handleAbout ? "Page" : "Page aboutTEXT"}>
                <div className="TitleAbout_container">
                    {french ?
                        <>
                            {/* <h4 className="Paragraphe">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="TitleAbout">Salut !</span>&nbsp;&nbsp;</h4> */}
                            <h4 className="Paragraphe space">
                                <span className="accent">Développeur Full Stack passionné.</span>
                            </h4>
                        </>
                        :
                        <>
                            {/* <h4 className="Paragraphe">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="TitleAbout">Hi !</span>&nbsp;&nbsp;</h4> */}
                            <h4 className="Paragraphe space">
                                <span className="accent">Passionate Full Stack developer.</span>
                            </h4>
                        </>}
                </div>
                <div className="Section">
                    {french ?
                        <h4 className="Paragraphe">
                            J'ai commencé comme beaucoup en autodidacte, avant de monter en compétences grâce à une formation en <span className="accent">développement web et mobile</span> à l'école « Wild Code School” de Nantes.
                        </h4>
                        :
                        <h4 className="Paragraphe">
                            I started as a self-taught student, before going up in skills through a training in <span className="accent">web and mobile development</span> at the Wild Code School in Nantes.
                        </h4>}
                    {french ?
                        <h4 className="Paragraphe">
                            Suite à cette formation intensive basée sur la pratique, j'ai effectué un stage dans une société de développement logiciel à Poitiers, où j'ai pu consolider et étendre mes connaissances en développement informatique.
                        </h4>
                        :
                        <h4 className="Paragraphe">
                            Following this intensive training based on practice, I did an internship at a software development company in Poitiers, where I was able to consolidate and expand my knowledge in computer development.
                        </h4>}
                    {french ?
                        <h4 className="Paragraphe">
                            J'aime particulièrement le web et le mobile, mais j'ai également réalisé quelques projets <span className="accent">dans le secteur industriel, dans la recherche et la défense.</span>
                        </h4>
                        :
                        <h4 className="Paragraphe">
                            I particularly like the web and mobile, but I also did some projects <span className="accent">in the industrial sector, in research and defence.</span>
                        </h4>}
                </div>
            </div>
        </div >
    );
};

export default Accueil;
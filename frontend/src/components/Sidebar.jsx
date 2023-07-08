import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Theme from "./Theme";
import Main from "../assets/Icon/Sidebar/icons8-home-page-90.png"
import Wild from "../assets/Icon/Sidebar/icons8-movie-90.png"
import Enecom from "../assets/Icon/Sidebar/icons8-battery-90.png"
import App from "../assets/Icon/Sidebar/icons8-smartphone-100.png"
import Maison from "../assets/Icon/Sidebar/icons8-web-64.png"
import Enigma from "../assets/Icon/Sidebar/icons8-lock-90.png"
import Logiciel from "../assets/Icon/Sidebar/icons8-python-100.png"
import Back from "../assets/Icon/Sidebar/icons8-left-64.png"
import BackW from "../assets/Icon/Sidebar/icons8-left-64W.png"
import MainW from "../assets/Icon/Sidebar/icons8-home-page-90W.png"
import WildW from "../assets/Icon/Sidebar/icons8-movie-90W.png"
import EnecomW from "../assets/Icon/Sidebar/icons8-battery-90W.png"
import AppW from "../assets/Icon/Sidebar/icons8-smartphone-100W.png"
import MaisonW from "../assets/Icon/Sidebar/icons8-web-64W.png"
import EnigmaW from "../assets/Icon/Sidebar/icons8-lock-90W.png"
import LogicielW from "../assets/Icon/Sidebar/icons8-python-100W.png"
import TriangleLeftBlack from "../assets/Icon/Sidebar/triangleLeftBlack.png";
import TriangleLeftWhite from "../assets/Icon/Sidebar/triangleLeftWhite.png";
import TriangleRightBlack from "../assets/Icon/Sidebar/triangleRightBlack.png";
import TriangleRightWhite from "../assets/Icon/Sidebar/triangleRightWhite.png";

const Sidebar = ({
    etiquetteON,
    setEtiquetteON,
    setPresentationON,
    wildON,
    setWildON,
    enecomON,
    setEnecomON,
    appON,
    setAppON,
    maisonON,
    setMaisonON,
    enigmaON,
    setEnigmaON,
    logicielON,
    setLogicielON
}) => {
    const { theme, setRefresh, minimize, setMinimize, french } = useContext(UserContext);
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className='Sidebar_window'>
            <div className={theme == 'light' ? "Sidebar_container" : "Sidebar_container_dark"}>
                <div className="Sidebar_container_middle">
                    <div className={theme == 'light' ? "Sidebar_container_middle_back" : "Sidebar_container_middle_back_dark"}>
                        {!minimize ?
                            <>
                                <button
                                    className="button"
                                    onClick={() => {
                                        scrollToTop();
                                        setRefresh(true);
                                        navigate("/")
                                    }}>
                                    {theme == 'light' ?
                                        <img src={Back} alt='' className="icon_back"></img>
                                        :
                                        <img src={BackW} alt='' className="icon_back"></img>}
                                    {french ?
                                        <p className="ellipsis">Retour</p>
                                        :
                                        <p className="ellipsis">Back</p>}
                                </button>
                                {/* <div className="Sidebar_theme">
                                    <Theme />
                                </div> */}
                            </>
                            :
                            <button
                                className="button mini"
                                onClick={() => {
                                    scrollToTop();
                                    setRefresh(true);
                                    navigate("/")
                                }}>
                                {theme == 'light' ?
                                    <img src={Back} alt='' className="icon_back"></img>
                                    :
                                    <img src={BackW} alt='' className="icon_back"></img>}
                            </button>}
                    </div>
                    {!minimize ?
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(etiquetteON) ? "button_selected" : "button"}
                                onClick={() => {
                                    setEtiquetteON(true)
                                    setWildON(false)
                                    setEnecomON(false)
                                    setAppON(false)
                                    setMaisonON(false)
                                    setLogicielON(false)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Main} alt='' className="icon"></img>
                                    :
                                    <img src={MainW} alt='' className="icon"></img>}
                                <p className="ellipsis">Menu</p>
                            </button>
                        </div>
                        :
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(etiquetteON) ? "button_selected mini" : "button mini"}
                                onClick={() => {
                                    setEtiquetteON(true)
                                    setWildON(false)
                                    setEnecomON(false)
                                    setAppON(false)
                                    setMaisonON(false)
                                    setLogicielON(false)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Main} alt='' className="icon"></img>
                                    :
                                    <img src={MainW} alt='' className="icon"></img>}
                            </button>
                        </div>}
                    {!minimize ?
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(wildON) ? "button_selected" : "button"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(true)
                                    setEnecomON(false)
                                    setAppON(false)
                                    setMaisonON(false)
                                    setLogicielON(false)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Wild} alt='' className="icon"></img>
                                    :
                                    <img src={WildW} alt='' className="icon"></img>}
                                <p className="ellipsis">Wild Movies</p>
                            </button>
                        </div>
                        :
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(wildON) ? "button_selected mini" : "button mini"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(true)
                                    setEnecomON(false)
                                    setAppON(false)
                                    setMaisonON(false)
                                    setLogicielON(false)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Wild} alt='' className="icon"></img>
                                    :
                                    <img src={WildW} alt='' className="icon"></img>}
                            </button>
                        </div>}
                    {!minimize ?
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(enecomON) ? "button_selected" : "button"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(false)
                                    setEnecomON(true)
                                    setAppON(false)
                                    setMaisonON(false)
                                    setLogicielON(false)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Enecom} alt='' className="icon"></img>
                                    :
                                    <img src={EnecomW} alt='' className="icon"></img>}
                                <p className="ellipsis">Enecom</p>
                            </button>
                        </div>
                        :
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(enecomON) ? "button_selected mini" : "button mini"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(false)
                                    setEnecomON(true)
                                    setAppON(false)
                                    setMaisonON(false)
                                    setLogicielON(false)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Enecom} alt='' className="icon"></img>
                                    :
                                    <img src={EnecomW} alt='' className="icon"></img>}
                            </button>
                        </div>}
                    {!minimize ?
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(appON) ? "button_selected" : "button"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(false)
                                    setEnecomON(false)
                                    setAppON(true)
                                    setMaisonON(false)
                                    setLogicielON(false)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={App} alt='' className="icon"></img>
                                    :
                                    <img src={AppW} alt='' className="icon"></img>}
                                <p className="ellipsis">Mobile</p>
                            </button>
                        </div>
                        :
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(appON) ? "button_selected mini" : "button mini"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(false)
                                    setEnecomON(false)
                                    setAppON(true)
                                    setMaisonON(false)
                                    setLogicielON(false)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={App} alt='' className="icon"></img>
                                    :
                                    <img src={AppW} alt='' className="icon"></img>}
                            </button>
                        </div>}
                    {!minimize ?
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(maisonON) ? "button_selected" : "button"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(false)
                                    setEnecomON(false)
                                    setAppON(false)
                                    setMaisonON(true)
                                    setLogicielON(false)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Maison} alt='' className="icon"></img>
                                    :
                                    <img src={MaisonW} alt='' className="icon"></img>}
                                {french ?
                                    <p className="ellipsis">Site web</p>
                                    :
                                    <p className="ellipsis">Website</p>}
                            </button>
                        </div>
                        :
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(maisonON) ? "button_selected mini" : "button mini"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(false)
                                    setEnecomON(false)
                                    setAppON(false)
                                    setMaisonON(true)
                                    setLogicielON(false)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Maison} alt='' className="icon"></img>
                                    :
                                    <img src={MaisonW} alt='' className="icon"></img>}
                            </button>
                        </div>}
                    {!minimize ?
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(logicielON) ? "button_selected" : "button"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(false)
                                    setEnecomON(false)
                                    setAppON(false)
                                    setMaisonON(false)
                                    setLogicielON(true)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Logiciel} alt='' className="icon"></img>
                                    :
                                    <img src={LogicielW} alt='' className="icon"></img>}
                                {french ?
                                    <p className="ellipsis">Logiciel</p>
                                    :
                                    <p className="ellipsis">Software</p>}
                            </button>
                        </div>
                        :
                        <div className={theme == 'light' ? "Sidebar_container_middle_div" : "Sidebar_container_middle_div_dark"}>
                            <button
                                className={(logicielON) ? "button_selected mini" : "button mini"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(false)
                                    setEnecomON(false)
                                    setAppON(false)
                                    setMaisonON(false)
                                    setLogicielON(true)
                                    setEnigmaON(false)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Logiciel} alt='' className="icon"></img>
                                    :
                                    <img src={LogicielW} alt='' className="icon"></img>}
                            </button>
                        </div>}
                    {!minimize ?
                        <div className={theme == 'light' ? "Sidebar_container_middle_div less_border" : "Sidebar_container_middle_div_dark less_border"}>
                            <button
                                className={(enigmaON) ? "button_selected" : "button"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(false)
                                    setEnecomON(false)
                                    setAppON(false)
                                    setMaisonON(false)
                                    setLogicielON(false)
                                    setEnigmaON(true)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Enigma} alt='' className="icon"></img>
                                    :
                                    <img src={EnigmaW} alt='' className="icon"></img>}
                                <p className="ellipsis">Enigma</p>
                            </button>
                        </div>
                        :
                        <div className={theme == 'light' ? "Sidebar_container_middle_div less_border" : "Sidebar_container_middle_div_dark less_border"}>
                            <button
                                className={(enigmaON) ? "button_selected mini" : "button mini"}
                                onClick={() => {
                                    setEtiquetteON(false)
                                    setWildON(false)
                                    setEnecomON(false)
                                    setAppON(false)
                                    setMaisonON(false)
                                    setLogicielON(false)
                                    setEnigmaON(true)
                                    setPresentationON(false)
                                }}>
                                {theme == 'light' ?
                                    <img src={Enigma} alt='' className="icon"></img>
                                    :
                                    <img src={EnigmaW} alt='' className="icon"></img>}
                            </button>
                        </div>}
                </div>
                {!minimize && <div className="Sidebar_window_mini_20">
                    <button
                        onClick={() => {
                            setMinimize(!minimize)
                        }}>
                        {theme == 'light' ?
                            <img src={TriangleLeftBlack} alt='' className="icon_mini2"></img>
                            :
                            <img src={TriangleLeftWhite} alt='' className="icon_mini2"></img>}
                    </button>
                </div>}
            </div >
            {minimize &&
                <div className="Sidebar_window_mini_8">
                    <button
                        onClick={() => {
                            setMinimize(!minimize)
                        }}>
                        {theme == 'light' ?
                            <img src={TriangleRightBlack} alt='' className="icon_mini2"></img>
                            :
                            <img src={TriangleRightWhite} alt='' className="icon_mini2"></img>}
                    </button>
                </div>}
        </div>
    );
};

export default Sidebar;
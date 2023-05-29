import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Presentation from "./Presentation";
import Wild from "./Wild";
import Enecom from "./Enecom";
import ApplicationMobile from "./ApplicationMobile";
import Maison from "./Maison";
import Enigma from "./Enigma";
import Logiciel from "./Logiciel";

const Portfolio = () => {
    const navigate = useNavigate();
    const [presentationON, setPresentationON] = useState(true)
    const [wildON, setWildON] = useState(false)
    const [enecomON, setEnecomON] = useState(false)
    const [appON, setAppON] = useState(false)
    const [maisonON, setMaisonON] = useState(false)
    const [enigmaON, setEnigmaON] = useState(false)
    const [logicielON, setLogicielON] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className='Portfolio'>
            <div className='Sidebar'>
                <Sidebar
                    presentationON={presentationON}
                    setPresentationON={setPresentationON}
                    wildON={wildON}
                    setWildON={setWildON}
                    enecomON={enecomON}
                    setEnecomON={setEnecomON}
                    appON={appON}
                    setAppON={setAppON}
                    maisonON={maisonON}
                    setMaisonON={setMaisonON}
                    enigmaON={enigmaON}
                    setEnigmaON={setEnigmaON}
                    logicielON={logicielON}
                    setLogicielON={setLogicielON}
                />
            </div>
            <div className='Right'>
                <div className='Topbar'>
                    <Topbar />
                </div>
                <div className="Main">
                    {presentationON && <Presentation />}
                    {wildON && <Wild />}
                    {enecomON && <Enecom />}
                    {appON && <ApplicationMobile />}
                    {maisonON && <Maison />}
                    {enigmaON && <Enigma />}
                    {logicielON && <Logiciel />}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
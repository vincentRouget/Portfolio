import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import Sidebar from '../components/Sidebar';
import Theme from "@components/Theme";
import Lang from "@components/Lang";
import Main from "./Main";
import Feeder from "./Feeder";
import Wild from "./Wild";
import Enecom from "./Enecom";
import Dating from "./Dating";
import Maison from "./Maison";
import Enigma from "./Enigma";
import Software from "./Software";

const Portfolio = () => {

    const { theme, minimize } = useContext(UserContext);
    const [etiquetteON, setEtiquetteON] = useState(true)
    const [feederON, setFeederON] = useState(false)
    const [wildON, setWildON] = useState(false)
    const [enecomON, setEnecomON] = useState(false)
    const [appON, setAppON] = useState(false)
    const [maisonON, setMaisonON] = useState(false)
    const [logicielON, setLogicielON] = useState(false)
    const [enigmaON, setEnigmaON] = useState(false)
    const [presentationON, setPresentationON] = useState(false)

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
        <div className={theme == 'light' ? 'Portfolio' : 'Portfolio PortfolioDark'}>
            <div className={!minimize ? "Portfolio_left" : "Portfolio_left version_mini"}>
                <div className={!minimize ? 'Sidebar' : 'Sidebar_mini'}>
                    <Sidebar
                        etiquetteON={etiquetteON}
                        setEtiquetteON={setEtiquetteON}
                        feederON={feederON}
                        setFeederON={setFeederON}
                        wildON={wildON}
                        setWildON={setWildON}
                        enecomON={enecomON}
                        setEnecomON={setEnecomON}
                        appON={appON}
                        setAppON={setAppON}
                        maisonON={maisonON}
                        setMaisonON={setMaisonON}
                        logicielON={logicielON}
                        setLogicielON={setLogicielON}
                        enigmaON={enigmaON}
                        setEnigmaON={setEnigmaON}
                        presentationON={presentationON}
                        setPresentationON={setPresentationON}
                    />
                </div>
            </div>
            <div className="goutte">
                <Theme />
                <Lang />
            </div>
            <div className={!minimize ? 'Right' : 'Right_mini'}>
                {etiquetteON && <Main
                    etiquetteON={etiquetteON}
                    setEtiquetteON={setEtiquetteON}
                    feederON={feederON}
                    setFeederON={setFeederON}
                    wildON={wildON}
                    setWildON={setWildON}
                    enecomON={enecomON}
                    setEnecomON={setEnecomON}
                    appON={appON}
                    setAppON={setAppON}
                    maisonON={maisonON}
                    setMaisonON={setMaisonON}
                    logicielON={logicielON}
                    setLogicielON={setLogicielON}
                    enigmaON={enigmaON}
                    setEnigmaON={setEnigmaON}
                    presentationON={presentationON}
                    setPresentationON={setPresentationON} />}
                {feederON && <Feeder
                    etiquetteON={etiquetteON}
                    setEtiquetteON={setEtiquetteON}
                    feederON={feederON}
                    setFeederON={setFeederON}
                    wildON={wildON}
                    setWildON={setWildON}
                    enecomON={enecomON}
                    setEnecomON={setEnecomON}
                    appON={appON}
                    setAppON={setAppON}
                    maisonON={maisonON}
                    setMaisonON={setMaisonON}
                    logicielON={logicielON}
                    setLogicielON={setLogicielON}
                    enigmaON={enigmaON}
                    setEnigmaON={setEnigmaON}
                    presentationON={presentationON}
                    setPresentationON={setPresentationON} />}
                {wildON && <Wild
                    etiquetteON={etiquetteON}
                    setEtiquetteON={setEtiquetteON}
                    feederON={feederON}
                    setFeederON={setFeederON}
                    wildON={wildON}
                    setWildON={setWildON}
                    enecomON={enecomON}
                    setEnecomON={setEnecomON}
                    appON={appON}
                    setAppON={setAppON}
                    maisonON={maisonON}
                    setMaisonON={setMaisonON}
                    logicielON={logicielON}
                    setLogicielON={setLogicielON}
                    enigmaON={enigmaON}
                    setEnigmaON={setEnigmaON}
                    presentationON={presentationON}
                    setPresentationON={setPresentationON} />}
                {enecomON && <Enecom
                    etiquetteON={etiquetteON}
                    setEtiquetteON={setEtiquetteON}
                    feederON={feederON}
                    setFeederON={setFeederON}
                    wildON={wildON}
                    setWildON={setWildON}
                    enecomON={enecomON}
                    setEnecomON={setEnecomON}
                    appON={appON}
                    setAppON={setAppON}
                    maisonON={maisonON}
                    setMaisonON={setMaisonON}
                    logicielON={logicielON}
                    setLogicielON={setLogicielON}
                    enigmaON={enigmaON}
                    setEnigmaON={setEnigmaON}
                    presentationON={presentationON}
                    setPresentationON={setPresentationON} />}
                {appON && <Dating
                    etiquetteON={etiquetteON}
                    setEtiquetteON={setEtiquetteON}
                    feederON={feederON}
                    setFeederON={setFeederON}
                    wildON={wildON}
                    setWildON={setWildON}
                    enecomON={enecomON}
                    setEnecomON={setEnecomON}
                    appON={appON}
                    setAppON={setAppON}
                    maisonON={maisonON}
                    setMaisonON={setMaisonON}
                    logicielON={logicielON}
                    setLogicielON={setLogicielON}
                    enigmaON={enigmaON}
                    setEnigmaON={setEnigmaON}
                    presentationON={presentationON}
                    setPresentationON={setPresentationON} />}
                {maisonON && <Maison
                    etiquetteON={etiquetteON}
                    setEtiquetteON={setEtiquetteON}
                    feederON={feederON}
                    setFeederON={setFeederON}
                    wildON={wildON}
                    setWildON={setWildON}
                    enecomON={enecomON}
                    setEnecomON={setEnecomON}
                    appON={appON}
                    setAppON={setAppON}
                    maisonON={maisonON}
                    setMaisonON={setMaisonON}
                    logicielON={logicielON}
                    setLogicielON={setLogicielON}
                    enigmaON={enigmaON}
                    setEnigmaON={setEnigmaON}
                    presentationON={presentationON}
                    setPresentationON={setPresentationON} />}
                {logicielON && <Software
                    etiquetteON={etiquetteON}
                    setEtiquetteON={setEtiquetteON}
                    feederON={feederON}
                    setFeederON={setFeederON}
                    wildON={wildON}
                    setWildON={setWildON}
                    enecomON={enecomON}
                    setEnecomON={setEnecomON}
                    appON={appON}
                    setAppON={setAppON}
                    maisonON={maisonON}
                    setMaisonON={setMaisonON}
                    logicielON={logicielON}
                    setLogicielON={setLogicielON}
                    enigmaON={enigmaON}
                    setEnigmaON={setEnigmaON}
                    presentationON={presentationON}
                    setPresentationON={setPresentationON} />}
                {enigmaON && <Enigma
                    etiquetteON={etiquetteON}
                    setEtiquetteON={setEtiquetteON}
                    feederON={feederON}
                    setFeederON={setFeederON}
                    wildON={wildON}
                    setWildON={setWildON}
                    enecomON={enecomON}
                    setEnecomON={setEnecomON}
                    appON={appON}
                    setAppON={setAppON}
                    maisonON={maisonON}
                    setMaisonON={setMaisonON}
                    logicielON={logicielON}
                    setLogicielON={setLogicielON}
                    enigmaON={enigmaON}
                    setEnigmaON={setEnigmaON}
                    presentationON={presentationON}
                    setPresentationON={setPresentationON} />}
                {presentationON && <About
                    etiquetteON={etiquetteON}
                    setEtiquetteON={setEtiquetteON}
                    feederON={feederON}
                    setFeederON={setFeederON}
                    wildON={wildON}
                    setWildON={setWildON}
                    enecomON={enecomON}
                    setEnecomON={setEnecomON}
                    appON={appON}
                    setAppON={setAppON}
                    maisonON={maisonON}
                    setMaisonON={setMaisonON}
                    logicielON={logicielON}
                    setLogicielON={setLogicielON}
                    enigmaON={enigmaON}
                    setEnigmaON={setEnigmaON}
                    presentationON={presentationON}
                    setPresentationON={setPresentationON} />}
            </div>
        </div>
    );
};

export default Portfolio;
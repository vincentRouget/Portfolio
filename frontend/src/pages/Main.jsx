import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import ScrollDownMain from "../components/ScrollDownMain";
import HTML from "../assets/Icon/html.png";
import CSS from "../assets/Icon/css.png";
import SCSS from "../assets/Icon/scss.png";
import JS from "../assets/Icon/js.png";
import REACTJS from "../assets/Icon/react.png";
import PREACT from "../assets/Icon/preact.png";
import NODE from "../assets/Icon/node.png";
import EXPRESS from "../assets/Icon/express.png";
import MYSQL from "../assets/Icon/mysql.png";
import API from "../assets/Icon/api.png";
import NATIVE from "../assets/Icon/native.png";
import ANDROID from "../assets/Icon/android.png";
import FILEZILLA from "../assets/Icon/filezilla.png";
import PYTHON from "../assets/Icon/python.png";
import Pascal from "../assets/Icon/pascal.png";
import CPP from "../assets/Icon/cpp.png";
import VS from "../assets/Icon/vs.png";
import IO from "../assets/Icon/io.png";
import JAVA from "../assets/Icon/java.png";
import TYPESCRIPT from "../assets/Icon/typescript.png";
import ANGULAR from "../assets/Icon/angular.png";
import SPRING from "../assets/Icon/spring.png";
import Feeder1 from "../assets/Image/Feeder/Etiquette.jpg";
import Wild1 from "../assets/Image/Wild/wild1.png";
import Enecom1 from "../assets/Image/Enecom/enecom1.png";
import App1 from "../assets/Image/Hobbi/app1.png";
import Maison1 from "../assets/Image/House/house1.png";
import Soft1 from "../assets/Image/Soft/soft1.png";
import Enigma1 from "../assets/Image/Enigma/enigma1.jpg";

const Main = ({
    setEtiquetteON,
    setPresentationON,
    setFeederON,
    setWildON,
    setEnecomON,
    setAppON,
    setMaisonON,
    setEnigmaON,
    setLogicielON
}) => {

    const { theme, french } = useContext(UserContext);

    useEffect(() => {
    }, []);

    return (
        <div className='Main'>
            <div className="Main_container">
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card MainDark"}
                    onClick={() => {
                        setEtiquetteON(false)
                        setFeederON(false)
                        setWildON(true)
                        setEnecomON(false)
                        setAppON(false)
                        setMaisonON(false)
                        setLogicielON(false)
                        setEnigmaON(false)
                        setPresentationON(false)
                    }}>
                    <div className='Main_container_card_image'>
                        <img src={Wild1} alt="Wild Movies"></img>
                    </div>
                    <h1>WILD MOVIES</h1>
                    <div className="Main_container_card_techno">
                        <div className="Main_container_card_techno_icone">
                            <img src={REACTJS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={NODE} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={API} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={EXPRESS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={MYSQL} alt='React.js' className="icone"></img>
                        </div>
                    </div>
                    <div className="Main_container_card_text">
                        {french ?
                            <p>Site pour la recherche de films et séries grâce à une API publique</p>
                            :
                            <p>Library site for searching movies and series using a public API</p>}
                    </div>
                </button>
                <ScrollDownMain />
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card MainDark"}
                    onClick={() => {
                        setEtiquetteON(false)
                        setFeederON(true)
                        setWildON(false)
                        setEnecomON(false)
                        setAppON(false)
                        setMaisonON(false)
                        setLogicielON(false)
                        setEnigmaON(false)
                        setPresentationON(false)
                    }}>
                    <div className='Main_container_card_image'>
                        <img src={Feeder1} alt="Wild Movies"></img>
                    </div>
                    <h1>BLOG FEEDER</h1>
                    <div className="Main_container_card_techno">
                        <div className="Main_container_card_techno_icone">
                            <img src={TYPESCRIPT} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={ANGULAR} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={JAVA} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={SPRING} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={MYSQL} alt='React.js' className="icone"></img>
                        </div>
                    </div>
                    <div className="Main_container_card_text">
                        {french ?
                            <p>Site de blogs pouvant être alimenté par les utilisateurs</p>
                            :
                            <p>User-powered blog site</p>}
                    </div>
                </button>
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card MainDark"}
                    onClick={() => {
                        setEtiquetteON(false)
                        setFeederON(false)
                        setWildON(false)
                        setEnecomON(true)
                        setAppON(false)
                        setMaisonON(false)
                        setLogicielON(false)
                        setEnigmaON(false)
                        setPresentationON(false)
                    }}>
                    <div className='Main_container_card_image'>
                        <img src={Enecom1} alt="Enecom"></img>
                    </div>
                    <h1>ENECOM</h1>
                    <div className="Main_container_card_techno">
                        <div className="Main_container_card_techno_icone">
                            <img src={REACTJS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={NODE} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={SCSS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={EXPRESS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={MYSQL} alt='React.js' className="icone"></img>
                        </div>
                    </div>
                    <div className="Main_container_card_text">
                        {french ?
                            <p>Interface intranet de gestion de plans de communications</p>
                            :
                            <p>Intranet interface for sharing communication plans</p>}
                    </div>
                </button>
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card MainDark"}
                    onClick={() => {
                        setEtiquetteON(false)
                        setFeederON(false)
                        setWildON(false)
                        setEnecomON(false)
                        setAppON(true)
                        setMaisonON(false)
                        setLogicielON(false)
                        setEnigmaON(false)
                        setPresentationON(false)
                    }}>
                    <div className='Main_container_card_image'>
                        <img src={App1} alt="Dating App"></img>
                    </div>
                    <h1>HOBBI</h1>
                    <div className="Main_container_card_techno">
                        <div className="Main_container_card_techno_icone">
                            <img src={NATIVE} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={NODE} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={ANDROID} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={EXPRESS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={MYSQL} alt='React.js' className="icone"></img>
                        </div>
                    </div>
                    <div className="Main_container_card_text">
                        {french ?
                            <p>Application mobile de rencontre</p>
                            :
                            <p>Mobile dating app</p>}
                    </div>
                </button>
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card MainDark"}
                    onClick={() => {
                        setEtiquetteON(false)
                        setFeederON(false)
                        setWildON(false)
                        setEnecomON(false)
                        setAppON(false)
                        setMaisonON(true)
                        setLogicielON(false)
                        setEnigmaON(false)
                        setPresentationON(false)
                    }}>
                    <div className='Main_container_card_image'>
                        <img src={Maison1} alt="La Maison du Lac"></img>
                    </div>
                    <h1>LA MAISON DU LAC</h1>
                    <div className="Main_container_card_techno">
                        <div className="Main_container_card_techno_icone">
                            <img src={REACTJS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={NODE} alt='Node.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={SCSS} alt='Scss' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={FILEZILLA} alt='Filezilla' className="icone"></img>
                        </div>
                    </div>
                    <div className="Main_container_card_text">
                        {french ?
                            <p>Site web de présentation pour des chambres d'hôtes</p>
                            :
                            <p>Website for bed and breakfast</p>}
                    </div>
                </button>
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card MainDark"}
                    onClick={() => {
                        setEtiquetteON(false)
                        setFeederON(false)
                        setWildON(false)
                        setEnecomON(false)
                        setAppON(false)
                        setMaisonON(false)
                        setLogicielON(true)
                        setEnigmaON(false)
                        setPresentationON(false)
                    }}>
                    <div className='Main_container_card_image'>
                        <img src={Soft1} alt="Software"></img>
                    </div>
                    <h1>SOFTWARE</h1>
                    <div className="Main_container_card_techno">
                        <div className="Main_container_card_techno_icone">
                            <img src={PYTHON} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={CPP} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={PREACT} alt='Preact' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={Pascal} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={VS} alt='Visual Studio Community' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={IO} alt='Visual I/O' className="icone"></img>
                        </div>
                    </div>
                    <div className="Main_container_card_text">
                        {french ?
                            <p>Conception, maintenance et optimisation de logiciels</p>
                            :
                            <p>Software conception, maintenance and optimization</p>}
                    </div>
                </button>
                <button className={theme == 'light' ? "Main_container_card" : "Main_container_card MainDark"}
                    onClick={() => {
                        setEtiquetteON(false)
                        setFeederON(false)
                        setWildON(false)
                        setEnecomON(false)
                        setAppON(false)
                        setMaisonON(false)
                        setLogicielON(false)
                        setEnigmaON(true)
                        setPresentationON(false)
                    }}>
                    <div className='Main_container_card_image'>
                        <img src={Enigma1} alt="Enigma"></img>
                    </div>
                    <h1>ENIGMA</h1>
                    <div className="Main_container_card_techno">
                        <div className="Main_container_card_techno_icone">
                            <img src={HTML} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={CSS} alt='React.js' className="icone"></img>
                        </div>
                        <div className="Main_container_card_techno_icone">
                            <img src={JS} alt='React.js' className="icone"></img>
                        </div>
                    </div>
                    <div className="Main_container_card_text">
                        {french ?
                            <p>Interface web de cryptage de texte</p>
                            :
                            <p>Web interface for text encryption</p>}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Main;
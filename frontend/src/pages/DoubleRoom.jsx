import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Navbar from '../components/Navbar';
import Banniere from '../components/Banniere';
import Infos from '../components/Infos';
import Window from '../components/Window';
import Footer from '../components/Footer';

// ***VERSION FRONTEND***
import Commune2 from '../assets/Image/Commune2.jpg';
import Hiver3 from '../assets/Image/hiver3.jpg';
import Facade from '../assets/Image/facade.jpg';
import Suiteparentale2 from '../assets/Image/suite_parentale2.jpg';
import Salle2 from '../assets/Image/salle2.jpg';
import Commune5 from '../assets/Image/commune5.jpg';
import Commune6 from '../assets/Image/commune6.jpg';
import Chambre21 from '../assets/Image/chambre2-1.jpg';
import Suiteparentale1 from '../assets/Image/suite_parentale1.jpg';
import Suiteparentale5 from '../assets/Image/suite_parentale5.jpg';
import Suiteparentale9 from '../assets/Image/suite_parentale9.jpg';
import Commune1 from '../assets/Image/commune1.jpg';
import Suiteparentale7 from '../assets/Image/suite_parentale7.jpg';
import Salle1 from '../assets/Image/salle1.jpg';
import Commune4 from '../assets/Image/commune4.jpg';
import Ete1 from '../assets/Image/ete1.jpg';
import Hiver4 from '../assets/Image/hiver4.jpg';
import Hiver1 from '../assets/Image/hiver1.jpg';
import Hiver2 from '../assets/Image/hiver2.jpg';
import Chambre11 from '../assets/Image/chambre1-1.jpg';
import Chambre13 from '../assets/Image/chambre1-3.jpg';
import Chambre14 from '../assets/Image/chambre1-4.jpg';
import Chambre15 from '../assets/Image/chambre1-5.jpg';
import Chambre22 from '../assets/Image/chambre2-2.jpg';
import Chambre23 from '../assets/Image/chambre2-3.jpg';
// ***

const DoubleRoom = () => {

    const { user, dataImage } = useContext(UserContext);
    const navigate = useNavigate();

    // ***VERSION FRONTEND***
    const ImageDoubleRoom = [
        { name: Chambre11 },
        { name: Chambre13 },
        { name: Chambre14 },
        { name: Chambre15 },
        { name: Chambre22 },
        { name: Chambre21 },
        { name: Chambre23 },
    ];
    // ***

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
        <div className='Room'>
            <Navbar />
            <div className='Room_container'>
                <div className='infos'>
                    <Infos
                        number='1 ou 2'
                        man={true}
                        parking={false}
                        air={true}
                        wifi={true}
                        vue={false}
                        tv={true}
                        bed={false}
                        dinner={false}
                        cup={false}
                    />
                </div>
                <div className='Room_container_carte'>
                    <h2>Superior Double Room</h2>
                    {/* ***VERSION BACKEND*** */}
                    {/* <Window name_component='contenant1' /> */}
                    {/* *** */}
                    {/* ***VERSION FROINTEND*** */}
                    <Window name_component={ImageDoubleRoom} />
                    {/* *** */}
                    <div className='Room_container_carte_description'>
                        <div className='Room_container_carte_description_left'>
                            <div className='Room_container_carte_description_left_general'>
                                <div className='h4'>
                                    <h4>Description :</h4>
                                </div>
                                <li>Chambres non-fumeur</li>
                                <li>Taille : 17m²</li>
                                <li>Lit double adulte 140 x 200</li>
                            </div>
                            <div className='Room_container_carte_description_left_washing'>
                                <div className='h4'>
                                    <h4>Dans votre salle de bain privative :</h4>
                                </div>
                                <div className='li'>
                                    <li>Toilettes gratuits</li>
                                    <li>Toilettes</li>
                                    <li>Baignoire ou douche</li>
                                    <li>Les serviettes</li>
                                    <li>Papier toilette</li>
                                </div>
                            </div>
                            <div className='Room_container_carte_description_left_facilities'>
                                <div className='h4'>
                                    <h4>Installations :</h4>
                                </div>
                                <div className='li'>
                                    <li>Linge de maison</li>
                                    <li>Armoire ou penderie</li>
                                    <li>Gel hydroalcoolique</li>
                                    <li>Cache-prises sécurité enfant</li>
                                    <li>Jeux de société / casse-tête</li>
                                    <li>Livres, DVD ou musique pour enfants</li>
                                    <li>Climatisation</li>
                                    <li>Entrée privée</li>
                                    <li>Chauffage</li>
                                    <li>Machine à laver</li>
                                    <li>Séchoir</li>
                                    <li>Canapé</li>
                                    <li>Cheminée</li>
                                    <li>Salon</li>
                                    <li>Salle à manger</li>
                                    <li>Salle à manger extérieure</li>
                                    <li>Prise près du lit</li>
                                </div>
                            </div>
                        </div>
                        <div className='Room_container_carte_description_right'>
                            <h3>Cette chambre double dispose d'un coin salon, d'une cheminée et d'un coin repas.</h3>
                            <div className='Room_container_carte_description_right_price'>
                                <p className='price'>Pour 1 personne : 68€ / Nuit</p>
                                <a href=
                                    'https://www.booking.com/hotel/fr/la-maison-du-lac-flavignac.html'
                                    target="_blank">
                                    Réserver
                                </a>
                                <p className='price'>Pour 2 personnes : 72€ / Nuit</p>
                                <a href=
                                    'https://www.booking.com/hotel/fr/la-maison-du-lac-flavignac.html'
                                    target="_blank">
                                    Réserver
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DoubleRoom;
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";
import ImageLogo from '../assets/Image/Logo.jpg';

import Itineraire from '../assets/Icon/icons8-google-maps-old-48.png';
import Map from '../assets/Icon/icons8-google-maps-48.png';
import Booking from '../assets/Icon/icons8-booking-48.png';
import AirBNB from '../assets/Icon/icons8-airbnb-48.png';
import Facebook from '../assets/Icon/icons8-facebook-48.png';
import Instagram from '../assets/Icon/icons8-Instagram-40.png';
import Twitter from '../assets/Icon/icons8-twitter-48.png';
import Telephone from '../assets/Icon/icons8-ringer-volume-50.png';
import Mail from '../assets/Icon/icons8-open-envelope-50.png';

const Footer = () => {

    const navigate = useNavigate();
    const { user, setUser, dataImage } = useContext(UserContext);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
    }, []);

    return (
        <div className='Footer'>
            <div className='Footer_container'>
                <div className='Footer_container_top'>
                    <div className='Footer_container_top_coordonnees'>
                        <NavLink to='/'>
                            <div className='Footer_container_top_coordonnees_logo'>
                                {/* ***VERSION BACKEND*** */}
                                {/* {dataImage
                                    .filter((element) => element.component_name == 'logo')
                                    .map((element, index) => {
                                        return (
                                            <div key={index} className='Footer_container_top_coordonnees_logo_image'>
                                                <button onClick={scrollToTop}>
                                                    <img
                                                        src={`${import.meta.env.VITE_BACKEND_URL}/${element.image_name}`}
                                                        alt="Image not found" />
                                                </button>
                                            </div>
                                        )
                                    })} */}
                                {/* *** */}
                                {/* ***VERSION FRONTEND****/}
                                <div className='Footer_container_top_coordonnees_logo_image'>
                                    <button onClick={scrollToTop}>
                                        <img src={ImageLogo} alt='Image not found'></img>
                                    </button>
                                </div>
                                {/* *** */}
                            </div>
                        </NavLink>
                        <div className='Footer_container_top_coordonnees_gps'>
                            <label>Coordonnées GPS :</label>
                            <p>X : 45.7 / Y : 1.1</p>
                        </div>
                        <div className='Footer_container_top_coordonnees_directives'>
                            <label>Situé à :</label>
                            <p>à 30 min de Limoges centre</p>
                            <p>à 30 min de Saint Junien</p>
                        </div>
                        <div className='Footer_container_top_coordonnees_adresse'>
                            <div className='Footer_container_top_coordonnees_adresse_texte'>
                                <label>Adresse :</label>
                                <p>12, rue de Rilhac</p>
                                <p>87230 Flavignac</p>
                            </div>
                        </div>
                        <div className='Footer_container_top_coordonnees_itineraire'>
                            <a href='https://www.google.com/maps/dir//12+Rte+de+Rilhac+87230+Flavignac/@45.7015804,1.0986693,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47fed08e60b63c6f:0x9b42ec80dba026d3'
                                target="_blank">
                                <img src={Itineraire} alt='Itinéraire'></img>
                                Choisir son itinéraire
                            </a>
                        </div>
                    </div>
                    <div className='Footer_container_top_liens'>
                        <div className='link'>
                            <img src={Map} alt='Google Maps'></img>
                            <a href=
                                'https://www.google.com/maps/place/12+Rte+de+Rilhac,+87230+Flavignac/@45.7026016,1.1007739,15z/data=!4m5!3m4!1s0x47fed08e60b63c6f:0x9b42ec80dba026d3!8m2!3d45.7015804!4d1.0986693?hl=fr'
                                target="_blank">
                                Google Maps
                            </a>
                        </div>
                        <div className='link'>
                            <img src={Booking} alt='Booking.com link'></img>
                            <a href=
                                'https://www.booking.com/hotel/fr/la-maison-du-lac-flavignac.html'
                                target="_blank">
                                Booking.com
                            </a>
                        </div>
                        <div className='link'>
                            <img src={AirBNB} alt='AirBNB.com link'></img>
                            <a href=
                                'https://www.airbnb.fr/'
                                target="_blank">
                                AirBnB.com
                            </a>
                        </div>
                        <div className='link'>
                            <img src={Facebook} alt='Facebook link'></img>
                            <a href=
                                'https://www.facebook.com/profile.php?id=100089215287052'
                                target="_blank">
                                Facebook
                            </a>
                        </div>
                        <div className='link'>
                            <img src={Instagram} alt='Instagram link'></img>
                            <a href=
                                'https://www.instagram.com/maisondulac87/?fbclid=IwAR2ai8IxUlGqYBCMUZ-Wc61b80mL2-uK8lTJjvFrAZUEU1NivCqW6OIzwnY'
                                target="_blank">
                                maisondulac87
                            </a>
                        </div>
                        {/* <div className='link'>
                            <img src={Twitter} alt='Twitter link'></img>
                            <a href=
                                'http://www.google.fr'
                                target="_blank">
                                Twitter
                                </a>
                        </div> */}
                    </div>
                    <div className='Footer_container_top_contact'>
                        <NavLink to='/contact'>
                            <div className='Footer_container_top_contact_tel'>
                                <div className='Footer_container_top_contact_tel_icone'>
                                    <div className='Footer_container_top_contact_tel_icone_logo'>
                                        <img src={Telephone} alt='telephone'></img>
                                    </div>
                                </div>
                                <div className='Footer_container_top_contact_tel_num'>
                                    <label>Téléphone</label>
                                    <p>+33 6 17 77 62 25</p>
                                </div>
                            </div>
                            <div className='Footer_container_top_contact_email'>

                                <div className='Footer_container_top_contact_email_icone'>
                                    <div className='Footer_container_top_contact_email_icone_logo'>
                                        <img src={Mail} alt='Mail'></img>
                                    </div>
                                </div>
                                <div className='Footer_container_top_contact_email_texte'>
                                    <label>Email</label>
                                    <p>rouffignat_ludivine@yahoo.fr</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='Footer_container_bottom'>
                <p>Copyright © 2023, Tous droits réservés.</p>
                <p>Terms of use</p>
                <p>Privacy Environmental Policy</p>
            </div>
        </div>
    );
};

export default Footer;
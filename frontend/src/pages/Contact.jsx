import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Navbar from '../components/Navbar';
import Carte from '../components/Carte';
import Footer from '../components/Footer';

const Contact = () => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

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
        <div className='Contact'>
            <Navbar />
            <div className='Contact_container'>
                <div className='Contact_container_carte'>
                    <Carte />
                </div>
                <div className='Contact_container_form'>
                    <div className='Contact_container_form_google'>
                        <a href=
                            'https://www.google.com/maps/place/12+Rte+de+Rilhac,+87230+Flavignac/@45.7026016,1.1007739,15z/data=!4m5!3m4!1s0x47fed08e60b63c6f:0x9b42ec80dba026d3!8m2!3d45.7015804!4d1.0986693?hl=fr'
                            target="_blank">
                            Google Maps
                        </a>
                    </div>
                    <div className='Contact_container_form_itineraire'>
                        <a href='https://www.google.com/maps/dir//12+Rte+de+Rilhac+87230+Flavignac/@45.7015804,1.0986693,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47fed08e60b63c6f:0x9b42ec80dba026d3'
                            target="_blank">
                            Venir chez nous
                        </a>
                    </div>
                    <div className='Contact_container_form_contacter'>
                        <a href={`mailto:rouffignat_ludivine@yahoo.fr`}>
                            <button className="PrimaryButton">
                                <p>Contactez-nous</p>
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_81_341)">
                                        <path
                                            d="M15.75 0.750244H2.25C1.65326 0.750244 1.08097 0.987297 0.65901 1.40925C0.237053 1.83121 0 2.40351 0 3.00024L0 17.2502H18V3.00024C18 2.40351 17.7629 1.83121 17.341 1.40925C16.919 0.987297 16.3467 0.750244 15.75 0.750244ZM2.25 2.25024H15.75C15.9489 2.25024 16.1397 2.32926 16.2803 2.46991C16.421 2.61057 16.5 2.80133 16.5 3.00024V3.50049L10.5915 9.40974C10.1688 9.83073 9.59656 10.0671 9 10.0671C8.40344 10.0671 7.83118 9.83073 7.4085 9.40974L1.5 3.50049V3.00024C1.5 2.80133 1.57902 2.61057 1.71967 2.46991C1.86032 2.32926 2.05109 2.25024 2.25 2.25024ZM1.5 15.7502V5.62524L6.348 10.4702C7.05197 11.1724 8.00569 11.5668 9 11.5668C9.99431 11.5668 10.948 11.1724 11.652 10.4702L16.5 5.62524V15.7502H1.5Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_81_341">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
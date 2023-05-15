import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Mail = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [texte, setTexte] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailMissing, setIsEmailMissing] = useState(false);
    const [isEmailCorrect, setIsEmailCorrect] = useState(false);

    const sendMail = (e) => {
        e.preventDefault();
        setIsEmailMissing(false);
        setIsEmailCorrect(false);
        axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/users/mail`, { email, texte })
            .then(() => {
            })
            .catch((err) => {
                console.error(err);
                if (err.response.data == "Email is required") { setIsEmailMissing(true); }
                if (err.response.data == "User not found") { setIsEmailCorrect(true); setEmail(""); }
            });
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMail(e);
        };
    };
    const handledelete = () => {
        setTexte('');
        setEmail('');
    };
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
        <div className='Mail'>
            <Navbar />
            <div className='Mail_container'>
                <div className='Mail_container_form'>
                    <div className='Mail_container_form_email'>
                        <label htmlFor="email">Email expéditeur</label>
                        <input
                            type={email}
                            name="email"
                            id="email"
                            value={email}
                            onKeyPress={handleKeyPress}
                            onInput={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                            className='mail input' />
                        {isEmailMissing && <small>L'email est requis</small>}
                        {isEmailCorrect && <small>L'email est incorrect</small>}
                    </div>
                    <div className='Mail_container_form_texte'>
                        <label htmlFor="texte">Votre message</label>
                        <textarea
                            type="texte"
                            name="texte"
                            id="texte"
                            value={texte}
                            cols="300"
                            rows="100"
                            onInput={(e) => {
                                setTexte(e.target.value)
                            }}
                            className='message textarea'
                        />
                    </div>
                    <div className='Mail_container_form_button'>
                        <NavLink to='/'>
                            <button className="SecondaryButton"><p>Annuler</p></button>
                        </NavLink>
                        <button type='submit' onClick={handledelete} className="PrimaryButton">Tout effacer</button>
                        <button
                            type="submit"
                            className='PrimaryButton'
                            handleKeyPress={handleKeyPress}
                            onClick={(e) => { sendMail(e) }}>
                            <p>Envoyer</p>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_820_2400)">
                                    <path d="M5.10807 1.87765C4.92127 1.77387 4.7106 1.72067 4.49692 1.72331C4.28325 1.72594 4.07396 1.78433 3.88977 1.89268C3.70559 2.00104 3.55289 2.15561 3.44678 2.3411C3.34067 2.52659 3.28484 2.73657 3.2848 2.95026L3.28654 5.9095L0.428831 8.76721L3.28958 11.628L3.29175 14.6067C3.29106 14.7674 3.32214 14.9266 3.3832 15.0753C3.44426 15.2239 3.5341 15.359 3.64755 15.4728C3.72238 15.5473 3.80636 15.6121 3.89748 15.6654C4.08052 15.7748 4.28914 15.8341 4.50235 15.8372C4.71555 15.8403 4.92582 15.7872 5.11198 15.6832L17.776 8.77633L5.10807 1.87765ZM4.51492 2.9533L14.0817 8.16365L2.77887 8.15453L4.51449 6.41891L4.51492 2.9533ZM4.52187 14.6098L4.5171 11.1198L2.78147 9.38422L14.0869 9.389L4.52187 14.6098Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_820_2400">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Mail;
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Toggle from '../components/Toggle';
import AiOutlineEyeInvisible from '@meronex/icons/ai/AiOutlineEyeInvisible';
import AiOutlineEye from '@meronex/icons/ai/AiOutlineEye';
import imageDefault from '../../src/assets/Image/avatar-default.jpg';

const Sign = () => {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const current = new Date();
    const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;

    const [image_user, setImage_user] = useState('');
    const [imageBis, setImageBis] = useState('');
    const [inputImage, setInputImage] = useState('');
    const [admin, setAdmin] = useState(0);
    const [checked, setChecked] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(false);

    const handleSelectedPicture = (e) => {
        const objectURL = URL.createObjectURL(e.target.files[0]);
        setImageBis(objectURL);
    };
    const handleImage = (e) => {
        handleSelectedPicture(e);
        setInputImage(e.target.files[0]);
        setImage_user(e.target.files[0].name);
    };
    const handleSign = (e) => {
        if (firstname != "" && lastname != "" && email != "" && password != "") {
            axios
                .post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
                    firstname,
                    lastname,
                    email,
                    password,
                    admin,
                    image_user,
                    date,
                },
                    { headers: { Authorization: localStorage.getItem("token") } })
                .then(() => { })
                .catch((err) => {
                    console.error(err);
                });
            event.preventDefault();
            const formData = new FormData();
            formData.append("image", inputImage);
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/images`, formData)
            navigate("/");
        } else {
            setError(true);
        }
    };
    const handlePasswordVisible = (e) => {
        e.preventDefault();
        setVisiblePassword(!visiblePassword);
    };
    const handledelete = () => {
        setImage_user('');
        setImageBis('');
        setInputImage('');
        setAdmin(0);
        setChecked(false);
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setError(false);
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSign(e);
        };
    };
    const handleChange = () => {
        if (admin == 0) setAdmin(1);
        if (admin == 1) setAdmin(0);
        setChecked(!checked);
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
        <div className='Sign'>
            <Navbar />
            <div className='Sign_form'>
                <div className='Sign_form_container'>
                    <div className='Sign_form_container_picture'>
                        <div className='Sign_form_container_picture_image'>
                            <img src={(imageBis == '') ? imageDefault : imageBis} alt='User'></img>
                        </div>
                        <div className='Sign_form_container_picture_label'>
                            {(image_user == '') ?
                                <div className='choice'>
                                    <label for='file' className='label'>Choisir une image de profil</label>
                                </div>
                                :
                                <div className='change'>
                                    <label for='file' className='label'>Cliquer pour changer l'image. </label>
                                    <br></br>
                                    <label for='file' className='label'>Image : {image_user}</label>
                                </div>}
                            <input
                                id='file'
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleImage}
                                className="browse input"
                            />
                        </div>
                        <div className='Sign_form_container_admin'>
                            <Toggle
                                handleChange={handleChange}
                                admin={admin}
                                setAdmin={setAdmin}
                                checked={checked}
                                setchecked={setChecked}
                            />
                        </div>
                    </div>
                    <div className='Sign_form_container_top'>
                        <div className='Sign_form_container_top_firstname'>
                            <label htmlFor="firstname">Prénom</label>
                            <div className='Sign_form_container_top_firstname_input'>
                                <input
                                    type={firstname}
                                    name="firstname"
                                    id="firstname"
                                    value={firstname}
                                    onKeyPress={handleKeyPress}
                                    onInput={(e) => {
                                        setFirstname(e.target.value)
                                        setError(false)
                                    }}
                                    required
                                    className='input' />
                            </div>
                        </div>
                        <div className='Sign_form_container_top_lastname'>
                            <label htmlFor="lastname">Nom</label>
                            <div className='Sign_form_container_top_lastname_input'>
                                <input
                                    type={lastname}
                                    name="lastname"
                                    id="lastname"
                                    value={lastname}
                                    onKeyPress={handleKeyPress}
                                    onInput={(e) => {
                                        setLastname(e.target.value)
                                        setError(false)
                                    }}
                                    required
                                    className='input' />
                            </div>
                        </div>
                    </div>
                    <div className='Sign_form_container_bottom'>
                        <div className='Sign_form_container_bottom_email'>
                            <label htmlFor="email">Email</label>
                            <div className='Sign_form_container_bottom_email_input'>
                                <input
                                    type={email}
                                    name="email"
                                    id="email"
                                    value={email}
                                    onKeyPress={handleKeyPress}
                                    onInput={(e) => {
                                        setEmail(e.target.value)
                                        setError(false)
                                    }}
                                    required
                                    className='input' />
                            </div>
                        </div>
                        <div className='Sign_form_container_bottom_password'>
                            <label htmlFor="password">Mot de passe</label>
                            <div className='Sign_form_container_bottom_password_input'>
                                <input
                                    type={!visiblePassword ? "password" : "text"}
                                    name="password"
                                    id="password"
                                    value={password}
                                    onKeyPress={handleKeyPress}
                                    onInput={(e) => {
                                        setPassword(e.target.value)
                                        setError(false)
                                    }}
                                    required
                                    className='input' />
                                {!visiblePassword ?
                                    <AiOutlineEyeInvisible className='eye' onClick={handlePasswordVisible} />
                                    :
                                    <AiOutlineEye className='eye' onClick={handlePasswordVisible} />}
                            </div>
                        </div>
                    </div>
                    <div className='Sign_form_container_button'>
                        <NavLink to='/'>
                            <button className="SecondaryButton"><p>Annuler</p></button>
                        </NavLink>
                        <button type='submit' onClick={handledelete} className="PrimaryButton sign">Tout effacer</button>
                        <NavLink to='/login'>
                            <button type='submit' className="PrimaryButton sign">Se connecter</button>
                        </NavLink>
                        <button type='submit' className="PrimaryButton sign" onClick={handleSign}>S'inscrire</button>
                    </div>
                    <div>
                        <p className={error ? 'messageError' : 'hide'}>Tous les champs sont requis</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Sign;
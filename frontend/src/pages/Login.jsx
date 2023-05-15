import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AiOutlineEyeInvisible from '@meronex/icons/ai/AiOutlineEyeInvisible';
import AiOutlineEye from '@meronex/icons/ai/AiOutlineEye';

const Login = () => {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailMissing, setIsEmailMissing] = useState(false);
    const [isPasswordMissing, setIsPasswordMissing] = useState(false);
    const [isEmailCorrect, setIsEmailCorrect] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [dataUser, setDataUser] = useState([]);
    const [visiblePassword, setVisiblePassword] = useState(false);

    const handleConnect = (e) => {
        e.preventDefault();
        setIsEmailMissing(false);
        setIsPasswordMissing(false);
        setIsEmailCorrect(false);
        setIsPasswordCorrect(false);
        axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/users/signin`, {
                email,
                password,
            })
            .then((res) => {
                const userInfo = res.data;
                setUser({
                    iduser: userInfo.user.iduser,
                    firstname: userInfo.user.firstname,
                    lastname: userInfo.user.lastname,
                    email: userInfo.user.email,
                    admin: userInfo.user.admin,
                    image_user: userInfo.user.image_user,
                    date: userInfo.user.date,
                });
                const { token } = res.data;
                localStorage.setItem("token", `Bearer ${token}`);
                navigate("/", {
                    state: {
                        token,
                    },
                });
            })
            .catch((err) => {
                console.error(err);
                if (err.response.data == "Email and password are required") {
                    setIsEmailMissing(true);
                    setIsPasswordMissing(true);
                };
                if (err.response.data == "Email is required") setIsEmailMissing(true);
                if (err.response.data == "Password is required")
                    setIsPasswordMissing(true);
                if (err.response.data == "User not found") {
                    setIsEmailCorrect(true);
                    setEmail("");
                }
                if (err.response.data == "Wrong password") {
                    setIsPasswordCorrect(true);
                    setPassword("");
                };
            });
    };
    const getUser = () => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/users/${user.iduser}`, {
                headers: { Authorization: localStorage.getItem("token") },
            })
            .then((res) => {
                setDataUser(res.data);
            });
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleConnect(e);
        };
    };
    const handlePasswordVisible = (e) => {
        e.preventDefault();
        setVisiblePassword(!visiblePassword);
    };
    const handledelete = () => {
        setEmail('');
        setPassword('');
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    useEffect(() => {
        if (user) {
            getUser();
        };
        scrollToTop();
    }, [user]);

    return (
        <div className='Login'>
            <Navbar />
            <div className='Login_form'>
                <div className='Login_form_container'>
                    <div className='Login_form_container_email'>
                        <label htmlFor="email">Email</label>
                        <div className='Login_form_container_email_input'>
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
                                className='input' />
                        </div>
                        <div className='messagePosition'>
                            {isEmailMissing && <p className='messageError'>L'email est requis</p>}
                            {isEmailCorrect && <p className='messageError'>L'email est incorrect</p>}
                        </div>
                    </div>
                    <div className='Login_form_container_password'>
                        <label htmlFor="password">Mot de passe</label>
                        <div className='Login_form_container_password_input'>
                            <input
                                type={!visiblePassword ? "password" : "text"}
                                name="password"
                                id="password"
                                value={password}
                                onKeyPress={handleKeyPress}
                                onInput={(e) => {
                                    setPassword(e.target.value);
                                }}
                                required
                                className='input' />
                        </div>
                        {!visiblePassword ?
                            <AiOutlineEyeInvisible className='eye' onClick={handlePasswordVisible} />
                            :
                            <AiOutlineEye className='eye' onClick={handlePasswordVisible} />}
                        <div className='messagePosition'>
                            {isPasswordMissing && <p className='messageError'>Le mot de passe est requis</p>}
                            {isPasswordCorrect && <p className='messageError'>Le mot de passe est incorrect</p>}
                        </div>
                    </div>
                    <div className='Login_form_container_button'>
                        <NavLink to='/'>
                            <button className="SecondaryButton"><p>Annuler</p></button>
                        </NavLink>
                        <button type='submit' onClick={handledelete} className="PrimaryButton">Tout effacer</button>
                        {/* <NavLink to='/sign'>
                            <button type='submit' className="PrimaryButton">S'inscrire</button>
                        </NavLink> */}
                        <button type='submit' onClick={(e) => { handleConnect(e); }} className="PrimaryButton">Se connecter</button>
                    </div>
                    <NavLink to='/contact'>Mot de passe oublié?</NavLink>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
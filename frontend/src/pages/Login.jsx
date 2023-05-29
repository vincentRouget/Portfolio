import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";
import Theme from "@components/Theme";
import BlackArrow from "../assets/Icon/icons8-left-64.png"
import WhiteArrow from "../assets/Icon/icons8-left-64-white.png"
import AiOutlineEyeInvisible from '@meronex/icons/ai/AiOutlineEyeInvisible';
import AiOutlineEye from '@meronex/icons/ai/AiOutlineEye';

const Login = () => {
    const { user, setUser, theme } = useContext(UserContext);
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
                navigate("/portfolio", {
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

    useEffect(() => {
        if (user) {
            getUser();
        };
    }, [user]);

    return (
        <div className={theme == "light" ? 'Login' : 'Login_dark'}>
            <div className='Login_form'>
                <div className='Login_theme'>
                    <button className="PrimaryButton Arrow" onClick={() => {
                        navigate("/")
                    }}>
                        {theme == 'light' ?
                            <img src={BlackArrow} alt='Annuler'></img>
                            :
                            <img src={WhiteArrow} alt='Annuler'></img>}
                    </button>
                    <Theme />
                </div>
                <div className='Login_form_container'>
                    <div className="Login_form_container_top">
                        <div className="Login_form_container_top_left">
                            <div className='Login_form_container_top_left_email'>
                                <label htmlFor="email">Email</label>
                                <div className='Login_form_container_top_left_email_input'>
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
                            <div className='Login_form_container_top_left_password'>
                                <label htmlFor="password">Mot de passe</label>
                                <div className='Login_form_container_top_left_password_input'>
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
                                <div className='messagePosition'>
                                    {isPasswordMissing && <p className='messageError'>Le mot de passe est requis</p>}
                                    {isPasswordCorrect && <p className='messageError'>Le mot de passe est incorrect</p>}
                                </div>
                            </div>
                        </div>
                        <div className="Login_form_container_top_right">
                            {!visiblePassword ?
                                <AiOutlineEyeInvisible className='eye' onClick={handlePasswordVisible} />
                                :
                                <AiOutlineEye className='eye' onClick={handlePasswordVisible} />}
                        </div>
                    </div>
                    <div className='Login_form_container_button'>
                        <button className="PrimaryButton" onClick={() => {
                            navigate("/")
                        }}>Annuler</button>
                        <button type='submit' onClick={handledelete} className="PrimaryButton">Tout effacer</button>
                        {/* <NavLink to='/sign'>
                            <button type='submit' className="PrimaryButton">S'inscrire</button>
                        </NavLink> */}
                        <button type='submit' onClick={(e) => { handleConnect(e); }} className="PrimaryButton">Se connecter</button>
                    </div>
                    {/* <NavLink to='/contact' className="Login_form_container_forget">Mot de passe oublié?</NavLink> */}
                </div>
            </div>
        </div>
    );
};

export default Login;
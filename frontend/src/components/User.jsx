import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

const User = () => {
    const { user, setUser, theme, setTheme, dataImage } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div className='User'>
            {user ?
                <div className='User_info'>
                    <h2>{user.firstname}</h2>
                </div>
                :
                null}
        </div>
    );
};

export default User;
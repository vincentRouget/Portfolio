import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Navbar from '../components/Navbar';
import AddImage from '../components/AddImage';
import Composant from '../components/Composant';

const Database = () => {

    const { user, dataImage, setDataImage } = useContext(UserContext);
    const [component, setComponent] = useState('');
    const [dataComponent, setDataComponent] = useState([]);

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
        <div className='Database'>
            <Navbar />
            <div className='Database_container'>
                <AddImage
                    dataComponent={dataComponent}
                    setDataComponent={setDataComponent}
                    component={component}
                    setComponent={setComponent}
                />
                <Composant
                    dataComponent={dataComponent}
                    setDataComponent={setDataComponent}
                    component={component}
                    setComponent={setComponent}
                />
            </div>
        </div>
    );
};

export default Database;
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Fleche from '../../src/assets/icon/icons8-chevron-double-40.png';

const Window = ({ name_component }) => {

    const { user, dataImage, setDataImage } = useContext(UserContext);
    const [count, setCount] = useState(0);

    // ***VERSION BACKEND***
    // const newWindow = dataImage.filter((element) => element.component_name == name_component);
    // ***
    // ***VERSION FRONTEND***
    const newWindow = (name_component);
    // ***

    const newImage = name_component[count];

    const handleLeft = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(newWindow.length - 1);
        };
    };
    const handleRight = () => {
        if (count < (newWindow.length - 1)) {
            setCount(count + 1);
        } else {
            setCount(0);
        };
    };

    useEffect(() => {
    }, [dataImage]);

    return (
        <div className='Window'>
            <div className='Window_container'>
                <div className='Window_container_button' onClick={handleLeft}>
                    <button type='submit' id='buttonLeft'>
                        <img src={Fleche} alt='Click left' id='left'></img>
                    </button>
                </div>
                {/* ***VERSION BACKEND*** */}
                {/* {newImage &&
                    <div className='Window_container_image'>
                        <a href={`${import.meta.env.VITE_BACKEND_URL}/${newImage.image_name}`}
                            target="_blank">
                            <img
                                src={`${import.meta.env.VITE_BACKEND_URL}/${newImage.image_name}`}
                                alt="Image not found" />
                        </a>
                    </div>} */}
                {/* *** */}
                {/* ***VERSION FRONTEND*** */}
                {newImage &&
                    <div className='Window_container_image'>
                        <a href={newImage.name}
                            target="_blank">
                            <img
                                src={newImage.name}
                                alt="Image not found" />
                        </a>
                    </div>}
                {/* *** */}
                <div className='Window_container_button' onClick={handleRight} >
                    <button type='submit' id='buttonRight'>
                        <img src={Fleche} alt='Click right' id='right'></img>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Window;
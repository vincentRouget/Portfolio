import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

const Composant = ({ component, setComponent, dataComponent, setDataComponent }) => {

    const { user, dataImage, setDataImage } = useContext(UserContext);

    const getImage = () => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/images/photo`, {
                headers: { Authorization: localStorage.getItem("token") },
            })
            .then((res) => {
                setDataImage(res.data);
            });
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/images/photo/max`, {
                headers: { Authorization: localStorage.getItem("token") },
            })
            .then((res) => {
                setMaxImage(res.data[0].max);
            });
    };
    useEffect(() => {

    }, [dataImage]);

    return (
        <div className='Composant'>
            <h3>Cliquer sur une image pour la supprimer du composant sélectionné.</h3>
            <div className='Composant_container'>
                {dataImage
                    .filter((element) => element.component_idcomponent == component)
                    .map((element, index) => {
                        return (
                            <div key={index} className='Composant_container_map'>
                                <button className='Composant_container_map_button' type='submit' onClick={
                                    () => {
                                        const id = element.idimage;
                                        axios
                                            .delete(`${import.meta.env.VITE_BACKEND_URL}/images/photo/${id}`, { id }, {
                                                headers: { Authorization: localStorage.getItem("token") },
                                            })
                                            .then((res) => {
                                                getImage();
                                            });
                                    }
                                }>
                                    <img
                                        src={`${import.meta.env.VITE_BACKEND_URL}/${element.image_name}`}
                                        alt="Image not found"
                                        className='Composant_container_map_button_image'
                                    />
                                </button>
                            </div>
                        )
                    })}
            </div>
        </div>
    );
};

export default Composant;
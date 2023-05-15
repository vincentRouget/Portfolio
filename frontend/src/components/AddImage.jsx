import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import ImageDefault from '../../../backend/public/assets/images/default_image.jpg';

const AddImage = ({ component, setComponent, dataComponent, setDataComponent }) => {

    const { user, dataImage, setDataImage } = useContext(UserContext);
    const navigate = useNavigate();
    const [image_name, setImage_name] = useState('');
    const [imageBis, setImageBis] = useState('');
    const [inputImage, setInputImage] = useState('');
    const [maxImage, setMaxImage] = useState(0);

    const getComponent = () => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/components`, {
                headers: { Authorization: localStorage.getItem("token") },
            })
            .then((res) => {
                setDataComponent(res.data);
            });
    };
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
    const addImage = () => {
        if (image_name != '' && component != '') {
            const component_idcomponent = parseInt(component);
            axios
                .post(`${import.meta.env.VITE_BACKEND_URL}/images/photo`, { image_name, component_idcomponent }, { headers: { Authorization: localStorage.getItem("token") }, })
                .then((res) => {
                    getImage();
                });
            event.preventDefault();
            const formData = new FormData();
            formData.append("image", inputImage);
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/images`, formData);
        };
    };
    const handleSelectedPicture = (e) => {
        const objectURL = URL.createObjectURL(e.target.files[0]);
        setImageBis(objectURL);
    };
    const handleImage = (e) => {
        handleSelectedPicture(e);
        setInputImage(e.target.files[0]);
        setImage_name(e.target.files[0].name);
    };
    const handleComponent = (e) => {
        setComponent(e.target.value);
    };
    const handledelete = () => {
        setImage_name('');
        setImageBis('');
        setInputImage('');
        setComponent('');
    };

    useEffect(() => {
        getComponent();
        getImage();
    }, [user]);

    return (
        <div className='Add'>
            <div className='Add_container'>
                <div className='Add_container_picture'>
                    <div className='Add_container_picture_image'>
                        <img src={(imageBis == '') ? ImageDefault : imageBis} alt='Image'></img>
                    </div>
                    <div className='Add_container_picture_label'>
                        {(image_name == '') ? <label for='file'>Choisir une image</label> : <div>
                            <label for='file'>Cliquer pour changer d'image. </label>
                            <label for='file'>Image : {image_name}</label>
                        </div>
                        }
                        <input
                            id='file'
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImage}
                            className="browse input"
                        />
                    </div>
                </div>
                <div className="SelectFilter">
                    <select
                        value={component}
                        onChange={(e) => { handleComponent(e); }}
                        className='select'>
                        <option value="">Choisir le composant</option>
                        {dataComponent.map((element, index) => {
                            return (
                                <option key={index} value={element.idcomponent}>{element.component_name}</option>
                            );
                        })}
                    </select>
                    <button className="PrimaryButton" onClick={addImage}>Ajouter l'image</button>
                    <button type='submit' onClick={handledelete} className="PrimaryButton">Tout effacer</button>
                </div>
            </div>
        </div>
    );
};

export default AddImage;
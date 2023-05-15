import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Man from '../assets/Icon/icons8-man-50.png';
import Wifi from '../assets/Icon/icons8-wi-fi-logo-50.png';
import Parking from '../assets/Icon/icons8-parking-50.png';
import Bed from '../assets/Icon/icons8-occupied-bed-50.png';
import Air from '../assets/Icon/icons8-air-conditioner-50.png';
import Vue from '../assets/Icon/icons8-oak-tree-50.png';
import TV from '../assets/Icon/icons8-tv-on-50.png';
import Dinner from '../assets/Icon/icons8-meal-50.png';
import Cup from '../assets/Icon/icons8-cafe-50.png';

const Infos = ({ man, number, parking, air, wifi, vue, tv, bed, dinner, cup }) => {

    return (
        <div className='Infos'>
            {number != '' &&
                <div className='nombre'>
                    <h3>{number}</h3>
                    {man &&
                        <div className='Infos_person'>
                            <img src={Man} alt='person'></img>
                        </div>
                    }
                </div>
            }
            {parking &&
                <div className='Infos_parking'>
                    <img src={Parking} alt='Parking'></img>
                </div>
            }
            {air &&
                <div className='Infos_bed'>
                    <img src={Air} alt='Air conditioner'></img>
                </div>
            }
            {wifi &&
                <div className='Infos_wifi'>
                    <img src={Wifi} alt='Wifi'></img>
                </div>
            }
            {vue &&
                <div className='Infos_bed'>
                    <img src={Vue} alt='Garden'></img>
                </div>
            }
            {tv &&
                <div className='Infos_bed'>
                    <img src={TV} alt='TV'></img>
                </div>
            }
            {bed &&
                <div className='Infos_bed'>
                    <img src={Bed} alt='Bedroom'></img>
                </div>
            }
            {dinner &&
                <div className='Infos_dinner'>
                    <img src={Dinner} alt='Dinner'></img>
                </div>
            }
            {cup &&
                <div className='Infos_cup'>
                    <img src={Cup} alt='Breakfast'></img>
                </div>
            }
        </div>
    );
};

export default Infos;
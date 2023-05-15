import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Chevron from '../assets/Icon/icons8-chevron-left-40.png';
import Map from '../assets/Icon/icons8-google-maps-48.png';
import Facebook from '../assets/Icon/icons8-facebook-48.png';
import Booking from '../assets/Icon/icons8-booking-48.png';
import Instagram from '../assets/Icon/icons8-Instagram-40.png';

const LinkSidebar = () => {
    return (
        <div className='LinkSidebar'>
            <div className='LinkSidebar_circle'>
                <img src={Chevron} alt='Chevron'></img>
            </div>
            <div className='LinkSidebar_link'>
                <div className='link'>
                    <a href=
                        'https://www.google.com/maps/place/12+Rte+de+Rilhac,+87230+Flavignac/@45.7026016,1.1007739,15z/data=!4m5!3m4!1s0x47fed08e60b63c6f:0x9b42ec80dba026d3!8m2!3d45.7015804!4d1.0986693?hl=fr'
                        target="_blank">
                        <img src={Map} alt='Google Maps'></img>
                    </a>
                </div>
                <div className='link'>
                    <a href=
                        'https://www.booking.com/hotel/fr/la-maison-du-lac-flavignac.html'
                        target="_blank">
                        <img src={Booking} alt='Booking.com link'></img>
                    </a>
                </div>
                <div className='link'>
                    <a href=
                        'https://www.facebook.com/profile.php?id=100089215287052'
                        target="_blank">
                        <img src={Facebook} alt='Facebook link'></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LinkSidebar;
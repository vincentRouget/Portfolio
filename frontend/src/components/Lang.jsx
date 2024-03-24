import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import Langue from "../assets/Icon/lang.png";

const Lang = () => {

    const { french, setFrench } = useContext(UserContext);

    const toggleLang = () => {
        setFrench(!french);
    };

    useEffect(() => {
    }, []);

    return (
        <div className='Theme'>
            <button onClick={toggleLang}><img src={Langue} alt='Dark'></img></button>
        </div>
    );
};

export default Lang;
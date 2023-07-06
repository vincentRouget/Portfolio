import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import Dark from "../assets/Icon/icons8-dark-96ter.png"

const Lang = () => {
    const { french, setFrench } = useContext(UserContext);

    const toggleLang = () => {
        setFrench(!french);
    };

    useEffect(() => {
    }, []);

    return (
        <div className='Theme'>
            <button onClick={toggleLang}><img src={Dark} alt='Dark'></img></button>
        </div>
    );
};

export default Lang;
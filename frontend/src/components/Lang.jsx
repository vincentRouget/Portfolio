import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
// import French from "../assets/Icon/french.png";
// import English from "../assets/Icon/english.png";
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
            {/* {french ?
                <button onClick={toggleLang}><img src={French} alt='Dark'></img></button>
                :
                <button onClick={toggleLang}><img src={English} alt='Dark'></img></button>} */}
            <button onClick={toggleLang}><img src={Langue} alt='Dark'></img></button>
        </div>
    );
};

export default Lang;
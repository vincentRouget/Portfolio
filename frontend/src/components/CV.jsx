import React, { useEffect } from "react";
import ImageCV from "../assets/Image/CV.png";

const CV = () => {

    useEffect(() => {
    }, []);

    return (
        <div className='CV'>
            <img src={ImageCV} alt='CV'></img>
        </div>
    );
};

export default CV;
import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import Dark from "../assets/Icon/icons8-dark-96ter.png"

const Theme = () => {
    const { theme, setTheme } = useContext(UserContext);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    };

    useEffect(() => {
    }, []);

    return (
        <div className='Theme'>
            <button onClick={toggleTheme}><img src={Dark} alt='Dark'></img></button>
        </div>
    );
};

export default Theme;
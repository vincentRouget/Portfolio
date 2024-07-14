import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import ScrollB from "../assets/Icon/ddblack.png";
import ScrollW from "../assets/Icon/ddwhite.png";

const ScrollDownMain = () => {

    const { theme } = useContext(UserContext);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='Scroll_container_main'>
            {(scrollPosition <= 300) &&
                <div className="Scroll_container_main_image">
                    {theme == "light" ?
                        <img src={ScrollB} className="Scroll_container_main_image_icone"></img>
                        :
                        <img src={ScrollW} className="Scroll_container_main_image_icone"></img>}
                </div>}
        </div>
    );
};

export default ScrollDownMain;
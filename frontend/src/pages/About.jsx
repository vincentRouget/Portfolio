import React, { useEffect } from "react";

const About = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="About">
            <h1>Présentation</h1>
            <p>En cours de construction</p>
        </div>
    );
};

export default About;
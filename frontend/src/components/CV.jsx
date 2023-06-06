import React, { useContext, useEffect, useState } from "react";
import { Document, Page } from 'react-pdf';
import UserContext from "../context/UserContext";
import ImageCV from "../assets/Image/CV.png";

const CV = () => {
    const { user, theme, refresh, setRefresh } = useContext(UserContext);
    const pdfPath = 'C:\Users\human\quests\shell\Projets\Portfolio\frontend\src\assets\data\Curriculum vitae.pdf';


    useEffect(() => {
    }, []);

    return (
        <div className='CV'>
            {/* <Document file={pdfPath}>
                <Page pageNumber={1} />
            </Document>
            <a href="..\assets\data\Curriculum vitae.pdf" target="_blank"> Lien de téléchargement </a> */}
            <img src={ImageCV} alt='CV'></img>
        </div>
    );
};

export default CV;
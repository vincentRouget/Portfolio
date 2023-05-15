import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Navbar from '../components/Navbar';

function TestStyles() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="TestStylesContainer">
      <Navbar />
      <div className="Column">
        <h1>H1 : Titre d'écran de login</h1>
        <h2>H2 : Rubriques</h2>
        <h2 className="TitlePlan">H2 : Titres de plan</h2>
        <h3>H3 : titres des plans en mode carte et popins</h3>
        <h4>H4 : titres des plans en mode carte et popins</h4>
        <h5>H5 : titres des plans en mode carte et popins</h5>
        <h6>H6 : titres des plans en mode carte et popins</h6>
        <p>
          Text Body : Crée tes plans de communication très simplement. Un titre,
          une description de ton plan, une image représentative, ton plan de
          communication et son échance en PDF.{" "}
          <strong>
            Il ne te restera plus qu’à le publier et le tour est joué !
          </strong>
        </p>
        <small className="Error">
          Small texte pour les infos d'erreur sous les inputs de formulaire et
          les labels des inputs
        </small>
      </div>
      <div className="Column">
        <small className="TagArchived">Archivé</small>
        <small className="TagServiceRegion">Interne</small>
        <button className="PrimaryButton">
          <p>Créer un plan</p>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_94_897)">
              <path
                d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20039 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0V0ZM9 16.5C7.51664 16.5 6.0666 16.0601 4.83323 15.236C3.59986 14.4119 2.63857 13.2406 2.07091 11.8701C1.50325 10.4997 1.35473 8.99168 1.64411 7.53682C1.9335 6.08197 2.64781 4.74559 3.6967 3.6967C4.7456 2.64781 6.08197 1.9335 7.53683 1.64411C8.99168 1.35472 10.4997 1.50325 11.8701 2.0709C13.2406 2.63856 14.4119 3.59986 15.236 4.83322C16.0601 6.06659 16.5 7.51664 16.5 9C16.4978 10.9885 15.7069 12.8948 14.3009 14.3009C12.8948 15.7069 10.9885 16.4978 9 16.5ZM9.75 8.25H12.75V9.75H9.75V12.75H8.25V9.75H5.25V8.25H8.25V5.25H9.75V8.25Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_94_897">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="PrimaryButton">
          <p>Enregistrer</p>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.25 0H2.25C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25L0 18H18V3.75L14.25 0ZM5.25 1.5H12.75V4.5H5.25V1.5ZM16.5 16.5H1.5V2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5H3.75V6H14.25V2.121L16.5 4.371V16.5Z"
              fill="white"
            />
            <path
              d="M9 7.49976C8.40666 7.49976 7.82664 7.6757 7.33329 8.00535C6.83994 8.33499 6.45543 8.80353 6.22836 9.35171C6.0013 9.89988 5.94189 10.5031 6.05765 11.085C6.1734 11.667 6.45912 12.2015 6.87868 12.6211C7.29824 13.0406 7.83279 13.3264 8.41473 13.4421C8.99667 13.5579 9.59987 13.4985 10.1481 13.2714C10.6962 13.0443 11.1648 12.6598 11.4944 12.1665C11.8241 11.6731 12 11.0931 12 10.4998C12 9.70411 11.6839 8.94104 11.1213 8.37844C10.5587 7.81583 9.79565 7.49976 9 7.49976ZM9 11.9998C8.70333 11.9998 8.41332 11.9118 8.16665 11.747C7.91997 11.5821 7.72771 11.3479 7.61418 11.0738C7.50065 10.7997 7.47095 10.4981 7.52882 10.2071C7.5867 9.91615 7.72956 9.64887 7.93934 9.4391C8.14912 9.22932 8.41639 9.08646 8.70737 9.02858C8.99834 8.9707 9.29994 9.00041 9.57403 9.11394C9.84812 9.22747 10.0824 9.41973 10.2472 9.6664C10.412 9.91307 10.5 10.2031 10.5 10.4998C10.5 10.8976 10.342 11.2791 10.0607 11.5604C9.77936 11.8417 9.39783 11.9998 9 11.9998Z"
              fill="white"
            />
          </svg>
        </button>
        <a href="mailto:email@example.com">
          <button className="PrimaryButton">
            <p>Contacter</p>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_81_341)">
                <path
                  d="M15.75 0.750244H2.25C1.65326 0.750244 1.08097 0.987297 0.65901 1.40925C0.237053 1.83121 0 2.40351 0 3.00024L0 17.2502H18V3.00024C18 2.40351 17.7629 1.83121 17.341 1.40925C16.919 0.987297 16.3467 0.750244 15.75 0.750244ZM2.25 2.25024H15.75C15.9489 2.25024 16.1397 2.32926 16.2803 2.46991C16.421 2.61057 16.5 2.80133 16.5 3.00024V3.50049L10.5915 9.40974C10.1688 9.83073 9.59656 10.0671 9 10.0671C8.40344 10.0671 7.83118 9.83073 7.4085 9.40974L1.5 3.50049V3.00024C1.5 2.80133 1.57902 2.61057 1.71967 2.46991C1.86032 2.32926 2.05109 2.25024 2.25 2.25024ZM1.5 15.7502V5.62524L6.348 10.4702C7.05197 11.1724 8.00569 11.5668 9 11.5668C9.99431 11.5668 10.948 11.1724 11.652 10.4702L16.5 5.62524V15.7502H1.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_81_341">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </a>
        <button className="SecondaryButton">
          <p>Annuler</p>
        </button>
        <button className="DeleteButton">
          <p>Supprimer</p>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_239_7127)">
              <path
                d="M16.5 3H12.75V1.5C12.75 1.10218 12.592 0.720644 12.3107 0.43934C12.0294 0.158035 11.6478 0 11.25 0L6.75 0C6.35217 0 5.97064 0.158035 5.68934 0.43934C5.40803 0.720644 5.25 1.10218 5.25 1.5V3H1.5V4.5H3V15.75C3 16.3467 3.23705 16.919 3.65901 17.341C4.08097 17.7629 4.65326 18 5.25 18H12.75C13.3467 18 13.919 17.7629 14.341 17.341C14.7629 16.919 15 16.3467 15 15.75V4.5H16.5V3ZM6.75 1.5H11.25V3H6.75V1.5ZM13.5 15.75C13.5 15.9489 13.421 16.1397 13.2803 16.2803C13.1397 16.421 12.9489 16.5 12.75 16.5H5.25C5.05109 16.5 4.86032 16.421 4.71967 16.2803C4.57902 16.1397 4.5 15.9489 4.5 15.75V4.5H13.5V15.75Z"
                fill="white"
              />
              <path d="M8.25 7.49951H6.75V13.4995H8.25V7.49951Z" fill="white" />
              <path
                d="M11.25 7.49951H9.75V13.4995H11.25V7.49951Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_239_7127">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="ModifyButtonText">
          <p>Modifier</p>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_90_1280)">
              <path
                d="M17.205 0.793705C16.6951 0.284602 16.004 -0.00134277 15.2835 -0.00134277C14.563 -0.00134277 13.8719 0.284602 13.362 0.793705L0 14.1557V17.9987H3.843L17.205 4.63671C17.7139 4.12672 17.9997 3.43568 17.9997 2.71521C17.9997 1.99473 17.7139 1.30369 17.205 0.793705ZM3.225 16.4987H1.5V14.7737L11.4825 4.79871L13.2075 6.52371L3.225 16.4987ZM16.1445 3.57621L14.2643 5.45646L12.543 3.73146L14.4225 1.85421C14.6513 1.62546 14.9615 1.49695 15.285 1.49695C15.6085 1.49695 15.9188 1.62546 16.1475 1.85421C16.3763 2.08295 16.5048 2.3932 16.5048 2.71671C16.5048 3.04021 16.3763 3.35046 16.1475 3.57921L16.1445 3.57621Z"
                fill="#8991EE"
              />
            </g>
            <defs>
              <clipPath id="clip0_90_1280">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="ArchiveButtonText">
          <p>Archiver</p>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_94_903)">
              <path
                d="M18 2.25C18 1.65326 17.7629 1.08097 17.341 0.65901C16.919 0.237053 16.3467 0 15.75 0L2.25 0C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25L0 6.75H0.75V18H17.25V6.75H18V2.25ZM1.5 2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5H15.75C15.9489 1.5 16.1397 1.57902 16.2803 1.71967C16.421 1.86032 16.5 2.05109 16.5 2.25V5.25H1.5V2.25ZM15.75 16.5H2.25V6.75H15.75V16.5Z"
                fill="#96CD32"
              />
              <path d="M12 9H6V10.5H12V9Z" fill="#96CD32" />
            </g>
            <defs>
              <clipPath id="clip0_94_903">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="DeleteButtonText">
          <p>Supprimer</p>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_74_1503)">
              <path
                d="M16.5 3H12.75V1.5C12.75 1.10218 12.592 0.720644 12.3107 0.43934C12.0294 0.158035 11.6478 0 11.25 0L6.75 0C6.35217 0 5.97064 0.158035 5.68934 0.43934C5.40803 0.720644 5.25 1.10218 5.25 1.5V3H1.5V4.5H3V15.75C3 16.3467 3.23705 16.919 3.65901 17.341C4.08097 17.7629 4.65326 18 5.25 18H12.75C13.3467 18 13.919 17.7629 14.341 17.341C14.7629 16.919 15 16.3467 15 15.75V4.5H16.5V3ZM6.75 1.5H11.25V3H6.75V1.5ZM13.5 15.75C13.5 15.9489 13.421 16.1397 13.2803 16.2803C13.1397 16.421 12.9489 16.5 12.75 16.5H5.25C5.05109 16.5 4.86032 16.421 4.71967 16.2803C4.57902 16.1397 4.5 15.9489 4.5 15.75V4.5H13.5V15.75Z"
                fill="#EB6E3C"
              />
              <path
                d="M8.25 7.49951H6.75V13.4995H8.25V7.49951Z"
                fill="#EB6E3C"
              />
              <path
                d="M11.25 7.49951H9.75V13.4995H11.25V7.49951Z"
                fill="#EB6E3C"
              />
            </g>
            <defs>
              <clipPath id="clip0_74_1503">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="Column">
        <div className="ValidationMessage">
          <p>Message de validation</p>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.84995 15.3973C5.55455 15.3979 5.26194 15.34 4.98895 15.2272C4.71596 15.1143 4.46796 14.9486 4.2592 14.7396L0.0644531 10.5456L1.12495 9.48433L5.3197 13.6791C5.46035 13.8197 5.65108 13.8987 5.84995 13.8987C6.04883 13.8987 6.23956 13.8197 6.3802 13.6791L16.875 3.18433L17.9355 4.24483L7.4407 14.7396C7.23194 14.9486 6.98394 15.1143 6.71095 15.2272C6.43796 15.34 6.14536 15.3979 5.84995 15.3973Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="SearchInput">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_239_6971)">
              <path
                d="M17.9996 16.9401L13.3031 12.2436C14.5231 10.7515 15.1229 8.84764 14.9785 6.92574C14.8341 5.00384 13.9565 3.21097 12.5273 1.91796C11.0981 0.624952 9.22654 -0.0692619 7.29982 -0.0210881C5.37311 0.0270858 3.53862 0.813962 2.1758 2.17678C0.812985 3.5396 0.0261093 5.37409 -0.0220646 7.3008C-0.0702385 9.22751 0.623975 11.099 1.91698 12.5283C3.20999 13.9575 5.00287 14.8351 6.92476 14.9795C8.84666 15.1239 10.7505 14.524 12.2426 13.3041L16.9391 18.0006L17.9996 16.9401ZM7.49959 13.5006C6.31291 13.5006 5.15287 13.1487 4.16617 12.4894C3.17948 11.8301 2.41044 10.893 1.95632 9.79667C1.50219 8.70031 1.38337 7.49391 1.61488 6.33003C1.84639 5.16614 2.41784 4.09704 3.25695 3.25793C4.09607 2.41881 5.16517 1.84737 6.32905 1.61586C7.49294 1.38435 8.69934 1.50317 9.79569 1.95729C10.8921 2.41142 11.8291 3.18045 12.4884 4.16715C13.1477 5.15384 13.4996 6.31388 13.4996 7.50057C13.4978 9.09132 12.8651 10.6164 11.7403 11.7412C10.6154 12.8661 9.09034 13.4988 7.49959 13.5006Z"
                fill="#C8CBF0"
              />
            </g>
            <defs>
              <clipPath id="clip0_239_6971">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input type="text" placeholder="Rechercher..." className='input' />
        </div>
        <div className="SelectFilter">
          <select name="PlanTypes" id="PlanTypes" className='select'>
            <option value="none" selected disabled hidden>
              Type de plan
            </option>
            <option value="Les petites saucisses">Les petites saucisses</option>
            <option value="L'andouillette de mamie">
              L'andouillette de mamie
            </option>
            <option value="La raclette">La raclette</option>
            <option value="Le poulet frite">Le poulet frite</option>
          </select>
        </div>
        <label htmlFor="">
          Label <span>*</span>
        </label>
        <div className="InputForm">
          <input type="text" placeholder="example@enedis.com" className='input' />
        </div>
        <div className="TextAreaDescription">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Écris une description..."
            className='textarea'
          />
        </div>
      </div>
      <div className="Card">
        <h3>Exemple de carte cliquable</h3>
      </div>
    </div>
  );
};

export default TestStyles;

import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "./context/UserContext";

import './styles/App.scss';

import Login from './pages/Login';
import Sign from './pages/Sign';
import Quit from './pages/Quit';
import Accueil from './pages/Accueil';
import Dev from './pages/Dev';
import Formule from './pages/Formule';
import DoubleRoom from './pages/DoubleRoom';
import FamilyRoom from './pages/FamilyRoom';
import TwinRoom from './pages/TwinRoom';
import DeluxeRoom from './pages/DeluxeRoom';
import Mail from './pages/Mail';
import Contact from './pages/Contact';
import Database from './pages/Database';
import Style from './pages/Style';
import LinkSidebar from "@components/LinkSidebar";
import ScrollButton from "@components/ScrollButton";
// import LegendaryCursor from "legendary-cursor";

function App() {

  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [theme, setTheme] = useState('light');
  const [dataImage, setDataImage] = useState([]);
  const [maxImage, setMaxImage] = useState(0);

  const getImage = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/images/photo`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setDataImage(res.data);
      });
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/images/photo/max`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setMaxImage(res.data[0].max);
      });
  };

  // Trainée de souris :

  // window.addEventListener("load", () => {
  //   LegendaryCursor.init({
  //     lineSize: 0.1, // Taille de la trainée
  //     opacityDecrement: 0.9, // Vitesse de disparition
  //     speedExpFactor: 0.9, // ?
  //     lineExpFactor: 0.9, // ?
  //     sparklesCount: 200, // Nombre de particules libres
  //     maxOpacity: 1.99,  // Opacité de la trainée / particules : should be a number between [0 ... 1]

  //     // Can change images:
  //     texture1: "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",      // texture displayed on mouse hover
  //     texture2: "https://cdn.pixabay.com/photo/2022/06/08/05/47/stars-7249785_1280.jpg",      // texture displayed on mouse click
  //     // texture3:         "https://cdn.pixabay.com/photo/2017/12/10/13/37/christmas-3009949_1280.jpg",      // texture displayed on sparkles
  //   });
  // });

  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("token");
      if (token !== null) {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/user-token`, { headers: { Authorization: token } })
          .then((res) => {
            setUser(res.data)
          })
          .catch((err) => {
            console.error(err)
            navigate("/")
          });
      } else {
        navigate("/")
      };
    };
    getImage();
  }, [user]);

  return (
    <div className={`App ${theme}`}>
      <UserContext.Provider value={{ user, setUser, theme, setTheme, dataImage, setDataImage }}>
        <Routes>
          <Route path="/" element={
            <Wrapper>
              <Accueil />
            </Wrapper>
          } />
          <Route path="/login" element={
            <Wrapper>
              <Login />
            </Wrapper>
          } />
          <Route path="/sign" element={
            <Wrapper>
              <Sign />
            </Wrapper>
          } />
          <Route path="/quit" element={
            <Wrapper>
              <Quit />
            </Wrapper>
          } />
          <Route path="/formule" element={
            <Wrapper>
              <Formule />
            </Wrapper>
          } />
          <Route path="/double-room" element={
            <Wrapper>
              <DoubleRoom />
            </Wrapper>
          } />
          <Route path="/family-room" element={
            <Wrapper>
              <FamilyRoom />
            </Wrapper>
          } />
          <Route path="/twin-room" element={
            <Wrapper>
              <TwinRoom />
            </Wrapper>
          } />
          <Route path="/deluxe-room" element={
            <Wrapper>
              <DeluxeRoom />
            </Wrapper>
          } />
          <Route path="/mail" element={
            <Wrapper>
              <Mail />
            </Wrapper>
          } />
          <Route path="/contact" element={
            <Wrapper>
              <Contact />
            </Wrapper>
          } />
          <Route path="/dev" element={
            <Wrapper>
              <Dev />
            </Wrapper>
          } />
          <Route path="/bdd" element={
            <Wrapper>
              <Database />
            </Wrapper>
          } />
          <Route path="/style" element={
            <Wrapper>
              <Style />
            </Wrapper>
          } />
        </Routes>
      </UserContext.Provider>
      <LinkSidebar />
      <ScrollButton />
    </div>
  );
};

function Wrapper({ children }) {
  const user = useContext(UserContext);
  if (!user) return null;
  return children;
};

export default App;
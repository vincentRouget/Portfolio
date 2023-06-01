import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "./context/UserContext";
import './styles/App.scss';
import Accueil from "@pages/Accueil";
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import Sign from './pages/Sign';
import Quit from './pages/Quit';
import Dev from './pages/Dev';
import Database from './pages/Database';
import ApplicationMobile from "@pages/ApplicationMobile";
import Presentation from "@pages/Presentation";
import ScrollButton from "@components/ScrollButton";

function App() {

  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [theme, setTheme] = useState('light');
  const [dataImage, setDataImage] = useState([]);
  const [maxImage, setMaxImage] = useState(0);
  const [refresh, setRefresh] = useState(false);

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
      <UserContext.Provider value={{ user, setUser, theme, setTheme, dataImage, setDataImage, refresh, setRefresh }}>
        <Routes>
          <Route path="/" element={
            <Wrapper>
              <Accueil />
            </Wrapper>
          } />
          <Route path="/portfolio" element={
            <Wrapper>
              <Portfolio />
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
          <Route path="/Presentation" element={
            <Wrapper>
              <Presentation />
            </Wrapper>
          } />
          <Route path="/Application" element={
            <Wrapper>
              <ApplicationMobile />
            </Wrapper>
          } />
        </Routes>
      </UserContext.Provider>
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
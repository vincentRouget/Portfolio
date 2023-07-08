import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import UserContext from "./context/UserContext";
import './styles/App.scss';
import Accueil from "@pages/Accueil";
import Portfolio from './pages/Portfolio';
import CV from "@components/CV";
import ScrollButton from "@components/ScrollButton";

function App() {

  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');
  const [refresh, setRefresh] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [french, setFrench] = useState(true);

  useEffect(() => {
  }, []);

  return (
    <div className={`App ${theme}`}>
      <UserContext.Provider value={{ theme, setTheme, refresh, setRefresh, minimize, setMinimize, french, setFrench }}>
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
          <Route path="/Cv" element={
            <Wrapper>
              <CV />
            </Wrapper>
          } />
          <Route path="/*" element={
            <Wrapper>
              <Accueil />
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
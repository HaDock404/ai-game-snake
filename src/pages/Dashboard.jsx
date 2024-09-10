import GlobalStyle from '../styles/createGlobalStyle.jsx'
import Header from "../components/Header";
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';

import React, { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext';

function Dashboard() {
  const { language } = useContext(LanguageContext);

  const title = {
    en: "Dashboard Snake Game",
    fr: "Dashboard Snake Game"
  };

  const footer = {
    en: "Make with 🤍 by haDock404©",
    fr: "Fait avec 🤍 par haDock404©"
  };

  return (
    <>
      <GlobalStyle/>
      <Header title={title[language]}/>
      <Main />
      <Footer footer={footer[language]}/>
    </>
  );
}

export default Dashboard;
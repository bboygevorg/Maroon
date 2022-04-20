import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import '../src/styles/styles.scss'
import MainLayout from "./Layout/MainLayout";
import Catalog from "./Layout/Catalog/Catalog";
import About from "./Layout/About/About";
import Contact from "./Layout/Contact/Contact";


function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path={'/catalog'} element={<MainLayout children={<Catalog />} />} />
                  <Route path={'/about'} element={<MainLayout children={<About />} />} />
                  <Route path={'/contacts'} element={<MainLayout children={<Contact/>} />} />
                  {/*<Route path={'/'} element={<MainLayout children={<MainContainer />} />} />*/}
              </Routes>
          </Router>
      </>

  );
}

export default App;

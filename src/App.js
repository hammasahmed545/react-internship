import './App.css';
import React from 'react';
import Navbar from "./components/common/Navbar";
import Topbar from "./components/common/Topbar";
import Our_Team_Section from "./components/ourteam/Our_Team_Section";
import About_Us_Section from "./components/About_Us_Section";
import Testimonial_Section from "./components/testimonial/Testimonial_Section";

function App() {
  return (
      <>
          <Topbar />
          <Navbar />
          <About_Us_Section />
          <Our_Team_Section />
          <Testimonial_Section />
      </>
      );
}

export default App;

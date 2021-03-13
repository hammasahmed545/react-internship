import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Ourteam from "./components/OurTeam";


function App() {
  return (
      <>
          <Topbar />
          <Navbar />
          <Ourteam/>
      </>
      );
}

export default App;

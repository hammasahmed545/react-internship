import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Card_Team from "./components/Card_Team_Info";
function App() {
  return (
      <>
          <Topbar />
          <Navbar />
          <Card_Team />
      </>
      );
}

export default App;

import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('dark')
  return (
    <>
      <Navbar title="TextUtils" nav1="Home" nav2="About" nav3="Contact" mode={mode} />
      <TextForm h1Text="Enter text to analyze below" />

    </>
  );
}

export default App;

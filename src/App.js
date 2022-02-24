import React from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Comic from './pages/Comic.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/comic' element={<Comic/>} />
      </Routes>
    </Router>
    
  )
}


export default App
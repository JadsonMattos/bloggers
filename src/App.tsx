import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { About, NotFound, Posts, Users } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Users /> } />
        <Route path="/posts/:id" element={ <Posts /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

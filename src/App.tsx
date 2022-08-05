import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroesListing from './pages/HeroesListing';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CreateHeroes from './pages/CreateHeroes';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/hero/list" element={<HeroesListing />} />
        <Route path="/hero/create" element={<CreateHeroes />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

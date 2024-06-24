import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { RecipesProvider } from './context/RecipesContext';
import './App.css';

const App = () => (
  <Router>
    <RecipesProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </RecipesProvider>
  </Router>
);

export default App;
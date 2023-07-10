import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Records from './pages/Records';
import Column from './pages/Column';
const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/records" element={<Records />} />
        <Route path="/column" element={<Column />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
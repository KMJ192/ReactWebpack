import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestPageA from './pages/TestPageA';
import TestPageB from './pages/TestPageB';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/test-page-a' element={<TestPageA />} />
        <Route path='/test-page-b' element={<TestPageB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

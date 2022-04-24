import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestCode from './pages/TestCode';
import TestPageA from './pages/TestPageA';
import TestPageB from './pages/TestPageB';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/test-page-a' element={<TestPageA />} />
        <Route path='/test-page-b' element={<TestPageB />} />
        <Route path='/test-code' element={<TestCode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

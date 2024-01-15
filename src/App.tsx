import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './(home)/Home';

function App() {
  return (
    <div className="App">
      <Suspense fallback={ <div>로딩중</div> } >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<div>어바웃</div>} />
          <Route path='/portfolio' element={<div>포트폴리오</div>} />
          <Route path='/portfolio/:id' element={<div>포트폴리오123</div>} />
          <Route path='/skills' element={<div>스킬</div>} />
          <Route path='*' element={<div>404! 없는 페이지임</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

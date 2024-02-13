import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './app/(home)/Home';
import About from './app/about/About';
import Portfolio from './app/portfolio/Portfolio';
import Details from './app/details/Details';
import Skills from './app/skills/Skills';

function App() {
  return (
    <main className="App">
      <Suspense fallback={ <div>로딩중</div> } >
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/portfolio' element={ <Portfolio /> } />
          <Route path='/details/:id' element={ <Details /> } />
          <Route path='/skills' element={ <Skills /> } />
          <Route path='*' element={<div>404! 없는 페이지입니다 ^0^</div>} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;

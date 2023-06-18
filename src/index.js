import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplates from './templates/HomeTemplates';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import UseStateDemo from './pages/Hook/UseStateDemo';
import UseEffectDemo from './pages/Hook/UseEffectDemo';
import Detail from './pages/Detail';
import UseCallBackDemo from './pages/Hook/UseCallBackDemo/UseCallBackDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplates/>}>
        <Route index element={<Home/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='use-state-demo' element={<UseStateDemo/>}></Route>
        <Route path='use-effect-demo' element={<UseEffectDemo/>}></Route>
        <Route path='use-callback-demo' element={<UseCallBackDemo/>}></Route>
        <Route path='detail'>
          <Route path=':id' element={<Detail/>}></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


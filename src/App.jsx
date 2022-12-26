import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Zakaz from './components/ZakazOfrmlenie/Zakaz';
import './index.scss';
import { Router, Route, Link, Routes } from 'react-router-dom';
import { PayPage } from './Pages/PayPage';
import { HomePage } from './Pages/HomePage';

function App() {
    return (
        <div className='app-wrapper'>


            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path="/PayPage" element={<PayPage/>} />
            </Routes>
        </div>
    );
}

export default App;
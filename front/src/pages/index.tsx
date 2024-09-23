import React from 'react';
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from '@app/layout';

import NoPage from '@pages/404';
import HomePage from '@pages/home';
import LoginPage from '@pages/admin/loginPage';


function Routing() {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="" element={<HomePage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default Routing;

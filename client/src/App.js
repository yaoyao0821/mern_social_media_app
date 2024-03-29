import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
    return (
    <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar />
            {/* navigate and show different components, Switch is not in v6 */}
            <Routes>
                <Route path='/' exact element={<Home />}></Route>
                <Route path='/auth' element={<Auth />}></Route>
            </Routes>
        </Container>
    </BrowserRouter>
    );
};

export default App;

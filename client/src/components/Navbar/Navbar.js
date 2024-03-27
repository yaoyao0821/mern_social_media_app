import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

import munchkin from '../../images/munchkin.png';
 
import Home from '../Home/Home';
import Auth from '../Auth/Auth';

const Navbar = () => {
    const user = null;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();


    const logout = () => {
    // dispatch({ type: actionType.LOGOUT });
    // history.push('/auth');
    // setUser(null);
    };
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Kittea Cafe</Typography>
            <img className={classes.image} src={munchkin} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
            {user?.result ? (
                <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
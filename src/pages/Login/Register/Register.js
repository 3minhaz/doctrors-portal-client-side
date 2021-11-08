import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const { registerUser, isLoading, user, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(field, value, newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('password did not matched')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic-name"
                                name="name"
                                onBlur={handleOnBlur}
                                label="Your Name"
                                variant="standard" />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                label="Your Email"
                                variant="standard" />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                id="password-basic"
                                label="Your Password"
                                variant="standard" /> <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                id="password-basic2"
                                label="ReType your password"
                                variant="standard" /> <br />

                            <Button type="submit" sx={{ mt: 2 }} variant="contained">Register</Button><br />
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Registered successfully</Alert>
                    }
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
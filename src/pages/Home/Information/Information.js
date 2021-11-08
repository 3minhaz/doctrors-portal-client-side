import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Information = () => {
    return (
        <Container>
            <Grid container spacing={2} sx={{ marginTop: '-80px' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ display: "flex", p: 2, backgroundColor: 'cyan', color: 'white' }} >
                        <i style={{ color: 'white' }} className="far fa-clock fa-5x"></i>
                        <div>
                            <Typography variant="h6">
                                Opening Hours
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 400 }}>
                                Lorem, ipsum dolor sit amet consectetur a
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={6} md={4} >
                    <Paper elevation={3} >
                        <i className="far fa-clock"></i>
                        <Typography variant="h4">
                            Opening Hours
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, laudantium.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={6} md={4}>
                    <Paper elevation={3} ></Paper>
                </Grid>
            </Grid >
        </Container >
    );
};

export default Information;
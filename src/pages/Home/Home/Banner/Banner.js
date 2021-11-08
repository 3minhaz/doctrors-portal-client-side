import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Typography, Container } from '@mui/material';
import chair from '../../../../images/chair.png'
import bg from '../../../../images/bg.png';
import { width } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    // height: '100vh'
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid style={verticalCenter} container spacing={2}>

                <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'gray', my: 3, fontWeight: 300, fontSize: 14 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi ea, odio non itaque voluptatibus. Error cupiditate aut sunt doloremque.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }} >Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 350 }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;
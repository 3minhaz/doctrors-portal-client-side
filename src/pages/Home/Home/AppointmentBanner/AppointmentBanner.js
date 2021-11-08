import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import doctor from '../../../../images/doctor.png';
import bg from '../../../../images/appointment-bg.png';

const appintmentBanner = {
    backgroundImage: `url(${bg})`,
    marginTop: 175,
    backgroundBlendMode: 'darken',
    backgroundColor: 'rgba(45,58,74,0.9)',
}

const AppointmentBanner = () => {
    return (
        <Box style={appintmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: '-110px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box >
                        <Typography variant="h5" sx={{ color: '#5CE7ED', mb: 3 }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h4" sx={{ my: 3 }} style={{ fontSize: 14, color: 'white', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maiores maxime commodi neque aperiam ad fugit doloribus minima laudantium perferendis.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }} >Learn more</Button>
                    </Box>

                </Grid>
            </Grid>
        </Box>

    );
};

export default AppointmentBanner;
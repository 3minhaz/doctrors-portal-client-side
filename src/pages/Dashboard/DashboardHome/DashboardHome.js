import React from 'react';
import { Button, Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = ({ date, setDate }) => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Calender
                        date={date}
                        setDate={setDate}
                    ></Calender>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Appointments date={date}></Appointments>
                </Grid>
            </Grid>
        </div>
    );
};

export default DashboardHome;
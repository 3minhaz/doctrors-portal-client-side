import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Booking from '../../Booking/Booking';
import { Alert, Typography } from '@mui/material';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 09-00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09:00 AM - 10-00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10:00 AM - 11-00 AM',
        space: 5,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11:00 AM - 12-00 AM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06:00 PM - 07-00 PM',
        space: 5,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07:00 PM - 08-00 PM',
        space: 5,
    },
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', mb: 3 }}>Available appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;
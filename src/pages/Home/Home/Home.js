import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Information from '../Information/Information';
import Services from '../Services/Services';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;
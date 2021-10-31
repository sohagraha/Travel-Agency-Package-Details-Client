import React from 'react';
import Banner from '../Banner/Banner';
import Extra1 from '../Extra1/Extra1';
import Extra2 from '../Extra2/Extra2';
import Services from '../Services/Services';

const Home = () => {
    return (
        // Header with Banner and services 
        <div>
            <Banner></Banner>
            <Services></Services>
            <Extra1></Extra1>
            <Extra2></Extra2>
        </div>
    );
};

export default Home;
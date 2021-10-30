import React from 'react';
import Allorders from '../Allorders/Allorders';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        // Header with Banner and services 
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Works/Works';
import OurServices from '../OurServices/OurServices';
import LogoSlider from '../LogoSlider/LogoSlider';
import ServicesThree from '../ServicesThree/ServicesThree';
import Reviews from '../Reviews/Reviews';

const Home = () => {
 

    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <OurServices></OurServices>
            <LogoSlider></LogoSlider>
            <ServicesThree></ServicesThree>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
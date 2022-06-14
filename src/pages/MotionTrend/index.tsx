import React from 'react';
import Card from '../../components/Card';
import CardType from '../../components/CardType';
import Footer from './components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header';
import PlayList from './components/PlayList';
import VideoList from './components/VideoList';
import "./desktop.css";

const MotionTrend = () => {

    const setting = {
        dots: true,
        fade: true,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides"
    }

    return (
        <main className='motionPage'>
            <Header />
            <Slider {...setting} >
                <CardType />
                <CardType />

            </Slider>
            {/* <CardType /> */}

            <VideoList />
            <PlayList />
            <Footer />
        </main>
    );
}

export default MotionTrend;
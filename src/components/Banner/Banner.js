import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        // Carousel 
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://image.freepik.com/free-vector/time-travel-vector-flyer-with-white-copy-space-sky-with-airplane_134830-1061.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://image.freepik.com/free-vector/flat-travel-background_23-2148050086.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://image.freepik.com/free-vector/tourists-flight-travel-infographics-with-world-map-landmarks-icons_1284-52994.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
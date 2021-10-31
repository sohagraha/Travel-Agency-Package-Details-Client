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
                        src="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://media.istockphoto.com/photos/cute-little-terrier-dog-wearing-sunglasses-in-a-full-car-trunk-ready-picture-id1271342936?b=1&k=20&m=1271342936&s=170667a&w=0&h=VewLDyMHeGsg2-85Z3eqQmeMTMc5lJNIv-xx4kY7oBg="
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://media.istockphoto.com/photos/travel-during-the-covid19-pandemic-airplane-model-with-face-mask-and-picture-id1268257924?b=1&k=20&m=1268257924&s=170667a&w=0&h=kviE-Bd4sAaGuHXJqdzxk__-URPKAZV6Zj7VpnuXges="
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
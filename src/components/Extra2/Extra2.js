import React from 'react';
import "./Extra2.css"

const Extra2 = () => {
    return (
        <div>
            <div className="testimonials-clean mb-1 m-2">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">HAPPY TRAVELLER SAYS</h2>
                    </div>
                    <div className="row people">
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <p className="description">I love the way you guys are always very helpful and accomodating.I am more than happy to use your organisation for all future holidays.</p>
                            </div>
                            <div className="author"><img className="rounded-circle" src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" />
                                <h5 className="name text-white">Sarah Bispham</h5>
                                <p className="title text-white">CEO of Company Inc.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <p className="description">Yes, we would use you again and recommend you to others. Little fuss and reassured us with our booking in these challenging times.</p>
                            </div>
                            <div className="author">
                                <img className="rounded-circle" src="https://i.imgur.com/o5uMfKo.jpg" />
                                <h5 className="name text-white">Anthony Dyke</h5>
                                <p className="title text-white">Teacher</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <p className="description">The best way to do this is to live and work in expensive countries. Better to spend the local currency and save your own money for travel. </p>
                            </div>
                            <div className="author"><img className="rounded-circle" src="https://image.freepik.com/free-photo/handsome-man-white-shirt-posing-attractive-guy-with-fashion-hairstyle-confident-man-with-short-beard-adult-boy-with-brown-hair-closeup-portrait_186202-8545.jpg" />
                                <h5 className="name text-white">Caroline Rowlinson</h5>
                                <p className="title text-white">Owner of Bongobd Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra2;
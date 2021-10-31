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
                            <div className="author"><img className="rounded-circle" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
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
                            <div className="author"><img className="rounded-circle" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
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
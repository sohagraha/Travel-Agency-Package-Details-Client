import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        // Contact Us Form 
        <div className="pb-2 containers container ">
            <div className=" p-4 row">
                <div className="col-12 col-md-10 mx-auto pt-3 pb-4 mt-3">
                    <h1 className="bg-secondary text-white">Contact Us</h1>
                    <div className="card mx-auto mb-5 border-0 bg-dark">
                        <div className="row g-0 p-3">
                            <div className="">
                                <div className="mb-3 mt-3">
                                    {/* Name Field - patient give their name here */}
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            placeholder="Name"
                                        />
                                    </InputGroup>
                                </div>
                                {/* Email Field - patient give their mail here */}
                                <div className="mb-3">
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            placeholder="Email"
                                        />
                                    </InputGroup>
                                </div>
                                {/* Message Field - patient write their Message here */}
                                <div className="mb-2">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message"
                                        rows="6"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary ps-5 pe-5 ">Send</button>
                                <br />
                                {/* Social Icon  */}
                                <div className="contacts g-5 fs-2 text-warning fw-bold">
                                    <i className="fab fa-facebook-f p-3"></i>
                                    <i className="fab fa-twitter p-3"></i>
                                    <i className="fab fa-google-plus-g p-3"></i>
                                    <i className="fab fa-linkedin-in p-3"></i>
                                    <i className="fab fa-youtube p-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
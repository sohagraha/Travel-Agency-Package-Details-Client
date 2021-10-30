import React from 'react';
import './Specialist.css'

const Specialist = () => {
    return (
        <div>
            <div>
                <div className="about">
                    <div className="bg-dark text-white p-3 pb-5">
                        <h1 className="p-3">A heritage in care. A reputation in excellence</h1>
                        <i><small>" A patient is the most important person in our hospital. He is not an interruption to our work. He is the purpose of it. He is not an outsider in our hospital, he is part of it. We are not doing him a favor by serving him, he is doing us a favor by giving us an opportunity to do so. "</small></i>
                    </div>
                    {/* Specialist Doctor Details - Our Specialist  */}
                    <div className="pt-3 pb-4">
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col text-center mb-3">
                                    <h1>
                                        Our Specialist Doctor
                                    </h1>
                                </div>
                            </div>
                            {/* Specialist Doctor Details Container  */}
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <img className="qualities-img  p-2 rounded-circle" src="https://as2.ftcdn.net/v2/jpg/01/72/38/25/500_F_172382536_GLOspuArqWqoq66wVRo2MMzYIocUvnY2.jpg" alt="" />
                                    <h5>
                                        Cardiologists
                                    </h5>
                                    <p>
                                        <i>- Sohag Raha</i>
                                    </p>

                                </div>
                                <div className="col-md-4 text-center">
                                    <img className="qualities-img  p-2 rounded-circle" src="https://as2.ftcdn.net/v2/jpg/03/20/74/45/500_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg" alt="" />

                                    <h5>
                                        Gastroenterologists
                                    </h5>
                                    <p>
                                        <i>- Marilyn Quizas</i>
                                    </p>

                                </div>
                                <div className="col-md-4 text-center">

                                    <img className="qualities-img  p-2 rounded-circle" src="https://as2.ftcdn.net/v2/jpg/02/71/27/05/500_F_271270515_h430bOQYBpPIXZXELDhk5GMjAabEGmAo.jpg" alt="" />
                                    <h5>
                                        Nephrologists
                                    </h5>
                                    <p>
                                        <i>- Maksud Alam</i>
                                    </p>
                                </div>
                            </div>

                            <div className="row mb-md-3">
                                <div className="col-md-4 text-center">
                                    <img className="qualities-img  p-2 rounded-circle" src='https://as1.ftcdn.net/v2/jpg/02/95/51/80/500_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg' alt="" />
                                    <h5>
                                        Urologists
                                    </h5>
                                    <p>
                                        <i>- Abu Rashed Khan</i>
                                    </p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img className="qualities-img  p-2 rounded-circle" src="https://as2.ftcdn.net/v2/jpg/03/05/41/27/500_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg" alt="" />
                                    <h5>
                                        Otolaryngologists
                                    </h5>
                                    <p>
                                        <i>- H. M. Mohidul Islam</i>
                                    </p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img className="qualities-img  p-2 rounded-circle" src="https://as2.ftcdn.net/v2/jpg/03/20/52/31/500_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg" alt="" />
                                    <h5>
                                        Neurologists
                                    </h5>
                                    <p>
                                        <i>- Md Shahriar Hossain Sajib</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialist;
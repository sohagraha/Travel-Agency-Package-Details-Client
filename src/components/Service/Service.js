import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, img, _id, desc, from, to, price } = props.mainservice;
    return (
        // single service 
        <Col className="d-flex box h-100">
            <div className="col-md-5">
                <img src={img} className="img-fluid rounded-start h-100 service-img py-2" alt="..." />
            </div>
            <div className="col-md-7 py-2">
                <div className="card-body">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <p className="card-text">{desc?.slice(0, 100)}</p>
                    <div className="d-flex justify-content-around">
                        <p><i className="fas fa-map-marked-alt"></i> {from} <span> </span> <i className="fas fa-exchange-alt"></i>  {to}</p>
                    </div>
                    <p>Cost : {price} Taka/person</p>
                </div>
                <Link to={`/details/${_id}`}><button className="btn btn-primary btn-back">Details <i className="fas fa-info-circle"></i></button></Link>
            </div>
        </Col >
    );
};

export default Service;
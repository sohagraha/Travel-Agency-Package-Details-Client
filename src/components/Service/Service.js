import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, img, _id, desc, from, to, price } = props.mainservice;
    return (
        // single service 
        <Col className="d-flex">
            <div class="col-md-5 h-100">
                <img src={img} class="img-fluid rounded-start h-100" alt="..." />
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <h5 class="card-title fw-bold">{name}</h5>
                    <p class="card-text">{desc?.slice(0, 100)}</p>
                    <div className="d-flex justify-content-around">
                        <p><i class="fas fa-map-marked-alt"></i> {from} <span> </span> <i class="fas fa-exchange-alt"></i>  {to}</p>
                    </div>
                    <p>Cost : {price} Taka/person</p>
                </div>
                <Link to={`/details/${_id}`}><button className="btn btn-primary btn-back">Details <i className="fas fa-info-circle"></i></button></Link>
            </div>
        </Col >
    );
};

export default Service;
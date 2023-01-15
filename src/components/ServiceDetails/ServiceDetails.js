import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Orderform from '../Orderform/Orderform';



const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`https://traveliya.projuktibangla.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    // find targeted service 
    return (
        <div className="d-flex justify-content-center">

            <div className="card m-3 w-75" >
                <div className="row g-0">
                    <div className="">
                        <img src={service?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="">
                        <div className="card-body">
                            <h2 className="card-title ">{service?.name}</h2>
                            <p className="card-text text-start"> {service?.desc}</p>
                        </div>
                    </div>
                    <h3 >Deatils</h3>
                    <table className="table table-striped table-hover w-75 mx-auto border">
                        <tbody>
                            <tr>
                                <th scope="row">From</th>
                                <td>{service?.from}</td>
                            </tr>
                            <tr>
                                <th scope="row">To</th>
                                <td>{service?.to}</td>
                            </tr>
                            <tr>
                                <th scope="row">Travel By</th>
                                <td>{service?.by}</td>
                            </tr>
                            <tr>
                                <th scope="row">Cost</th>
                                <td>{service?.price} Taka/Person</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Orderform></Orderform>


                <Link to="/home"><button className="btn btn-primary"><i className="fas fa-chevron-circle-left"></i> Back</button></Link>
            </div>

        </div>

    );
};

export default ServiceDetails;
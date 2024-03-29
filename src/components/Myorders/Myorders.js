import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Myorder from '../Myorder/Myorder';

const Myorders = () => {

    const { user } = useAuth();
    const userEmail = user.email;

    const [allorders, setAllorders] = useState([]);

    // https://traveliya.projuktibangla.com/

    useEffect(() => {
        fetch('https://traveliya.projuktibangla.com/orders')
            .then(res => res.json())
            .then(data => setAllorders(data.filter(order => order.mail === userEmail)))
    }, [])



    const handelDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete order?');
        if (proceed) {
            const url = `https://traveliya.projuktibangla.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingOrders = allorders.filter(order => order._id !== id);
                        setAllorders(remainingOrders);
                    }
                });
        }
    }

    return (
        <div>
            <div className="container pb-5">
                <h1 className="p-2 fw-bold bg-secondary text-white mt-4">My Orders</h1>
                {/* Pass the data to another component using map  */}

                <div style={
                    {
                        height: '60vh',
                    }
                }>
                    <Table striped bordered hover size="sm" responsive>
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Mail</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allorders.map(allorders => <Myorder
                                    handelDeleteOrder={handelDeleteOrder}
                                    allorders={allorders} key={allorders._id}></Myorder>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Myorders;
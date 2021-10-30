import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Myorder from '../Myorder/Myorder';

const Myorders = () => {

    const { user } = useAuth();
    const userEmail = user.email;

    const [allorders, setAllorders] = useState([]);

    useEffect(() => {
        fetch('https://stark-badlands-88982.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllorders(data.filter(order => order.mail == userEmail)))
    }, [])

    const handelDeleteOrder = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete order?');
        if (proceed) {
            const url = `https://stark-badlands-88982.herokuapp.com/orders/${id}`;
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

    const handelAcceptOrder = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete order?');
        if (proceed) {
            const url = `https://stark-badlands-88982.herokuapp.com/orders/${id}`;
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

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>MAIL</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allorders.map(allorders => <Myorder
                                handelAcceptOrder={handelAcceptOrder}
                                handelDeleteOrder={handelDeleteOrder}
                                allorders={allorders} key={allorders._id}></Myorder>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Myorders;
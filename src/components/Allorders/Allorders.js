import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import Allorder from '../Allorder/Allorder';

const Allorders = () => {
    const [allorders, setAllorders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json()
                .then(data => setAllorders(data)))
    }, [])

    const handelDeleteOrder = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete order?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
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
                <h1 className="p-2 fw-bold bg-secondary text-white mt-4">All Orders</h1>
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
                            allorders.map(allorders => <Allorder
                                handelDeleteOrder={handelDeleteOrder}
                                allorders={allorders} key={allorders._id}></Allorder>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Allorders;
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useFirebase();
    return (
        // Navbar 
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top fs-6 fw-normal" >
                <div className="container-fluid container">
                    <Link className="navbar-brand" to="/home" > <img className="brand" src="https://www.pinclipart.com/picdir/big/352-3523121_new-travel-peeps-travel-agency-logo-png-clipart.png" alt="" /> TRAVELIYA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* Nav Links  */}
                            <Link to="/home" className="nav-link bg active">Home</Link>
                            <Link className="nav-link text-white bg" to="/services">Packages</Link>

                            {user.email &&
                                <Link className="nav-link text-white bg" to="/add-service">Add Package</Link>
                            }
                            {user.email &&
                                <Link className="nav-link bg text-white" to="/all-orders">All Orders</Link>
                            }
                            {user.email &&
                                <Link className="nav-link bg text-white" to="/my-orders">My Orders</Link>
                            }
                            <Link className="nav-link bg text-white" to="/contact">Contact</Link>
                            <span className="d-flex justify-content-start">
                                {user?.email ?
                                    <>
                                        <Link className="nav-link" to="home"><i className="fas fa-user"></i><span> </span>{user?.displayName}<span className="text-danger ms-2 p-2 bg" onClick={logOut}> <i className="fas fa-sign-out-alt"></i> Log Out</span></Link>
                                    </> :
                                    <Link className="nav-link text-primary mx-auto bg" to="login">Login</Link>
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
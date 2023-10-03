import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer'
import Popup from 'reactjs-popup';
import "../styles/Admin.css";

function FuelDetailsCustomer() {



    const [fueldetails, setfueldetails] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/fueldetail/`)
            .then((fueldetails) => {
                setfueldetails(fueldetails.data);
                console.log(fueldetails.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    return (
        <div>

        <div>
        <Header></Header>
            <header class="bg-dark py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-4 fw-bolder">Cypetco fuel Station</h1>
                        <p class="lead fw-normal text-white-50 mb-0">Fuel Details</p>
                    </div>
                </div>
            </header>


            <div className='container py-4'>

                <div class="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            fueldetails.map((val, key) => {
                                return (
                                    <div className="col-md-6">
                                        <div class="card" style={{ width: '18rem' }}>
                                            <img src={`https://www.freevector.com/uploads/vector/preview/27545/Petrol_vector_1.jpg`} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h1 className="card-title">{val.fueltype}</h1>
                                                <h3 className="card-text">{val.fuelquality}</h3>
                                                <span className="card-text">{val.cypetcoitemno}</span> <br />
                                                <h3 className="card-text">LKR {val.price}/=</h3>
                                                <span className="card-text">price update date: {val.priceupdateddate}</span>
                                                <br></br>
                                                <span className="card-text">{val.description}</span>
                                            </div>
                                        </div>


                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
}

export default FuelDetailsCustomer;
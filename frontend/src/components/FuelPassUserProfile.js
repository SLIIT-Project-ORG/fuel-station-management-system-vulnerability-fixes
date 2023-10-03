import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import qrcode from 'qrcode';
import { Button } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

export default function FuelPassUserProfile() {

    //get id
    const { id } = useParams();

    const [fuelPass, setFuelPass] = useState([]);
    const [quantity, setQuantity] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8000/identifier/${id}`)
            .then((res) => {
                setFuelPass(res.data.data);
                console.log(res.data);
                setQuantity(res.data.quantity);
                console.log(res.data.quantity);
            })
            .catch((err) => {
                console.log(err.message);
            })

    }, []);


    //Qr code Generate
    var qr = '';
    qrcode.toDataURL(`http://localhost:3000/fuelPass/${fuelPass.reference_no}`, ((err, url) => {
        if (err) {
            console.log(err);
        }
        else {
            qr = url
        }
    }))

    return (
        <div>
            <div className="container card text-light" style={{backgroundColor:'#484949'}}>
                <Header />
                <center style={{ marginTop: '120px' }}>
                    <div className="text-light bg-dark p-2">
                        <h1>FUEL PASS</h1>
                    </div>
                    <div className="row mt-4">

                        <div className="col"></div>
                        <div className="col-5">

                            <img src={qr} width="430px" height="430px" className="border mt-4" />

                        </div>
                        <div className="col-5" style={{ marginLeft: '-50px' }}>
                            <table className='mt-4 text-start'>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '120px' }}><b>Reference No: </b></td>
                                        <td><b>{fuelPass.reference_no}</b></td>
                                    </tr><br />
                                    <tr>
                                        <td><b>Owner Name: </b></td>
                                        <td>{fuelPass.owner_name}</td>
                                    </tr><br />
                                    <tr>
                                        <td><b>NIC: </b></td>
                                        <td>{fuelPass.nic}</td>
                                    </tr><br />
                                    <tr>
                                        <td><b>Mobile No: </b></td>
                                        <td>{fuelPass.mobile_number}</td>
                                    </tr><br />
                                    <tr>
                                        <td><b>Vehicle Type: </b></td>
                                        <td>{fuelPass.vehicle_type}</td>
                                    </tr><br />
                                    <tr>
                                        <td><b>Vehicle No: </b></td>
                                        <td>{fuelPass.vehicle_number}</td>
                                    </tr><br />
                                    <tr>
                                        <td><b>Chassis No: </b></td>
                                        <td>{fuelPass.chassie_number}</td>
                                    </tr><br />
                                    <tr>
                                        <td><b>Fuel Type: </b></td>
                                        <td>{fuelPass.fuel_type}</td>
                                    </tr><br />
                                    <tr>
                                        <td><b>Quantity: </b></td>
                                        <td>{quantity} Liters</td>
                                    </tr><br />

                                </tbody>
                            </table>
                            <Button variant="contained" style={{ 'height': '40px', 'width': '400px', 'marginLeft': '100px', 'marginBottom': '20px' }} color="primary" onClick={() => window.location.href = '/'}>
                                <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-left-arrow-miscellaneous-kiranshastry-solid-kiranshastry.png" /> GO BACK
                            </Button>
                        </div>
                        <div className="col"></div>
                    </div>
                </center>
            </div>
            <Footer />
        </div>

    );

}
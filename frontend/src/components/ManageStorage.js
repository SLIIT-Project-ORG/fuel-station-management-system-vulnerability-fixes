import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import Admin from './AdminSideBar';
import "../styles/Admin.css";
function FuelStorageManagement() {

    const [fueldetails, setfueldetails] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/fuelstorage/`)
            .then((fueldetails) => {
                setfueldetails(fueldetails.data);
                console.log(fueldetails.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);


    function deleteMovie(id) {
        axios.delete(`http://localhost:8000/fuelstorage/delete/${id}`)
            .then(() => {
                alert("Deleted Successfully");
            }).catch((err) => {
                alert("error : " + err);
            });
        window.location.reload();
    }

    return (



        <div>
            <div className=" display-table mt-5 ">
                <div className="row display-table-row mt-5">
                    <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        <div className="logo">


                        </div>
                        <h3 style={{ color: "white" }}><b>Admin Panel</b></h3>
                        <div className="navi">
                            <ul>
                                <li ><a href="/test"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Employee Management</span></a></li>
                                <li><a href="/fueldetailsmanage"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Fuel Management</span></a></li>
                                <li><a href="/admin/fuelOrderView/"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Order Management</span></a></li>
                                <li><a href="/manageinventory"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Inventory Management</span></a></li>
                                <li><a href="/storagemanagement"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Storage Management</span></a></li>
                                <li><a href="/admin/allfuelpass"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Fuel queue Management</span></a></li>
                                <li><a href="/payment"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Payment Management</span></a></li>
                                <li><a href="#"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Supplier Management</span></a></li>
                                <li><a href="#"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Vehicle Management</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-11 display-table-cell v-align">

                        <div className="row mb-4">
                            <header>
                                <div className="col-md-7">
                                    <nav className="navbar-default pull-left">
                                        <div className="navbar-header">
                                            <div className="header">

                                                {/*---- Include the above in your HEAD tag --------*/}

                                                {/* Navigation */}
                                                <div className="fixed-top">

                                                    <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear w-100 p-4">
                                                        <div className="container">
                                                            <a className="navbar-brand" rel="nofollow" target="_blank" href="#" style={{ textTransform: 'uppercase' }}>Admin Panel
                                                            </a>
                                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                                                <span className="navbar-toggler-icon" />
                                                            </button>
                                                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                                                <ul className="navbar-nav ml-auto">
                                                                    <li className="nav-item active" style={{ marginLeft: "900px" }}>
                                                                        <a className="nav-link" href="/">Home</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link" href="/login">Signin</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link" href="/register">About Us</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>

                                </div>
                                <div className="col-md-5">
                                    <div className="header-rightside">

                                    </div>
                                </div>
                            </header>


                        </div>

                        <div className='container-table100'>

                            <header class="bg-dark py-5">
                                <div class="container px-4 px-lg-5 my-5">
                                    <div class="text-center text-white">
                                        <h1 class="display-4 fw-bolder">Admin: Manage Fuel Storage</h1>
                                        <p class="lead fw-normal text-white-50 mb-0">Fuel Storage</p>
                                    </div>
                                </div>
                            </header>
                            <br></br>
                            <br></br>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <a href="http://localhost:3000/addstorage" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> + Add New Fuel Storage</a>


                            </div>
                            <br></br>
                            <br></br>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-wrap">
                                        <table class="table">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th scope="col">Fuel Type</th>
                                                    <th scope="col">Fuel Quality</th>
                                                    <th scope="col">Cypetco Item No</th>
                                                    <th scope="col">Tank Capacity</th>
                                                    <th scope="col">Available Capacity</th>
                                                    <th scope="col">Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    fueldetails.map((val, key) => {
                                                        return (
                                                            <tr>
                                                                <td style={{ width: "100px" }}>{val.fueltype}</td>
                                                                <td style={{ width: "100px" }}>{val.fuelquality}</td>
                                                                <td style={{ width: "100px" }}>{val.cypetcoitemno}</td>
                                                                <td style={{ width: "100px" }}>{val.tankcapacity}</td>
                                                                <td style={{ width: "100px" }}>{val.availablecapacity}</td>

                                                                <td style={{ width: "100px" }}><a href={`/updatefuelstorage/` + val._id} className='btn btn-warning'>Update</a>
                                                                    <a href={`/updatefuelcapacity/` + val._id} className='btn btn-warning'>Update Capacity</a>
                                                                    <Popup
                                                                        trigger={<button className="btn btn-danger"> Delete </button>}
                                                                        modal
                                                                        nested
                                                                    >
                                                                        {close => (
                                                                            <div className="container-fluid" style={{ padding: 5 }}>



                                                                                <div className="h-100 p-5 bg-light border rounded-3">
                                                                                    <h1 className="card-title">Delete This Field ?</h1>
                                                                                    <div className>
                                                                                        <br></br>
                                                                                        <button
                                                                                            className="btn btn-success"
                                                                                            onClick={() => {
                                                                                                console.log('modal closed ');
                                                                                                close();
                                                                                            }}
                                                                                        >
                                                                                            Cancle
                                                                                        </button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                                        <button className='btn btn-danger' onClick={() => deleteMovie(val._id)}>Delete</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </Popup>
                                                                    <Popup
                                                                        trigger={<button className="btn btn-info"> View Detail </button>}
                                                                        modal
                                                                        nested
                                                                    >
                                                                        {close => (
                                                                            <div className="container-fluid" style={{ padding: 5 }}>



                                                                                <div className="h-100 p-5 bg-light border rounded-3">
                                                                                    <h1 className="card-title">Fuel Type: {val.fueltype}</h1>
                                                                                    <p className="card-text">fuel quality: {val.fuelquality}</p>
                                                                                    <p className="card-text">cypetco item no: {val.cypetcoitemno}</p>
                                                                                    <span className="card-text">Tank capacity: {val.tankcapacity}</span> <br />
                                                                                    <span className="card-text">Available Capacity: {val.availablecapacity}</span><br />
                                                                                    <div className>
                                                                                        <br></br>
                                                                                        <button
                                                                                            className="btn btn-outline-danger"
                                                                                            onClick={() => {
                                                                                                console.log('modal closed ');
                                                                                                close();
                                                                                            }}
                                                                                        >
                                                                                            Close
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </Popup>


                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div >
                                </div >
                            </div >
                        </div >

                        {/* our code */}



                    </div>
                </div>

            </div>




        </div>
    );
}

export default FuelStorageManagement;
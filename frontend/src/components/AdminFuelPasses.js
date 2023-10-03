import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function AdminFuelPasses() {

    //Add Pass
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //Set Data and Search
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");

    //Data Insert
    const [owner_name, setOwnerName] = useState("");
    const [nic, setNic] = useState("");
    const [mobile_number, setMobileNumber] = useState("");
    const [vehicle_type, setVehicleType] = useState("");
    const [vehicle_number, setVehicleNumber] = useState("");
    const [chassie_number, setChassieNumber] = useState("");
    const [fuel_type, setFuelType] = useState("");


    const fuelPassObject = {
        owner_name, nic, mobile_number, vehicle_type, vehicle_number, chassie_number, fuel_type
    }

    const createFuelPass = (obj) => {

        axios.post("http://localhost:8000/identifier", obj)
            .then((res) => {
                alert(res.data.message);
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log(err.message);
                alert(err.message);
            })
    }

    const deleteProfile = (id) => {

        var msg;

        if (window.confirm("Do you want to delete this fuel pass ? ")) {
            msg = true;
        }
        else {
            msg = false;
        }

        if (msg == true) {
            axios.delete(`http://localhost:8000/identifier/${id}`)
                .then(() => {
                    alert("Deleted Successful");
                })
                .catch((err) => {
                    alert("Fuel pass delete failed..");
                    console.log(err.message);
                })
        }
        else {
            alert("Delete Canceled");
        }

    }

    useEffect(() => {

        axios.get("http://localhost:8000/identifier")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])


    return (

        <div className="container">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row ">

                    <div className="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2 border border-dark" type="search" name="searchField" placeholder="Search Fuel Pass" aria-label="Search" onChange={
                                    (e) => {
                                        setSearchData(e.target.value)
                                    }
                                } />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2>ALL FUEL PASS</h2></div>
                    <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                        <Button variant="primary" onClick={handleShow}>
                            Add New Fuel Pass
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="table-responsive " style={{ "overflowY": "100px", "overflow": "auto" }}>{/*"height": "300px"*/}
                        <table className="table table-striped table-hover table-bordered table" style={{ "display": "table", "width": "1200px" }}>
                            <thead>
                                <tr>
                                    <th>Reference No</th>
                                    <th>Owner Name</th>
                                    <th>NIC</th>
                                    <th>Mobile No</th>
                                    <th>Vehicle Type</th>
                                    <th>Vehicle No</th>
                                    <th>Chassie No</th>
                                    <th>Fuel Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.filter(value => {

                                        if (searchData === "") {

                                            return value;

                                        } else if (

                                            value.owner_name.toLowerCase().includes(searchData.toLowerCase()) ||
                                            value.reference_no.toLowerCase().includes(searchData.toLowerCase()) ||
                                            value.nic.toLowerCase().includes(searchData.toLowerCase()) ||
                                            value.chassie_number.toLowerCase().includes(searchData.toLowerCase()) ||
                                            value.vehicle_number.toLowerCase().includes(searchData.toLowerCase())

                                        ) {

                                            return value;

                                        }

                                    })
                                        .map((value, key) => {
                                            return (
                                                <tr>
                                                    <td>{value.reference_no}</td>
                                                    <td>{value.owner_name}</td>
                                                    <td>{value.nic}</td>
                                                    <td>{value.mobile_number}</td>
                                                    <td>{value.vehicle_type}</td>
                                                    <td>{value.vehicle_number}</td>
                                                    <td>{value.chassie_number}</td>
                                                    <td>{value.fuel_type}</td>
                                                    <td>
                                                        <a href={`/admin/fuelPass/${value._id}`} title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i className="material-icons">&#xE417;</i></a>&nbsp;&nbsp;
                                                        <a href={`/admin/fuelPass/update/${value._id}`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>&nbsp;&nbsp;
                                                        <a className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }} onClick={() => deleteProfile(value._id)}><i className="material-icons">&#xE872;</i></a>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <!--- Model Box ---> */}
                <div className="model_box">
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Record</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="owner_name" aria-describedby="owner_nameHelp" placeholder="Enter Full Name" onChange={
                                        (e) => {
                                            setOwnerName(e.target.value);
                                        }
                                    } />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" id="nic" aria-describedby="nicHelp" placeholder="Enter NIC Number" onChange={
                                        (e) => {
                                            setNic(e.target.value);
                                        }
                                    } />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" id="mobile_number" aria-describedby="mobile_numberHelp" placeholder="Enter Mobile Number" onChange={
                                        (e) => {
                                            setMobileNumber(e.target.value);
                                        }
                                    } />
                                </div>
                                <div className="form-group mt-3">
                                    <select name="vehicle_type" id="vehicle_type" className="form-control" required
                                        onChange={(e) => {
                                            setVehicleType(e.target.value);
                                        }
                                        }>
                                        <option value="" >Select Vehicle Type</option>
                                        <option value="CAR">CAR</option>
                                        <option value="VAN">VAN</option>
                                        <option value="BIKE">BIKE</option>
                                        <option value="BUS">BUS</option>
                                        <option value="OTHER">OTHER</option>
                                    </select>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" id="vehicle_number" aria-describedby="vehicle_numberHelp" placeholder="Enter Vehicle Number" onChange={
                                        (e) => {
                                            setVehicleNumber(e.target.value);
                                        }
                                    } />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" id="chassie_number" aria-describedby="chassie_numberHelp" placeholder="Enter Chassie Number" onChange={
                                        (e) => {
                                            setChassieNumber(e.target.value);
                                        }
                                    } />
                                </div>
                                <div className="form-group mt-3">
                                    <select name="fuel_type" id="fuel_type" className="form-control" required
                                        onChange={(e) => {
                                            setFuelType(e.target.value);
                                        }
                                        }>
                                        <option value="">Select Fuel Type</option>
                                        <option value="PETROL">PETROL</option>
                                        <option value="DIESEL">DIESEL</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-success mt-4" onClick={() => createFuelPass(fuelPassObject)}>Add Record</button>
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>

                    {/* Model Box Finsihs */}

                </div>
            </div>
        </div>
    );
}

export default AdminFuelPasses;
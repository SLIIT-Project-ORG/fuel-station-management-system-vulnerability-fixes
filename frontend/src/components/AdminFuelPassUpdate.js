import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AdminFuelPassUpdate() {

    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8000/identifier/${id}`)
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])


    function updateData(e) {
        e.preventDefault();

        var msg;

        if (window.confirm("Do you want to update this fuel pass ? ")) {
            msg = true;
        }
        else {
            msg = false;
        }

        if (msg == true) {
            axios.put(`http://localhost:8000/identifier/${id}`, data).then(() => {
                alert("updated Successfully");
                window.location.href = "/admin/allfuelpass";
            }).catch((err) => {
                console.log(err);
            })
        }
        else{
            alert("Update Canceled");
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    return (
        <div className="row" style={{ height: '50px' }}>
            <center>
                <div></div>
                <div className="card p-4 col-4 mt-5">
                    <h2 className="title">UPDATE RECORD</h2>
                    <form className="mt-4" onSubmit={updateData}>
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={handleChange} name="owner_name" value={data.owner_name} id="owner_name" aria-describedby="owner_nameHelp" placeholder="Enter Full Name" />
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" onChange={handleChange} name="nic" value={data.nic} id="nic" aria-describedby="nicHelp" placeholder="Enter NIC Number" />
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" onChange={handleChange} name="mobile_number" value={data.mobile_number} id="mobile_number" aria-describedby="mobile_numberHelp" placeholder="Enter Mobile Number" />
                        </div>
                        <div className="form-group mt-3">
                            <select name="vehicle_type" id="vehicle_type" className="form-control" onChange={handleChange} value={data.vehicle_type} required >
                                <option value="" >Select Vehicle Type</option>
                                <option value="CAR">CAR</option>
                                <option value="VAN">VAN</option>
                                <option value="BIKE">BIKE</option>
                                <option value="BUS">BUS</option>
                                <option value="OTHER">OTHER</option>
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" onChange={handleChange} name="vehicle_number" value={data.vehicle_number} id="vehicle_number" aria-describedby="vehicle_numberHelp" placeholder="Enter Vehicle Number" />
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" onChange={handleChange} name="chassie_number" value={data.chassie_number} id="chassie_number" aria-describedby="chassie_numberHelp" placeholder="Enter Chassie Number" />
                        </div>
                        <div className="form-group mt-3">
                            <select name="fuel_type" id="fuel_type" className="form-control" onChange={handleChange} value={data.fuel_type} required>
                                <option value="">Select Fuel Type</option>
                                <option value="PETROL">PETROL</option>
                                <option value="DIESEL">DIESEL</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-success mt-4">Update</button>&nbsp;&nbsp;
                        <button className="btn btn-danger mt-4">Cancel</button>
                    </form>
                </div>
                <div></div>
            </center >
        </div >
    );

}
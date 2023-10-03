import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
 
 


export default function VehicleRegistration() {

   // const [registerID, setRegisterID] = useState("");
    const [vehicleType,setVehicleType] = useState("");
    const [vehicleNo, setVehicleNo] = useState("");
    const [chassisNo, setChassisNo ] = useState("");
    const [registeredDate, setRegisteredDate] = useState("");
    const [vehicleCondition, setVehicleCondition] = useState(""); 

    function sendData(e) {
        e.preventDefault();

        const newVehicleRegistration = {
         //   registerID,
            vehicleType,
            vehicleNo,
            chassisNo ,
            registeredDate,
            vehicleCondition 
        };
        console.log(newVehicleRegistration);
        axios.post("http://localhost:8000/VehicleRegistration/register",newVehicleRegistration).then(() => {
            alert("Vehicle Registered Successfully!!!");
            
        }).catch((err) => {
            alert(err)
        });



    }





    return (
       
    //   <div className="back">
      <div className="fixed-top">
            <div class="card-body" className="container" mt-5>
            <br/><br/>
             
            <div className="head"> <h1 class="display-4"> Vehicle Registration </h1>
                    <p class="lead">Fill the form and Register the Vehicle</p>
           </div> 
            <br></br>
             
            <div className="container">
                <form onSubmit={sendData}>
{/* 
                <div class="form-group">
                        <label for="registerID">Vehicle Registration ID:</label>
                        <input type="text" class="form-control" required  id="subject_id" placeholder="Enter Subject ID"
                            onChange={(e) => {
                                setRegisterID(e.target.value);
                            }} />

                    </div> */}

                    <div class="form-group">
                        <label for="vehicleType"> Vehicle Type:</label>
                        <input type="text" class="form-control" required id="vehicleType" placeholder="Enter Vehicle Type "
                            onChange={(e) => {
                                setVehicleType(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="vehicleNo">Vehicle Number Plate:</label>
                        <input type="text" class="form-control" required id="vehicleNo" placeholder="Enter Vehicle Number Plate"
                            onChange={(e) => {
                                setVehicleNo(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="chassisNo">Chassis No:</label>
                        <input type="text" class="form-control" required id="chassisNo" placeholder="Enter Chassis No "
                            onChange={(e) => {
                                setChassisNo(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="registeredDate">Register  Date:</label>
                        <input type="date" class="form-control" required id="registeredDate" placeholder="Enter Register Date"
                            onChange={(e) => {
                                setRegisteredDate(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="vehicleCondition">VehicleCondition:</label>
                        <input type="text" class="form-control" required id="vehicleCondition" placeholder="Enter Vehicle Condition"
                            onChange={(e) => {
                                setVehicleCondition(e.target.value);
                            }} />

                    </div> 
                      <button type="onclick" class="btn btn-danger   me-2"onClick={()=>window.location.href = "/vehicleview"}> Cancel </button> 
                    <button type="submit" class="btn btn-primary" >Submit</button>
                </form>
                <br/><br/>
            </div>
            </div>
            // </div>
             
         
    )
}  

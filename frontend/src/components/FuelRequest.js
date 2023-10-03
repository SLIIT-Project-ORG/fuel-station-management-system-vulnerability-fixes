import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
 
 


export default function FuelRequest() {

   // const [registerID, setRegisterID] = useState("");
   const [supplierID, setSupplierID] = useState(""); 
   const [supplierName,setSupplierName] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [fuelAmount, setFuelAmount] = useState("");
    const [ estimatedDelivery, setEstimatedDelivery] = useState(""); 
    const [ specialNotice, setSpecialNotice] = useState("");
    
    function sendData(e) {
        e.preventDefault();

        const newFuelRequest = {
     
         supplierID,
         supplierName,
         fuelType,
         fuelAmount,
         estimatedDelivery,
         specialNotice
               
        };
        console.log(newFuelRequest);
        axios.post("http://localhost:8000/FuelRequest/request",newFuelRequest).then(() => {
            alert("Requested Fuel Successfully!!!");
            
        }).catch((err) => {
            alert(err)
        });



    }





    return (
       
    //   <div className="back">
      <div className="fixed-top">
            <div class="card-body" className="container" mt-5>
            <br/><br/>
             
            <div className="head"> <h1 class="display-4"> Requested Fuel Supplies </h1>
                    <p class="lead">Fill the form and Request the Fuel</p>
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
                        <label for="supplierID"> Supplier ID:</label>
                        <input type="text" class="form-control" required id="supplierID" placeholder="Enter Supplier ID "
                            onChange={(e) => {
                                setSupplierID(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="supplierName"> Supplier Name:</label>
                        <input type="text" class="form-control" required id="supplierName" placeholder="Enter Vehicle Type "
                            onChange={(e) => {
                                setSupplierName(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="fuelType">Fuel Type:</label>
                        <input type="text" class="form-control" required id="fuelType" placeholder="Enter Fuel Type"
                            onChange={(e) => {
                                setFuelType(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="fuelAmount">Fuel Amount:</label>
                        <input type="text" class="form-control" required id="fuelAmount" placeholder="Enter Fuel Amount"
                            onChange={(e) => {
                                setFuelAmount(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="estimatedDelivery">Estimated Delivery:</label>
                        <input type="date" class="form-control" required id="estimatedDelivery" placeholder="Enter estimatedDelivery "
                            onChange={(e) => {
                                setEstimatedDelivery(e.target.value);
                            }} />

                    </div>


                    <div class="form-group">
                        <label for="specialNotice">Special Notice:</label>
                        <input type="text" class="form-control" required id="specialNotice" placeholder="EnterSpecial Notice"
                            onChange={(e) => {
                                setSpecialNotice(e.target.value);
                            }} />

                    </div>


                      <button type="onclick" class="btn btn-danger   me-2"onClick={()=>window.location.href = "/fuelview "}> Cancel </button> 
                    <button type="submit" class="btn btn-primary" >Submit</button>
                </form>
                <br/><br/>
            </div>
            </div>
             </div>
             
         
    )
}  
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
 
 


export default function SupplierRegistration() {

   // const [registerID, setRegisterID] = useState("");
    const [supplierName,setSupplierName] = useState("");
    const [managerName, setManagerName] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [registeredDate, setRegisteredDate] = useState("");
    const [description, setDescription] = useState("");
    
    function sendData(e) {
        e.preventDefault();

        const newSupplierRegistration = {
         //   registerID,
         supplierName,
         managerName,
         address,
         contactNumber,
         email,
         registeredDate,
         description 
               
        };
        console.log(newSupplierRegistration);
        axios.post("http://localhost:8000/SupplierRegistration/sregister",newSupplierRegistration).then(() => {
            alert("Supplier Registered Successfully!!!");
            
        }).catch((err) => {
            alert(err)
        });



    }





    return (
       
    //   <div className="back">
      <div className="fixed-top">
            <div class="card-body" className="container" mt-5>
            <br/><br/>
             
            <div className="head"> <h1 class="display-4"> Supplier Registration </h1>
                    <p class="lead">Fill the form and Register the Supplier</p>
           </div> 
            <br></br>
             
            <div className="container">
                <form onSubmit={sendData}>
{/* 
                <div class="form-group">
                        <label for="registerID">supplier Registration ID:</label>
                        <input type="text" class="form-control" required  id="subject_id" placeholder="Enter Subject ID"
                            onChange={(e) => {
                                setRegisterID(e.target.value);
                            }} />

                    </div> */}

                    <div class="form-group">
                        <label for="vehicleType"> Supplier Name:</label>
                        <input type="text" class="form-control" required id="supplierName" placeholder="Enter Vehicle Type "
                            onChange={(e) => {
                                setSupplierName(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="vehicleNo">Manager Name:</label>
                        <input type="text" class="form-control" required id="managerName" placeholder="Enter Manager Name"
                            onChange={(e) => {
                                setManagerName(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="chassisNo">Address:</label>
                        <input type="text" class="form-control" required id="address" placeholder="Enter Address "
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }} />

                    </div>


                    <div class="form-group">
                        <label for="vehicleCondition">Contact Number:</label>
                        <input type="text" class="form-control" required id="contactNumber" placeholder="Enter Contact Number"
                            onChange={(e) => {
                                setContactNumber(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="registeredDate">Email:</label>
                        <input type="email" class="form-control" required id="email" placeholder="Enter Email Adress"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="registeredDate">Registered Date:</label>
                        <input type="date" class="form-control" required id="registeredDate" placeholder="Enter Registered Date"
                            onChange={(e) => {
                                setRegisteredDate(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="registeredDate">Description:</label>
                        <input type="text" class="form-control" required id="description" placeholder="Enter Description"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }} />

                    </div>

                      <button type="onclick" class="btn btn-danger   me-2"onClick={()=>window.location.href = "/supplierview "}> Cancel </button> 
                    <button type="submit" class="btn btn-primary"    >Submit</button>
                </form>
                <br/><br/>
            </div>
            </div>
             </div>
             
         
    )
}  

import React, { useState } from "react";
import axios from 'axios';
import Admin from "./AdminSideBar";
import { TextField, Button, Stack, Paper } from "@mui/material";
import { padding } from "@mui/system";

export default function AddEmployee() {

    //add
    const [First_Name, setFirstName] = useState("");
    const [Last_Name, setLastName] = useState("");
    const [Address1, setAddress1] = useState("");
    const [Address2, setAddress2] = useState("");
    const [NIC, setNIC] = useState("");
    const [Phone_Number, setPhoneNumber] = useState("");
    const [Designation, setDesignation] = useState("");
    const [Salary, setSalary] = useState("");
    const [Email, setEmail] = useState("");


    function sendData(e) {
        e.preventDefault();

        const newemployee = {
            First_Name, Last_Name, Address1, Address2, NIC, Phone_Number, Designation, Salary, Email
        }

        axios.post("http://localhost:8000/admin/employeeprofile/insert", newemployee).then((res) => {

            alert(res.data.msg);


        }).catch((err) => {
            console.log(err);
        })
    }

    return (

        <div>
            <Stack direction={'row'} flex={1}>
                <Stack direction={'col'} flex={1}></Stack>
                <Stack direction={'col'}>
                    <Paper variant="elevation" sx={{ padding: '30px', marginTop: '30px' }} >
                        <Stack spacing={2} direction={'row'}>
                            <h2 style={{ fontFamily: 'revert', color: 'black' }}>ADD EMPLOYEE PROFILE</h2>
                        </Stack><br />
                        <div>
                            <form class="form-card" onSubmit={sendData}>


                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <TextField label="First Name" size="small" id="First_Name" name="First_Name" placeholder="Enter your first name" required onChange={
                                            (e) => {
                                                setFirstName(e.target.value);
                                            }
                                        }>
                                        </TextField>
                                        <TextField label="Last Name" size="small" id="Last_Name" name="Last_Name" placeholder="Enter your last name" onblur="validate(2)" required onChange={
                                            (e) => {
                                                setLastName(e.target.value);
                                            }
                                        }>
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <TextField label="Address 1" size="small" id="Address1" name="Address1" placeholder="street1" onblur="validate(3)" required onChange={
                                            (e) => {
                                                setAddress1(e.target.value);
                                            }
                                        }>
                                        </TextField>
                                        <TextField label="Address 2" size="small" id="Address2" name="Address2" placeholder="Street2" onblur="validate(4)" required onChange={
                                            (e) => {
                                                setAddress2(e.target.value);
                                            }
                                        }>
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <TextField label="NIC" size="small" id="NIC" name="NIC" placeholder="Enter your NIC Number" onblur="validate(5)" required onChange={
                                            (e) => {
                                                setNIC(e.target.value);
                                            }
                                        }>
                                        </TextField>
                                        <TextField label="Phone Number" size="small" id="Phone_Number" name="Phone_Number" placeholder="+94" onblur="validate(5)" required onChange={
                                            (e) => {
                                                setPhoneNumber(e.target.value);
                                            }
                                        }>
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <TextField label="Designation" size="small" id="Designation" name="Designation" placeholder="" onblur="validate(5)" required onChange={
                                            (e) => {
                                                setDesignation(e.target.value);
                                            }
                                        }>
                                        </TextField>
                                        <TextField label="Salary" size="small" id="Salary" name="Salary" placeholder="RS." onblur="validate(5)" required onChange={
                                            (e) => {
                                                setSalary(e.target.value);
                                            }
                                        }>
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <TextField label="Email" size="small" id="email" name="email" placeholder="Enter your Email Address" onblur="validate(5)" required onChange={
                                            (e) => {
                                                setEmail(e.target.value);
                                            }
                                        }>
                                        </TextField>
                                    </Stack>
                                </div><br/>
                                {/* </div><br />
                                    <Button type="submit" size="small" variant="contained" onClick={() => window.location.href = "/admin"}> Cancel </Button>
                                    <Button type="submit" size="small" variant="contained" color="error">Add New Employee</Button>
                                <center> <div class="form-group col-sm-6"> <button type="submit" class="btn btn-success btn-block mt-3 mb-3 p-2 form-control" onClick={() => window.location.href = "/test1"}> View Details </button> </div> </center> */}

                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <Button type="submit" size="medium" variant="contained" color="error" onClick={() => window.location.href = "/admin"} sx={{width:'49%'}}> Cancel </Button>
                                        <Button type="submit" size="medium" variant="contained" color="primary" sx={{width:'49%'}}>Add New Employee</Button>
                                    </Stack>
                                    <center> <div class="form-group col-sm-6"> <button type="submit" class="btn btn-success btn-block mt-3 mb-3 p-2 form-control" style={{width:'100%'}} onClick={() => window.location.href = "/test1"}> View Details </button> </div> </center>
                                </div>


                            </form>

                        </div>
                    </Paper>
                </Stack>
                <Stack direction={'col'} flex={1}></Stack>
            </Stack>
        </div >

    )

}
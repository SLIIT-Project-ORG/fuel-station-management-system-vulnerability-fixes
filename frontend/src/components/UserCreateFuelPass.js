import React, { useState } from "react";
import axios from "axios";
import {Stack,AppBar,Box,Paper} from "@mui/material";

export default function UserCreationFuelPass() {

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

    return (
        <div>
            <div>
                <Stack spacing={2}>
                    <AppBar elevation={2} color={'error'}>
                        <h2>FUEL PASS CREATION</h2>
                    </AppBar>
                </Stack>
            </div>
            <div>
                <Box alignItems={'center'} margin={'100px'} marginTop={'150px'}>
                    <Paper variant={'outlined'} sx={{ padding: '50px' }}>
                        <form onSubmit={() => createFuelPass(fuelPassObject)}>
                            <Stack rowGap={2}>

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

                            </Stack>
                        </form>
                    </Paper>
                </Box>
            </div>
        </div>
    )

}
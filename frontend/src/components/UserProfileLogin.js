import axios from "axios";
import React, { useState } from "react";
import { Paper, Stack, TextField, Button, FormLabel } from '@mui/material';
import profile from '../images/profile.jpg';


export default function UserLogin() {

    const [Phone_Number, setPhoneNumber] = useState("");
    const [NIC, setNIC] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newuseremployee = {
            NIC, Phone_Number
        }

        axios.post("http://localhost:8000/admin/employeeprofile/search", newuseremployee).then((res) => {

            if (res.data._id != null) {
                alert("Login Successful");
                console.log(res.data);
                window.location.href = `/employeeprofile/${res.data._id}`
            }

        }).catch((err) => {
            alert("Login Failed");
        })
    }




    return (
        <div className="loginImage">
        <Stack spacing={2} direction={'row'} sx={{ marginTop: '180px' }}>
          <Stack spacing={2} direction={'column'} flex={2}></Stack>
          <Stack spacing={2} direction={'column'} >
            <Stack spacing={2} direction={'row'}>
              <h2 style={{ fontFamily: 'revert', fontWeight: 'bold', color: 'black' }}>EMPLOYEE PROFILE</h2>
            </Stack>
            <Paper sx={{ padding: '30px' }} variant='outlined'>
              <Stack direction={'row'} spacing={2}>
                <img src={profile} width="300px" />
                <form onSubmit={sendData}>
                  <Stack spacing={2} direction={'column'} marginTop={'40px'}>
                    <TextField type='text' id="Phonenumber" name="Phonenumber" size="small" label="Phone Number" required onChange={
                      (e) => {
                        setPhoneNumber(e.target.value);
                      }
                    }>Username</TextField>
  
                    <TextField type='text' id="nic" name="nic" size="small" label="NIC" required onChange={
                      (e) => {
                        setNIC(e.target.value);
                      }
                    }>Password</TextField>
  
                    <Button type="submit" color="primary" variant="contained" size="medium">Submit</Button>
                    <Button color="error" variant="contained" size="medium" onClick={() => window.location.href = "/"}>Cancel</Button>
                  </Stack>
                </form>
              </Stack>
            </Paper>
          </Stack>
          <Stack spacing={2} direction={'column'} flex={2}></Stack>
        </Stack>
      </div >
       
        


        

    )

}